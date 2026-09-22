# Tutorial implementation scope

Inspected baseline: **7.9.0-folio.1**, supplied RAR. Source, rendering, domain commands, persistence barriers, dialog manager, import/export and worker reviewed before implementation. The original archive and extracted source were left unchanged.

## Coverage checklist established before implementation

- [x] Library: blank creation, import preview, open, switch, search/filter, duplicate, confirmed deletion.
- [x] Field commits on blur/Enter; selects and checkboxes commit on change; explicit Save in item/document dialogs; recoverable unapplied drafts.
- [x] Identity/background packages, abilities, skills, manual modifiers, vitals/rules and level-to-hit-dice coupling.
- [x] Portrait replacement, removal, framing, image/video limitations.
- [x] Attacks/features, spell setup, prepared spells, recorded casts, manually configured slots.
- [x] HP/temp HP, conditions/manual rule effects, checks/saves/dice, persisted or session-only roll history.
- [x] Hit-dice spending, long-rest review, concentration, manual death counters.
- [x] Equipment, attunement, separate coin fields, fixed journal documents, optional Fateweaving.
- [x] Maps: add/import, navigation, accessible marker editing, routes/calibration, replacement/export and chronological Undo.
- [x] Character history, library-operation limitations, field/native undo and transaction-associated rolls.
- [x] Embedded-media exports, import modes/confirmations, local checkpoints/drafts versus external backup.
- [x] Frozen print snapshot, paper/content/Fateweaving settings, browser print.
- [x] Eight themes, language/contrast/motion/lite preferences, offline installation/update requirements.
- [x] Optional local questionnaire, explicitly approved online generation, disabled-by-default add-ons.
- [x] Troubleshooting rooted in actual validation, storage, read-only, import, media and offline behaviors.

## Integration plan

Add a read-only Help route and a nonmodal, docked walkthrough companion. Move the companion inside the active native dialog when necessary rather than competing with its focus trap. Keep tutorial metadata separate from character records. Only user-operated, existing application controls may create/import/edit/export data. Use existing navigation/save barriers. Provide English and German content through the existing translation dictionary. Embed lightweight authored JS/CSS into the standalone HTML and rebuild existing release hashes; no runtime dependency.

## Verification boundary

The managed Chromium in this environment blocks URL navigations. Real rendered UI interactions can be exercised on about:blank with the application's existing dependency injection and isolated in-memory storage/media adapters. This does not establish native IndexedDB durability, service-worker caching, installation, browser download completion, real online generation, or physical printing. Report these separately from UI tests.
