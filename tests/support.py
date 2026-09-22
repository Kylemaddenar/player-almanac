"""Isolated rendered-UI harness, NOT a native browser-storage/PWA test.

The production application is unchanged. Its documented test injection points
receive transaction, localStorage and media adapters on about:blank. Fonts, when
available locally, are inlined in memory for screenshots and never written out.
"""
from pathlib import Path
import base64
import hashlib
import re

ROOT = Path(__file__).resolve().parents[1]

def mount(page):
    page.goto('about:blank')
    html = (ROOT / 'player_almanac.html').read_text(encoding='utf-8')
    html = html.replace('<script>', '<script>globalThis.__PA_DISABLE_AUTO_START__=true;</script><script>', 1)
    html = re.sub(r'<link[^>]+>', '', html)
    for name in ['Manrope', 'Fraunces']:
        font = ROOT / 'fonts' / (name + '.ttf')
        if font.exists():
            encoded = base64.b64encode(font.read_bytes()).decode()
            html = html.replace("url('./fonts/" + name + ".ttf')", "url('data:font/ttf;base64," + encoded + "')")
    page.set_content(html, wait_until='load')
    page.expose_function('testDigest', lambda values: list(hashlib.sha256(bytes(values)).digest()))
    page.add_script_tag(content=(ROOT / 'tests/memory_adapters.js').read_text())
    page.wait_for_function('PlayerAlmanac.app?.ready', timeout=10000)
    page.wait_for_timeout(80)
