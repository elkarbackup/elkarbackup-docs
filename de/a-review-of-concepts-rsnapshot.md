Wie bereits erwähnt, ist ElkarBackup ein Tool, das auf anderen freien Werkzeugen basiert, vor allem auf Rsnyc und Rsnapshot. Und da der größte Teil seiner Logik auf der Rsnapshot-Logik aufbaut, lohnt es sich, sein Verhalten genauer zu beleuchten.

Rsnapshot basiert auf folgenden Konzepten:

* Herkunft der zu kopierenden Daten: Woher kommen die Daten, die kopiert werden sollen?
* Häufigkeit: Wie oft soll kopiert werden? Zu bestimmten Zeiten während des Tages, einmal am Tag, einmal pro Woche und / oder einmal im Monat, an welchem Tag, ...
* Rotation: Wie viele Kopien sollen bei jeder der oben genannten Häufigkeit gepflegt werden? Reicht es, die letzten 4 Kopien eines Tages aufzubewahren oder doch lieber die Monatssicherung für 2 Jahre?

Als nächstes werden wir versuchen, den Betrieb zu erklären.
