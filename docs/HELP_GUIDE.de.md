# Player Almanac - Hilfe / Anleitung

**7.9.0-folio.2**

Öffne **Hilfe** im Kopfbereich oder unter **Mehr**. Suche nach einer Aufgabe oder Steuerung, wähle ein Thema und öffne den zugehörigen Arbeitsbereich. Charakteraufgaben benötigen einen geöffneten Charakter. App-Hilfe und dieses Dokument verwenden dieselben Inhalte und Beschriftungen.

Die Einführung ist optional. Sie füllt, importiert, löscht oder setzt keine Charakterdaten automatisch zurück. Speichern im Browser ist keine externe Sicherung.

## Einsteigen

### Charaktere erstellen, öffnen und wechseln

Die Bibliothek ist die Sammlung in diesem Browser, kein Cloud-Konto.

#### Einen leeren Charakter erstellen

Wähle in **Bibliothek** **Charakter erstellen** → **Mit leerem Bogen beginnen**. Trage bekannte Angaben ein, prüfe **Stufe** und **Regelausgabe** und wähle im Formular **Charakter erstellen**. Der neue Datensatz öffnet sich in **Identität**. Das ist ein echter Charakter; die Einführung erstellt keinen automatisch.

#### Öffnen oder wechseln

Wähle auf einer Bibliothekskarte **Folio öffnen**, um **Spielen** zu öffnen. Auf breiten Bildschirmen wechselst du mit **Aktiver Charakter** in der Seitenleiste. Auf dem Handy öffnest du die andere Karte über **Bibliothek**. Ein Bildschirmwechsel versucht zuerst, ausstehende Änderungen zu speichern; behebe vorher Validierungs- oder Speicherfehler.

#### Einen Charakter finden

Mit **Charaktere suchen** suchst du nach Name, Spezies, Klasse oder Kampagne. Kampagnenfilter und Sortierung grenzen die Bibliothek ein. Keine Treffer bedeutet nicht, dass Daten gelöscht wurden: **Leeren** entfernt die Filter. Strg/Cmd+K öffnet **Feld oder Werkzeug finden** außerhalb von Dialogen.

### Speichern und lokalen Speicher verstehen

Ein gespeicherter Browser-Datensatz und eine exportierte Sicherungsdatei sind nicht dasselbe.

#### Ein Charakterfeld übernehmen

Gib im Charaktereditor einen Wert ein und verlasse das Feld oder drücke Enter (nicht bei mehrzeiligem Text). Kontrollkästchen und Auswahllisten übernehmen Änderungen direkt. Abgeleitete Werte werden aus übernommenen Daten aktualisiert. Escape verwirft die aktuelle Feldbearbeitung. Beachte den Speicherstatus im Kopfbereich; es gibt keine globale Speichern-Schaltfläche.

#### Ein Formular abschließen

Objekt- und Dokumenteditoren verwenden **Speichern**; Erstellen, Wirken, Importieren und Rasten haben eigene Bestätigungen. Eingaben können als wiederherstellbarer Entwurf gespeichert sein, ohne den Charakter zu ändern. **Abbrechen** oder **Schließen** bedeutet nicht, dass ein Entwurf gelöscht wurde. Unter **Wiederherstellbare Entwürfe** kannst du ihn fortsetzen oder ausdrücklich verwerfen. Zustände und ausgegebene Trefferwürfel wirken bereits beim Betätigen ihrer Steuerelemente im Dialog.

#### Eine unabhängige Kopie aufbewahren

Datensätze und Medien liegen lokal in diesem Browserprofil und auf dieser Website. Auch das App-Verzeichnis grenzt die Bibliothek ab. Ein anderer Browser, ein anderes Profil, eine andere Adresse, ein anderer Port oder ein anderes Verzeichnis kann eine andere Bibliothek zeigen. Gelöschte Websitedaten, privates Surfen oder Speicherbereinigung können Datensätze und lokale Sicherungspunkte entfernen. Cloud-Synchronisierung und kontobasierte Wiederherstellung sind nicht implementiert. Exportiere eine Datei mit Medien und bewahre sie außerhalb des Browsers auf.

### Einen Charakter sicher importieren

Zuerst prüfen: Standardmäßig werden Kopien hinzugefügt. Für einen leeren Charakter brauchst du keinen Import.

#### Auswählen und prüfen

Wähle in **Bibliothek** **Importieren**, dann **Datei auswählen** für eine unterstützte JSON-Datei, oder gib JSON unter **Stattdessen JSON einfügen** ein. Wähle **Importvorschau**. Prüfe Charaktere, Medien, Warnungen und normalisierte Werte. Die Dateiauswahl oder Vorschau allein importiert nichts. Dateien dürfen höchstens 70 MiB groß sein.

#### Hinzufügen und anschließend öffnen

Lasse **Importvorgang** auf **Als neue Charaktere hinzufügen**, um eine getrennte Kopie zu erhalten. Bestätige angezeigte Anpassungen erst nach Prüfung. Wähle in der Vorschau **Importieren**. Ein erfolgreicher Charakterimport führt zu **Bibliothek** zurück; öffne die importierte Karte mit **Folio öffnen**. Die Originaldatei bleibt unverändert. Der Parser erkennt unterstützte Charakter- und Bibliotheksformate; ein beliebiges PDF oder Website-Export wird durch Umbenennen nicht zu unterstütztem JSON.

#### Nur bewusst ersetzen

