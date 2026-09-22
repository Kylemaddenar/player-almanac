#!/usr/bin/env python3
"""Build/verify the standalone folio and its protocol-1 verified asset manifest.

No third-party packages. Run after the original font assets have been copied.
The app build is SHA-256 of the final HTML with its BUILD string normalized to
64 zeroes. RELEASE.id is the first 24 hex digits of a canonical manifest hash.
The existing waiting-worker/verified-precache mechanism is unchanged.
"""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path
import re
import sys

BUILD_RE = r'globalThis\.PlayerAlmanac\.BUILD = "[a-f0-9]{64}";'
STYLE_RE = r'<style>[\s\S]*?</style>'
RELEASE_RE = r'\Aconst RELEASE = ([\s\S]*?);\n'

def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

def json_text(value: object) -> str:
    return json.dumps(value, indent=2, ensure_ascii=False) + '\n'

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument('--version', help='Defaults to VERSION.txt in the application folder.')
    parser.add_argument('--check', action='store_true', help='Verify without modifying any file.')
    args = parser.parse_args()
    root = args.root.resolve()
    try:
        version = args.version or (root / 'VERSION.txt').read_text().strip()
        if not re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', version):
            raise ValueError('Invalid version: ' + version)
        app_path = root / 'player_almanac.html'
        source = app_path.read_text(encoding='utf-8')
        css = (root / 'ui/folio.css').read_text(encoding='utf-8')
        if '</style' in css.lower():
            raise ValueError('Stylesheet cannot contain a closing style tag.')
        if len(re.findall(STYLE_RE, source)) != 1 or len(re.findall(BUILD_RE, source)) != 1:
            raise ValueError('Expected one embedded stylesheet and one build identity.')
        old = json.loads((root / 'release.json').read_text())
        if old.get('protocol') != 1:
            raise ValueError('This builder supports release protocol 1 only.')
        # Validate the complete input set before changing output files.
        for item in old['files']:
            path = (root / item['url']).resolve()
            if not path.is_relative_to(root) or not path.is_file():
                raise ValueError('Missing/unsafe asset: ' + item['url'])
        old_version = re.search(r'globalThis\.PlayerAlmanac = \{ VERSION: "([^"]+)"', source)
        if not old_version:
            raise ValueError('Application version declaration not found.')
        source = source.replace(old_version.group(1), version)
        source = re.sub(STYLE_RE, lambda _: '<style>\n' + css + '\n</style>', source, count=1)
        source = source.replace('<meta name="theme-color" content="#101619">', '<meta name="theme-color" content="#15161f">')
        for name, marker in [('help-content.js', 'PA_HELP_CONTENT'), ('help.js', 'PA_HELP_CODE')]:
            code = (root / 'ui' / name).read_text(encoding='utf-8')
            if '</script' in code.lower():
                raise ValueError('Embedded help source cannot close the script element.')
            pattern = r'/\* ' + marker + r'_BEGIN \*/[\s\S]*?/\* ' + marker + r'_END \*/'
            if len(re.findall(pattern, source)) != 1:
                raise ValueError('Missing/duplicate help embed marker: ' + marker)
            source = re.sub(pattern, lambda _: '/* ' + marker + '_BEGIN */\n' + code + '/* ' + marker + '_END */', source)
        normalized = re.sub(BUILD_RE, 'globalThis.PlayerAlmanac.BUILD = "' + '0' * 64 + '";', source)
        app_build = sha(normalized.encode('utf-8'))
        source = re.sub(BUILD_RE, 'globalThis.PlayerAlmanac.BUILD = "' + app_build + '";', source)
        manifest = json.loads((root / 'manifest.json').read_text())
        manifest['theme_color'] = '#15161f'
        manifest['background_color'] = '#15161f'
        manifest_bytes = json_text(manifest).encode('utf-8')
        outputs = {'player_almanac.html': source.encode('utf-8'), 'manifest.json': manifest_bytes}
        files = []
        for item in old['files']:
            relative = item['url'].removeprefix('./')
            data = outputs.get(relative, (root / relative).read_bytes())
            files.append({'url': item['url'], 'sha256': sha(data), 'bytes': len(data)})
        identity = {'version': version, 'appBuild': app_build, 'protocol': 1, 'files': files}
        release_id = sha(json.dumps(identity, sort_keys=True, separators=(',', ':')).encode())[:24]
        release = {'version': version, 'appBuild': app_build, 'id': release_id, 'protocol': 1, 'files': files}
        sw_original = (root / 'sw.js').read_text(encoding='utf-8')
        if not re.search(RELEASE_RE, sw_original):
            raise ValueError('Worker RELEASE declaration not found.')
        sw = re.sub(RELEASE_RE, lambda _: 'const RELEASE = ' + json_text(release).rstrip() + ';\n', sw_original, count=1)
        sw = sw.replace('RELEASE is generated by tools/build.mjs', 'RELEASE is generated by tools/build.py')
        outputs.update({'release.json': json_text(release).encode(), 'sw.js': sw.encode()})
        if args.check:
            different = [name for name, data in outputs.items() if (root / name).read_bytes() != data]
            if different:
                raise ValueError('Build is out of date: ' + ', '.join(different))
        else:
            for name, data in outputs.items():
                (root / name).write_bytes(data)
            (root / 'VERSION.txt').write_text(version + '\n')
        print(json.dumps({'ok': True, 'mode': 'verify' if args.check else 'build', 'version': version,
                          'releaseId': release_id, 'appBuild': app_build, 'verifiedAssets': len(files)}, indent=2))
        return 0
    except (OSError, ValueError, KeyError, TypeError) as error:
        print('Build failed: ' + str(error), file=sys.stderr)
        return 1

if __name__ == '__main__':
    raise SystemExit(main())
