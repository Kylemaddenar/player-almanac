# Player Almanac - Help / How to Use

**7.9.0-folio.2**

Open **Help** in the app header or **More**. Search by a task or control name, choose a topic, and use **Open this workspace** to reach the relevant screen. Character tasks require an open character. The app guide and this document use the same authored content and live interface labels.

The walkthrough is optional. It never fills, imports, deletes or resets character data for you. Saving in this browser is not an external backup.

## Get started

### Create, open & switch characters

Your Library is the collection in this browser, not a cloud account.

#### Create a blank character

In **Library**, choose **Create character** → **Start with a blank sheet**. Enter the identity you know, review **Level** and **Rules edition**, then choose **Create character** in the form. The new record opens in **Identity**. This creates a real character; the walkthrough never creates one for you.

#### Open or switch

Choose **Open folio** on a Library card to reach **Play**. On a wide screen, **Active character** in the sidebar switches characters. On a phone, return to **Library** and open the other card. Changing screens first tries to save pending character edits; resolve a validation or save warning before leaving.

#### Find a character

Use **Search characters** for name, species, class or campaign; use the campaign filter and sort controls to narrow the Library. No matches does not mean records were deleted: choose **Clear** to remove the filters. Ctrl/Cmd+K opens **Find a field or tool** outside dialogs.

### Understand saving & local storage

A saved browser record and an exported backup file are different things.

#### Commit a character field

In the character editor, type a value, then leave the field or press Enter (except in multiline text). Checkboxes and selections commit on change. Derived values update from committed data. Escape cancels the active field edit. Watch the save-status control in the header; there is no whole-sheet Save button.

#### Finish a form

Item editors and document editors use **Save**; creation, casting, importing and resting have their own named confirmation. Typing can retain a recoverable draft without applying it to the character. **Cancel** or **Close** does not mean a saved draft was erased. Look under **Recoverable drafts** to resume or explicitly discard it. Conditions and hit-dice spending inside their dialogs take effect immediately when their controls are used.

#### Keep an independent copy

Records and media are local to this browser/profile and site. The application directory also scopes its Library. Another browser, profile, address, port or directory can show a different Library. Clearing site data, private browsing or storage eviction can lose records and local checkpoints. There is no implemented cloud sync or account-based recovery. Export a file with media and keep it outside browser storage.

### Import a character safely

Preview first; adding copies is the default. You do not need to import to use a blank character.

#### Choose and preview

In **Library**, choose **Import**, then **Choose file** for a supported JSON file, or enter JSON in **Paste JSON instead**. Choose **Preview import**. Review characters, media, warnings and any normalization changes. A file selection or preview alone does not import characters. Files are limited to 70 MiB.

#### Add, then open

Leave **Import operation** at **Add as new characters** for a separate copy. Acknowledge listed adjustments only after reviewing them. Choose **Import** in the preview. Successful character import returns to **Library**; choose **Open folio** on the imported card. The original file is not changed. Supported character/library formats are recognized by the parser; an arbitrary PDF or website export is not a supported JSON character just because its extension is changed.

#### Replace only deliberately

**Replace a named character** targets the named existing character. **Replace the entire library (advanced)** is an advanced, destructive choice with an additional acknowledgement. Both retain confirmation and create a local checkpoint before replacement. Export an external backup first. Addon restoration is optional and restored addons remain disabled. For a campaign-map JSON file, first open a character and use **Import campaign map** in **Map**.

### Duplicate or delete a character

Use the More control on the intended Library card, not a different active character.

#### Make a copy

On a Library card, choose **More** → **Duplicate**. A named copy is added immediately; it is not an unsaved preview. Its text can be edited independently. Existing immutable portrait/map assets may be shared internally until replaced.

#### Delete with recovery in mind

Choose the card’s **More** → **Delete**, read the named-character confirmation, then confirm only when certain. A local recovery checkpoint is created first. Library creation, duplication and deletion are not normal character **Undo** actions. Use **Local recovery checkpoints** in **Backup & recovery** to preview recovery, preferably as new records. A checkpoint is not protection against clearing browser data.

## Prepare your character

### Set identity & background

Start with information you know; Player Almanac is not an automatic class builder.

#### Edit identity

