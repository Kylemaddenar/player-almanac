/* Authored EN/DE tutorial content. Control tokens resolve through PA.t. */
(function(PA){
"use strict";
const data = {
  "topics": [
    {
      "id": "start",
      "group": "begin",
      "route": "library",
      "title": "help.topic.start.title",
      "intro": "help.topic.start.intro",
      "tasks": [
        {
          "title": "help.topic.start.0.title",
          "body": "help.topic.start.0.body"
        },
        {
          "title": "help.topic.start.1.title",
          "body": "help.topic.start.1.body"
        },
        {
          "title": "help.topic.start.2.title",
          "body": "help.topic.start.2.body"
        }
      ]
    },
    {
      "id": "saving",
      "group": "begin",
      "route": "backup",
      "title": "help.topic.saving.title",
      "intro": "help.topic.saving.intro",
      "tasks": [
        {
          "title": "help.topic.saving.0.title",
          "body": "help.topic.saving.0.body"
        },
        {
          "title": "help.topic.saving.1.title",
          "body": "help.topic.saving.1.body"
        },
        {
          "title": "help.topic.saving.2.title",
          "body": "help.topic.saving.2.body"
        }
      ]
    },
    {
      "id": "import",
      "group": "begin",
      "route": "library",
      "title": "help.topic.import.title",
      "intro": "help.topic.import.intro",
      "tasks": [
        {
          "title": "help.topic.import.0.title",
          "body": "help.topic.import.0.body"
        },
        {
          "title": "help.topic.import.1.title",
          "body": "help.topic.import.1.body"
        },
        {
          "title": "help.topic.import.2.title",
          "body": "help.topic.import.2.body"
        }
      ]
    },
    {
      "id": "library-actions",
      "group": "begin",
      "route": "library",
      "title": "help.topic.library-actions.title",
      "intro": "help.topic.library-actions.intro",
      "tasks": [
        {
          "title": "help.topic.library-actions.0.title",
          "body": "help.topic.library-actions.0.body"
        },
        {
          "title": "help.topic.library-actions.1.title",
          "body": "help.topic.library-actions.1.body"
        }
      ]
    },
    {
      "id": "identity",
      "group": "prepare",
      "route": "edit/identity",
      "title": "help.topic.identity.title",
      "intro": "help.topic.identity.intro",
      "tasks": [
        {
          "title": "help.topic.identity.0.title",
          "body": "help.topic.identity.0.body"
        },
        {
          "title": "help.topic.identity.1.title",
          "body": "help.topic.identity.1.body"
        }
      ]
    },
    {
      "id": "abilities",
      "group": "prepare",
      "route": "edit/abilities",
      "title": "help.topic.abilities.title",
      "intro": "help.topic.abilities.intro",
      "tasks": [
        {
          "title": "help.topic.abilities.0.title",
          "body": "help.topic.abilities.0.body"
        },
        {
          "title": "help.topic.abilities.1.title",
          "body": "help.topic.abilities.1.body"
        }
      ]
    },
    {
      "id": "vitals",
      "group": "prepare",
      "route": "edit/vitals",
      "title": "help.topic.vitals.title",
      "intro": "help.topic.vitals.intro",
      "tasks": [
        {
          "title": "help.topic.vitals.0.title",
          "body": "help.topic.vitals.0.body"
        },
        {
          "title": "help.topic.vitals.1.title",
          "body": "help.topic.vitals.1.body"
        }
      ]
    },
    {
      "id": "portrait",
      "group": "prepare",
      "route": "edit/identity",
      "title": "help.topic.portrait.title",
      "intro": "help.topic.portrait.intro",
      "tasks": [
        {
          "title": "help.topic.portrait.0.title",
          "body": "help.topic.portrait.0.body"
        },
        {
          "title": "help.topic.portrait.1.title",
          "body": "help.topic.portrait.1.body"
        }
      ]
    },
    {
      "id": "attacks",
      "group": "prepare",
      "route": "edit/attacks",
      "title": "help.topic.attacks.title",
      "intro": "help.topic.attacks.intro",
      "tasks": [
        {
          "title": "help.topic.attacks.0.title",
          "body": "help.topic.attacks.0.body"
        },
        {
          "title": "help.topic.attacks.1.title",
          "body": "help.topic.attacks.1.body"
        }
      ]
    },
    {
      "id": "spellsetup",
      "group": "prepare",
      "route": "edit/spellsetup",
      "title": "help.topic.spellsetup.title",
      "intro": "help.topic.spellsetup.intro",
      "tasks": [
        {
          "title": "help.topic.spellsetup.0.title",
          "body": "help.topic.spellsetup.0.body"
        },
        {
          "title": "help.topic.spellsetup.1.title",
          "body": "help.topic.spellsetup.1.body"
        }
      ]
    },
    {
      "id": "hp",
      "group": "play",
      "route": "play",
      "title": "help.topic.hp.title",
      "intro": "help.topic.hp.intro",
      "tasks": [
        {
          "title": "help.topic.hp.0.title",
          "body": "help.topic.hp.0.body"
        },
        {
          "title": "help.topic.hp.1.title",
          "body": "help.topic.hp.1.body"
        },
        {
          "title": "help.topic.hp.2.title",
          "body": "help.topic.hp.2.body"
        }
      ]
    },
    {
      "id": "dice",
      "group": "play",
      "route": "play",
      "title": "help.topic.dice.title",
      "intro": "help.topic.dice.intro",
      "tasks": [
        {
          "title": "help.topic.dice.0.title",
          "body": "help.topic.dice.0.body"
        },
        {
          "title": "help.topic.dice.1.title",
          "body": "help.topic.dice.1.body"
        },
        {
          "title": "help.topic.dice.2.title",
          "body": "help.topic.dice.2.body"
        }
      ]
    },
    {
      "id": "rest",
      "group": "play",
      "route": "play",
      "title": "help.topic.rest.title",
      "intro": "help.topic.rest.intro",
      "tasks": [
        {
          "title": "help.topic.rest.0.title",
          "body": "help.topic.rest.0.body"
        },
        {
          "title": "help.topic.rest.1.title",
          "body": "help.topic.rest.1.body"
        },
        {
          "title": "help.topic.rest.2.title",
          "body": "help.topic.rest.2.body"
        },
        {
          "title": "help.topic.rest.3.title",
          "body": "help.topic.rest.3.body"
        }
      ]
    },
    {
      "id": "spells",
      "group": "play",
      "route": "spells",
      "title": "help.topic.spells.title",
      "intro": "help.topic.spells.intro",
      "tasks": [
        {
          "title": "help.topic.spells.0.title",
          "body": "help.topic.spells.0.body"
        },
        {
          "title": "help.topic.spells.1.title",
          "body": "help.topic.spells.1.body"
        },
        {
          "title": "help.topic.spells.2.title",
          "body": "help.topic.spells.2.body"
        }
      ]
    },
    {
      "id": "gear",
      "group": "play",
      "route": "gear",
      "title": "help.topic.gear.title",
      "intro": "help.topic.gear.intro",
      "tasks": [
        {
          "title": "help.topic.gear.0.title",
          "body": "help.topic.gear.0.body"
        },
        {
          "title": "help.topic.gear.1.title",
          "body": "help.topic.gear.1.body"
        }
      ]
    },
    {
      "id": "journal",
      "group": "play",
      "route": "journal",
      "title": "help.topic.journal.title",
      "intro": "help.topic.journal.intro",
      "tasks": [
        {
          "title": "help.topic.journal.0.title",
          "body": "help.topic.journal.0.body"
        },
        {
          "title": "help.topic.journal.1.title",
          "body": "help.topic.journal.1.body"
        }
      ]
    },
    {
      "id": "maps",
      "group": "explore",
      "route": "map",
      "title": "help.topic.maps.title",
      "intro": "help.topic.maps.intro",
      "tasks": [
        {
          "title": "help.topic.maps.0.title",
          "body": "help.topic.maps.0.body"
        },
        {
          "title": "help.topic.maps.1.title",
          "body": "help.topic.maps.1.body"
        },
        {
          "title": "help.topic.maps.2.title",
          "body": "help.topic.maps.2.body"
        }
      ]
    },
    {
      "id": "map-tools",
      "group": "explore",
      "route": "map",
      "title": "help.topic.map-tools.title",
      "intro": "help.topic.map-tools.intro",
      "tasks": [
        {
          "title": "help.topic.map-tools.0.title",
          "body": "help.topic.map-tools.0.body"
        },
        {
          "title": "help.topic.map-tools.1.title",
          "body": "help.topic.map-tools.1.body"
        },
        {
          "title": "help.topic.map-tools.2.title",
          "body": "help.topic.map-tools.2.body"
        }
      ]
    },
    {
      "id": "history",
      "group": "protect",
      "route": "play",
      "title": "help.topic.history.title",
      "intro": "help.topic.history.intro",
      "tasks": [
        {
          "title": "help.topic.history.0.title",
          "body": "help.topic.history.0.body"
        },
        {
          "title": "help.topic.history.1.title",
          "body": "help.topic.history.1.body"
        }
      ]
    },
    {
      "id": "backup",
      "group": "protect",
      "route": "backup",
      "title": "help.topic.backup.title",
      "intro": "help.topic.backup.intro",
      "tasks": [
        {
          "title": "help.topic.backup.0.title",
          "body": "help.topic.backup.0.body"
        },
        {
          "title": "help.topic.backup.1.title",
          "body": "help.topic.backup.1.body"
        },
        {
          "title": "help.topic.backup.2.title",
          "body": "help.topic.backup.2.body"
        }
      ]
    },
    {
      "id": "recovery",
      "group": "protect",
      "route": "backup",
      "title": "help.topic.recovery.title",
      "intro": "help.topic.recovery.intro",
      "tasks": [
        {
          "title": "help.topic.recovery.0.title",
          "body": "help.topic.recovery.0.body"
        },
        {
          "title": "help.topic.recovery.1.title",
          "body": "help.topic.recovery.1.body"
        },
        {
          "title": "help.topic.recovery.2.title",
          "body": "help.topic.recovery.2.body"
        }
      ]
    },
    {
      "id": "print",
      "group": "protect",
      "route": "print",
      "title": "help.topic.print.title",
      "intro": "help.topic.print.intro",
      "tasks": [
        {
          "title": "help.topic.print.0.title",
          "body": "help.topic.print.0.body"
        },
        {
          "title": "help.topic.print.1.title",
          "body": "help.topic.print.1.body"
        }
      ]
    },
    {
      "id": "appearance",
      "group": "preferences",
      "route": "settings",
      "title": "help.topic.appearance.title",
      "intro": "help.topic.appearance.intro",
      "tasks": [
        {
          "title": "help.topic.appearance.0.title",
          "body": "help.topic.appearance.0.body"
        },
        {
          "title": "help.topic.appearance.1.title",
          "body": "help.topic.appearance.1.body"
        }
      ]
    },
    {
      "id": "offline",
      "group": "preferences",
      "route": "settings",
      "title": "help.topic.offline.title",
      "intro": "help.topic.offline.intro",
      "tasks": [
        {
          "title": "help.topic.offline.0.title",
          "body": "help.topic.offline.0.body"
        },
        {
          "title": "help.topic.offline.1.title",
          "body": "help.topic.offline.1.body"
        },
        {
          "title": "help.topic.offline.2.title",
          "body": "help.topic.offline.2.body"
        }
      ]
    },
    {
      "id": "optional",
      "group": "preferences",
      "route": "questionnaire",
      "title": "help.topic.optional.title",
      "intro": "help.topic.optional.intro",
      "tasks": [
        {
          "title": "help.topic.optional.0.title",
          "body": "help.topic.optional.0.body"
        },
        {
          "title": "help.topic.optional.1.title",
          "body": "help.topic.optional.1.body"
        },
        {
          "title": "help.topic.optional.2.title",
          "body": "help.topic.optional.2.body"
        }
      ]
    },
    {
      "id": "troubleshoot",
      "group": "protect",
      "route": "backup",
      "title": "help.topic.troubleshoot.title",
      "intro": "help.topic.troubleshoot.intro",
      "tasks": [
        {
          "title": "help.topic.troubleshoot.0.title",
          "body": "help.topic.troubleshoot.0.body"
        },
        {
          "title": "help.topic.troubleshoot.1.title",
          "body": "help.topic.troubleshoot.1.body"
        },
        {
          "title": "help.topic.troubleshoot.2.title",
          "body": "help.topic.troubleshoot.2.body"
        },
        {
          "title": "help.topic.troubleshoot.3.title",
          "body": "help.topic.troubleshoot.3.body"
        }
      ]
    }
  ],
  "steps": [
    {
      "id": "choose",
      "title": "help.tour.choose.title",
      "instruction": "help.tour.choose.instruction",
      "why": "help.tour.choose.why",
      "expected": "help.tour.choose.expected",
      "control": "help.tour.choose.control"
    },
    {
      "id": "create",
      "title": "help.tour.create.title",
      "instruction": "help.tour.create.instruction",
      "why": "help.tour.create.why",
      "expected": "help.tour.create.expected",
      "control": "help.tour.create.control"
    },
    {
      "id": "import",
      "title": "help.tour.import.title",
      "instruction": "help.tour.import.instruction",
      "why": "help.tour.import.why",
      "expected": "help.tour.import.expected",
      "control": "help.tour.import.control"
    },
    {
      "id": "open",
      "title": "help.tour.open.title",
      "instruction": "help.tour.open.instruction",
      "why": "help.tour.open.why",
      "expected": "help.tour.open.expected",
      "control": "help.tour.open.control"
    },
    {
      "id": "identity",
      "title": "help.tour.identity.title",
      "instruction": "help.tour.identity.instruction",
      "why": "help.tour.identity.why",
      "expected": "help.tour.identity.expected",
      "control": "help.tour.identity.control"
    },
    {
      "id": "abilities",
      "title": "help.tour.abilities.title",
      "instruction": "help.tour.abilities.instruction",
      "why": "help.tour.abilities.why",
      "expected": "help.tour.abilities.expected",
      "control": "help.tour.abilities.control"
    },
    {
      "id": "vitals",
      "title": "help.tour.vitals.title",
      "instruction": "help.tour.vitals.instruction",
      "why": "help.tour.vitals.why",
      "expected": "help.tour.vitals.expected",
      "control": "help.tour.vitals.control"
    },
    {
      "id": "play",
      "title": "help.tour.play.title",
      "instruction": "help.tour.play.instruction",
      "why": "help.tour.play.why",
      "expected": "help.tour.play.expected",
      "control": "help.tour.play.control"
    },
    {
      "id": "dice",
      "title": "help.tour.dice.title",
      "instruction": "help.tour.dice.instruction",
      "why": "help.tour.dice.why",
      "expected": "help.tour.dice.expected",
      "control": "help.tour.dice.control"
    },
    {
      "id": "sections",
      "title": "help.tour.sections.title",
      "instruction": "help.tour.sections.instruction",
      "why": "help.tour.sections.why",
      "expected": "help.tour.sections.expected",
      "control": "help.tour.sections.control"
    },
    {
      "id": "export",
      "title": "help.tour.export.title",
      "instruction": "help.tour.export.instruction",
      "why": "help.tour.export.why",
      "expected": "help.tour.export.expected",
      "control": "help.tour.export.control"
    },
    {
      "id": "finish",
      "title": "help.tour.finish.title",
      "instruction": "help.tour.finish.instruction",
      "why": "help.tour.finish.why",
      "expected": "help.tour.finish.expected",
      "control": "help.tour.finish.control"
    }
  ],
  "strings": {
    "help.topic.start.title": [
      "Create, open & switch characters",
      "Charaktere erstellen, öffnen und wechseln"
    ],
    "help.topic.start.intro": [
      "Your Library is the collection in this browser, not a cloud account.",
      "Die Bibliothek ist die Sammlung in diesem Browser, kein Cloud-Konto."
    ],
    "help.topic.start.0.title": [
      "Create a blank character",
      "Einen leeren Charakter erstellen"
    ],
    "help.topic.start.0.body": [
      "In [[nav.library]], choose [[action.create]] → [[create.blank]]. Enter the identity you know, review [[field.level]] and [[field.rulesVersion]], then choose [[action.create]] in the form. The new record opens in [[edit.identity]]. This creates a real character; the walkthrough never creates one for you.",
      "Wähle in [[nav.library]] [[action.create]] → [[create.blank]]. Trage bekannte Angaben ein, prüfe [[field.level]] und [[field.rulesVersion]] und wähle im Formular [[action.create]]. Der neue Datensatz öffnet sich in [[edit.identity]]. Das ist ein echter Charakter; die Einführung erstellt keinen automatisch."
    ],
    "help.topic.start.1.title": [
      "Open or switch",
      "Öffnen oder wechseln"
    ],
    "help.topic.start.1.body": [
      "Choose [[folio.open]] on a Library card to reach [[nav.play]]. On a wide screen, [[nav.activeCharacter]] in the sidebar switches characters. On a phone, return to [[nav.library]] and open the other card. Changing screens first tries to save pending character edits; resolve a validation or save warning before leaving.",
      "Wähle auf einer Bibliothekskarte [[folio.open]], um [[nav.play]] zu öffnen. Auf breiten Bildschirmen wechselst du mit [[nav.activeCharacter]] in der Seitenleiste. Auf dem Handy öffnest du die andere Karte über [[nav.library]]. Ein Bildschirmwechsel versucht zuerst, ausstehende Änderungen zu speichern; behebe vorher Validierungs- oder Speicherfehler."
    ],
    "help.topic.start.2.title": [
      "Find a character",
      "Einen Charakter finden"
    ],
    "help.topic.start.2.body": [
      "Use [[library.search]] for name, species, class or campaign; use the campaign filter and sort controls to narrow the Library. No matches does not mean records were deleted: choose [[action.clear]] to remove the filters. Ctrl/Cmd+K opens [[nav.finder]] outside dialogs.",
      "Mit [[library.search]] suchst du nach Name, Spezies, Klasse oder Kampagne. Kampagnenfilter und Sortierung grenzen die Bibliothek ein. Keine Treffer bedeutet nicht, dass Daten gelöscht wurden: [[action.clear]] entfernt die Filter. Strg/Cmd+K öffnet [[nav.finder]] außerhalb von Dialogen."
    ],
    "help.topic.saving.title": [
      "Understand saving & local storage",
      "Speichern und lokalen Speicher verstehen"
    ],
    "help.topic.saving.intro": [
      "A saved browser record and an exported backup file are different things.",
      "Ein gespeicherter Browser-Datensatz und eine exportierte Sicherungsdatei sind nicht dasselbe."
    ],
    "help.topic.saving.0.title": [
      "Commit a character field",
      "Ein Charakterfeld übernehmen"
    ],
    "help.topic.saving.0.body": [
      "In the character editor, type a value, then leave the field or press Enter (except in multiline text). Checkboxes and selections commit on change. Derived values update from committed data. Escape cancels the active field edit. Watch the save-status control in the header; there is no whole-sheet Save button.",
      "Gib im Charaktereditor einen Wert ein und verlasse das Feld oder drücke Enter (nicht bei mehrzeiligem Text). Kontrollkästchen und Auswahllisten übernehmen Änderungen direkt. Abgeleitete Werte werden aus übernommenen Daten aktualisiert. Escape verwirft die aktuelle Feldbearbeitung. Beachte den Speicherstatus im Kopfbereich; es gibt keine globale Speichern-Schaltfläche."
    ],
    "help.topic.saving.1.title": [
      "Finish a form",
      "Ein Formular abschließen"
    ],
    "help.topic.saving.1.body": [
      "Item editors and document editors use [[action.save]]; creation, casting, importing and resting have their own named confirmation. Typing can retain a recoverable draft without applying it to the character. [[action.cancel]] or [[action.close]] does not mean a saved draft was erased. Look under [[backup.drafts]] to resume or explicitly discard it. Conditions and hit-dice spending inside their dialogs take effect immediately when their controls are used.",
      "Objekt- und Dokumenteditoren verwenden [[action.save]]; Erstellen, Wirken, Importieren und Rasten haben eigene Bestätigungen. Eingaben können als wiederherstellbarer Entwurf gespeichert sein, ohne den Charakter zu ändern. [[action.cancel]] oder [[action.close]] bedeutet nicht, dass ein Entwurf gelöscht wurde. Unter [[backup.drafts]] kannst du ihn fortsetzen oder ausdrücklich verwerfen. Zustände und ausgegebene Trefferwürfel wirken bereits beim Betätigen ihrer Steuerelemente im Dialog."
    ],
    "help.topic.saving.2.title": [
      "Keep an independent copy",
      "Eine unabhängige Kopie aufbewahren"
    ],
    "help.topic.saving.2.body": [
      "Records and media are local to this browser/profile and site. The application directory also scopes its Library. Another browser, profile, address, port or directory can show a different Library. Clearing site data, private browsing or storage eviction can lose records and local checkpoints. There is no implemented cloud sync or account-based recovery. Export a file with media and keep it outside browser storage.",
      "Datensätze und Medien liegen lokal in diesem Browserprofil und auf dieser Website. Auch das App-Verzeichnis grenzt die Bibliothek ab. Ein anderer Browser, ein anderes Profil, eine andere Adresse, ein anderer Port oder ein anderes Verzeichnis kann eine andere Bibliothek zeigen. Gelöschte Websitedaten, privates Surfen oder Speicherbereinigung können Datensätze und lokale Sicherungspunkte entfernen. Cloud-Synchronisierung und kontobasierte Wiederherstellung sind nicht implementiert. Exportiere eine Datei mit Medien und bewahre sie außerhalb des Browsers auf."
    ],
    "help.topic.import.title": [
      "Import a character safely",
      "Einen Charakter sicher importieren"
    ],
    "help.topic.import.intro": [
      "Preview first; adding copies is the default. You do not need to import to use a blank character.",
      "Zuerst prüfen: Standardmäßig werden Kopien hinzugefügt. Für einen leeren Charakter brauchst du keinen Import."
    ],
    "help.topic.import.0.title": [
      "Choose and preview",
      "Auswählen und prüfen"
    ],
    "help.topic.import.0.body": [
      "In [[nav.library]], choose [[action.import]], then [[action.chooseFile]] for a supported JSON file, or enter JSON in [[import.paste]]. Choose [[import.preview]]. Review characters, media, warnings and any normalization changes. A file selection or preview alone does not import characters. Files are limited to 70 MiB.",
      "Wähle in [[nav.library]] [[action.import]], dann [[action.chooseFile]] für eine unterstützte JSON-Datei, oder gib JSON unter [[import.paste]] ein. Wähle [[import.preview]]. Prüfe Charaktere, Medien, Warnungen und normalisierte Werte. Die Dateiauswahl oder Vorschau allein importiert nichts. Dateien dürfen höchstens 70 MiB groß sein."
    ],
    "help.topic.import.1.title": [
      "Add, then open",
      "Hinzufügen und anschließend öffnen"
    ],
    "help.topic.import.1.body": [
      "Leave [[import.operation]] at [[import.add]] for a separate copy. Acknowledge listed adjustments only after reviewing them. Choose [[action.import]] in the preview. Successful character import returns to [[nav.library]]; choose [[folio.open]] on the imported card. The original file is not changed. Supported character/library formats are recognized by the parser; an arbitrary PDF or website export is not a supported JSON character just because its extension is changed.",
      "Lasse [[import.operation]] auf [[import.add]], um eine getrennte Kopie zu erhalten. Bestätige angezeigte Anpassungen erst nach Prüfung. Wähle in der Vorschau [[action.import]]. Ein erfolgreicher Charakterimport führt zu [[nav.library]] zurück; öffne die importierte Karte mit [[folio.open]]. Die Originaldatei bleibt unverändert. Der Parser erkennt unterstützte Charakter- und Bibliotheksformate; ein beliebiges PDF oder Website-Export wird durch Umbenennen nicht zu unterstütztem JSON."
    ],
    "help.topic.import.2.title": [
      "Replace only deliberately",
      "Nur bewusst ersetzen"
    ],
    "help.topic.import.2.body": [
      "[[import.replace]] targets the named existing character. [[import.replaceLibrary]] is an advanced, destructive choice with an additional acknowledgement. Both retain confirmation and create a local checkpoint before replacement. Export an external backup first. Addon restoration is optional and restored addons remain disabled. For a campaign-map JSON file, first open a character and use [[map.import]] in [[nav.map]].",
      "[[import.replace]] ersetzt den ausgewählten vorhandenen Charakter. [[import.replaceLibrary]] ist eine erweiterte, destruktive Option mit zusätzlicher Bestätigung. Beide verlangen eine Bestätigung und legen vor dem Ersetzen einen lokalen Sicherungspunkt an. Exportiere vorher eine externe Sicherung. Die Wiederherstellung von Addons ist optional; wiederhergestellte Addons bleiben deaktiviert. Öffne für eine Kampagnenkarten-JSON zuerst einen Charakter und verwende [[map.import]] unter [[nav.map]]."
    ],
    "help.topic.library-actions.title": [
      "Duplicate or delete a character",
      "Einen Charakter duplizieren oder löschen"
    ],
    "help.topic.library-actions.intro": [
      "Use the More control on the intended Library card, not a different active character.",
      "Verwende das Menü der richtigen Bibliothekskarte, nicht das eines anderen aktiven Charakters."
    ],
    "help.topic.library-actions.0.title": [
      "Make a copy",
      "Eine Kopie erstellen"
    ],
    "help.topic.library-actions.0.body": [
      "On a Library card, choose [[nav.more]] → [[action.duplicate]]. A named copy is added immediately; it is not an unsaved preview. Its text can be edited independently. Existing immutable portrait/map assets may be shared internally until replaced.",
      "Wähle auf einer Bibliothekskarte [[nav.more]] → [[action.duplicate]]. Eine benannte Kopie wird sofort hinzugefügt; das ist keine ungespeicherte Vorschau. Ihr Text lässt sich unabhängig bearbeiten. Unveränderliche Porträt- und Kartenmedien können intern gemeinsam genutzt werden, bis sie ersetzt werden."
    ],
    "help.topic.library-actions.1.title": [
      "Delete with recovery in mind",
      "Mit Blick auf Wiederherstellung löschen"
    ],
    "help.topic.library-actions.1.body": [
      "Choose the card’s [[nav.more]] → [[action.delete]], read the named-character confirmation, then confirm only when certain. A local recovery checkpoint is created first. Library creation, duplication and deletion are not normal character [[action.undo]] actions. Use [[backup.checkpoints]] in [[nav.backup]] to preview recovery, preferably as new records. A checkpoint is not protection against clearing browser data.",
      "Wähle auf der Karte [[nav.more]] → [[action.delete]], lies die Bestätigung mit dem Charakternamen und bestätige nur bewusst. Zuvor wird ein lokaler Sicherungspunkt erstellt. Erstellen, Duplizieren und Löschen in der Bibliothek gehören nicht zum normalen [[action.undo]] des Charakters. Unter [[backup.checkpoints]] in [[nav.backup]] kannst du die Wiederherstellung prüfen, vorzugsweise als neue Datensätze. Ein Sicherungspunkt schützt nicht vor dem Löschen der Browserdaten."
    ],
    "help.topic.identity.title": [
      "Set identity & background",
      "Identität und Hintergrund festlegen"
    ],
    "help.topic.identity.intro": [
      "Start with information you know; Player Almanac is not an automatic class builder.",
      "Beginne mit bekannten Angaben; Player Almanac baut Klassen nicht automatisch auf."
    ],
    "help.topic.identity.0.title": [
      "Edit identity",
      "Identität bearbeiten"
    ],
    "help.topic.identity.0.body": [
      "Open a character, choose [[action.edit]] in its header or [[nav.more]] → [[nav.edit]], then [[edit.identity]]. Enter [[field.name]], [[field.species]], [[field.class]], [[field.campaign]], [[field.alignment]] and [[field.background]] as needed. Leave each field to commit it. Typing a class or background name does not populate its game statistics.",
      "Öffne einen Charakter und wähle [[action.edit]] im Kopfbereich oder [[nav.more]] → [[nav.edit]], dann [[edit.identity]]. Trage nach Bedarf [[field.name]], [[field.species]], [[field.class]], [[field.campaign]], [[field.alignment]] und [[field.background]] ein. Verlasse jedes Feld, um es zu übernehmen. Klassen- oder Hintergrundnamen tragen Spielwerte nicht automatisch ein."
    ],
    "help.topic.identity.1.title": [
      "Review a background package",
      "Ein Hintergrundpaket prüfen"
    ],
    "help.topic.identity.1.body": [
      "The background chooser is an optional, separate workflow. Review its edition-specific choices and proposed changes before applying it. A package can change proficiencies, equipment, coins, features, feats and backstory; 2024 choices may include ability increases. This is more than renaming [[field.background]]. Use [[action.undo]] for an applied character change.",
      "Die Hintergrundauswahl ist ein eigener, optionaler Ablauf. Prüfe editionsabhängige Auswahlmöglichkeiten und Änderungen vor der Übernahme. Ein Paket kann Übung, Ausrüstung, Münzen, Merkmale, Talente und Hintergrundgeschichte ändern; 2024 können Attributserhöhungen enthalten sein. Das geht über das Umbenennen von [[field.background]] hinaus. Übernommene Charakteränderungen lassen sich mit [[action.undo]] zurücknehmen."
    ],
    "help.topic.abilities.title": [
      "Enter abilities, skills & modifiers",
      "Attribute, Fertigkeiten und Modifikatoren eingeben"
    ],
    "help.topic.abilities.intro": [
      "Enter scores and training; the app derives the displayed bonuses from those entries.",
      "Trage Werte und Übung ein; daraus leitet die App die angezeigten Boni ab."
    ],
    "help.topic.abilities.0.title": [
      "Set scores and proficiency",
      "Werte und Übung festlegen"
    ],
    "help.topic.abilities.0.body": [
      "In [[nav.edit]] → [[edit.abilities]], enter each ability score (1–30), its saving-throw proficiency and any manual modifier. For skills, set proficiency/expertise and manual modifiers as appropriate. Expertise also selects proficiency; clearing proficiency clears expertise. These choices are manual, not inferred from your class text.",
      "Unter [[nav.edit]] → [[edit.abilities]] trägst du jeden Attributswert (1–30), Rettungswurfübung und manuelle Modifikatoren ein. Setze bei Fertigkeiten Übung/Expertise und Modifikatoren nach Bedarf. Expertise aktiviert auch Übung; ohne Übung wird Expertise entfernt. Diese Auswahl erfolgt manuell und wird nicht aus dem Klassentext abgeleitet."
    ],
    "help.topic.abilities.1.title": [
      "Understand the calculated values",
      "Berechnete Werte verstehen"
    ],
    "help.topic.abilities.1.body": [
      "Ability modifier = floor((score − 10) / 2). Proficiency bonus follows [[field.level]]. Saving throws add ability modifier, selected proficiency and the manual modifier. Skills add ability modifier, selected proficiency (twice for expertise) and their manual modifier. [[play.passive]] is 10 + the Perception bonus. [[play.initiative]] uses the Dexterity modifier. Conditions and exhaustion do not automatically alter these numbers or roll mode.",
      "Attributsmodifikator = abgerundet (Wert − 10) / 2. Der Übungsbonus folgt [[field.level]]. Rettungswürfe addieren Attributsmodifikator, gewählte Übung und manuellen Modifikator. Fertigkeiten addieren Attributsmodifikator, gewählte Übung (doppelt bei Expertise) und manuellen Modifikator. [[play.passive]] ist 10 + Wahrnehmungsbonus. [[play.initiative]] verwendet Geschicklichkeit. Zustände und Erschöpfung ändern diese Zahlen oder den Würfelmodus nicht automatisch."
    ],
    "help.topic.vitals.title": [
      "Configure HP, defenses & rules",
      "Trefferpunkte, Verteidigung und Regeln einstellen"
    ],
    "help.topic.vitals.intro": [
      "Set the values your character actually has; defaults are not a completed build.",
      "Trage die tatsächlichen Charakterwerte ein; Standardwerte sind kein fertiger Charakter."
    ],
    "help.topic.vitals.0.title": [
      "Enter the essentials",
      "Die wichtigsten Werte eingeben"
    ],
    "help.topic.vitals.0.body": [
      "In [[nav.edit]] → [[edit.vitals]], review [[field.level]], [[field.rulesVersion]], [[field.ac]], [[field.speed]], [[field.hp.max]] and [[field.hp.cur]]. Enter [[field.hp.tmp]] only when needed. Armor Class, speed and HP are manual: equipment, class text or ability scores do not calculate them. Healing on [[nav.play]] is unavailable while Maximum HP is zero.",
      "Prüfe unter [[nav.edit]] → [[edit.vitals]] [[field.level]], [[field.rulesVersion]], [[field.ac]], [[field.speed]], [[field.hp.max]] und [[field.hp.cur]]. Trage [[field.hp.tmp]] nur bei Bedarf ein. Rüstungsklasse, Bewegungsrate und TP sind manuell: Ausrüstung, Klassentext und Attribute berechnen sie nicht. Heilung unter [[nav.play]] ist bei maximalen TP von null nicht verfügbar."
    ],
    "help.topic.vitals.1.title": [
      "Review hit dice and overrides",
      "Trefferwürfel und Ausnahmen prüfen"
    ],
    "help.topic.vitals.1.body": [
      "Changing [[field.level]] updates [[field.hd.max]] to that level and caps spent hit dice at the new total. Review [[field.hd.die]], [[field.hd.spent]] and any intentional total override afterward. Review long-rest HP/hit-dice recovery settings yourself; changing an existing character’s edition does not rewrite those overrides. Spell slot totals are also manual.",
      "Eine Änderung von [[field.level]] setzt [[field.hd.max]] auf diese Stufe und begrenzt ausgegebene Trefferwürfel auf die neue Gesamtzahl. Prüfe danach [[field.hd.die]], [[field.hd.spent]] und gewollte Ausnahmen bei der Gesamtzahl. Prüfe die TP- und Trefferwürfelregeneration bei langer Rast selbst; ein Editionswechsel schreibt vorhandene Ausnahmen nicht um. Auch Zauberplatz-Gesamtzahlen sind manuell."
    ],
    "help.topic.portrait.title": [
      "Add & frame a portrait",
      "Ein Porträt hinzufügen und ausrichten"
    ],
    "help.topic.portrait.intro": [
      "Portrait media is stored locally with a reference in the character.",
      "Porträtmedien werden lokal gespeichert und im Charakter referenziert."
    ],
    "help.topic.portrait.0.title": [
      "Choose or replace media",
      "Medien wählen oder ersetzen"
    ],
    "help.topic.portrait.0.body": [
      "In [[nav.edit]] → [[edit.identity]], use [[portrait.upload]]. Choose a supported image (PNG, JPEG, WebP, GIF, AVIF or BMP) or MP4/WebM video, up to 50 MiB. A valid selected file replaces the portrait after it is stored; there is no extra Save form. Keep the original media file externally as well.",
      "Verwende unter [[nav.edit]] → [[edit.identity]] [[portrait.upload]]. Wähle ein unterstütztes Bild (PNG, JPEG, WebP, GIF, AVIF oder BMP) oder MP4/WebM-Video bis 50 MiB. Eine gültige Datei ersetzt das Porträt nach dem Speichern; es gibt kein zusätzliches Speichern-Formular. Bewahre auch die Originalmediendatei extern auf."
    ],
    "help.topic.portrait.1.title": [
      "Adjust the frame",
      "Den Ausschnitt anpassen"
    ],
    "help.topic.portrait.1.body": [
      "Use [[folio.zoom]], [[folio.horizontal]] and [[folio.vertical]] to adjust the crop; leave each field to commit it. [[action.remove]] requires confirmation. Replacement/removal can be reversed through character history while that history and media remain available. Reduced motion and Lite mode pause decorative video. A missing-media warning preserves the reference but cannot recreate a lost file: restore an export containing it or choose the source file again.",
      "Passe den Ausschnitt mit [[folio.zoom]], [[folio.horizontal]] und [[folio.vertical]] an und verlasse jedes Feld zur Übernahme. [[action.remove]] verlangt eine Bestätigung. Ersetzen und Entfernen sind über den Charakterverlauf umkehrbar, solange Verlauf und Medien vorhanden sind. Reduzierte Bewegung und Lite-Modus pausieren dekorative Videos. Eine Warnung vor fehlenden Medien behält die Referenz, erzeugt aber keine verlorene Datei neu: Stelle einen Export mit Medien wieder her oder wähle die Originaldatei erneut."
    ],
    "help.topic.attacks.title": [
      "Prepare attacks, features & feats",
      "Angriffe, Merkmale und Talente vorbereiten"
    ],
    "help.topic.attacks.intro": [
      "Recorded descriptions and modifiers are player-authored; they are not a rules engine.",
      "Beschreibungen und Modifikatoren stammen von dir; sie sind keine automatische Regelverarbeitung."
    ],
    "help.topic.attacks.0.title": [
      "Add an attack",
      "Einen Angriff hinzufügen"
    ],
    "help.topic.attacks.0.body": [
      "In [[nav.edit]] → [[edit.attacks]], create a custom attack or select entries from the weapon catalogue. Save the attack’s name, attack bonus, damage expression and notes. Review catalogue entries after adding them. The attack bonus is manual; rolling uses the first signed integer found in that stored bonus, not a bonus rebuilt from your class or ability scores.",
      "Erstelle unter [[nav.edit]] → [[edit.attacks]] einen eigenen Angriff oder wähle Einträge aus dem Waffenkatalog. Speichere Name, Angriffsbonus, Schadensausdruck und Notizen. Prüfe hinzugefügte Katalogeinträge. Der Angriffsbonus ist manuell; gewürfelt wird mit der ersten vorzeichenbehafteten Ganzzahl im gespeicherten Bonus, nicht mit einem aus Klasse oder Attributen neu berechneten Bonus."
    ],
    "help.topic.attacks.1.title": [
      "Record features and feats",
      "Merkmale und Talente notieren"
    ],
    "help.topic.attacks.1.body": [
      "In [[nav.edit]] → [[edit.features]], add or edit descriptions and [[field.traits]], then use [[action.save]] in item dialogs. Rest-reset choices are reminders only. Uses written in a description are not counters and do not reset automatically. Removal asks for confirmation. Read these entries on [[nav.play]].",
      "Ergänze unter [[nav.edit]] → [[edit.features]] Beschreibungen und [[field.traits]]; übernimm Objektdialoge mit [[action.save]]. Rast-Rücksetzungen dienen nur als Erinnerung. Anwendungen in Beschreibungstexten sind keine Zähler und setzen sich nicht automatisch zurück. Entfernen verlangt eine Bestätigung. Auf [[nav.play]] kannst du diese Einträge lesen."
    ],
    "help.topic.spellsetup.title": [
      "Set up spellcasting & slots",
      "Zauberwirken und Zauberplätze einrichten"
    ],
    "help.topic.spellsetup.intro": [
      "Choose the casting ability and enter your own slot totals before recording casts.",
      "Wähle das Zauberattribut und trage deine Zauberplatz-Gesamtzahlen ein, bevor du Wirken protokollierst."
    ],
    "help.topic.spellsetup.0.title": [
      "Set casting values",
      "Zauberwerte festlegen"
    ],
    "help.topic.spellsetup.0.body": [
      "In [[nav.edit]] → [[edit.spellsetup]], choose [[field.spellAb]]. Spell attack uses its modifier + proficiency bonus. Spell save DC is 8 + those values unless [[field.spellDcOverride]] contains a manual number. Leave the override empty to calculate again. Choosing no ability disables the spell-attack roll control.",
      "Wähle unter [[nav.edit]] → [[edit.spellsetup]] [[field.spellAb]]. Der Zauberangriff verwendet dessen Modifikator + Übungsbonus. Der Zauberrettungswurf-SG beträgt 8 + diese Werte, sofern [[field.spellDcOverride]] keinen manuellen Wert enthält. Leere das Ausnahmefeld, um wieder zu berechnen. Ohne Attribut ist der Zauberangriff-Würfelknopf deaktiviert."
    ],
    "help.topic.spellsetup.1.title": [
      "Enter slots, do not infer them",
      "Zauberplätze eingeben statt ableiten"
    ],
    "help.topic.spellsetup.1.body": [
      "For each slot level 1–9, enter total and spent (0–9). Spent cannot exceed total; lowering a total caps spent at that total. Class names and character levels do not fill slot progression. Once configured, [[nav.spells]] shows usable slot controls; recording a cast or spending/restoring one slot adjusts spent, and a recorded long rest resets spent slots.",
      "Trage für jeden Zaubergrad 1–9 Gesamtzahl und verbrauchte Plätze (0–9) ein. Verbrauchte dürfen die Gesamtzahl nicht überschreiten; eine niedrigere Gesamtzahl begrenzt den Verbrauch entsprechend. Klassenname und Charakterstufe tragen keine Zauberplatzprogression ein. Nach der Einrichtung zeigt [[nav.spells]] nutzbare Platz-Steuerungen. Protokolliertes Wirken oder Verbrauch/Wiederherstellung eines Platzes ändern den Verbrauch; eine protokollierte lange Rast setzt ihn zurück."
    ],
    "help.topic.hp.title": [
      "Track HP & conditions during play",
      "TP und Zustände im Spiel verwalten"
    ],
    "help.topic.hp.intro": [
      "Use the real controls only when their changes belong on this character.",
      "Verwende die echten Steuerungen nur, wenn ihre Änderungen zu diesem Charakter gehören."
    ],
    "help.topic.hp.0.title": [
      "Apply damage or healing",
      "Schaden oder Heilung anwenden"
    ],
    "help.topic.hp.0.body": [
      "On [[nav.play]], enter a positive [[play.amount]], then choose [[play.damage]] or [[play.heal]]. Damage consumes temporary HP first, then reduces current HP to no lower than zero. Healing adds to current HP up to Maximum HP; it does not lower an already over-maximum value. These buttons save a character action immediately. [[action.undo]] reverses the action. They do not determine damage from armor or resistance.",
      "Gib auf [[nav.play]] einen positiven Wert in [[play.amount]] ein und wähle [[play.damage]] oder [[play.heal]]. Schaden verbraucht zuerst temporäre TP, danach sinken aktuelle TP bis mindestens null. Heilung erhöht aktuelle TP bis zum Maximum; bereits überhöhte Werte werden nicht gesenkt. Die Schaltflächen speichern sofort eine Charakteraktion. [[action.undo]] macht sie rückgängig. Rüstung oder Resistenz berechnen den Schaden nicht."
    ],
    "help.topic.hp.1.title": [
      "Set temporary HP",
      "Temporäre TP setzen"
    ],
    "help.topic.hp.1.body": [
      "Open the [[field.hp.tmp]] control in the HP area, enter the intended total and choose [[action.save]]. This replaces the temporary-HP value; it does not add the new amount to the old one. Maximum HP is edited under [[edit.vitals]], not increased by Heal.",
      "Öffne [[field.hp.tmp]] im TP-Bereich, gib die gewünschte Gesamtzahl ein und wähle [[action.save]]. Der Wert wird ersetzt; die neue Zahl wird nicht auf die alte addiert. Maximale TP bearbeitest du unter [[edit.vitals]]; Heilung erhöht sie nicht."
    ],
    "help.topic.hp.2.title": [
      "Record a condition",
      "Einen Zustand festhalten"
    ],
    "help.topic.hp.2.body": [
      "Open [[play.addCondition]] and select or clear conditions. Each checkbox saves immediately; closing the dialog is not cancellation. Use an active condition to add a [[play.conditionNote]]. Removing a condition retains its note for later. Conditions and [[field.exhaustionLevel]] are reminders: choose roll mode and any applicable manual adjustments yourself.",
      "Öffne [[play.addCondition]] und aktiviere oder entferne Zustände. Jedes Kontrollkästchen speichert direkt; das Schließen des Dialogs verwirft diese Änderung nicht. Über einen aktiven Zustand ergänzt du [[play.conditionNote]]. Beim Entfernen bleibt die Notiz erhalten. Zustände und [[field.exhaustionLevel]] sind Erinnerungen: Würfelmodus und nötige manuelle Anpassungen wählst du selbst."
    ],
    "help.topic.dice.title": [
      "Make checks, saves & dice rolls",
      "Proben, Rettungswürfe und Würfelwürfe"
    ],
    "help.topic.dice.intro": [
      "Ordinary rolls record results; they do not apply damage or spend character resources.",
      "Normale Würfe protokollieren Ergebnisse; sie wenden keinen Schaden an und verbrauchen keine Ressourcen."
    ],
    "help.topic.dice.0.title": [
      "Roll a check or saving throw",
      "Eine Probe oder einen Rettungswurf würfeln"
    ],
    "help.topic.dice.0.body": [
      "On [[nav.play]], use the named check/save controls in [[play.checks]]; expand [[play.skills]] for skills. [[play.initiative]] also rolls. Choose the normal/advantage/disadvantage roll mode before rolling a d20 action. It applies to checks, saves, initiative and attack rolls, not to an arbitrary typed dice expression. Read the result and log; apply any game consequences yourself.",
      "Verwende auf [[nav.play]] die benannten Probe-/Rettungswurf-Steuerungen in [[play.checks]]; klappe [[play.skills]] für Fertigkeiten auf. Auch [[play.initiative]] würfelt. Wähle vor einem W20-Wurf normal, Vorteil oder Nachteil. Das gilt für Proben, Rettungswürfe, Initiative und Angriffe, nicht für frei eingegebene Würfelausdrücke. Lies Ergebnis und Verlauf; setze Spielauswirkungen selbst um."
    ],
    "help.topic.dice.1.title": [
      "Use the dice tray",
      "Den Würfelbereich nutzen"
    ],
    "help.topic.dice.1.body": [
      "Choose [[play.dice]], enter a dice expression such as 1d20 or 2d6+3, and choose [[dice.roll]] or press Enter. The d4–d100 shortcuts roll immediately. For a recorded attack, [[play.attack]] rolls its manual attack bonus; [[play.damageRoll]] rolls its written expression. Neither action changes anyone’s HP. Invalid expressions show an error rather than a fabricated result.",
      "Wähle [[play.dice]], gib einen Würfelausdruck wie 1d20 oder 2d6+3 ein und wähle [[dice.roll]] oder drücke Enter. Die d4–d100-Kürzel würfeln sofort. Bei einem eingetragenen Angriff würfelt [[play.attack]] mit dessen manuellem Bonus; [[play.damageRoll]] würfelt den gespeicherten Ausdruck. Keiner dieser Würfe ändert TP. Ungültige Ausdrücke zeigen einen Fehler statt eines erfundenen Ergebnisses."
    ],
    "help.topic.dice.2.title": [
      "Read roll history",
      "Den Würfelverlauf lesen"
    ],
    "help.topic.dice.2.body": [
      "Recent rolls appear on [[nav.play]] and in the dice dialog. The display is limited (8 on [[nav.play]], 15 in the dialog). Results can be saved separately from character edits; a session-only label means that result is not durably stored. Ordinary rolls are not removed by character Undo. Undoing a hit-dice or concentration transaction marks its associated roll as undone; redo reuses the recorded outcome rather than rerolling.",
      "Letzte Würfe erscheinen auf [[nav.play]] und im Würfeldialog. Die Anzeige ist begrenzt (8 auf [[nav.play]], 15 im Dialog). Ergebnisse werden getrennt von Charakteränderungen gespeichert; eine Sitzungskennzeichnung bedeutet, dass der Wurf nicht dauerhaft gespeichert ist. Normale Würfe verschwinden nicht durch Charakter-Rückgängig. Wird eine Trefferwürfel- oder Konzentrationsaktion rückgängig gemacht, wird ihr Wurf entsprechend markiert; Wiederholen nutzt das vorhandene Ergebnis statt neu zu würfeln."
    ],
    "help.topic.rest.title": [
      "Rest, concentrate & track death saves",
      "Rasten, Konzentration und Todesrettungswürfe"
    ],
    "help.topic.rest.intro": [
      "These controls record selected effects, not every rule of a rest or condition.",
      "Diese Steuerungen erfassen ausgewählte Effekte, nicht jede Regel einer Rast oder eines Zustands."
    ],
    "help.topic.rest.0.title": [
      "Spend hit dice",
      "Trefferwürfel ausgeben"
    ],
    "help.topic.rest.0.body": [
      "Open [[play.rest]] → [[rest.short]], set [[rest.count]], then choose [[rest.spend]]. This immediately spends available hit dice and rolls healing, capped by Maximum HP. It uses the configured hit die, Constitution and rules edition. Closing the rest dialog does not cancel this action. [[rest.reminders]] are reminders only; custom use counts are not reset.",
      "Öffne [[play.rest]] → [[rest.short]], setze [[rest.count]] und wähle [[rest.spend]]. Verfügbare Trefferwürfel werden sofort ausgegeben; gewürfelte Heilung wird durch maximale TP begrenzt. Verwendet werden eingestellter Trefferwürfel, Konstitution und Regeledition. Das Schließen verwirft diese Aktion nicht. [[rest.reminders]] sind nur Erinnerungen; eigene Anwendungszahlen werden nicht zurückgesetzt."
    ],
    "help.topic.rest.1.title": [
      "Record a long rest",
      "Eine lange Rast protokollieren"
    ],
    "help.topic.rest.1.body": [
      "Open [[rest.long]] and review the displayed recovery settings before choosing [[rest.confirm]]. The recorded action applies the configured HP and hit-dice recovery, resets spent spell slots, clears temporary HP and death-save counters, and ends concentration. It does not clear conditions or exhaustion or rewrite feature descriptions/use counts. Override rest rules in [[edit.vitals]] when your table needs different HP/hit-dice recovery.",
      "Öffne [[rest.long]] und prüfe die Regenerationseinstellungen vor [[rest.confirm]]. Die Aktion wendet eingestellte TP- und Trefferwürfelregeneration an, setzt verbrauchte Zauberplätze zurück, entfernt temporäre TP und Todesrettungswurf-Zähler und beendet Konzentration. Sie entfernt weder Zustände noch Erschöpfung und schreibt keine Merkmalsbeschreibungen oder Anwendungszahlen um. Passe TP-/Trefferwürfel-Rastregeln bei Bedarf unter [[edit.vitals]] an."
    ],
    "help.topic.rest.2.title": [
      "Manage concentration",
      "Konzentration verwalten"
    ],
    "help.topic.rest.2.body": [
      "Set concentration in [[edit.vitals]] or track it while recording a spell cast. [[play.endConcentration]] ends it immediately. Enable [[field.concentration.promptOnDamage]] for a prompt after damage: the damage has already been applied when the prompt opens. Rolling the concentration check uses the Constitution saving-throw bonus; failure ends concentration. Closing the prompt is not an undo of damage.",
      "Setze Konzentration unter [[edit.vitals]] oder beim Protokollieren eines Zaubers. [[play.endConcentration]] beendet sie sofort. Aktiviere [[field.concentration.promptOnDamage]] für eine Nachfrage nach Schaden: Dieser ist beim Öffnen bereits angewendet. Der Konzentrationswurf nutzt den Konstitutionsrettungswurf-Bonus; Misslingen beendet die Konzentration. Das Schließen macht Schaden nicht rückgängig."
    ],
    "help.topic.rest.3.title": [
      "Track death-save results",
      "Todesrettungswürfe festhalten"
    ],
    "help.topic.rest.3.body": [
      "The Play death-save area appears at Current HP 0 when Maximum HP is above 0. Use the [[play.success]] and [[play.failure]] controls to record results (0–3 each). They are manual counters, not automatic death-save rolls or a full dying/stabilization rules engine. Healing does not clear the counters automatically; review them yourself or use a recorded long rest.",
      "Der Todesrettungswurf-Bereich auf [[nav.play]] erscheint bei aktuellen TP 0 und maximalen TP über 0. Trage Ergebnisse mit [[play.success]] und [[play.failure]] ein (je 0–3). Das sind manuelle Zähler, keine automatischen Todesrettungswürfe oder vollständigen Sterben-/Stabilisierungsregeln. Heilung löscht die Zähler nicht automatisch; prüfe sie selbst oder protokolliere eine lange Rast."
    ],
    "help.topic.spells.title": [
      "Manage spells & record casts",
      "Zauber verwalten und Wirken protokollieren"
    ],
    "help.topic.spells.intro": [
      "The spellbook holds your entries. Recording a cast tracks selected resources only.",
      "Das Zauberbuch enthält deine Einträge. Protokolliertes Wirken erfasst nur ausgewählte Ressourcen."
    ],
    "help.topic.spells.0.title": [
      "Build and browse the spellbook",
      "Das Zauberbuch aufbauen und durchsuchen"
    ],
    "help.topic.spells.0.body": [
      "In [[nav.spells]], use [[spells.add]] for the catalogue or [[picker.custom]] for your own entry. Review edition and details; save custom edits with [[action.save]]. Search and filter by level, preparation, concentration or ritual; change sort as needed. Select a spell’s name for details. The prepared checkbox commits immediately; spell preparation is not inferred from class or level.",
      "Verwende unter [[nav.spells]] [[spells.add]] für den Katalog oder [[picker.custom]] für eigene Einträge. Prüfe Edition und Details; übernimm eigene Änderungen mit [[action.save]]. Suche und filtere nach Grad, Vorbereitung, Konzentration oder Ritual und ändere bei Bedarf die Sortierung. Der Zaubername öffnet Details. Das Vorbereitet-Kästchen speichert sofort; Vorbereitung wird nicht aus Klasse oder Stufe abgeleitet."
    ],
    "help.topic.spells.1.title": [
      "Record a cast deliberately",
      "Wirken bewusst protokollieren"
    ],
    "help.topic.spells.1.body": [
      "Choose [[spells.cast]]. Review whether to spend a slot and select an available level, or state a no-slot reason (cantrip, ritual or a written other reason). Choose whether to track concentration; replacing existing concentration needs the displayed acknowledgement. Confirm with [[spells.cast]]. This spends the selected single slot and optionally changes concentration; it does not roll damage, enforce components or apply spell effects.",
      "Wähle [[spells.cast]]. Prüfe, ob ein Platz verbraucht werden soll, und wähle einen verfügbaren Grad oder gib einen Grund ohne Platz an (Zaubertrick, Ritual oder anderer schriftlicher Grund). Wähle, ob Konzentration erfasst wird; bestehende Konzentration zu ersetzen verlangt die angezeigte Bestätigung. Bestätige mit [[spells.cast]]. Ein ausgewählter Platz wird verbraucht und optional Konzentration geändert; Schaden, Komponenten oder Zaubereffekte werden nicht umgesetzt."
    ],
    "help.topic.spells.2.title": [
      "Adjust resources and review changes",
      "Ressourcen anpassen und Änderungen prüfen"
    ],
    "help.topic.spells.2.body": [
      "Use the named spend/restore controls beside a configured slot level to change spent by one. They do not change the slot total. For totals or unavailable levels, open [[edit.spellsetup]]. Catalogue-enhancement review is optional: inspect its before/after changes before applying them. Removal requires confirmation; committed spell changes participate in character Undo.",
      "Mit den benannten Verbrauchs-/Wiederherstellungssteuerungen neben einem eingerichteten Zaubergrad änderst du den Verbrauch um eins, nicht die Gesamtzahl. Für Gesamtzahlen oder fehlende Grade öffne [[edit.spellsetup]]. Katalogergänzungen sind optional: Prüfe Vorher/Nachher vor der Übernahme. Entfernen verlangt Bestätigung; übernommene Zauberänderungen gehören zum Charakterverlauf."
    ],
    "help.topic.gear.title": [
      "Track equipment, attunement & money",
      "Ausrüstung, Einstimmung und Geld erfassen"
    ],
    "help.topic.gear.intro": [
      "Inventory entries are text records, not automatic armor or encumbrance calculations.",
      "Inventareinträge sind Text, keine automatischen Rüstungs- oder Traglastberechnungen."
    ],
    "help.topic.gear.0.title": [
      "Add or edit equipment",
      "Ausrüstung hinzufügen oder bearbeiten"
    ],
    "help.topic.gear.0.body": [
      "Open [[nav.gear]]. Add equipment or attunement entries, type the text, then choose [[action.save]]. Use the equipment catalogue as an optional starting point and review added entries. Search each list; edit through its item controls. Removing an entry asks for confirmation. Quantities, weight, charges, equipped state and attunement limits are not enforced automatically.",
      "Öffne [[nav.gear]]. Füge Ausrüstungs- oder Einstimmungseinträge hinzu, schreibe den Text und wähle [[action.save]]. Der Ausrüstungskatalog ist ein optionaler Ausgangspunkt; prüfe hinzugefügte Einträge. Durchsuche die Listen und bearbeite Objekte über deren Steuerungen. Entfernen verlangt Bestätigung. Mengen, Gewicht, Ladungen, Ausrüstungsstatus und Einstimmungsgrenzen werden nicht automatisch verwaltet."
    ],
    "help.topic.gear.1.title": [
      "Update coins and training",
      "Münzen und Ausbildung aktualisieren"
    ],
    "help.topic.gear.1.body": [
      "Enter each coin denomination separately and leave its field to save. There is no automatic currency conversion or purchase deduction. Review armor training, [[field.wpnProf]], [[field.toolProf]] and [[field.langs]] in the training area. These text/training records do not automatically recalculate Armor Class or attack bonuses.",
      "Trage jede Münzsorte einzeln ein und verlasse das Feld zum Speichern. Es gibt keine automatische Währungsumrechnung oder Abbuchung bei Käufen. Prüfe Rüstungsausbildung, [[field.wpnProf]], [[field.toolProf]] und [[field.langs]] im Ausbildungsbereich. Diese Einträge berechnen Rüstungsklasse oder Angriffsboni nicht automatisch neu."
    ],
    "help.topic.journal.title": [
      "Write backstory & session notes",
      "Hintergrundgeschichte und Sitzungsnotizen schreiben"
    ],
    "help.topic.journal.intro": [
      "The Journal contains editable documents rather than a list of dated entries.",
      "Das Tagebuch enthält bearbeitbare Dokumente, keine Liste datierter Einträge."
    ],
    "help.topic.journal.0.title": [
      "Write and save a document",
      "Ein Dokument schreiben und speichern"
    ],
    "help.topic.journal.0.body": [
      "In [[nav.journal]], choose [[action.edit]] for [[field.backstory]] or [[field.notes]]. Write in the dialog and choose [[action.save]] to apply the text. A retained draft is not yet the displayed document. To keep multiple sessions, add your own date headings inside Session notes.",
      "Wähle unter [[nav.journal]] [[action.edit]] für [[field.backstory]] oder [[field.notes]]. Schreibe im Dialog und übernimm mit [[action.save]]. Ein gespeicherter Entwurf ist noch nicht das angezeigte Dokument. Ergänze für mehrere Sitzungen eigene Datumsüberschriften in den Sitzungsnotizen."
    ],
    "help.topic.journal.1.title": [
      "Use optional Fateweaving",
      "Optionales Fateweaving verwenden"
    ],
    "help.topic.journal.1.body": [
      "Enable [[journal.showFate]] to read/edit [[field.thread]], [[field.fateNotes]], [[field.fateRewards]], [[field.curse]] and the three boon documents. Visibility is remembered per character. Hiding the module does not delete its content or remove it from exports; full printing has a separate inclusion setting.",
      "Aktiviere [[journal.showFate]], um [[field.thread]], [[field.fateNotes]], [[field.fateRewards]], [[field.curse]] und die drei Segen-Dokumente zu lesen/bearbeiten. Die Sichtbarkeit wird je Charakter gespeichert. Ausblenden löscht keine Inhalte und entfernt sie nicht aus Exporten; vollständiger Druck hat eine eigene Einschlussoption."
    ],
    "help.topic.maps.title": [
      "Add a map & navigate it",
      "Eine Karte hinzufügen und navigieren"
    ],
    "help.topic.maps.intro": [
      "Maps belong to the selected character. Map tools appear only after a map exists.",
      "Karten gehören zum ausgewählten Charakter. Kartenwerkzeuge erscheinen erst, wenn eine Karte existiert."
    ],
    "help.topic.maps.0.title": [
      "Add or import",
      "Hinzufügen oder importieren"
    ],
    "help.topic.maps.0.body": [
      "Open [[nav.map]] in the sidebar, or [[nav.more]] → [[nav.map]] on a phone. Choose [[map.add]], select a local image, name it and choose [[action.save]]. Map images are limited to 10 MiB and 20,000 pixels per dimension. [[map.import]] previews a campaign-map JSON and asks you to import it; existing campaigns are retained. Use [[map.title]] to switch among maps.",
      "Öffne [[nav.map]] in der Seitenleiste oder auf dem Handy [[nav.more]] → [[nav.map]]. Wähle [[map.add]], wähle ein lokales Bild, benenne es und verwende [[action.save]]. Kartenbilder dürfen höchstens 10 MiB und 20.000 Pixel je Dimension haben. [[map.import]] zeigt eine Kampagnenkarten-JSON zur Prüfung und bestätigt den Import; vorhandene Kampagnen bleiben erhalten. Über [[map.title]] wechselst du die Karte."
    ],
    "help.topic.maps.1.title": [
      "Navigate without changing records",
      "Navigieren ohne Datensatzänderung"
    ],
    "help.topic.maps.1.body": [
      "With [[map.tool.select]], drag to pan; use [[map.zoomIn]], [[map.zoomOut]] and [[map.fit]]. Pinch or Ctrl/Cmd+wheel also changes zoom. View zoom and panning do not edit marker coordinates or recalibrate distances. Open [[map.inspector]] for accessible lists and filtering rather than relying only on the image.",
      "Ziehe mit [[map.tool.select]] zum Verschieben; verwende [[map.zoomIn]], [[map.zoomOut]] und [[map.fit]]. Pinch oder Strg/Cmd+Mausrad ändert ebenfalls den Zoom. Ansichtszoom und Verschieben bearbeiten keine Markerkoordinaten und kalibrieren keine Entfernung. Öffne [[map.inspector]] für zugängliche Listen und Filter statt nur das Bild zu verwenden."
    ],
    "help.topic.maps.2.title": [
      "Manage or export a map",
      "Eine Karte verwalten oder exportieren"
    ],
    "help.topic.maps.2.body": [
      "Open [[map.manage]] for rename, [[map.changeImage]], [[map.export]] and removal. A replacement image retains normalized pins/routes; it clears scale unless you explicitly choose [[map.keepScale]]. Removal is confirmed and undoable as a character action. Export prepares a campaign JSON, with a warning if media is missing. A missing image warning preserves geometry/reference, not the lost image itself.",
      "Öffne [[map.manage]] für Umbenennen, [[map.changeImage]], [[map.export]] und Entfernen. Ein Ersatzbild behält normalisierte Pins/Routen; die Kalibrierung wird gelöscht, sofern du nicht ausdrücklich [[map.keepScale]] wählst. Entfernen verlangt Bestätigung und ist als Charakteraktion umkehrbar. Export erstellt Kampagnen-JSON mit Warnung bei fehlenden Medien. Eine Warnung vor fehlendem Bild bewahrt Geometrie/Referenz, nicht das verlorene Bild."
    ],
    "help.topic.map-tools.title": [
      "Place pins, draw routes & calibrate",
      "Pins setzen, Routen zeichnen und kalibrieren"
    ],
    "help.topic.map-tools.intro": [
      "You can enter positions by keyboard; pointing at the map is optional for editing.",
      "Positionen lassen sich per Tastatur eingeben; zum Bearbeiten ist Zeigen auf die Karte nicht zwingend."
    ],
    "help.topic.map-tools.0.title": [
      "Place or move a marker",
      "Einen Marker setzen oder bewegen"
    ],
    "help.topic.map-tools.0.body": [
      "Choose [[map.tool.pin]] and select a position, or use [[map.addPin]] in [[map.manage]]. Name the pin and review type, notes and optional linked character, then [[action.save]]. [[map.horizontal]] and [[map.vertical]] are percentages. Select an existing marker to inspect/edit it. Tab to a marker and press Enter to inspect; arrow keys move it, Shift+arrow moves farther. Dragging or arrow movement saves the position. Review [[map.origin]] and [[map.token]] through their own forms; [[map.locked]] prevents token movement.",
      "Wähle [[map.tool.pin]] und eine Position oder [[map.addPin]] unter [[map.manage]]. Benenne den Pin, prüfe Typ, Notizen und optional verknüpften Charakter und wähle [[action.save]]. [[map.horizontal]] und [[map.vertical]] sind Prozentwerte. Wähle vorhandene Marker zum Prüfen/Bearbeiten. Mit Tab erreichst du Marker, Enter öffnet Details; Pfeiltasten bewegen sie, Umschalt+Pfeil stärker. Ziehen und Pfeiltasten speichern die Position. Bearbeite [[map.origin]] und [[map.token]] in ihren Formularen; [[map.locked]] verhindert Token-Bewegung."
    ],
    "help.topic.map-tools.1.title": [
      "Record a route",
      "Eine Route erfassen"
    ],
    "help.topic.map-tools.1.body": [
      "Choose [[map.tool.route]] and select points, then [[map.manage]] → [[map.addRoute]] to review and save. Alternatively enter [[map.points]] directly: one x%, y% pair per line, at least two points. The editor can add, remove and reorder points. Review name, color, ownership and notes. Route lengths are calculated from image coordinates; they do not enforce travel speed or movement rules.",
      "Wähle [[map.tool.route]] und Punkte, danach [[map.manage]] → [[map.addRoute]] zum Prüfen und Speichern. Alternativ gib [[map.points]] direkt ein: ein x%, y%-Paar je Zeile, mindestens zwei Punkte. Der Editor kann Punkte ergänzen, entfernen und umordnen. Prüfe Name, Farbe, Zuordnung und Notizen. Routenlängen werden aus Bildkoordinaten berechnet; Reisegeschwindigkeit und Bewegungsregeln werden nicht durchgesetzt."
    ],
    "help.topic.map-tools.2.title": [
      "Set a meaningful scale",
      "Eine sinnvolle Skala festlegen"
    ],
    "help.topic.map-tools.2.body": [
      "Open [[map.calibrate]] or choose [[map.tool.scale]] and select two different points. Enter the known distance and unit, or enter image pixels per unit directly. Review the before/after values and confirm. Lengths use original image pixels, not current zoom. Without calibration they are pixel distances. [[map.clearScale]] asks for confirmation. [[map.undo]] works only if this map owns the newest history action; otherwise use chronological [[history.title]] rather than skipping newer work.",
      "Öffne [[map.calibrate]] oder wähle [[map.tool.scale]] und zwei verschiedene Punkte. Trage bekannte Entfernung und Einheit ein oder gib Bildpixel pro Einheit direkt ein. Prüfe Vorher/Nachher und bestätige. Längen nutzen Originalbildpixel, nicht den Ansichtszoom. Ohne Kalibrierung sind es Pixelentfernungen. [[map.clearScale]] verlangt Bestätigung. [[map.undo]] funktioniert nur, wenn die neueste Verlaufsaktion zu dieser Karte gehört; verwende sonst den chronologischen [[history.title]], statt neuere Arbeit zu überspringen."
    ],
    "help.topic.history.title": [
      "Undo, redo & understand their limits",
      "Rückgängig, Wiederholen und ihre Grenzen"
    ],
    "help.topic.history.intro": [
      "History is chronological and belongs to the selected character.",
      "Der Verlauf ist chronologisch und gehört zum ausgewählten Charakter."
    ],
    "help.topic.history.0.title": [
      "Reverse a committed action",
      "Eine übernommene Aktion zurücknehmen"
    ],
    "help.topic.history.0.body": [
      "Use header [[action.undo]] or [[action.redo]], or open [[nav.more]] → [[history.title]] to inspect the order. Up to 100 undo entries are retained per character. Undo/redo writes another saved state; a new character action clears the redo branch. Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z act on character history only outside editable text and dialogs. Inside a text field, use normal text editing or Escape before its commit.",
      "Verwende [[action.undo]] oder [[action.redo]] im Kopfbereich oder [[nav.more]] → [[history.title]], um die Reihenfolge zu prüfen. Je Charakter bleiben bis zu 100 Rückgängig-Einträge. Rückgängig/Wiederholen schreibt wieder einen gespeicherten Zustand; eine neue Charakteraktion löscht den Wiederholen-Zweig. Strg/Cmd+Z und Strg/Cmd+Umschalt+Z wirken nur außerhalb bearbeitbarer Texte und Dialoge auf den Charakterverlauf. Im Textfeld gelten normale Textbearbeitung und Escape vor der Übernahme."
    ],
    "help.topic.history.1.title": [
      "Know what is outside Undo",
      "Wissen, was nicht rückgängig gemacht wird"
    ],
    "help.topic.history.1.body": [
      "Library creation, duplication, deletion and import membership are not ordinary character Undo. Preferences, exported files and ordinary dice results are not undone. Resource-changing rolls are linked to their character action and can be marked undone without inventing a new result. A map action cannot jump over a newer unrelated edit. For deleted/replaced records, review checkpoints or an external backup.",
      "Erstellen, Duplizieren, Löschen und Bibliothekszugehörigkeit beim Import gehören nicht zum normalen Charakter-Rückgängig. Einstellungen, exportierte Dateien und normale Würfelergebnisse werden nicht zurückgenommen. Ressourcenändernde Würfe gehören zu ihrer Charakteraktion und können als rückgängig markiert werden, ohne ein neues Ergebnis zu erfinden. Eine Kartenaktion kann keine neuere andere Änderung überspringen. Prüfe bei gelöschten/ersetzten Datensätzen Sicherungspunkte oder eine externe Sicherung."
    ],
    "help.topic.backup.title": [
      "Export an external backup",
      "Eine externe Sicherung exportieren"
    ],
    "help.topic.backup.intro": [
      "The application can prepare a file; only you can verify where it was saved.",
      "Die App kann eine Datei vorbereiten; nur du kannst prüfen, wo sie gespeichert wurde."
    ],
    "help.topic.backup.0.title": [
      "Back up one character or the Library",
      "Einen Charakter oder die Bibliothek sichern"
    ],
    "help.topic.backup.0.body": [
      "For one character, use its Library-card [[nav.more]] → [[backup.exportCharacter]], or open it and use [[nav.more]] → [[backup.exportCharacter]]. For everything, open [[nav.backup]] → [[backup.exportAll]]. Pending character edits must pass the save barrier. Review [[backup.coverage]] and missing-media warnings, then choose [[action.export]]. Check your browser’s download/save result and keep the JSON somewhere independent of site storage.",
      "Verwende für einen Charakter auf dessen Bibliothekskarte [[nav.more]] → [[backup.exportCharacter]] oder öffne ihn und wähle [[nav.more]] → [[backup.exportCharacter]]. Für alles öffne [[nav.backup]] → [[backup.exportAll]]. Ausstehende Charakteränderungen müssen erfolgreich gespeichert sein. Prüfe [[backup.coverage]] und Warnungen zu fehlenden Medien, dann wähle [[action.export]]. Prüfe Download/Speicherergebnis im Browser und bewahre JSON unabhängig vom Websitespeicher auf."
    ],
    "help.topic.backup.1.title": [
      "Check coverage and size",
      "Umfang und Größe prüfen"
    ],
    "help.topic.backup.1.body": [
      "Normal character/library exports embed available portrait and map media. Missing media cannot be reconstructed from its reference. [[backup.includeAddons]] is optional and restores addon files disabled. Files over the 70 MiB character-import limit are unsuitable for that importer: keep a recovery export and also export smaller individual characters. A “file prepared” date is not evidence of a completed external backup.",
      "Normale Charakter-/Bibliotheksexporte betten verfügbare Porträt- und Kartenmedien ein. Fehlende Medien lassen sich nicht aus ihrer Referenz rekonstruieren. [[backup.includeAddons]] ist optional und stellt Addon-Dateien deaktiviert wieder her. Dateien über der 70-MiB-Importgrenze eignen sich nicht für diesen Importer: Bewahre einen Wiederherstellungsexport auf und exportiere zusätzlich kleinere einzelne Charaktere. Ein Datum für „Datei vorbereitet“ beweist keine abgeschlossene externe Sicherung."
    ],
    "help.topic.backup.2.title": [
      "Inspect without replacing anything",
      "Prüfen ohne etwas zu ersetzen"
    ],
    "help.topic.backup.2.body": [
      "Use [[backup.verify]] to parse and inspect a saved backup file. This checks its readable structure; it is not proof that every future recovery scenario will succeed. An ordinary import preview also changes nothing until its final Import action. To verify contents more thoroughly, import as new records in a separate test browser/profile and compare them, never replace your only working Library just to test a backup.",
      "Mit [[backup.verify]] liest und prüfst du eine gespeicherte Sicherungsdatei. Das prüft ihre lesbare Struktur, garantiert aber nicht jeden späteren Wiederherstellungsfall. Auch eine normale Importvorschau ändert bis zur endgültigen Importaktion nichts. Für eine gründlichere Prüfung importiere neue Datensätze in einem getrennten Testbrowser/-profil und vergleiche sie; ersetze zum Testen niemals deine einzige funktionierende Bibliothek."
    ],
    "help.topic.recovery.title": [
      "Recover drafts & handle save failures",
      "Entwürfe retten und Speicherfehler beheben"
    ],
    "help.topic.recovery.intro": [
      "When storage warns, preserve work before closing the page.",
      "Bei Speicherwarnungen sichere deine Arbeit, bevor du die Seite schließt."
    ],
    "help.topic.recovery.0.title": [
      "Use local recovery",
      "Lokale Wiederherstellung nutzen"
    ],
    "help.topic.recovery.0.body": [
      "In [[nav.backup]], [[backup.checkpoint]] creates a local checkpoint. Existing [[backup.checkpoints]] can be previewed through the import workflow. They retain text/history references and media keys, not an independent copy of every blob. They live in the same browser and cannot recover cleared site storage. Prefer adding recovered characters as new records before deciding which to keep.",
      "Unter [[nav.backup]] erstellt [[backup.checkpoint]] einen lokalen Sicherungspunkt. Vorhandene [[backup.checkpoints]] lassen sich im Importablauf prüfen. Sie enthalten Text-/Verlaufsreferenzen und Medienschlüssel, nicht jede Mediendatei als unabhängige Kopie. Sie liegen im selben Browser und können gelöschten Websitespeicher nicht zurückholen. Füge wiederhergestellte Charaktere vorzugsweise als neue Datensätze hinzu, bevor du auswählst, welche bleiben."
    ],
    "help.topic.recovery.1.title": [
      "Resume or discard a draft",
      "Einen Entwurf fortsetzen oder verwerfen"
    ],
    "help.topic.recovery.1.body": [
      "Under [[backup.drafts]], inspect the named draft and choose its offered resume, compare, export or save-as-new action. Available actions depend on the draft type. Discarding requires confirmation. An import draft may need its original source file again. A dialog closed without applying its form can still have a recoverable draft.",
      "Prüfe unter [[backup.drafts]] den benannten Entwurf und wähle eine angebotene Aktion zum Fortsetzen, Vergleichen, Exportieren oder Speichern als neu. Verfügbare Aktionen hängen vom Entwurfstyp ab. Verwerfen verlangt Bestätigung. Ein Importentwurf kann die Originaldatei erneut benötigen. Ein geschlossenes, nicht übernommenes Formular kann weiterhin einen wiederherstellbaren Entwurf haben."
    ],
    "help.topic.recovery.2.title": [
      "Handle a failed or conflicting save",
      "Einen fehlgeschlagenen oder kollidierenden Speichervorgang behandeln"
    ],
    "help.topic.recovery.2.body": [
      "Open the header save-status control. Use [[action.retry]] when appropriate, [[recovery.compare]] to review saved versus draft data, or [[recovery.saveAsNew]] when offered. Use [[backup.emergency]] before losing a memory-only draft; keep the resulting file. Only one tab owns editing at a time: read-only mode still allows reading and dice, but editing requires the explicit takeover workflow. Do not clear storage as a first troubleshooting step.",
      "Öffne den Speicherstatus im Kopfbereich. Verwende bei Bedarf [[action.retry]], [[recovery.compare]] zum Vergleich gespeicherter Daten mit dem Entwurf oder [[recovery.saveAsNew]], sofern angeboten. Sichere einen nur im Speicher vorhandenen Entwurf mit [[backup.emergency]], bevor er verloren geht, und behalte die Datei. Nur ein Tab darf gleichzeitig bearbeiten: Lesemodus erlaubt Lesen und Würfeln; Bearbeiten verlangt ausdrückliche Übernahme. Lösche zur Fehlersuche nicht als Erstes den Speicher."
    ],
    "help.topic.print.title": [
      "Print a character reference",
      "Eine Charakterreferenz drucken"
    ],
    "help.topic.print.intro": [
      "Printing is a readable snapshot, not a restorable character backup.",
      "Drucken liefert einen lesbaren Schnappschuss, keine wiederherstellbare Charaktersicherung."
    ],
    "help.topic.print.0.title": [
      "Prepare the saved snapshot",
      "Den gespeicherten Schnappschuss vorbereiten"
    ],
    "help.topic.print.0.body": [
      "Open a character, then [[nav.more]] → [[nav.print]]. The app first saves pending character edits and builds a snapshot of the saved revision. Choose [[print.concise]] or [[print.full]] under [[print.mode]], and A4 or Letter under [[print.paper]]. Review [[print.includeFate]]: hidden Fateweaving entries may be included in full print unless you turn this off.",
      "Öffne einen Charakter, dann [[nav.more]] → [[nav.print]]. Die App speichert zuerst ausstehende Änderungen und erstellt einen Schnappschuss der gespeicherten Revision. Wähle unter [[print.mode]] [[print.concise]] oder [[print.full]] sowie A4 oder Letter unter [[print.paper]]. Prüfe [[print.includeFate]]: Ausgeblendete Fateweaving-Einträge können im vollständigen Druck enthalten sein, solange du dies nicht ausschaltest."
    ],
    "help.topic.print.1.title": [
      "Use browser print preview",
      "Die Browser-Druckvorschau nutzen"
    ],
    "help.topic.print.1.body": [
      "[[print.fitPage]], [[print.fitWidth]] and zoom adjust the on-screen preview, not the character or printed content mode. Choose [[print.now]] to open the browser print flow. Its preview determines final page breaks, margins and printer/PDF destination. The snapshot is frozen; return to the character and reopen Print after later edits. Export JSON separately for recovery.",
      "[[print.fitPage]], [[print.fitWidth]] und Zoom verändern die Bildschirmvorschau, nicht den Charakter oder Druckinhalt. [[print.now]] öffnet den Druckablauf des Browsers. Dort bestimmst du endgültige Seitenumbrüche, Ränder und Drucker/PDF-Ziel. Der Schnappschuss bleibt unverändert; kehre nach späteren Änderungen zum Charakter zurück und öffne Drucken erneut. Exportiere für Wiederherstellung zusätzlich JSON."
    ],
    "help.topic.appearance.title": [
      "Choose language & accessibility preferences",
      "Sprache und Barrierefreiheit einstellen"
    ],
    "help.topic.appearance.intro": [
      "Appearance changes are preferences, not character edits.",
      "Darstellungseinstellungen sind Präferenzen, keine Charakteränderungen."
    ],
    "help.topic.appearance.0.title": [
      "Set your reading preferences",
      "Leseeinstellungen wählen"
    ],
    "help.topic.appearance.0.body": [
      "Open [[nav.settings]] → [[settings.appearance]]. Choose one of the eight themes or enable [[settings.contrast]]. Under [[settings.motion]], use [[settings.motion.system]], [[settings.motion.reduced]] or [[settings.motion.full]]; system reduced-motion preference is still respected. [[settings.lite]] pauses decorative media. These choices save when changed and do not add a character-history action.",
      "Öffne [[nav.settings]] → [[settings.appearance]]. Wähle eines der acht Designs oder aktiviere [[settings.contrast]]. Unter [[settings.motion]] wählst du [[settings.motion.system]], [[settings.motion.reduced]] oder [[settings.motion.full]]; reduzierte Bewegung des Systems wird weiterhin berücksichtigt. [[settings.lite]] pausiert dekorative Medien. Änderungen werden direkt gespeichert und erzeugen keine Charakter-Verlaufsaktion."
    ],
    "help.topic.appearance.1.title": [
      "Switch English or German",
      "Zwischen Englisch und Deutsch wechseln"
    ],
    "help.topic.appearance.1.body": [
      "Use [[settings.language]] for English or Deutsch. This Help guide and walkthrough follow that selection. Player-authored text and catalogue content are not translated by changing the interface language; some inherited catalogue/diagnostic wording may remain English. Navigation labels in this guide use the application’s live translations. Keyboard focus remains visible; the tutorial can be used without hovering or dragging.",
      "Wähle unter [[settings.language]] English oder Deutsch. Diese Hilfe und Einführung folgen der Auswahl. Eigene Texte und Kataloginhalte werden dadurch nicht übersetzt; einige übernommene Katalog-/Diagnosetexte können Englisch bleiben. Navigationsbezeichnungen dieser Hilfe verwenden die aktiven App-Übersetzungen. Tastaturfokus bleibt sichtbar; die Einführung funktioniert ohne Hover oder Ziehen."
    ],
    "help.topic.offline.title": [
      "Use offline access & installation",
      "Offlinezugriff und Installation nutzen"
    ],
    "help.topic.offline.intro": [
      "Offline application assets and saved character data are separate.",
      "Offline-App-Dateien und gespeicherte Charakterdaten sind getrennt."
    ],
    "help.topic.offline.0.title": [
      "Check offline readiness",
      "Offline-Bereitschaft prüfen"
    ],
    "help.topic.offline.0.body": [
      "Under [[nav.settings]], inspect the installation/offline panel. For service-worker offline access, serve the complete matching release from HTTPS or localhost, open it while connected and wait for the app to report offline availability. Missing or mismatched release files prevent verified caching. Opening the standalone HTML with file:// is not the supported installation route. Do not assume the first successful screen load means all assets are cached.",
      "Prüfe unter [[nav.settings]] den Installations-/Offlinebereich. Für Service-Worker-Offlinezugriff muss die vollständige passende Version über HTTPS oder localhost bereitstehen. Öffne sie online und warte auf die Offline-Bereitschaftsmeldung. Fehlende oder unpassende Versionsdateien verhindern geprüftes Caching. Standalone-HTML per file:// ist kein unterstützter Installationsweg. Ein erster erfolgreicher Bildschirmaufruf beweist nicht, dass alle Dateien zwischengespeichert sind."
    ],
    "help.topic.offline.1.title": [
      "Install only when offered",
      "Installieren, wenn angeboten"
    ],
    "help.topic.offline.1.body": [
      "The install control is available only when this browser exposes an install prompt. Installation is optional; it does not create an account or synchronize data. Browser and platform support differ. [[settings.requestPersistence]] asks the browser to reduce eviction risk; it may be refused and never replaces an external backup.",
      "Die Installationssteuerung ist nur verfügbar, wenn der Browser eine Installationsaufforderung bereitstellt. Installation ist optional; sie erstellt kein Konto und synchronisiert keine Daten. Unterstützung hängt von Browser und Plattform ab. [[settings.requestPersistence]] bittet den Browser um geringeres Verdrängungsrisiko; das kann abgelehnt werden und ersetzt keine externe Sicherung."
    ],
    "help.topic.offline.2.title": [
      "Update without losing drafts",
      "Aktualisieren ohne Entwurfsverlust"
    ],
    "help.topic.offline.2.body": [
      "When an update is offered, use the existing save-and-update flow and follow its instructions for every open window/tab. Unready or unresponsive clients can block activation. The app does not silently discard edits to force an update. Keep the same site and application directory to continue using the same Library. Online generation still requires a network; approved addon networking may also require one.",
      "Verwende bei einer angebotenen Aktualisierung den vorhandenen Speichern-/Updateablauf und beachte die Hinweise für alle offenen Fenster/Tabs. Nicht bereite oder nicht antwortende Clients können die Aktivierung blockieren. Die App verwirft Änderungen nicht stillschweigend, um ein Update zu erzwingen. Behalte Website und App-Verzeichnis bei, um dieselbe Bibliothek zu verwenden. Onlinegenerierung und gegebenenfalls genehmigte Addon-Netzwerkzugriffe benötigen weiterhin eine Verbindung."
    ],
    "help.topic.optional.title": [
      "Optional questionnaire, online tools & addons",
      "Optionaler Fragebogen, Onlinetools und Addons"
    ],
    "help.topic.optional.intro": [
      "None of these is required to create, import or play a character.",
      "Nichts davon ist zum Erstellen, Importieren oder Spielen eines Charakters nötig."
    ],
    "help.topic.optional.0.title": [
      "Use the questionnaire offline",
      "Den Fragebogen offline nutzen"
    ],
    "help.topic.optional.0.body": [
      "Choose [[create.questionnaire]] from the Create chooser or its entry in the character editor. Work through its steps; your answers are retained as a local draft. At the review, export the generated prompt as a text file to use independently. Completing answers does not silently create or replace a character.",
      "Wähle [[create.questionnaire]] in der Erstellen-Auswahl oder über den Charaktereditor. Bearbeite die Schritte; Antworten bleiben als lokaler Entwurf erhalten. In der Prüfung kannst du den erzeugten Prompt als Textdatei exportieren. Das Beantworten erstellt oder ersetzt keinen Charakter stillschweigend."
    ],
    "help.topic.optional.1.title": [
      "Approve online generation separately",
      "Onlinegenerierung getrennt genehmigen"
    ],
    "help.topic.optional.1.body": [
      "The online-generation review shows the outgoing payload and endpoint. Read them and grant the displayed consent before sending; sending is never part of this tutorial. It requires network access and whatever credentials the configured endpoint requires. Cancel stops the request where supported. Returned output still goes through the ordinary import preview: review and explicitly import it rather than assuming it is accurate or already applied.",
      "Die Prüfung der Onlinegenerierung zeigt ausgehende Daten und Endpunkt. Lies beides und erteile die angezeigte Zustimmung vor dem Senden; die Einführung sendet nichts. Netzwerkzugriff und gegebenenfalls vom Endpunkt verlangte Zugangsdaten sind nötig. Abbrechen beendet die Anfrage, soweit unterstützt. Zurückgegebene Daten durchlaufen weiterhin die normale Importvorschau: Prüfe und importiere ausdrücklich, statt Richtigkeit oder bereits erfolgte Übernahme anzunehmen."
    ],
    "help.topic.optional.2.title": [
      "Review an addon before enabling",
      "Ein Addon vor Aktivierung prüfen"
    ],
    "help.topic.optional.2.body": [
      "In [[nav.settings]] → [[settings.addons]], installing an addon file retains it disabled. Review its source, declared network origins and permissions before the separate enable consent. Open only a trusted addon; its allowed bridge actions can affect character data. Export a backup first. Disable stops it; removal is confirmed. Restored addons are also disabled. This tutorial never installs, enables or opens an addon for you.",
      "Unter [[nav.settings]] → [[settings.addons]] bleibt eine installierte Addon-Datei deaktiviert. Prüfe Quelltext, angegebene Netzwerkziele und Berechtigungen vor der getrennten Aktivierungszustimmung. Öffne nur vertrauenswürdige Addons; erlaubte Schnittstellenaktionen können Charakterdaten beeinflussen. Exportiere vorher eine Sicherung. Deaktivieren stoppt es; Entfernen verlangt Bestätigung. Wiederhergestellte Addons bleiben ebenfalls deaktiviert. Diese Einführung installiert, aktiviert oder öffnet keine Addons automatisch."
    ],
    "help.topic.troubleshoot.title": [
      "Solve common problems",
      "Häufige Probleme lösen"
    ],
    "help.topic.troubleshoot.intro": [
      "Follow the warning that is actually shown; avoid destructive “reset” fixes.",
      "Beachte die tatsächlich angezeigte Warnung und vermeide destruktive „Zurücksetzen“-Versuche."
    ],
    "help.topic.troubleshoot.0.title": [
      "An action is disabled or missing",
      "Eine Aktion fehlt oder ist deaktiviert"
    ],
    "help.topic.troubleshoot.0.body": [
      "No active character: open one from the Library first. Heal disabled: set Maximum HP above zero in [[edit.vitals]]. No slot to spend: configure totals in [[edit.spellsetup]] and check spent. No map tools: add/select a map. Read-only status: another tab owns editing or an update has paused it; use the status explanation and explicit takeover/update workflow.",
      "Kein aktiver Charakter: Öffne zuerst einen aus der Bibliothek. Heilung deaktiviert: Setze maximale TP unter [[edit.vitals]] über null. Kein Platz verfügbar: Prüfe Gesamtzahl und Verbrauch unter [[edit.spellsetup]]. Keine Kartenwerkzeuge: Füge eine Karte hinzu oder wähle sie aus. Lesemodus: Ein anderer Tab bearbeitet oder ein Update pausiert; nutze Statushinweise und ausdrücklichen Übernahme-/Updateablauf."
    ],
    "help.topic.troubleshoot.1.title": [
      "A value will not save or navigation stops",
      "Ein Wert speichert nicht oder Navigation stoppt"
    ],
    "help.topic.troubleshoot.1.body": [
      "Correct the highlighted field’s range or format, then leave it again. Spent hit dice cannot exceed total; spent slots cannot exceed their total. Leaving a screen is blocked when pending edits cannot be made safe. Open the status control for recovery options; export recovery before closing a page with memory-only work. A retained form draft is not a committed item until its final Save.",
      "Korrigiere Bereich oder Format des markierten Felds und verlasse es erneut. Ausgegebene Trefferwürfel und verbrauchte Zauberplätze dürfen ihre Gesamtzahl nicht überschreiten. Bildschirmwechsel werden blockiert, wenn ausstehende Änderungen nicht sicher sind. Öffne den Status für Wiederherstellungsoptionen; exportiere vor dem Schließen Arbeit, die nur im Speicher liegt. Ein Formularentwurf ist erst mit endgültigem Speichern ein übernommener Eintrag."
    ],
    "help.topic.troubleshoot.2.title": [
      "Import is rejected or incomplete",
      "Import wird abgelehnt oder ist unvollständig"
    ],
    "help.topic.troubleshoot.2.body": [
      "Check JSON syntax, supported format and the 70 MiB file limit. Review normalization adjustments and any invalid entries; acknowledge only changes you accept. Importing only valid entries is a deliberate partial-import choice, not automatic repair. Keep the original file and any offered recoverable draft. A campaign-map file belongs in a selected character’s Map workspace.",
      "Prüfe JSON-Syntax, unterstütztes Format und 70-MiB-Grenze. Prüfe Normalisierungen und ungültige Einträge und bestätige nur akzeptierte Änderungen. Nur gültige Einträge zu importieren ist eine bewusste Teilimport-Auswahl, keine automatische Reparatur. Behalte Originaldatei und angebotenen Entwurf. Eine Kampagnenkartendatei gehört in den Kartenbereich eines ausgewählten Charakters."
    ],
    "help.topic.troubleshoot.3.title": [
      "Characters, media or offline access seem gone",
      "Charaktere, Medien oder Offlinezugriff fehlen"
    ],
    "help.topic.troubleshoot.3.body": [
      "First clear Library filters and check the original browser/profile, site address and app directory. Inspect recovery before deleting anything. For missing media, restore a backup containing the blobs or reselect original files. For offline-not-ready, reconnect and retry after the complete matching release is present. Clearing site data can destroy the very records you are trying to recover.",
      "Entferne zuerst Bibliotheksfilter und prüfe ursprünglichen Browser/Profil, Websiteadresse und App-Verzeichnis. Prüfe Wiederherstellung, bevor du etwas löschst. Stelle fehlende Medien aus einer Sicherung mit Mediendateien wieder her oder wähle Originaldateien neu. Verbinde dich bei fehlender Offline-Bereitschaft erneut und versuche es mit vollständiger passender Version. Das Löschen von Websitedaten kann genau die Datensätze zerstören, die du retten möchtest."
    ],
    "help.title": [
      "Help / How to Use",
      "Hilfe / Anleitung"
    ],
    "help.entry": [
      "Help",
      "Hilfe"
    ],
    "help.intro": [
      "Your character, one task at a time.",
      "Dein Charakter, eine Aufgabe nach der anderen."
    ],
    "help.description": [
      "Learn the essentials in a short walkthrough, or find the task you need below. Everything here works with the existing controls; Help never edits a character for you.",
      "Lerne die Grundlagen in einer kurzen Einführung oder finde unten deine Aufgabe. Alles verwendet die vorhandenen Steuerungen; die Hilfe bearbeitet keinen Charakter für dich."
    ],
    "help.search": [
      "Search Help",
      "Hilfe durchsuchen"
    ],
    "help.searchPlaceholder": [
      "Try “HP”, “backup”, “portrait”…",
      "Zum Beispiel „TP“, „Sicherung“, „Porträt“…"
    ],
    "help.results": [
      "{n} matching topics",
      "{n} passende Themen"
    ],
    "help.allTopics": [
      "All topics",
      "Alle Themen"
    ],
    "help.noResults": [
      "No matching topics. Try a shorter term or clear the search.",
      "Keine passenden Themen. Versuche einen kürzeren Begriff oder lösche die Suche."
    ],
    "help.openTask": [
      "Open this workspace",
      "Diesen Bereich öffnen"
    ],
    "help.needsCharacter": [
      "Open a character from the Library to do this task.",
      "Öffne für diese Aufgabe einen Charakter aus der Bibliothek."
    ],
    "help.onThisPage": [
      "Find a task",
      "Eine Aufgabe finden"
    ],
    "help.backTopics": [
      "Back to topics",
      "Zur Themenübersicht"
    ],
    "help.guideRead": [
      "Read the full guide",
      "Vollständige Anleitung lesen"
    ],
    "help.bannerTitle": [
      "New to Player Almanac?",
      "Neu bei Player Almanac?"
    ],
    "help.bannerBody": [
      "Get a character ready for play in about five minutes. Optional, with no sample changes to your data.",
      "Bereite einen Charakter in ungefähr fünf Minuten aufs Spiel vor. Optional und ohne Beispieländerungen an deinen Daten."
    ],
    "help.start": [
      "Start walkthrough",
      "Einführung starten"
    ],
    "help.resume": [
      "Resume walkthrough",
      "Einführung fortsetzen"
    ],
    "help.notNow": [
      "Not now",
      "Jetzt nicht"
    ],
    "help.restart": [
      "Restart",
      "Neu starten"
    ],
    "help.closeTour": [
      "Close walkthrough",
      "Einführung schließen"
    ],
    "help.skipTour": [
      "Skip walkthrough",
      "Einführung überspringen"
    ],
    "help.skipStep": [
      "Skip this step",
      "Diesen Schritt überspringen"
    ],
    "help.back": [
      "Back",
      "Zurück"
    ],
    "help.next": [
      "Next",
      "Weiter"
    ],
    "help.finish": [
      "Finish & open Help",
      "Beenden und Hilfe öffnen"
    ],
    "help.progress": [
      "Step {n} of {total}",
      "Schritt {n} von {total}"
    ],
    "help.expected": [
      "You will know it worked when…",
      "Daran erkennst du den Erfolg…"
    ],
    "help.why": [
      "Why this matters",
      "Warum das wichtig ist"
    ],
    "help.control": [
      "Look for",
      "Achte auf"
    ],
    "help.show": [
      "Show control",
      "Steuerung zeigen"
    ],
    "help.return": [
      "Return to this step",
      "Zu diesem Schritt zurückkehren"
    ],
    "help.continueDialog": [
      "Finish or close the application dialog before continuing the walkthrough. Its changes and confirmations still work normally.",
      "Beende oder schließe den App-Dialog, bevor du die Einführung fortsetzt. Seine Änderungen und Bestätigungen funktionieren unverändert."
    ],
    "help.missing": [
      "This control is not available on the current screen. Return to this step, or skip it; nothing will be created or edited automatically.",
      "Diese Steuerung ist auf diesem Bildschirm nicht verfügbar. Kehre zum Schritt zurück oder überspringe ihn; nichts wird automatisch erstellt oder bearbeitet."
    ],
    "help.readonly": [
      "Editing is currently unavailable. Read the header status for the reason. You can close this walkthrough or skip to reading Help; no editing ownership is taken automatically.",
      "Bearbeiten ist derzeit nicht verfügbar. Den Grund findest du im Kopfbereich-Status. Du kannst die Einführung schließen oder zur Hilfe wechseln; Bearbeitungsrechte werden nicht automatisch übernommen."
    ],
    "help.chooseCreate": [
      "Create a blank character",
      "Einen leeren Charakter erstellen"
    ],
    "help.chooseImport": [
      "Import a character",
      "Einen Charakter importieren"
    ],
    "help.chooseExisting": [
      "Use an existing character",
      "Einen vorhandenen Charakter verwenden"
    ],
    "help.openLibrary": [
      "Open Library",
      "Bibliothek öffnen"
    ],
    "help.remembered": [
      "Your place is kept in this browser when available. Closing does not undo any real action you already performed.",
      "Deine Position bleibt nach Möglichkeit in diesem Browser erhalten. Schließen macht bereits ausgeführte echte Aktionen nicht rückgängig."
    ],
    "help.openDone": [
      "Your folio is open on [[nav.play]]. Choose Next to review its setup.",
      "Dein Charakterbogen ist auf [[nav.play]] geöffnet. Wähle Weiter, um seine Einrichtung zu prüfen."
    ],
    "help.openControl": [
      "[[nav.play]] in character navigation",
      "[[nav.play]] in der Charakternavigation"
    ],
    "help.completed": [
      "Walkthrough complete. Your changes are yours; keep an external backup and return here whenever you need a task.",
      "Einführung abgeschlossen. Deine Änderungen bleiben erhalten; bewahre eine externe Sicherung auf und kehre bei Bedarf hierher zurück."
    ],
    "help.observed": [
      "Action observed. You can continue.",
      "Aktion erkannt. Du kannst fortfahren."
    ],
    "help.exportObserved": [
      "Download requested. Check that the file was actually saved outside browser storage; the app cannot verify that.",
      "Download angefordert. Prüfe, ob die Datei außerhalb des Browsers gespeichert wurde; die App kann das nicht bestätigen."
    ],
    "help.unchanged": [
      "You may review and continue without changing any existing values.",
      "Du kannst prüfen und fortfahren, ohne vorhandene Werte zu ändern."
    ],
    "help.character": [
      "Following: {name}",
      "Für: {name}"
    ],
    "help.otherCharacter": [
      "A different character is open. Return to the character used in this walkthrough, or restart to choose another.",
      "Ein anderer Charakter ist geöffnet. Kehre zum Charakter dieser Einführung zurück oder starte neu, um einen anderen zu wählen."
    ],
    "help.restartBody": [
      "Restart the instructions? This does not delete characters, undo your actions or clear application drafts.",
      "Einführung neu starten? Das löscht keine Charaktere, macht keine Aktionen rückgängig und entfernt keine App-Entwürfe."
    ],
    "help.tourLabel": [
      "Getting started walkthrough",
      "Einführung für den Einstieg"
    ],
    "help.guideVersion": [
      "Guide verified against this release’s controls.",
      "Anleitung anhand der Steuerungen dieser Version geprüft."
    ],
    "help.welcomeBack": [
      "Pick up where you left off, or restart to choose a different path.",
      "Setze fort, wo du aufgehört hast, oder starte mit einem anderen Weg neu."
    ],
    "help.compact": [
      "Instructions",
      "Anleitung"
    ],
    "help.expand": [
      "Expand instructions",
      "Anleitung erweitern"
    ],
    "help.collapse": [
      "Collapse instructions",
      "Anleitung einklappen"
    ],
    "help.related": [
      "Related tasks",
      "Verwandte Aufgaben"
    ],
    "help.group.begin": [
      "Get started",
      "Einsteigen"
    ],
    "help.group.prepare": [
      "Prepare your character",
      "Charakter vorbereiten"
    ],
    "help.group.play": [
      "Use it during play",
      "Im Spiel verwenden"
    ],
    "help.group.explore": [
      "Explore with maps",
      "Mit Karten erkunden"
    ],
    "help.group.protect": [
      "Protect & recover your work",
      "Arbeit sichern und retten"
    ],
    "help.group.preferences": [
      "Make it yours",
      "Persönlich einrichten"
    ],
    "help.tour.choose.title": [
      "Your Library, your starting point",
      "Deine Bibliothek ist der Ausgangspunkt"
    ],
    "help.tour.choose.instruction": [
      "Choose how to begin below: create, import, or use a character already in this Library.",
      "Wähle unten deinen Einstieg: Erstellen, Importieren oder einen vorhandenen Charakter nutzen."
    ],
    "help.tour.choose.why": [
      "Characters stay in this browser/profile and app location. There is no cloud account; an exported file is your independent backup.",
      "Charaktere bleiben in diesem Browserprofil und App-Speicherort. Es gibt kein Cloud-Konto; eine exportierte Datei ist deine unabhängige Sicherung."
    ],
    "help.tour.choose.expected": [
      "You select one path; you will not be asked to do both creation and import.",
      "Du wählst einen Weg; du musst nicht sowohl erstellen als auch importieren."
    ],
    "help.tour.choose.control": [
      "[[nav.library]]",
      "[[nav.library]]"
    ],
    "help.tour.create.title": [
      "Make your own blank sheet",
      "Deinen eigenen leeren Bogen erstellen"
    ],
    "help.tour.create.instruction": [
      "Choose [[action.create]] → [[create.blank]], fill the creation form, then choose [[action.create]] in that form.",
      "Wähle [[action.create]] → [[create.blank]], fülle das Formular aus und wähle darin [[action.create]]."
    ],
    "help.tour.create.why": [
      "This creates a real record only when you confirm. Enter the identity you know; statistics come next.",
      "Erst deine Bestätigung erstellt einen echten Datensatz. Trage bekannte Angaben ein; Spielwerte folgen danach."
    ],
    "help.tour.create.expected": [
      "Your new character opens in [[edit.identity]] and the walkthrough moves on.",
      "Dein neuer Charakter öffnet sich unter [[edit.identity]] und die Einführung geht weiter."
    ],
    "help.tour.create.control": [
      "[[action.create]] / [[create.blank]] / creation form",
      "[[action.create]] / [[create.blank]] / Erstellungsformular"
    ],
    "help.tour.import.title": [
      "Bring an existing character",
      "Einen vorhandenen Charakter mitbringen"
    ],
    "help.tour.import.instruction": [
      "Choose [[action.import]], select a JSON file or paste it, then [[import.preview]]; review it and confirm [[action.import]].",
      "Wähle [[action.import]], lade JSON oder füge es ein und wähle [[import.preview]]; prüfe und bestätige mit [[action.import]]."
    ],
    "help.tour.import.why": [
      "Keep [[import.add]] to make a separate copy. Review warnings and required acknowledgements; do not replace your Library just to learn.",
      "Behalte [[import.add]] für eine getrennte Kopie. Prüfe Warnungen und erforderliche Bestätigungen; ersetze deine Bibliothek nicht zum Üben."
    ],
    "help.tour.import.expected": [
      "The import completes and you return to the Library with the imported card.",
      "Der Import ist abgeschlossen und du kehrst mit der importierten Karte zur Bibliothek zurück."
    ],
    "help.tour.import.control": [
      "[[action.import]] / [[import.preview]]",
      "[[action.import]] / [[import.preview]]"
    ],
    "help.tour.open.title": [
      "Open the folio",
      "Den Charakterbogen öffnen"
    ],
    "help.tour.open.instruction": [
      "Choose [[folio.open]] on the character you want to learn with.",
      "Wähle [[folio.open]] für den Charakter, mit dem du lernen möchtest."
    ],
    "help.tour.open.why": [
      "The walkthrough follows that character without replacing any of its values.",
      "Die Einführung folgt diesem Charakter, ohne Werte zu ersetzen."
    ],
    "help.tour.open.expected": [
      "[[nav.play]] opens for that character. Choose Next to review its setup.",
      "[[nav.play]] öffnet sich für diesen Charakter. Wähle Weiter, um seine Einrichtung zu prüfen."
    ],
    "help.tour.open.control": [
      "[[folio.open]] on a Library card",
      "[[folio.open]] auf einer Bibliothekskarte"
    ],
    "help.tour.identity.title": [
      "Give the folio its identity",
      "Dem Charakterbogen Identität geben"
    ],
    "help.tour.identity.instruction": [
      "In [[edit.identity]], review [[field.name]], [[field.species]] and [[field.class]]; enter anything you know, then leave the field.",
      "Prüfe unter [[edit.identity]] [[field.name]], [[field.species]] und [[field.class]]; trage Bekanntes ein und verlasse das Feld."
    ],
    "help.tour.identity.why": [
      "Ordinary fields commit when you leave them. Class text is descriptive; it does not build statistics for you.",
      "Normale Felder werden beim Verlassen übernommen. Klassentext beschreibt nur; er erstellt keine Spielwerte."
    ],
    "help.tour.identity.expected": [
      "The header reflects a committed name and the save status shows the result. Existing values may be left unchanged.",
      "Ein übernommener Name erscheint im Kopfbereich und der Status zeigt das Ergebnis. Vorhandene Werte können unverändert bleiben."
    ],
    "help.tour.identity.control": [
      "[[field.name]] in [[edit.identity]]",
      "[[field.name]] unter [[edit.identity]]"
    ],
    "help.tour.abilities.title": [
      "Check your core abilities",
      "Deine Grundattribute prüfen"
    ],
    "help.tour.abilities.instruction": [
      "In [[edit.abilities]], review the six scores and selected saving-throw/skill proficiencies; enter only known values.",
      "Prüfe unter [[edit.abilities]] die sechs Werte sowie Rettungswurf-/Fertigkeitsübung; gib nur bekannte Werte ein."
    ],
    "help.tour.abilities.why": [
      "Scores and proficiency choices are yours; the app calculates ability modifiers and related check/save bonuses.",
      "Werte und Übung wählst du; die App berechnet Attributsmodifikatoren und zugehörige Probe-/Rettungswurfboni."
    ],
    "help.tour.abilities.expected": [
      "You can identify your scores and their derived modifiers. You do not need to change an existing character to continue.",
      "Du erkennst Werte und abgeleitete Modifikatoren. Zum Fortfahren musst du keinen vorhandenen Charakter ändern."
    ],
    "help.tour.abilities.control": [
      "[[edit.abilities]] editor",
      "Editor [[edit.abilities]]"
    ],
    "help.tour.vitals.title": [
      "Make HP ready for play",
      "TP für das Spiel vorbereiten"
    ],
    "help.tour.vitals.instruction": [
      "In [[edit.vitals]], review [[field.level]], [[field.ac]], [[field.hp.max]] and [[field.hp.cur]], entering your actual values.",
      "Prüfe unter [[edit.vitals]] [[field.level]], [[field.ac]], [[field.hp.max]] und [[field.hp.cur]] und trage deine tatsächlichen Werte ein."
    ],
    "help.tour.vitals.why": [
      "HP and Armor Class are manual. Level updates proficiency and total hit dice, but does not fill HP or spell slots.",
      "TP und Rüstungsklasse sind manuell. Stufe aktualisiert Übung und Trefferwürfelgesamtzahl, nicht TP oder Zauberplätze."
    ],
    "help.tour.vitals.expected": [
      "The fields show your intended values after you leave them. Maximum HP above zero makes healing available.",
      "Nach Verlassen zeigen die Felder deine gewünschten Werte. Maximale TP über null ermöglichen Heilung."
    ],
    "help.tour.vitals.control": [
      "[[field.hp.max]] in [[edit.vitals]]",
      "[[field.hp.max]] unter [[edit.vitals]]"
    ],
    "help.tour.play.title": [
      "Find the at-table controls",
      "Die Steuerungen am Spieltisch finden"
    ],
    "help.tour.play.instruction": [
      "On [[nav.play]], locate [[play.amount]], [[play.damage]], [[play.heal]] and [[play.checks]]; use them only for a real game event.",
      "Finde auf [[nav.play]] [[play.amount]], [[play.damage]], [[play.heal]] und [[play.checks]]; verwende sie nur bei einem echten Spielereignis."
    ],
    "help.tour.play.why": [
      "Damage uses temporary HP first. Healing is capped by maximum HP. Conditions are reminders, not automatic rule adjustments.",
      "Schaden nutzt zuerst temporäre TP. Heilung ist durch maximale TP begrenzt. Zustände sind Erinnerungen, keine automatischen Regelanpassungen."
    ],
    "help.tour.play.expected": [
      "You can find HP and check/save controls without changing the character. [[action.undo]] is available after a reversible action.",
      "Du findest TP- und Probe-/Rettungswurfsteuerungen ohne Charakteränderung. Nach einer umkehrbaren Aktion ist [[action.undo]] verfügbar."
    ],
    "help.tour.play.control": [
      "[[play.amount]] in [[play.hp]]",
      "[[play.amount]] unter [[play.hp]]"
    ],
    "help.tour.dice.title": [
      "Read a roll without applying damage",
      "Einen Wurf lesen ohne Schaden anzuwenden"
    ],
    "help.tour.dice.instruction": [
      "Optionally open [[play.dice]], enter 1d20 and choose [[dice.roll]]; then close the dice dialog.",
      "Öffne optional [[play.dice]], gib 1d20 ein und wähle [[dice.roll]]; schließe danach den Würfeldialog."
    ],
    "help.tour.dice.why": [
      "This adds a real roll-history result, not damage or a resource change. You may skip the practice roll.",
      "Das ergänzt einen echten Würfelverlaufseintrag, keinen Schaden oder Ressourcenverbrauch. Du kannst den Übungswurf überspringen."
    ],
    "help.tour.dice.expected": [
      "The result appears in the dice dialog/history, or you continue without rolling.",
      "Das Ergebnis erscheint im Würfeldialog/-verlauf, oder du fährst ohne Würfeln fort."
    ],
    "help.tour.dice.control": [
      "[[play.dice]] / dice expression",
      "[[play.dice]] / Würfelausdruck"
    ],
    "help.tour.sections.title": [
      "Know where the rest lives",
      "Wissen, wo der Rest zu finden ist"
    ],
    "help.tour.sections.instruction": [
      "Visit [[nav.spells]], [[nav.gear]] or [[nav.journal]] with the navigation. On phones, [[nav.more]] also opens [[nav.map]] and [[nav.edit]].",
      "Besuche über die Navigation [[nav.spells]], [[nav.gear]] oder [[nav.journal]]. Auf Handys öffnet [[nav.more]] auch [[nav.map]] und [[nav.edit]]."
    ],
    "help.tour.sections.why": [
      "Spells and gear have explicit item forms; the Journal has saved documents. Map tools appear only after adding a map.",
      "Zauber und Ausrüstung haben eigene Formulare; das Tagebuch enthält gespeicherte Dokumente. Kartenwerkzeuge erscheinen erst nach Hinzufügen einer Karte."
    ],
    "help.tour.sections.expected": [
      "You can open another section and return to [[nav.play]]. No spell, item or map needs to be added for this step.",
      "Du kannst einen anderen Bereich öffnen und zu [[nav.play]] zurückkehren. Für diesen Schritt musst du keinen Zauber, Gegenstand oder keine Karte hinzufügen."
    ],
    "help.tour.sections.control": [
      "Character navigation; [[nav.more]] on phones",
      "Charakternavigation; [[nav.more]] auf Handys"
    ],
    "help.tour.export.title": [
      "Keep a copy outside the browser",
      "Eine Kopie außerhalb des Browsers behalten"
    ],
    "help.tour.export.instruction": [
      "Choose [[nav.more]] → [[backup.exportCharacter]], review [[backup.coverage]], then choose [[action.export]] and check the saved file.",
      "Wähle [[nav.more]] → [[backup.exportCharacter]], prüfe [[backup.coverage]], dann [[action.export]] und kontrolliere die gespeicherte Datei."
    ],
    "help.tour.export.why": [
      "Browser saving is not an external backup. Export includes available media; review missing-media warnings.",
      "Browser-Speichern ist keine externe Sicherung. Export enthält verfügbare Medien; prüfe Warnungen zu fehlenden Medien."
    ],
    "help.tour.export.expected": [
      "You have checked a downloaded JSON file outside browser storage. A prepared-file message alone does not verify that.",
      "Du hast eine heruntergeladene JSON-Datei außerhalb des Browsers geprüft. Die Meldung einer vorbereiteten Datei beweist das allein nicht."
    ],
    "help.tour.export.control": [
      "[[nav.more]] / [[backup.exportCharacter]] / [[action.export]]",
      "[[nav.more]] / [[backup.exportCharacter]] / [[action.export]]"
    ],
    "help.tour.finish.title": [
      "Help stays within reach",
      "Hilfe bleibt erreichbar"
    ],
    "help.tour.finish.instruction": [
      "Open Help from the header or More whenever you need a task, or restart this walkthrough from the Help page.",
      "Öffne Hilfe im Kopfbereich oder unter Mehr, wenn du eine Aufgabe nachschlagen möchtest; auf der Hilfeseite kannst du die Einführung neu starten."
    ],
    "help.tour.finish.why": [
      "Your real changes remain. Closing, skipping or restarting instructions never deletes a character or undoes your work.",
      "Deine echten Änderungen bleiben erhalten. Schließen, Überspringen oder Neustarten löscht keinen Charakter und macht keine Arbeit rückgängig."
    ],
    "help.tour.finish.expected": [
      "The searchable task guide opens when you finish.",
      "Beim Beenden öffnet sich die durchsuchbare Aufgabenhilfe."
    ],
    "help.tour.finish.control": [
      "Help in the header",
      "Hilfe im Kopfbereich"
    ]
  }
};
for(const [key,pair] of Object.entries(data.strings)){ PA.messages.en[key]=pair[0]; PA.messages.de[key]=pair[1]; }
delete data.strings; PA.helpData=data;
})(globalThis.PlayerAlmanac);