**Benannten Charakter ersetzen** ersetzt den ausgewählten vorhandenen Charakter. **Gesamte Bibliothek ersetzen (erweitert)** ist eine erweiterte, destruktive Option mit zusätzlicher Bestätigung. Beide verlangen eine Bestätigung und legen vor dem Ersetzen einen lokalen Sicherungspunkt an. Exportiere vorher eine externe Sicherung. Die Wiederherstellung von Addons ist optional; wiederhergestellte Addons bleiben deaktiviert. Öffne für eine Kampagnenkarten-JSON zuerst einen Charakter und verwende **Kampagnenkarte importieren** unter **Karte**.

### Einen Charakter duplizieren oder löschen

Verwende das Menü der richtigen Bibliothekskarte, nicht das eines anderen aktiven Charakters.

#### Eine Kopie erstellen

Wähle auf einer Bibliothekskarte **Mehr** → **Duplizieren**. Eine benannte Kopie wird sofort hinzugefügt; das ist keine ungespeicherte Vorschau. Ihr Text lässt sich unabhängig bearbeiten. Unveränderliche Porträt- und Kartenmedien können intern gemeinsam genutzt werden, bis sie ersetzt werden.

#### Mit Blick auf Wiederherstellung löschen

Wähle auf der Karte **Mehr** → **Löschen**, lies die Bestätigung mit dem Charakternamen und bestätige nur bewusst. Zuvor wird ein lokaler Sicherungspunkt erstellt. Erstellen, Duplizieren und Löschen in der Bibliothek gehören nicht zum normalen **Rückgängig** des Charakters. Unter **Lokale Wiederherstellungspunkte** in **Sicherung & Wiederherstellung** kannst du die Wiederherstellung prüfen, vorzugsweise als neue Datensätze. Ein Sicherungspunkt schützt nicht vor dem Löschen der Browserdaten.

## Charakter vorbereiten

### Identität und Hintergrund festlegen

Beginne mit bekannten Angaben; Player Almanac baut Klassen nicht automatisch auf.

#### Identität bearbeiten

Öffne einen Charakter und wähle **Bearbeiten** im Kopfbereich oder **Mehr** → **Charakter bearbeiten**, dann **Identität**. Trage nach Bedarf **Charaktername**, **Spezies / Abstammung**, **Klasse / Unterklasse**, **Kampagne**, **Gesinnung** und **Hintergrund** ein. Verlasse jedes Feld, um es zu übernehmen. Klassen- oder Hintergrundnamen tragen Spielwerte nicht automatisch ein.

#### Ein Hintergrundpaket prüfen

Die Hintergrundauswahl ist ein eigener, optionaler Ablauf. Prüfe editionsabhängige Auswahlmöglichkeiten und Änderungen vor der Übernahme. Ein Paket kann Übung, Ausrüstung, Münzen, Merkmale, Talente und Hintergrundgeschichte ändern; 2024 können Attributserhöhungen enthalten sein. Das geht über das Umbenennen von **Hintergrund** hinaus. Übernommene Charakteränderungen lassen sich mit **Rückgängig** zurücknehmen.

### Attribute, Fertigkeiten und Modifikatoren eingeben

Trage Werte und Übung ein; daraus leitet die App die angezeigten Boni ab.

#### Werte und Übung festlegen

Unter **Charakter bearbeiten** → **Attribute & Übung** trägst du jeden Attributswert (1–30), Rettungswurfübung und manuelle Modifikatoren ein. Setze bei Fertigkeiten Übung/Expertise und Modifikatoren nach Bedarf. Expertise aktiviert auch Übung; ohne Übung wird Expertise entfernt. Diese Auswahl erfolgt manuell und wird nicht aus dem Klassentext abgeleitet.

#### Berechnete Werte verstehen

Attributsmodifikator = abgerundet (Wert − 10) / 2. Der Übungsbonus folgt **Stufe**. Rettungswürfe addieren Attributsmodifikator, gewählte Übung und manuellen Modifikator. Fertigkeiten addieren Attributsmodifikator, gewählte Übung (doppelt bei Expertise) und manuellen Modifikator. **Passive Wahrnehmung** ist 10 + Wahrnehmungsbonus. **Initiative** verwendet Geschicklichkeit. Zustände und Erschöpfung ändern diese Zahlen oder den Würfelmodus nicht automatisch.

### Trefferpunkte, Verteidigung und Regeln einstellen

Trage die tatsächlichen Charakterwerte ein; Standardwerte sind kein fertiger Charakter.

#### Die wichtigsten Werte eingeben

Prüfe unter **Charakter bearbeiten** → **Lebenswerte & Regeln** **Stufe**, **Regelausgabe**, **Rüstungsklasse**, **Bewegungsrate**, **Maximale TP** und **Aktuelle TP**. Trage **Temporäre TP** nur bei Bedarf ein. Rüstungsklasse, Bewegungsrate und TP sind manuell: Ausrüstung, Klassentext und Attribute berechnen sie nicht. Heilung unter **Spielen** ist bei maximalen TP von null nicht verfügbar.

#### Trefferwürfel und Ausnahmen prüfen

Eine Änderung von **Stufe** setzt **Trefferwürfel insgesamt** auf diese Stufe und begrenzt ausgegebene Trefferwürfel auf die neue Gesamtzahl. Prüfe danach **Trefferwürfel**, **Verbrauchte Trefferwürfel** und gewollte Ausnahmen bei der Gesamtzahl. Prüfe die TP- und Trefferwürfelregeneration bei langer Rast selbst; ein Editionswechsel schreibt vorhandene Ausnahmen nicht um. Auch Zauberplatz-Gesamtzahlen sind manuell.