Open a character, choose **Edit** in its header or **More** → **Edit character**, then **Identity**. Enter **Character name**, **Species / ancestry**, **Class / subclass**, **Campaign**, **Alignment** and **Background** as needed. Leave each field to commit it. Typing a class or background name does not populate its game statistics.

#### Review a background package

The background chooser is an optional, separate workflow. Review its edition-specific choices and proposed changes before applying it. A package can change proficiencies, equipment, coins, features, feats and backstory; 2024 choices may include ability increases. This is more than renaming **Background**. Use **Undo** for an applied character change.

### Enter abilities, skills & modifiers

Enter scores and training; the app derives the displayed bonuses from those entries.

#### Set scores and proficiency

In **Edit character** → **Abilities & training**, enter each ability score (1–30), its saving-throw proficiency and any manual modifier. For skills, set proficiency/expertise and manual modifiers as appropriate. Expertise also selects proficiency; clearing proficiency clears expertise. These choices are manual, not inferred from your class text.

#### Understand the calculated values

Ability modifier = floor((score − 10) / 2). Proficiency bonus follows **Level**. Saving throws add ability modifier, selected proficiency and the manual modifier. Skills add ability modifier, selected proficiency (twice for expertise) and their manual modifier. **Passive Perception** is 10 + the Perception bonus. **Initiative** uses the Dexterity modifier. Conditions and exhaustion do not automatically alter these numbers or roll mode.

### Configure HP, defenses & rules

Set the values your character actually has; defaults are not a completed build.

#### Enter the essentials

In **Edit character** → **Vitals & rules**, review **Level**, **Rules edition**, **Armor Class**, **Speed**, **Maximum HP** and **Current HP**. Enter **Temporary HP** only when needed. Armor Class, speed and HP are manual: equipment, class text or ability scores do not calculate them. Healing on **Play** is unavailable while Maximum HP is zero.

#### Review hit dice and overrides

Changing **Level** updates **Total hit dice** to that level and caps spent hit dice at the new total. Review **Hit die**, **Spent hit dice** and any intentional total override afterward. Review long-rest HP/hit-dice recovery settings yourself; changing an existing character’s edition does not rewrite those overrides. Spell slot totals are also manual.

### Add & frame a portrait

Portrait media is stored locally with a reference in the character.

#### Choose or replace media

In **Edit character** → **Identity**, use **Choose portrait**. Choose a supported image (PNG, JPEG, WebP, GIF, AVIF or BMP) or MP4/WebM video, up to 50 MiB. A valid selected file replaces the portrait after it is stored; there is no extra Save form. Keep the original media file externally as well.

#### Adjust the frame

Use **Zoom**, **Horizontal** and **Vertical** to adjust the crop; leave each field to commit it. **Remove** requires confirmation. Replacement/removal can be reversed through character history while that history and media remain available. Reduced motion and Lite mode pause decorative video. A missing-media warning preserves the reference but cannot recreate a lost file: restore an export containing it or choose the source file again.

### Prepare attacks, features & feats

Recorded descriptions and modifiers are player-authored; they are not a rules engine.

#### Add an attack

In **Edit character** → **Attacks**, create a custom attack or select entries from the weapon catalogue. Save the attack’s name, attack bonus, damage expression and notes. Review catalogue entries after adding them. The attack bonus is manual; rolling uses the first signed integer found in that stored bonus, not a bonus rebuilt from your class or ability scores.

#### Record features and feats

In **Edit character** → **Features & feats**, add or edit descriptions and **Mechanical traits**, then use **Save** in item dialogs. Rest-reset choices are reminders only. Uses written in a description are not counters and do not reset automatically. Removal asks for confirmation. Read these entries on **Play**.

### Set up spellcasting & slots

Choose the casting ability and enter your own slot totals before recording casts.

#### Set casting values

In **Edit character** → **Spell setup**, choose **Spellcasting ability**. Spell attack uses its modifier + proficiency bonus. Spell save DC is 8 + those values unless **Spell save DC override** contains a manual number. Leave the override empty to calculate again. Choosing no ability disables the spell-attack roll control.

#### Enter slots, do not infer them

