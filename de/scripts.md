Es wird wohl öfter vorkommen, dass wir in Verbindung mit unseren Sichereungen, etwas vor und/ oder nach einer Sicherung automatisiert erledigen wollen. Hier einige Beispiele:

Vorher:

* Vielleicht müssen wir eine VPN-Verbindung aufbauen, um uns mit einem entfernten Server zu verbinden
* Einen vollständigen Snapshot einer Platte eines entfernten Geräts anlegen, um Daten störungsfrei kopieren zu können 
* Services vor einer Sicherung stoppen \(Zimbra, MySql, ....\)
* etc.

Danach:

* Eine vorher geöffnete VPN-Verbindung wieder schließen
* Konsistenz der Daten prüfen: Erstelldatum und -zeit, fehlerfreies Entpacken von Daten prüfen, ...
* etc.

Um solche Aktivitäten zu programmieren, bedarf es der Skripte. Wir können neue Skripte entwickeln und nutzen und können sie mit anderen Nutzern auf dem Server teilen.
