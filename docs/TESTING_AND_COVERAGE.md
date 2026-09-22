# Player Almanac tutorial - coverage and verification

**Delivered:** 7.9.0-folio.2  
**Inspected baseline:** supplied 7.9.0-folio.1  
**Verification date:** 22 September 2026

## Result

**246 automated checks passed across 15 isolated browser test cases; zero failed cases and no uncaught JavaScript errors in those cases.** The full suite completed in 65.4 seconds. Finished content comprises **26 Help topics, 12 branch-specific/shared step definitions and 310 English/German translation pairs**. The create/existing-character paths each show 10 steps; import shows 11.

This is a rendered-interface test result with an important boundary: the managed Chromium environment blocks normal URL navigation. Tests rendered the actual application in `about:blank`, using its dependency-injection points with isolated in-memory transaction, localStorage and media adapters. The actual UI, forms, navigation, domain commands, repository logic, validation, dialogs, controllers, import/export and tutorial ran. Native browser storage and service-worker operation did not.

Browser used: **Chromium 144.0.7559.96 on Linux**, via Playwright. Viewports were emulated; these were not physical-phone tests. The test fixture contains only synthetic characters and media. No user browser profile or existing Library was opened.

## Tested interactions

| Test case | Verified behavior |
| --- | --- |
| Empty Library | Optional welcome offer; no forced overlay; dismissal leaves records unchanged; persistent Help; skipping does not create sample data. |
| Create path | Real blank-character chooser/form; successful creation advances to Identity; Back does not create another copy; ability and HP edits commit; Level updates hit-dice total; Damage/Undo and real dice work; export review remains; completion opens Help. |
| Import path | Invalid JSON does not import or advance; canonical sheet-v1/state-version-4 fixture is parsed; preview alone adds nothing; default add operation remains; actual confirmed import returns to Library/Open; Restart preserves imported data. |
| Existing characters | Reviewing the whole path without editing leaves payloads, revisions, media references and Library membership unchanged. Close/resume/restart do not reset data. |
| Interrupted tutorial | Adapter-backed application dispose/remount offers Resume without forcing an overlay. Unavailable tutorial preference storage does not block work. This is not a native browser reload/durability test. |
| Detours and read-only | Switching characters and opening unrelated screens pauses progression; Return goes to the intended character; simulated read-only state is explained; disabled fields are not highlighted as usable; cleanup restores target descriptions. |
| Validation | Invalid maximum HP retains the original validation/save barrier and prevents Next. Correcting it allows normal continuation. |
| Help and languages | Search, no matches, clear and result navigation; all 26 articles rendered in EN and DE without unresolved control tokens; all 310 new keys have German content; compact phone topic navigation. |
| Keyboard | Keyboard-only Start, path selection, Show control and dialog opening; Tab stays in the native modal trap; Escape retains the native dialog behavior or closes the focused nonmodal companion; focus restoration and inert cleanup. |
| Responsive/preferences | No horizontal page overflow and no target/panel overlap at 1440x1000, 1024x768, 768x1024, 390x844, 320x640 and 844x390. Close/Skip/Restart remain reachable. System reduced motion, all eight themes and high contrast remain available. |
| Companion inside dialogs | Closing instructions leaves the real dice dialog open and focus inside it; normal dialog Close/Escape works afterward; no character mutation. |
| Normal action regression | Temporary HP absorbs damage first; healing caps correctly; Undo/Redo; configured spell-slot spending/restoring; journal Save; duplication; deletion still requires confirmation and Cancel preserves both records. |
| Portraits/maps | Read-only Help links; tools absent on empty map workspace; image staging before Save; map creation/rendering; zoom/Fit do not alter records; Add pin Save; keyboard pin movement; portrait staging/framing; phone identity layout. File selection/media persistence use test adapters, not native file-picker/IndexedDB durability. |
| Rest/print preparation | Conditions apply immediately in their dialog; hit-die spending applies before Close and is undoable; long-rest review/cancel do not apply recovery; Record long rest changes configured HP/temp/death fields and leaves conditions; print opens saved snapshot; Letter/full/fit controls do not change character data. Native Print was not invoked. |
| Phone dialogs | Import companion remains inside original modal; Show control reaches real JSON field; narrow/phone import and dice have no horizontal overflow; reduced-motion narrow dialog retains Close. |

