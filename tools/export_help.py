#!/usr/bin/env python3
"""Export Markdown guides from the same EN/DE content used by the application.

Development-only dependency: Python Playwright and Chromium. The isolated test
harness resolves labels through the real PA.t implementation; it never opens a
user Library. Run tools/build.py first so the embedded HTML matches ui/ sources.
"""
from pathlib import Path
import argparse
import json
import re
import sys
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tests'))
from support import mount


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--browser', default='/usr/bin/chromium')
    args = parser.parse_args()
    source = (ROOT / 'ui/help-content.js').read_text(encoding='utf-8')
    match = re.search(r'const data = (.*?);\nfor\(', source, re.S)
    if not match:
        raise ValueError('Authored help content was not found')
    content = json.loads(match.group(1))
    version = (ROOT / 'VERSION.txt').read_text().strip()
    with sync_playwright() as pw:
        browser = pw.chromium.launch(executable_path=args.browser, headless=True, args=['--no-sandbox'])
        page = browser.new_page()
        mount(page)
        labels = page.evaluate('PlayerAlmanac.messages')
        browser.close()
    common = ['identity', 'abilities', 'vitals', 'play', 'dice', 'sections', 'export', 'finish']
    sequences = {'create': ['choose', 'create'] + common, 'import': ['choose', 'import', 'open'] + common, 'existing': ['choose', 'open'] + common}
    docs = ROOT / 'docs'
    docs.mkdir(exist_ok=True)
    for lang in ['en', 'de']:
        def txt(key):
            if key not in labels[lang]:
                raise ValueError('Missing label: ' + lang + ':' + key)
            def token(m):
                if m[1] not in labels[lang]:
                    raise ValueError('Unresolved control: ' + m[1])
                return '**' + labels[lang][m[1]] + '**'
            return re.sub(r'\[\[([^\]]+)\]\]', token, labels[lang][key])
        en = lang == 'en'
        preface = ('Open **Help** in the app header or **More**. Search by a task or control name, choose a topic, and use **Open this workspace** to reach the relevant screen. Character tasks require an open character. The app guide and this document use the same authored content and live interface labels.\n\nThe walkthrough is optional. It never fills, imports, deletes or resets character data for you. Saving in this browser is not an external backup.' if en else 'Öffne **Hilfe** im Kopfbereich oder unter **Mehr**. Suche nach einer Aufgabe oder Steuerung, wähle ein Thema und öffne den zugehörigen Arbeitsbereich. Charakteraufgaben benötigen einen geöffneten Charakter. App-Hilfe und dieses Dokument verwenden dieselben Inhalte und Beschriftungen.\n\nDie Einführung ist optional. Sie füllt, importiert, löscht oder setzt keine Charakterdaten automatisch zurück. Speichern im Browser ist keine externe Sicherung.')
        # German authored task text below retains its proper Unicode spelling.
        parts = ['# Player Almanac - ' + txt('help.title'), '', '**' + version + '**', '', preface, '']
        for group in ['begin','prepare','play','explore','protect','preferences']:
            parts += ['## ' + txt('help.group.' + group), '']
            for topic in [t for t in content['topics'] if t['group'] == group]:
                parts += ['### ' + txt(topic['title']), '', txt(topic['intro']), '']
                for task in topic['tasks']:
                    parts += ['#### ' + txt(task['title']), '', txt(task['body']), '']
        (docs / ('HELP_GUIDE.' + lang + '.md')).write_text('\n'.join(parts), encoding='utf-8')
        intro = ('Designed for about five minutes, not a timed usability-study result. Choose one path; you are never required to create and import. Existing characters may be reviewed without changing them. A practice dice roll is optional and creates a real roll-history entry, not damage.\n\n**Back / Next** navigate instructions. **Skip this step** moves on without performing its action. **Close walkthrough** keeps a resumable place. **Restart** resets only instructions. During a native dialog, finish or close that dialog before moving to another step; closing the walkthrough does not close the dialog. On very short viewports the companion becomes an inline panel so its actions remain reachable.\n\nCreation and import advance only after the original operation succeeds. Export reports a download request, not proof that a backup reached disk. Check the actual saved file.' if en else 'Für etwa fünf Minuten konzipiert; dies ist kein gemessenes Ergebnis einer Nutzungsstudie. Wähle einen Weg; Erstellen und Importieren sind keine gemeinsame Pflicht. Vorhandene Charaktere können unverändert geprüft werden. Ein freiwilliger Übungswurf ergänzt den echten Würfelverlauf, verursacht aber keinen Schaden.\n\n**Zurück / Weiter** wechseln Anleitungen. **Diesen Schritt überspringen** führt seine Aktion nicht aus. **Einführung schließen** erhält die Stelle zum Fortsetzen. **Neu starten** setzt nur die Anleitung zurück. Schließe einen nativen Dialog ab oder schließe ihn, bevor du den Schritt wechselst; das Schließen der Einführung schließt den Dialog nicht. Bei sehr geringer Bildschirmhöhe steht die Anleitung im Dokumentfluss, damit alle Aktionen erreichbar bleiben.\n\nErstellen und Importieren führen erst nach erfolgreicher Aktion weiter. Beim Export wird eine angeforderte Dateiausgabe gemeldet, nicht das Speichern auf der Festplatte bewiesen. Prüfe die tatsächlich gespeicherte Datei.')
        parts = ['# Player Almanac - ' + ('First-use walkthrough' if en else 'Erste Schritte'), '', '**' + version + '**', '', intro, '']
        branch_names = {'create': txt('help.chooseCreate'), 'import': txt('help.chooseImport'), 'existing': txt('help.chooseExisting')}
        for branch, seq in sequences.items():
            parts += ['## ' + branch_names[branch] + ' (' + str(len(seq)) + (' steps)' if en else ' Schritte)'), '', ' > '.join(txt(next(s for s in content['steps'] if s['id']==ident)['title']) for ident in seq), '']
        parts += ['## ' + ('Step content' if en else 'Schrittinhalte'), '']
        for step in content['steps']:
            parts += ['### ' + txt(step['title']), '', txt(step['instruction']), '', '**' + ('Why it matters' if en else 'Warum das wichtig ist') + ':** ' + txt(step['why']), '', '**' + ('Control or area' if en else 'Steuerung oder Bereich') + ':** ' + txt(step['control']), '', '**' + ('Expected result' if en else 'Erwartetes Ergebnis') + ':** ' + txt(step['expected']), '']
        (docs / ('WALKTHROUGH.' + lang + '.md')).write_text('\n'.join(parts), encoding='utf-8')
    print('Exported four guides using ' + str(len(content['topics'])) + ' topics and ' + str(len(content['strings'])) + ' EN/DE pairs.')

if __name__ == '__main__':
    main()
