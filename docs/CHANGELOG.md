# 7.9.0-folio.2 - walkthrough and task Help

Based on the supplied 7.9.0-folio.1 folio build.

## Added

- Optional Library welcome invitation and resumable, non-destructive walkthrough with separate create/import/existing-character paths.
- Persistent Help entries in header, sidebar, More and Finder; 26 searchable task topics.
- 310 English/German instructional translation pairs integrated with the existing translation system. Control references resolve to live labels rather than copied strings.
- Real-target outlines, Show control, step progress, Back/Next/Skip/Close/Restart, missing-target and read-only explanations, native-dialog integration and keyboard focus restoration.
- Desktop dock, phone/tablet sheet, very-short-viewport inline mode, reduced-motion and high-contrast handling.
- Standalone Markdown copies of both guide and walkthrough in both languages; reproducible UI tests and release verification.

## Integration

`ui/help.js` and `ui/help-content.js` are embedded by `tools/build.py`; styles remain authored in `ui/folio.css`. There is no new runtime dependency or schema migration. A separate local preference stores tutorial progress. Minimal render/dialog/success notifications connect Help to the application; domain actions continue through their original controls.

Version, BUILD identity, release manifest and worker RELEASE metadata are regenerated. Existing font paths and all other runtime assets remain in the verified asset list.