For each slot level 1–9, enter total and spent (0–9). Spent cannot exceed total; lowering a total caps spent at that total. Class names and character levels do not fill slot progression. Once configured, **Spells** shows usable slot controls; recording a cast or spending/restoring one slot adjusts spent, and a recorded long rest resets spent slots.

## Use it during play

### Track HP & conditions during play

Use the real controls only when their changes belong on this character.

#### Apply damage or healing

On **Play**, enter a positive **Amount**, then choose **Damage** or **Heal**. Damage consumes temporary HP first, then reduces current HP to no lower than zero. Healing adds to current HP up to Maximum HP; it does not lower an already over-maximum value. These buttons save a character action immediately. **Undo** reverses the action. They do not determine damage from armor or resistance.

#### Set temporary HP

Open the **Temporary HP** control in the HP area, enter the intended total and choose **Save**. This replaces the temporary-HP value; it does not add the new amount to the old one. Maximum HP is edited under **Vitals & rules**, not increased by Heal.

#### Record a condition

Open **Add condition** and select or clear conditions. Each checkbox saves immediately; closing the dialog is not cancellation. Use an active condition to add a **Condition note**. Removing a condition retains its note for later. Conditions and **Exhaustion** are reminders: choose roll mode and any applicable manual adjustments yourself.

### Make checks, saves & dice rolls

Ordinary rolls record results; they do not apply damage or spend character resources.

#### Roll a check or saving throw

On **Play**, use the named check/save controls in **Checks & saves**; expand **Skills** for skills. **Initiative** also rolls. Choose the normal/advantage/disadvantage roll mode before rolling a d20 action. It applies to checks, saves, initiative and attack rolls, not to an arbitrary typed dice expression. Read the result and log; apply any game consequences yourself.

#### Use the dice tray

Choose **Dice**, enter a dice expression such as 1d20 or 2d6+3, and choose **Roll** or press Enter. The d4–d100 shortcuts roll immediately. For a recorded attack, **Attack** rolls its manual attack bonus; **Roll damage** rolls its written expression. Neither action changes anyone’s HP. Invalid expressions show an error rather than a fabricated result.

#### Read roll history

Recent rolls appear on **Play** and in the dice dialog. The display is limited (8 on **Play**, 15 in the dialog). Results can be saved separately from character edits; a session-only label means that result is not durably stored. Ordinary rolls are not removed by character Undo. Undoing a hit-dice or concentration transaction marks its associated roll as undone; redo reuses the recorded outcome rather than rerolling.

### Rest, concentrate & track death saves

These controls record selected effects, not every rule of a rest or condition.

#### Spend hit dice

Open **Rest** → **Short rest**, set **Number of hit dice**, then choose **Spend & roll hit dice**. This immediately spends available hit dice and rolls healing, capped by Maximum HP. It uses the configured hit die, Constitution and rules edition. Closing the rest dialog does not cancel this action. **Feature reset reminders** are reminders only; custom use counts are not reset.

#### Record a long rest

Open **Long rest** and review the displayed recovery settings before choosing **Record long rest**. The recorded action applies the configured HP and hit-dice recovery, resets spent spell slots, clears temporary HP and death-save counters, and ends concentration. It does not clear conditions or exhaustion or rewrite feature descriptions/use counts. Override rest rules in **Vitals & rules** when your table needs different HP/hit-dice recovery.

#### Manage concentration

Set concentration in **Vitals & rules** or track it while recording a spell cast. **End concentration** ends it immediately. Enable **Prompt for concentration after damage** for a prompt after damage: the damage has already been applied when the prompt opens. Rolling the concentration check uses the Constitution saving-throw bonus; failure ends concentration. Closing the prompt is not an undo of damage.

#### Track death-save results

The Play death-save area appears at Current HP 0 when Maximum HP is above 0. Use the **Successes** and **Failures** controls to record results (0–3 each). They are manual counters, not automatic death-save rolls or a full dying/stabilization rules engine. Healing does not clear the counters automatically; review them yourself or use a recorded long rest.

### Manage spells & record casts

The spellbook holds your entries. Recording a cast tracks selected resources only.

#### Build and browse the spellbook