### Ein Porträt hinzufügen und ausrichten

Porträtmedien werden lokal gespeichert und im Charakter referenziert.

#### Medien wählen oder ersetzen

Verwende unter **Charakter bearbeiten** → **Identität** **Porträt auswählen**. Wähle ein unterstütztes Bild (PNG, JPEG, WebP, GIF, AVIF oder BMP) oder MP4/WebM-Video bis 50 MiB. Eine gültige Datei ersetzt das Porträt nach dem Speichern; es gibt kein zusätzliches Speichern-Formular. Bewahre auch die Originalmediendatei extern auf.

#### Den Ausschnitt anpassen

Passe den Ausschnitt mit **Zoom**, **Horizontal** und **Vertikal** an und verlasse jedes Feld zur Übernahme. **Entfernen** verlangt eine Bestätigung. Ersetzen und Entfernen sind über den Charakterverlauf umkehrbar, solange Verlauf und Medien vorhanden sind. Reduzierte Bewegung und Lite-Modus pausieren dekorative Videos. Eine Warnung vor fehlenden Medien behält die Referenz, erzeugt aber keine verlorene Datei neu: Stelle einen Export mit Medien wieder her oder wähle die Originaldatei erneut.

### Angriffe, Merkmale und Talente vorbereiten

Beschreibungen und Modifikatoren stammen von dir; sie sind keine automatische Regelverarbeitung.

#### Einen Angriff hinzufügen

Erstelle unter **Charakter bearbeiten** → **Angriffe** einen eigenen Angriff oder wähle Einträge aus dem Waffenkatalog. Speichere Name, Angriffsbonus, Schadensausdruck und Notizen. Prüfe hinzugefügte Katalogeinträge. Der Angriffsbonus ist manuell; gewürfelt wird mit der ersten vorzeichenbehafteten Ganzzahl im gespeicherten Bonus, nicht mit einem aus Klasse oder Attributen neu berechneten Bonus.

#### Merkmale und Talente notieren

Ergänze unter **Charakter bearbeiten** → **Merkmale & Talente** Beschreibungen und **Regelmerkmale**; übernimm Objektdialoge mit **Speichern**. Rast-Rücksetzungen dienen nur als Erinnerung. Anwendungen in Beschreibungstexten sind keine Zähler und setzen sich nicht automatisch zurück. Entfernen verlangt eine Bestätigung. Auf **Spielen** kannst du diese Einträge lesen.

### Zauberwirken und Zauberplätze einrichten

Wähle das Zauberattribut und trage deine Zauberplatz-Gesamtzahlen ein, bevor du Wirken protokollierst.

#### Zauberwerte festlegen

Wähle unter **Charakter bearbeiten** → **Zaubereinstellungen** **Zauberattribut**. Der Zauberangriff verwendet dessen Modifikator + Übungsbonus. Der Zauberrettungswurf-SG beträgt 8 + diese Werte, sofern **Manueller Zauberrettungs-SG** keinen manuellen Wert enthält. Leere das Ausnahmefeld, um wieder zu berechnen. Ohne Attribut ist der Zauberangriff-Würfelknopf deaktiviert.

#### Zauberplätze eingeben statt ableiten

Trage für jeden Zaubergrad 1–9 Gesamtzahl und verbrauchte Plätze (0–9) ein. Verbrauchte dürfen die Gesamtzahl nicht überschreiten; eine niedrigere Gesamtzahl begrenzt den Verbrauch entsprechend. Klassenname und Charakterstufe tragen keine Zauberplatzprogression ein. Nach der Einrichtung zeigt **Zauber** nutzbare Platz-Steuerungen. Protokolliertes Wirken oder Verbrauch/Wiederherstellung eines Platzes ändern den Verbrauch; eine protokollierte lange Rast setzt ihn zurück.

## Im Spiel verwenden

### TP und Zustände im Spiel verwalten

Verwende die echten Steuerungen nur, wenn ihre Änderungen zu diesem Charakter gehören.

#### Schaden oder Heilung anwenden

Gib auf **Spielen** einen positiven Wert in **Betrag** ein und wähle **Schaden** oder **Heilen**. Schaden verbraucht zuerst temporäre TP, danach sinken aktuelle TP bis mindestens null. Heilung erhöht aktuelle TP bis zum Maximum; bereits überhöhte Werte werden nicht gesenkt. Die Schaltflächen speichern sofort eine Charakteraktion. **Rückgängig** macht sie rückgängig. Rüstung oder Resistenz berechnen den Schaden nicht.

#### Temporäre TP setzen

Öffne **Temporäre TP** im TP-Bereich, gib die gewünschte Gesamtzahl ein und wähle **Speichern**. Der Wert wird ersetzt; die neue Zahl wird nicht auf die alte addiert. Maximale TP bearbeitest du unter **Lebenswerte & Regeln**; Heilung erhöht sie nicht.

#### Einen Zustand festhalten

Öffne **Zustand hinzufügen** und aktiviere oder entferne Zustände. Jedes Kontrollkästchen speichert direkt; das Schließen des Dialogs verwirft diese Änderung nicht. Über einen aktiven Zustand ergänzt du **Zustandsnotiz**. Beim Entfernen bleibt die Notiz erhalten. Zustände und **Erschöpfung** sind Erinnerungen: Würfelmodus und nötige manuelle Anpassungen wählst du selbst.