No HTTP(S) request was observed from Help or the walkthrough in these tests. The optional online-generation and add-on flows were not enabled or exercised against external services.

## Feature coverage and save semantics

Every topic is finished instructional content, not a placeholder. Exact control references resolve through `PA.t`; the standalone guides are generated from the same content.

| User goal / Help topics | Verified implementation basis and important distinction |
| --- | --- |
| Create/open/switch/search; duplicate/delete | Library workspace, `openBlankCharacter`, `duplicateCharacter`, `deleteCharacter`. Creation is confirmed; duplication adds immediately; deletion is confirmed and is not ordinary character Undo. |
| Saving and local storage | `U.characterField`, `PA.formDialog`, controller barriers, drafts and repository. Fields commit on blur/Enter, checkboxes/selects on change; item/document Save applies a form. Saved drafts can be unapplied. Local records/checkpoints are not independent external backups. |
| Identity, abilities, vitals | Editor and command selectors. Class/species text does not build statistics. Ability modifiers/proficiency-related bonuses are derived; HP, AC, attacks, slots and other declared inputs remain manual. Level also updates hit-dice total. |
| Portraits | Existing local-media staging, portrait fields and immutable media references. Choosing media and committing framing are different actions; removal retains confirmation. |
| Attacks/features | Existing collection editor and Play roll controls. Attack bonus/damage expressions are player-entered; rolls do not apply target damage. Feature reset settings are reminders, not rewritten use counts. |
| HP, conditions, checks and dice | Play workspace/commands and separate roll log. Damage/healing alter HP only when used; conditions do not automatically apply game-rule modifiers; ordinary dice do not spend resources or disappear through character Undo. |
| Rest, concentration and death saves | `PA.openRest`, hit-die/long-rest/concentration commands, manual death counters. Hit dice apply immediately; long rest has Record confirmation; concentration prompts follow already-applied damage; healing does not itself clear death counters. |
| Spells and slot setup | Spell setup, picker and `recordCast`. Slots are configured manually; Record cast optionally spends a selected slot and changes concentration, not arbitrary spell effects. |
| Gear and journal | Gear/journal editors. Explicit Save for item/document forms, separate manual coin fields, fixed saved documents rather than invented dated-entry management. Hidden Fateweaving is not deleted. |
| Maps and map tools | Map workspace, media staging, pin/route/scale forms, `PA.mapTools`. Tool availability depends on a map; coordinates are editable without dragging; calibration is reviewed; Undo follows chronological character history. |
| Undo/redo | Controller/repository history, maximum 100 character commands. New commands clear redo; library membership, preferences, file downloads and ordinary rolls are not character Undo. Associated transaction rolls reuse their recorded outcome. |
| Export/import/backup | Original serializers/parser, preview/import service and recovery UI. Coverage review precedes Export file; file preparation is not verified external retention. Add copies is distinct from confirmed replacement. Media warnings and optional disabled add-on restoration are explained. |
| Recovery | Existing drafts/checkpoints, raw recovery export and conflict/read-only states. Local checkpoints still depend on the same browser and media store; clearing site data is not offered as a first recovery step. |
| Printing | `PA.openPrint`, saved snapshot and print workspace. Content/paper/Fateweaving settings affect output; zoom/fit affect preview. Browser dialog/page breaks are distinct from the app preview. |
| Appearance/accessibility/language | Original preference system, eight theme IDs, contrast, motion/system preference, lite mode and EN/DE. Tutorial adds no competing preference system. |
| Offline/installation/update | Original offline coordinator/worker, secure-context/protocol checks and verified asset manifest. Installation depends on browser support/prompt availability; native caching/install were code-reviewed only. |
| Optional questionnaire/online/add-ons | Existing questionnaire drafts, prompt export, payload review/consent, importer and add-on permission/enable flows. They remain optional, separate from basic play and never auto-enabled by Help. |
| Troubleshooting | Actual validation, storage/read-only, import/media, filters and offline status/error paths. No cloud/account recovery or automatic rules engine is invented. |