In **Spells**, use **Add spells** for the catalogue or **Create custom** for your own entry. Review edition and details; save custom edits with **Save**. Search and filter by level, preparation, concentration or ritual; change sort as needed. Select a spell’s name for details. The prepared checkbox commits immediately; spell preparation is not inferred from class or level.

#### Record a cast deliberately

Choose **Record cast**. Review whether to spend a slot and select an available level, or state a no-slot reason (cantrip, ritual or a written other reason). Choose whether to track concentration; replacing existing concentration needs the displayed acknowledgement. Confirm with **Record cast**. This spends the selected single slot and optionally changes concentration; it does not roll damage, enforce components or apply spell effects.

#### Adjust resources and review changes

Use the named spend/restore controls beside a configured slot level to change spent by one. They do not change the slot total. For totals or unavailable levels, open **Spell setup**. Catalogue-enhancement review is optional: inspect its before/after changes before applying them. Removal requires confirmation; committed spell changes participate in character Undo.

### Track equipment, attunement & money

Inventory entries are text records, not automatic armor or encumbrance calculations.

#### Add or edit equipment

Open **Gear**. Add equipment or attunement entries, type the text, then choose **Save**. Use the equipment catalogue as an optional starting point and review added entries. Search each list; edit through its item controls. Removing an entry asks for confirmation. Quantities, weight, charges, equipped state and attunement limits are not enforced automatically.

#### Update coins and training

Enter each coin denomination separately and leave its field to save. There is no automatic currency conversion or purchase deduction. Review armor training, **Weapon training**, **Tools** and **Languages** in the training area. These text/training records do not automatically recalculate Armor Class or attack bonuses.

### Write backstory & session notes

The Journal contains editable documents rather than a list of dated entries.

#### Write and save a document

In **Journal**, choose **Edit** for **Backstory** or **Session notes**. Write in the dialog and choose **Save** to apply the text. A retained draft is not yet the displayed document. To keep multiple sessions, add your own date headings inside Session notes.

#### Use optional Fateweaving

Enable **Show Fateweaving** to read/edit **Thread**, **Fate notes**, **Fate rewards**, **Curse** and the three boon documents. Visibility is remembered per character. Hiding the module does not delete its content or remove it from exports; full printing has a separate inclusion setting.

## Explore with maps

### Add a map & navigate it

Maps belong to the selected character. Map tools appear only after a map exists.

#### Add or import

Open **Map** in the sidebar, or **More** → **Map** on a phone. Choose **Add map**, select a local image, name it and choose **Save**. Map images are limited to 10 MiB and 20,000 pixels per dimension. **Import campaign map** previews a campaign-map JSON and asks you to import it; existing campaigns are retained. Use **Campaign maps** to switch among maps.

#### Navigate without changing records

With **Pan / select**, drag to pan; use **Zoom in**, **Zoom out** and **Fit map**. Pinch or Ctrl/Cmd+wheel also changes zoom. View zoom and panning do not edit marker coordinates or recalibrate distances. Open **Selection & map contents** for accessible lists and filtering rather than relying only on the image.

#### Manage or export a map

Open **Map management & tools** for rename, **Replace image**, **Export campaign map** and removal. A replacement image retains normalized pins/routes; it clears scale unless you explicitly choose **Keep existing calibration despite the image change**. Removal is confirmed and undoable as a character action. Export prepares a campaign JSON, with a warning if media is missing. A missing image warning preserves geometry/reference, not the lost image itself.

### Place pins, draw routes & calibrate

You can enter positions by keyboard; pointing at the map is optional for editing.

#### Place or move a marker

Choose **Place pin** and select a position, or use **Add pin** in **Map management & tools**. Name the pin and review type, notes and optional linked character, then **Save**. **Horizontal position (%)** and **Vertical position (%)** are percentages. Select an existing marker to inspect/edit it. Tab to a marker and press Enter to inspect; arrow keys move it, Shift+arrow moves farther. Dragging or arrow movement saves the position. Review **Origin** and **Player token** through their own forms; **Lock token** prevents token movement.

#### Record a route

Choose **Draw route** and select points, then **Map management & tools** → **Add route** to review and save. Alternatively enter **Route points (x%, y%; one point per line)** directly: one x%, y% pair per line, at least two points. The editor can add, remove and reorder points. Review name, color, ownership and notes. Route lengths are calculated from image coordinates; they do not enforce travel speed or movement rules.