### Proben, Rettungswürfe und Würfelwürfe

Normale Würfe protokollieren Ergebnisse; sie wenden keinen Schaden an und verbrauchen keine Ressourcen.

#### Eine Probe oder einen Rettungswurf würfeln

Verwende auf **Spielen** die benannten Probe-/Rettungswurf-Steuerungen in **Proben & Rettungswürfe**; klappe **Fertigkeiten** für Fertigkeiten auf. Auch **Initiative** würfelt. Wähle vor einem W20-Wurf normal, Vorteil oder Nachteil. Das gilt für Proben, Rettungswürfe, Initiative und Angriffe, nicht für frei eingegebene Würfelausdrücke. Lies Ergebnis und Verlauf; setze Spielauswirkungen selbst um.

#### Den Würfelbereich nutzen

Wähle **Würfel**, gib einen Würfelausdruck wie 1d20 oder 2d6+3 ein und wähle **Würfeln** oder drücke Enter. Die d4–d100-Kürzel würfeln sofort. Bei einem eingetragenen Angriff würfelt **Angriff** mit dessen manuellem Bonus; **Schaden würfeln** würfelt den gespeicherten Ausdruck. Keiner dieser Würfe ändert TP. Ungültige Ausdrücke zeigen einen Fehler statt eines erfundenen Ergebnisses.

#### Den Würfelverlauf lesen

Letzte Würfe erscheinen auf **Spielen** und im Würfeldialog. Die Anzeige ist begrenzt (8 auf **Spielen**, 15 im Dialog). Ergebnisse werden getrennt von Charakteränderungen gespeichert; eine Sitzungskennzeichnung bedeutet, dass der Wurf nicht dauerhaft gespeichert ist. Normale Würfe verschwinden nicht durch Charakter-Rückgängig. Wird eine Trefferwürfel- oder Konzentrationsaktion rückgängig gemacht, wird ihr Wurf entsprechend markiert; Wiederholen nutzt das vorhandene Ergebnis statt neu zu würfeln.

### Rasten, Konzentration und Todesrettungswürfe

Diese Steuerungen erfassen ausgewählte Effekte, nicht jede Regel einer Rast oder eines Zustands.

#### Trefferwürfel ausgeben

Öffne **Rast** → **Kurze Rast**, setze **Anzahl Trefferwürfel** und wähle **Trefferwürfel verbrauchen & würfeln**. Verfügbare Trefferwürfel werden sofort ausgegeben; gewürfelte Heilung wird durch maximale TP begrenzt. Verwendet werden eingestellter Trefferwürfel, Konstitution und Regeledition. Das Schließen verwirft diese Aktion nicht. **Erinnerungen an Merkmalsrücksetzungen** sind nur Erinnerungen; eigene Anwendungszahlen werden nicht zurückgesetzt.

#### Eine lange Rast protokollieren

Öffne **Lange Rast** und prüfe die Regenerationseinstellungen vor **Lange Rast eintragen**. Die Aktion wendet eingestellte TP- und Trefferwürfelregeneration an, setzt verbrauchte Zauberplätze zurück, entfernt temporäre TP und Todesrettungswurf-Zähler und beendet Konzentration. Sie entfernt weder Zustände noch Erschöpfung und schreibt keine Merkmalsbeschreibungen oder Anwendungszahlen um. Passe TP-/Trefferwürfel-Rastregeln bei Bedarf unter **Lebenswerte & Regeln** an.

#### Konzentration verwalten

Setze Konzentration unter **Lebenswerte & Regeln** oder beim Protokollieren eines Zaubers. **Konzentration beenden** beendet sie sofort. Aktiviere **Nach Schaden an Konzentrationswurf erinnern** für eine Nachfrage nach Schaden: Dieser ist beim Öffnen bereits angewendet. Der Konzentrationswurf nutzt den Konstitutionsrettungswurf-Bonus; Misslingen beendet die Konzentration. Das Schließen macht Schaden nicht rückgängig.

#### Todesrettungswürfe festhalten

Der Todesrettungswurf-Bereich auf **Spielen** erscheint bei aktuellen TP 0 und maximalen TP über 0. Trage Ergebnisse mit **Erfolge** und **Fehlschläge** ein (je 0–3). Das sind manuelle Zähler, keine automatischen Todesrettungswürfe oder vollständigen Sterben-/Stabilisierungsregeln. Heilung löscht die Zähler nicht automatisch; prüfe sie selbst oder protokolliere eine lange Rast.

### Zauber verwalten und Wirken protokollieren

Das Zauberbuch enthält deine Einträge. Protokolliertes Wirken erfasst nur ausgewählte Ressourcen.

#### Das Zauberbuch aufbauen und durchsuchen

Verwende unter **Zauber** **Zauber hinzufügen** für den Katalog oder **Eigenen Inhalt erstellen** für eigene Einträge. Prüfe Edition und Details; übernimm eigene Änderungen mit **Speichern**. Suche und filtere nach Grad, Vorbereitung, Konzentration oder Ritual und ändere bei Bedarf die Sortierung. Der Zaubername öffnet Details. Das Vorbereitet-Kästchen speichert sofort; Vorbereitung wird nicht aus Klasse oder Stufe abgeleitet.

#### Wirken bewusst protokollieren

