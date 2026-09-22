# Player Almanac - integrated tutorial release

**7.9.0-folio.2**, based on the supplied **7.9.0-folio.1** application.

This is the working application, not a mock-up. Open **Help** in the header, sidebar or **More** menu. The Library offers an optional first-use walkthrough. The complete task guide is searchable and available without a character.

## Apply this update

1. In the existing application, export a backup and check the file outside browser storage. Keep the original project/archive separately. Copying the application folder does **not** back up characters stored in the browser.
2. Merge this update into the application folder. **Retain the original `fonts/Manrope.ttf` and `fonts/Fraunces.ttf`.** Font binaries and private `Meta/` material are not included in this update. All other runtime assets are included. Do not replace the original fonts directory with an empty directory.
3. Keep the same served origin and application directory to keep using the same browser Library. A different browser profile, host, port or application path can show another Library. For an isolated test deployment, use exported copies rather than assuming the original Library will appear.
4. Reload using the existing update flow. Finish pending edits and follow any other-tab/update messages. The service worker verifies a complete, matching asset set before reporting offline readiness. Do not assume an old cached shell is this new release.

The HTML is already built; no installation of a JavaScript framework, package manager or runtime library is needed. `index.html` still opens `player_almanac.html`.

For a **new local test server**, from the application folder on Windows:

```text
py -m http.server 8000
```

Then open `http://localhost:8000/player_almanac.html`. This creates a different origin from another host/port, so its Library may be different. A `file://` launch does not provide the supported service-worker installation/offline workflow. Native offline behavior was not tested in the delivery environment; see the verification report.

## What is included

| Part | Location |
| --- | --- |
| Complete updated HTML, icons, manifest, service worker and release metadata | Project root and `icons/` |
| Authored walkthrough controller and searchable Help workspace | `ui/help.js` |
| Shared English/German instructional content | `ui/help-content.js` |
| Integrated styles, including small-screen and reduced-motion handling | `ui/folio.css` |
| Full task guides | `docs/HELP_GUIDE.en.md`, `docs/HELP_GUIDE.de.md` |
| Walkthrough paths and finished step text | `docs/WALKTHROUGH.en.md`, `docs/WALKTHROUGH.de.md` |
| Feature coverage, test method and remaining limitations | `docs/TESTING_AND_COVERAGE.md` |
| Original inspection checklist | `docs/INSPECTION_AND_COVERAGE.md` |
| Reproducible browser UI tests and isolated adapters | `tests/` |
| Original project license | `LICENSE.txt` |

## Tutorial behavior

The blank-create and existing-character routes contain 10 steps; the import route contains 11. These are designed for approximately five minutes, not a measured novice-user timing result. Use one path, not both create and import.

Each step has an instruction, explanation, control/area reference and recognizable success result. **Show control** focuses the real control. The user performs actual actions; successful creation and import trigger advancement. Merely reading, skipping, closing or restarting never creates samples, changes values, imports files, deletes records, enables add-ons or sends data online. An explicitly chosen practice roll adds a real roll-history result.

Ordinary fields retain their existing commit-on-blur/Enter behavior. Item/document forms retain **Save** and their recoverable unapplied drafts. Existing validation, save barriers, confirmations, ownership and history remain in force. Export reports a download request, not proof that a file was saved externally.

The companion is nonmodal. On phones/tablets it uses a bottom sheet; very short viewports use an inline panel. During a native application dialog it moves inside that dialog instead of opening another modal or disabling its controls. Finish/close the native dialog before advancing the walkthrough. Closing the companion does not close the dialog. It restores focus, removes target descriptions/highlights and clears layout space on exit.

**Help** supports Start/Resume and Restart. Progress is stored separately under `pa:tutorial:v1:<application scope>`; a missing or unwritable preference store does not block character work. Reloading never forcibly resumes an overlay.

## Build and verify

After editing `ui/folio.css`, `ui/help.js` or `ui/help-content.js`, rebuild the embedded sources and verified release metadata:

```text
python tools/build.py
python tools/build.py --check
```

The original font files must be present for release verification. The builder uses only the Python standard library. It verifies all nine runtime assets and preserves release protocol 1. The Help content is embedded in the HTML and therefore travels with the cached application; no separate online Help service is needed.

Development tests require Python Playwright and a compatible Chromium executable:

```text
python tests/test_tutorial.py --browser /path/to/chromium --output test-results
python tests/test_tutorial.py --browser /path/to/chromium --case imports --output test-results-import
python tools/export_help.py --browser /path/to/chromium
```

These tests use in-memory adapters on an isolated document. They are **not** native IndexedDB, installation, offline caching, completed-download or physical-print tests. The production app still uses its original storage and service-worker implementations; it never loads the test adapters.

## Source preservation and private material

The uploaded archive and extracted original were not edited. A separate original-source snapshot accompanies the update, excluding font binaries and private `Meta/` material. The supplied archive includes an API-key-named private file in that material; it was not opened or copied into the deliverables. Treat the original archive as private, and rotate any live credential that was shared unintentionally.

The canine emblem, local font references, eight theme IDs, English/German support, account-free design and static distribution are preserved. Character interchange remains `player-almanac-sheet` version 1 with state-version-4 data. No cloud synchronization or account recovery has been added.

The original project attribution and license remain in `LICENSE.txt`.