## Source and build verification

- `node --check` passed for the final embedded application script.
- `python tools/build.py --check` passed: version 7.9.0-folio.2, **nine verified runtime assets**, protocol 1.
- Release ID: `8952a83b1bc621a8792a4250`.
- App BUILD identity: `b914ed43694482b1ef3d378307e7c97cc644799968bb184f7bba7a8f2282da7a`.
- Core domain, controller, IndexedDB driver, ownership, migration, media, import/export, preferences, drafts, recovery, add-on and map-tool implementations were not rewritten. The repository's fallback release-version string changed; its persistence logic did not.
- Existing Play/editor/spell/gear/journal/map/print/questionnaire/add-on/settings workspace implementations are unchanged. Library and backup workspaces only add stable targeting or successful-operation notifications.
- The existing worker body is unchanged after excluding regenerated RELEASE metadata. New Help is embedded in the HTML covered by the existing verified cache.
- Sheet schema v1 and state-version-4 metadata were checked on an actual serialized export and a canonical import fixture.
- Original HTML SHA-256: `e9ff3749891995a80a4d4a3343fd24a5baddbbe3468d8d2309bc799faf0e27e4`.

No runtime dependency was added. The production application does not reference the test-only memory adapters. Progress lives in a separate tutorial-preference key, not in character payloads or Undo history.

## Remaining limitations and unverified behavior

**Native IndexedDB/localStorage durability, real multi-tab ownership conflicts, service-worker installation/update/offline reload, completed browser downloads, native file picking, physical printers/PDF pagination, real mobile keyboards and assistive-technology announcements were not verified.** The browser environment could not navigate to the served app, so the isolated UI harness is not a substitute for those checks.

Actual external online generation and enabled add-ons were deliberately not run. Video-codec playback, every supported legacy/recovery import variant, all map calibration/import/export variants, destructive full-Library replacement and recovery after storage eviction were code-reviewed rather than exhaustively interacted with. No claim of universal accessibility or cross-browser certification is made.

The approximately five-minute tour length is a design target, not a measured new-user completion time. All newly added EN/DE strings are translated; original catalogue names/descriptions, player-authored text, proper names and most engineering documentation are not newly translated by this release.

### Before replacing a live installation

Use a copied test Library and an external backup for these outstanding checks:

1. Serve at the intended origin/path with the retained original fonts. Verify the version, create/import copies, close/reopen the browser, and check native persistence and media.
2. Complete the verified offline preparation, reload offline and test installed-app/update behavior with another app tab open. Confirm all nine assets are available; missing fonts prevent a complete verified release.
3. Export to disk, locate and reopen the downloaded JSON, and import as a **new** copy. Review media coverage. Test recovery and replacement only against disposable records.
4. Check real Android/iOS keyboards, pinch/zoom and narrow dialogs, browser Back/Forward, screen-reader announcements, keyboard focus and reduced/forced-color preferences in supported browsers.
5. Inspect the native print/save-PDF preview for both paper sizes and content modes. Optional online/add-on testing should use deliberate consent and non-sensitive test data.

## Reproduce

See `README.md` for build and test commands. `tests/results.json` contains the complete final check log, and selected screenshots in `docs/screenshots/` show the rendered desktop/phone UI. Tests should be run only with their isolated adapters, never against a live user profile.