Wähle **Wirken eintragen**. Prüfe, ob ein Platz verbraucht werden soll, und wähle einen verfügbaren Grad oder gib einen Grund ohne Platz an (Zaubertrick, Ritual oder anderer schriftlicher Grund). Wähle, ob Konzentration erfasst wird; bestehende Konzentration zu ersetzen verlangt die angezeigte Bestätigung. Bestätige mit **Wirken eintragen**. Ein ausgewählter Platz wird verbraucht und optional Konzentration geändert; Schaden, Komponenten oder Zaubereffekte werden nicht umgesetzt.

#### Ressourcen anpassen und Änderungen prüfen

Mit den benannten Verbrauchs-/Wiederherstellungssteuerungen neben einem eingerichteten Zaubergrad änderst du den Verbrauch um eins, nicht die Gesamtzahl. Für Gesamtzahlen oder fehlende Grade öffne **Zaubereinstellungen**. Katalogergänzungen sind optional: Prüfe Vorher/Nachher vor der Übernahme. Entfernen verlangt Bestätigung; übernommene Zauberänderungen gehören zum Charakterverlauf.

### Ausrüstung, Einstimmung und Geld erfassen

Inventareinträge sind Text, keine automatischen Rüstungs- oder Traglastberechnungen.

#### Ausrüstung hinzufügen oder bearbeiten

Öffne **Ausrüstung**. Füge Ausrüstungs- oder Einstimmungseinträge hinzu, schreibe den Text und wähle **Speichern**. Der Ausrüstungskatalog ist ein optionaler Ausgangspunkt; prüfe hinzugefügte Einträge. Durchsuche die Listen und bearbeite Objekte über deren Steuerungen. Entfernen verlangt Bestätigung. Mengen, Gewicht, Ladungen, Ausrüstungsstatus und Einstimmungsgrenzen werden nicht automatisch verwaltet.

#### Münzen und Ausbildung aktualisieren

Trage jede Münzsorte einzeln ein und verlasse das Feld zum Speichern. Es gibt keine automatische Währungsumrechnung oder Abbuchung bei Käufen. Prüfe Rüstungsausbildung, **Waffenübung**, **Werkzeuge** und **Sprachen** im Ausbildungsbereich. Diese Einträge berechnen Rüstungsklasse oder Angriffsboni nicht automatisch neu.

### Hintergrundgeschichte und Sitzungsnotizen schreiben

Das Tagebuch enthält bearbeitbare Dokumente, keine Liste datierter Einträge.

#### Ein Dokument schreiben und speichern

Wähle unter **Tagebuch** **Bearbeiten** für **Hintergrundgeschichte** oder **Sitzungsnotizen**. Schreibe im Dialog und übernimm mit **Speichern**. Ein gespeicherter Entwurf ist noch nicht das angezeigte Dokument. Ergänze für mehrere Sitzungen eigene Datumsüberschriften in den Sitzungsnotizen.

#### Optionales Fateweaving verwenden

Aktiviere **Schicksalsweben anzeigen**, um **Faden**, **Schicksalsnotizen**, **Schicksalsbelohnungen**, **Fluch** und die drei Segen-Dokumente zu lesen/bearbeiten. Die Sichtbarkeit wird je Charakter gespeichert. Ausblenden löscht keine Inhalte und entfernt sie nicht aus Exporten; vollständiger Druck hat eine eigene Einschlussoption.

## Mit Karten erkunden

### Eine Karte hinzufügen und navigieren

Karten gehören zum ausgewählten Charakter. Kartenwerkzeuge erscheinen erst, wenn eine Karte existiert.

#### Hinzufügen oder importieren

Öffne **Karte** in der Seitenleiste oder auf dem Handy **Mehr** → **Karte**. Wähle **Karte hinzufügen**, wähle ein lokales Bild, benenne es und verwende **Speichern**. Kartenbilder dürfen höchstens 10 MiB und 20.000 Pixel je Dimension haben. **Kampagnenkarte importieren** zeigt eine Kampagnenkarten-JSON zur Prüfung und bestätigt den Import; vorhandene Kampagnen bleiben erhalten. Über **Kampagnenkarten** wechselst du die Karte.

#### Navigieren ohne Datensatzänderung

Ziehe mit **Verschieben / auswaehlen** zum Verschieben; verwende **Vergrößern**, **Verkleinern** und **Karte einpassen**. Pinch oder Strg/Cmd+Mausrad ändert ebenfalls den Zoom. Ansichtszoom und Verschieben bearbeiten keine Markerkoordinaten und kalibrieren keine Entfernung. Öffne **Auswahl und Karteninhalt** für zugängliche Listen und Filter statt nur das Bild zu verwenden.

#### Eine Karte verwalten oder exportieren

Öffne **Kartenverwaltung und Werkzeuge** für Umbenennen, **Bild ersetzen**, **Kampagnenkarte exportieren** und Entfernen. Ein Ersatzbild behält normalisierte Pins/Routen; die Kalibrierung wird gelöscht, sofern du nicht ausdrücklich **Bestehende Kalibrierung trotz Bildwechsel behalten** wählst. Entfernen verlangt Bestätigung und ist als Charakteraktion umkehrbar. Export erstellt Kampagnen-JSON mit Warnung bei fehlenden Medien. Eine Warnung vor fehlendem Bild bewahrt Geometrie/Referenz, nicht das verlorene Bild.

### Pins setzen, Routen zeichnen und kalibrieren

Positionen lassen sich per Tastatur eingeben; zum Bearbeiten ist Zeigen auf die Karte nicht zwingend.

#### Einen Marker setzen oder bewegen