#### Set a meaningful scale

Open **Calibrate scale** or choose **Two-point calibration** and select two different points. Enter the known distance and unit, or enter image pixels per unit directly. Review the before/after values and confirm. Lengths use original image pixels, not current zoom. Without calibration they are pixel distances. **Clear calibration** asks for confirmation. **Undo map action** works only if this map owns the newest history action; otherwise use chronological **Change history** rather than skipping newer work.

## Protect & recover your work

### Undo, redo & understand their limits

History is chronological and belongs to the selected character.

#### Reverse a committed action

Use header **Undo** or **Redo**, or open **More** → **Change history** to inspect the order. Up to 100 undo entries are retained per character. Undo/redo writes another saved state; a new character action clears the redo branch. Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z act on character history only outside editable text and dialogs. Inside a text field, use normal text editing or Escape before its commit.

#### Know what is outside Undo

Library creation, duplication, deletion and import membership are not ordinary character Undo. Preferences, exported files and ordinary dice results are not undone. Resource-changing rolls are linked to their character action and can be marked undone without inventing a new result. A map action cannot jump over a newer unrelated edit. For deleted/replaced records, review checkpoints or an external backup.

### Export an external backup

The application can prepare a file; only you can verify where it was saved.

#### Back up one character or the Library

For one character, use its Library-card **More** → **Export this character with media**, or open it and use **More** → **Export this character with media**. For everything, open **Backup & recovery** → **Export library with media**. Pending character edits must pass the save barrier. Review **Backup coverage** and missing-media warnings, then choose **Export file**. Check your browser’s download/save result and keep the JSON somewhere independent of site storage.

#### Check coverage and size

Normal character/library exports embed available portrait and map media. Missing media cannot be reconstructed from its reference. **Include addon files (restored disabled)** is optional and restores addon files disabled. Files over the 70 MiB character-import limit are unsuitable for that importer: keep a recovery export and also export smaller individual characters. A “file prepared” date is not evidence of a completed external backup.

#### Inspect without replacing anything

Use **Inspect a backup file** to parse and inspect a saved backup file. This checks its readable structure; it is not proof that every future recovery scenario will succeed. An ordinary import preview also changes nothing until its final Import action. To verify contents more thoroughly, import as new records in a separate test browser/profile and compare them, never replace your only working Library just to test a backup.

### Recover drafts & handle save failures

When storage warns, preserve work before closing the page.

#### Use local recovery

In **Backup & recovery**, **Create local checkpoint** creates a local checkpoint. Existing **Local recovery checkpoints** can be previewed through the import workflow. They retain text/history references and media keys, not an independent copy of every blob. They live in the same browser and cannot recover cleared site storage. Prefer adding recovered characters as new records before deciding which to keep.

#### Resume or discard a draft

Under **Recoverable drafts**, inspect the named draft and choose its offered resume, compare, export or save-as-new action. Available actions depend on the draft type. Discarding requires confirmation. An import draft may need its original source file again. A dialog closed without applying its form can still have a recoverable draft.

#### Handle a failed or conflicting save

Open the header save-status control. Use **Retry** when appropriate, **Compare saved and draft** to review saved versus draft data, or **Save draft as a new character** when offered. Use **Export recovery now** before losing a memory-only draft; keep the resulting file. Only one tab owns editing at a time: read-only mode still allows reading and dice, but editing requires the explicit takeover workflow. Do not clear storage as a first troubleshooting step.

### Print a character reference

Printing is a readable snapshot, not a restorable character backup.

#### Prepare the saved snapshot

Open a character, then **More** → **Print**. The app first saves pending character edits and builds a snapshot of the saved revision. Choose **Table reference** or **Full sheet & descriptions** under **Content**, and A4 or Letter under **Paper**. Review **Include Fateweaving in full print (including hidden entries)**: hidden Fateweaving entries may be included in full print unless you turn this off.

#### Use browser print preview

**Fit page**, **Fit width** and zoom adjust the on-screen preview, not the character or printed content mode. Choose **Print / save PDF** to open the browser print flow. Its preview determines final page breaks, margins and printer/PDF destination. The snapshot is frozen; return to the character and reopen Print after later edits. Export JSON separately for recovery.