Wähle **Markierung setzen** und eine Position oder **Markierung hinzufügen** unter **Kartenverwaltung und Werkzeuge**. Benenne den Pin, prüfe Typ, Notizen und optional verknüpften Charakter und wähle **Speichern**. **Horizontale Position (%)** und **Vertikale Position (%)** sind Prozentwerte. Wähle vorhandene Marker zum Prüfen/Bearbeiten. Mit Tab erreichst du Marker, Enter öffnet Details; Pfeiltasten bewegen sie, Umschalt+Pfeil stärker. Ziehen und Pfeiltasten speichern die Position. Bearbeite **Ursprung** und **Spielerfigur** in ihren Formularen; **Figur sperren** verhindert Token-Bewegung.

#### Eine Route erfassen

Wähle **Route zeichnen** und Punkte, danach **Kartenverwaltung und Werkzeuge** → **Route hinzufügen** zum Prüfen und Speichern. Alternativ gib **Routenpunkte (x%, y%; ein Punkt pro Zeile)** direkt ein: ein x%, y%-Paar je Zeile, mindestens zwei Punkte. Der Editor kann Punkte ergänzen, entfernen und umordnen. Prüfe Name, Farbe, Zuordnung und Notizen. Routenlängen werden aus Bildkoordinaten berechnet; Reisegeschwindigkeit und Bewegungsregeln werden nicht durchgesetzt.

#### Eine sinnvolle Skala festlegen

Öffne **Maßstab kalibrieren** oder wähle **Zweipunkt-Kalibrierung** und zwei verschiedene Punkte. Trage bekannte Entfernung und Einheit ein oder gib Bildpixel pro Einheit direkt ein. Prüfe Vorher/Nachher und bestätige. Längen nutzen Originalbildpixel, nicht den Ansichtszoom. Ohne Kalibrierung sind es Pixelentfernungen. **Kalibrierung loeschen** verlangt Bestätigung. **Kartenaktion rueckgaengig** funktioniert nur, wenn die neueste Verlaufsaktion zu dieser Karte gehört; verwende sonst den chronologischen **Änderungsverlauf**, statt neuere Arbeit zu überspringen.

## Arbeit sichern und retten

### Rückgängig, Wiederholen und ihre Grenzen

Der Verlauf ist chronologisch und gehört zum ausgewählten Charakter.

#### Eine übernommene Aktion zurücknehmen

Verwende **Rückgängig** oder **Wiederholen** im Kopfbereich oder **Mehr** → **Änderungsverlauf**, um die Reihenfolge zu prüfen. Je Charakter bleiben bis zu 100 Rückgängig-Einträge. Rückgängig/Wiederholen schreibt wieder einen gespeicherten Zustand; eine neue Charakteraktion löscht den Wiederholen-Zweig. Strg/Cmd+Z und Strg/Cmd+Umschalt+Z wirken nur außerhalb bearbeitbarer Texte und Dialoge auf den Charakterverlauf. Im Textfeld gelten normale Textbearbeitung und Escape vor der Übernahme.

#### Wissen, was nicht rückgängig gemacht wird

Erstellen, Duplizieren, Löschen und Bibliothekszugehörigkeit beim Import gehören nicht zum normalen Charakter-Rückgängig. Einstellungen, exportierte Dateien und normale Würfelergebnisse werden nicht zurückgenommen. Ressourcenändernde Würfe gehören zu ihrer Charakteraktion und können als rückgängig markiert werden, ohne ein neues Ergebnis zu erfinden. Eine Kartenaktion kann keine neuere andere Änderung überspringen. Prüfe bei gelöschten/ersetzten Datensätzen Sicherungspunkte oder eine externe Sicherung.

### Eine externe Sicherung exportieren

Die App kann eine Datei vorbereiten; nur du kannst prüfen, wo sie gespeichert wurde.

#### Einen Charakter oder die Bibliothek sichern

Verwende für einen Charakter auf dessen Bibliothekskarte **Mehr** → **Diesen Charakter mit Medien exportieren** oder öffne ihn und wähle **Mehr** → **Diesen Charakter mit Medien exportieren**. Für alles öffne **Sicherung & Wiederherstellung** → **Bibliothek mit Medien exportieren**. Ausstehende Charakteränderungen müssen erfolgreich gespeichert sein. Prüfe **Sicherungsumfang** und Warnungen zu fehlenden Medien, dann wähle **Datei exportieren**. Prüfe Download/Speicherergebnis im Browser und bewahre JSON unabhängig vom Websitespeicher auf.

#### Umfang und Größe prüfen

Normale Charakter-/Bibliotheksexporte betten verfügbare Porträt- und Kartenmedien ein. Fehlende Medien lassen sich nicht aus ihrer Referenz rekonstruieren. **Addon-Dateien einschließen (nach Import deaktiviert)** ist optional und stellt Addon-Dateien deaktiviert wieder her. Dateien über der 70-MiB-Importgrenze eignen sich nicht für diesen Importer: Bewahre einen Wiederherstellungsexport auf und exportiere zusätzlich kleinere einzelne Charaktere. Ein Datum für „Datei vorbereitet“ beweist keine abgeschlossene externe Sicherung.

#### Prüfen ohne etwas zu ersetzen

Mit **Sicherungsdatei prüfen** liest und prüfst du eine gespeicherte Sicherungsdatei. Das prüft ihre lesbare Struktur, garantiert aber nicht jeden späteren Wiederherstellungsfall. Auch eine normale Importvorschau ändert bis zur endgültigen Importaktion nichts. Für eine gründlichere Prüfung importiere neue Datensätze in einem getrennten Testbrowser/-profil und vergleiche sie; ersetze zum Testen niemals deine einzige funktionierende Bibliothek.

### Entwürfe retten und Speicherfehler beheben

Bei Speicherwarnungen sichere deine Arbeit, bevor du die Seite schließt.

#### Lokale Wiederherstellung nutzen

Unter **Sicherung & Wiederherstellung** erstellt **Lokalen Wiederherstellungspunkt erstellen** einen lokalen Sicherungspunkt. Vorhandene **Lokale Wiederherstellungspunkte** lassen sich im Importablauf prüfen. Sie enthalten Text-/Verlaufsreferenzen und Medienschlüssel, nicht jede Mediendatei als unabhängige Kopie. Sie liegen im selben Browser und können gelöschten Websitespeicher nicht zurückholen. Füge wiederhergestellte Charaktere vorzugsweise als neue Datensätze hinzu, bevor du auswählst, welche bleiben.

#### Einen Entwurf fortsetzen oder verwerfen

Prüfe unter **Wiederherstellbare Entwürfe** den benannten Entwurf und wähle eine angebotene Aktion zum Fortsetzen, Vergleichen, Exportieren oder Speichern als neu. Verfügbare Aktionen hängen vom Entwurfstyp ab. Verwerfen verlangt Bestätigung. Ein Importentwurf kann die Originaldatei erneut benötigen. Ein geschlossenes, nicht übernommenes Formular kann weiterhin einen wiederherstellbaren Entwurf haben.

#### Einen fehlgeschlagenen oder kollidierenden Speichervorgang behandeln

Öffne den Speicherstatus im Kopfbereich. Verwende bei Bedarf **Erneut versuchen**, **Gespeicherte Daten und Entwurf vergleichen** zum Vergleich gespeicherter Daten mit dem Entwurf oder **Entwurf als neuen Charakter speichern**, sofern angeboten. Sichere einen nur im Speicher vorhandenen Entwurf mit **Jetzt Wiederherstellungsdatei exportieren**, bevor er verloren geht, und behalte die Datei. Nur ein Tab darf gleichzeitig bearbeiten: Lesemodus erlaubt Lesen und Würfeln; Bearbeiten verlangt ausdrückliche Übernahme. Lösche zur Fehlersuche nicht als Erstes den Speicher.

### Eine Charakterreferenz drucken

Drucken liefert einen lesbaren Schnappschuss, keine wiederherstellbare Charaktersicherung.

#### Den gespeicherten Schnappschuss vorbereiten

Öffne einen Charakter, dann **Mehr** → **Drucken**. Die App speichert zuerst ausstehende Änderungen und erstellt einen Schnappschuss der gespeicherten Revision. Wähle unter **Inhalt** **Spielreferenz** oder **Vollständiger Bogen & Beschreibungen** sowie A4 oder Letter unter **Papier**. Prüfe **Schicksalsweben im vollstaendigen Druck einschliessen (auch ausgeblendete Eintraege)**: Ausgeblendete Fateweaving-Einträge können im vollständigen Druck enthalten sein, solange du dies nicht ausschaltest.

#### Die Browser-Druckvorschau nutzen

**Seite einpassen**, **Breite einpassen** und Zoom verändern die Bildschirmvorschau, nicht den Charakter oder Druckinhalt. **Drucken / PDF speichern** öffnet den Druckablauf des Browsers. Dort bestimmst du endgültige Seitenumbrüche, Ränder und Drucker/PDF-Ziel. Der Schnappschuss bleibt unverändert; kehre nach späteren Änderungen zum Charakter zurück und öffne Drucken erneut. Exportiere für Wiederherstellung zusätzlich JSON.

### Häufige Probleme lösen

Beachte die tatsächlich angezeigte Warnung und vermeide destruktive „Zurücksetzen“-Versuche.

#### Eine Aktion fehlt oder ist deaktiviert

Kein aktiver Charakter: Öffne zuerst einen aus der Bibliothek. Heilung deaktiviert: Setze maximale TP unter **Lebenswerte & Regeln** über null. Kein Platz verfügbar: Prüfe Gesamtzahl und Verbrauch unter **Zaubereinstellungen**. Keine Kartenwerkzeuge: Füge eine Karte hinzu oder wähle sie aus. Lesemodus: Ein anderer Tab bearbeitet oder ein Update pausiert; nutze Statushinweise und ausdrücklichen Übernahme-/Updateablauf.

#### Ein Wert speichert nicht oder Navigation stoppt

Korrigiere Bereich oder Format des markierten Felds und verlasse es erneut. Ausgegebene Trefferwürfel und verbrauchte Zauberplätze dürfen ihre Gesamtzahl nicht überschreiten. Bildschirmwechsel werden blockiert, wenn ausstehende Änderungen nicht sicher sind. Öffne den Status für Wiederherstellungsoptionen; exportiere vor dem Schließen Arbeit, die nur im Speicher liegt. Ein Formularentwurf ist erst mit endgültigem Speichern ein übernommener Eintrag.

#### Import wird abgelehnt oder ist unvollständig

Prüfe JSON-Syntax, unterstütztes Format und 70-MiB-Grenze. Prüfe Normalisierungen und ungültige Einträge und bestätige nur akzeptierte Änderungen. Nur gültige Einträge zu importieren ist eine bewusste Teilimport-Auswahl, keine automatische Reparatur. Behalte Originaldatei und angebotenen Entwurf. Eine Kampagnenkartendatei gehört in den Kartenbereich eines ausgewählten Charakters.