### Solve common problems

Follow the warning that is actually shown; avoid destructive “reset” fixes.

#### An action is disabled or missing

No active character: open one from the Library first. Heal disabled: set Maximum HP above zero in **Vitals & rules**. No slot to spend: configure totals in **Spell setup** and check spent. No map tools: add/select a map. Read-only status: another tab owns editing or an update has paused it; use the status explanation and explicit takeover/update workflow.

#### A value will not save or navigation stops

Correct the highlighted field’s range or format, then leave it again. Spent hit dice cannot exceed total; spent slots cannot exceed their total. Leaving a screen is blocked when pending edits cannot be made safe. Open the status control for recovery options; export recovery before closing a page with memory-only work. A retained form draft is not a committed item until its final Save.

#### Import is rejected or incomplete

Check JSON syntax, supported format and the 70 MiB file limit. Review normalization adjustments and any invalid entries; acknowledge only changes you accept. Importing only valid entries is a deliberate partial-import choice, not automatic repair. Keep the original file and any offered recoverable draft. A campaign-map file belongs in a selected character’s Map workspace.

#### Characters, media or offline access seem gone

First clear Library filters and check the original browser/profile, site address and app directory. Inspect recovery before deleting anything. For missing media, restore a backup containing the blobs or reselect original files. For offline-not-ready, reconnect and retry after the complete matching release is present. Clearing site data can destroy the very records you are trying to recover.

## Make it yours

### Choose language & accessibility preferences

Appearance changes are preferences, not character edits.

#### Set your reading preferences

Open **Settings** → **Appearance**. Choose one of the eight themes or enable **High contrast**. Under **Motion**, use **Follow system**, **Reduced** or **Full**; system reduced-motion preference is still respected. **Lite mode (pause decorative media)** pauses decorative media. These choices save when changed and do not add a character-history action.

#### Switch English or German

Use **Language** for English or Deutsch. This Help guide and walkthrough follow that selection. Player-authored text and catalogue content are not translated by changing the interface language; some inherited catalogue/diagnostic wording may remain English. Navigation labels in this guide use the application’s live translations. Keyboard focus remains visible; the tutorial can be used without hovering or dragging.

### Use offline access & installation

Offline application assets and saved character data are separate.

#### Check offline readiness

Under **Settings**, inspect the installation/offline panel. For service-worker offline access, serve the complete matching release from HTTPS or localhost, open it while connected and wait for the app to report offline availability. Missing or mismatched release files prevent verified caching. Opening the standalone HTML with file:// is not the supported installation route. Do not assume the first successful screen load means all assets are cached.

#### Install only when offered

The install control is available only when this browser exposes an install prompt. Installation is optional; it does not create an account or synchronize data. Browser and platform support differ. **Request persistent storage** asks the browser to reduce eviction risk; it may be refused and never replaces an external backup.

#### Update without losing drafts

When an update is offered, use the existing save-and-update flow and follow its instructions for every open window/tab. Unready or unresponsive clients can block activation. The app does not silently discard edits to force an update. Keep the same site and application directory to continue using the same Library. Online generation still requires a network; approved addon networking may also require one.

### Optional questionnaire, online tools & addons

None of these is required to create, import or play a character.

#### Use the questionnaire offline

Choose **Character questionnaire** from the Create chooser or its entry in the character editor. Work through its steps; your answers are retained as a local draft. At the review, export the generated prompt as a text file to use independently. Completing answers does not silently create or replace a character.

#### Approve online generation separately

The online-generation review shows the outgoing payload and endpoint. Read them and grant the displayed consent before sending; sending is never part of this tutorial. It requires network access and whatever credentials the configured endpoint requires. Cancel stops the request where supported. Returned output still goes through the ordinary import preview: review and explicitly import it rather than assuming it is accurate or already applied.

#### Review an addon before enabling

In **Settings** → **Addons**, installing an addon file retains it disabled. Review its source, declared network origins and permissions before the separate enable consent. Open only a trusted addon; its allowed bridge actions can affect character data. Export a backup first. Disable stops it; removal is confirmed. Restored addons are also disabled. This tutorial never installs, enables or opens an addon for you.