#### Charaktere, Medien oder Offlinezugriff fehlen

Entferne zuerst Bibliotheksfilter und prüfe ursprünglichen Browser/Profil, Websiteadresse und App-Verzeichnis. Prüfe Wiederherstellung, bevor du etwas löschst. Stelle fehlende Medien aus einer Sicherung mit Mediendateien wieder her oder wähle Originaldateien neu. Verbinde dich bei fehlender Offline-Bereitschaft erneut und versuche es mit vollständiger passender Version. Das Löschen von Websitedaten kann genau die Datensätze zerstören, die du retten möchtest.

## Persönlich einrichten

### Sprache und Barrierefreiheit einstellen

Darstellungseinstellungen sind Präferenzen, keine Charakteränderungen.

#### Leseeinstellungen wählen

Öffne **Einstellungen** → **Darstellung**. Wähle eines der acht Designs oder aktiviere **Hoher Kontrast**. Unter **Bewegung** wählst du **Systemeinstellung**, **Reduziert** oder **Voll**; reduzierte Bewegung des Systems wird weiterhin berücksichtigt. **Lite-Modus (dekorative Medien pausieren)** pausiert dekorative Medien. Änderungen werden direkt gespeichert und erzeugen keine Charakter-Verlaufsaktion.

#### Zwischen Englisch und Deutsch wechseln

Wähle unter **Sprache** English oder Deutsch. Diese Hilfe und Einführung folgen der Auswahl. Eigene Texte und Kataloginhalte werden dadurch nicht übersetzt; einige übernommene Katalog-/Diagnosetexte können Englisch bleiben. Navigationsbezeichnungen dieser Hilfe verwenden die aktiven App-Übersetzungen. Tastaturfokus bleibt sichtbar; die Einführung funktioniert ohne Hover oder Ziehen.

### Offlinezugriff und Installation nutzen

Offline-App-Dateien und gespeicherte Charakterdaten sind getrennt.

#### Offline-Bereitschaft prüfen

Prüfe unter **Einstellungen** den Installations-/Offlinebereich. Für Service-Worker-Offlinezugriff muss die vollständige passende Version über HTTPS oder localhost bereitstehen. Öffne sie online und warte auf die Offline-Bereitschaftsmeldung. Fehlende oder unpassende Versionsdateien verhindern geprüftes Caching. Standalone-HTML per file:// ist kein unterstützter Installationsweg. Ein erster erfolgreicher Bildschirmaufruf beweist nicht, dass alle Dateien zwischengespeichert sind.

#### Installieren, wenn angeboten

Die Installationssteuerung ist nur verfügbar, wenn der Browser eine Installationsaufforderung bereitstellt. Installation ist optional; sie erstellt kein Konto und synchronisiert keine Daten. Unterstützung hängt von Browser und Plattform ab. **Dauerhaften Speicher anfordern** bittet den Browser um geringeres Verdrängungsrisiko; das kann abgelehnt werden und ersetzt keine externe Sicherung.

#### Aktualisieren ohne Entwurfsverlust

Verwende bei einer angebotenen Aktualisierung den vorhandenen Speichern-/Updateablauf und beachte die Hinweise für alle offenen Fenster/Tabs. Nicht bereite oder nicht antwortende Clients können die Aktivierung blockieren. Die App verwirft Änderungen nicht stillschweigend, um ein Update zu erzwingen. Behalte Website und App-Verzeichnis bei, um dieselbe Bibliothek zu verwenden. Onlinegenerierung und gegebenenfalls genehmigte Addon-Netzwerkzugriffe benötigen weiterhin eine Verbindung.

### Optionaler Fragebogen, Onlinetools und Addons

Nichts davon ist zum Erstellen, Importieren oder Spielen eines Charakters nötig.

#### Den Fragebogen offline nutzen

Wähle **Charakterfragebogen** in der Erstellen-Auswahl oder über den Charaktereditor. Bearbeite die Schritte; Antworten bleiben als lokaler Entwurf erhalten. In der Prüfung kannst du den erzeugten Prompt als Textdatei exportieren. Das Beantworten erstellt oder ersetzt keinen Charakter stillschweigend.

#### Onlinegenerierung getrennt genehmigen

Die Prüfung der Onlinegenerierung zeigt ausgehende Daten und Endpunkt. Lies beides und erteile die angezeigte Zustimmung vor dem Senden; die Einführung sendet nichts. Netzwerkzugriff und gegebenenfalls vom Endpunkt verlangte Zugangsdaten sind nötig. Abbrechen beendet die Anfrage, soweit unterstützt. Zurückgegebene Daten durchlaufen weiterhin die normale Importvorschau: Prüfe und importiere ausdrücklich, statt Richtigkeit oder bereits erfolgte Übernahme anzunehmen.

#### Ein Addon vor Aktivierung prüfen

Unter **Einstellungen** → **Addons** bleibt eine installierte Addon-Datei deaktiviert. Prüfe Quelltext, angegebene Netzwerkziele und Berechtigungen vor der getrennten Aktivierungszustimmung. Öffne nur vertrauenswürdige Addons; erlaubte Schnittstellenaktionen können Charakterdaten beeinflussen. Exportiere vorher eine Sicherung. Deaktivieren stoppt es; Entfernen verlangt Bestätigung. Wiederhergestellte Addons bleiben ebenfalls deaktiviert. Diese Einführung installiert, aktiviert oder öffnet keine Addons automatisch.
