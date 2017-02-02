Bis hierher haben wir gelernt, wie Sicherungen angelegt werden. Aber in einem Sicherungssystem ist es nötig, mehr Dinge zu definieren:

* Programmierung: Wann sollen Sicherungen durchgeführt werden?
* Aufbewahrung: Wie lange soll eine Kopie aufbewahrt werden?
* Müssen Sie verschiedene Zeitpläne mischen? Kopien während des Tages, täglich, wöchentlich, monatlich ....

Um solche Konzepte umzusetzen, verwenden wir _**Regeln**_ \(bisher haben wir die _**Standardregel**_ verwendet\). Weil ElkarBackup auf Rsnapshot aufbaut, ist es ratsam, sich den Bereich **"Überblick über die Konzepte: Rsnapshot"** noch einmal näher anzusehen.

Die Anwendung erlaubt es uns, mehrere Regeln zu definieren. Jede Aufgabe braucht eine Regel und eine Regel kann mehreren Aufgaben zugeordnet werden.

Das sind die Daten, die wir hinterlegen müssen, wenn wir eine Regel hinzufügen:

* Name und Beschreibung: Das sind Freitextfelder
* Ausschließen: Muster, um Dateien von Sicherungen auszuschließen
* Einschließen: Muster, um Dateien in die Sicherung einzubeziehen, obwohl sie im _**Ausschließen**_-Feld ausgeschlossen wurden. Ein Beispiel: Stellen wir uns vor, dass wir normalerweise keine Video-Dateien sichern wollen und deshalb _**\*.avi**_-Dateien im Ausschließen-Feld hinterlegen, aber avi-Dateien im Manager-Ordner sichern wollen. Für diese Ausnahme würden wir dann _**manager/\*.avi**_ im Einschließen-Feld eintragen.
* Zuerst synchronisieren: Wenn Rsnapshot eine neue Kopie erstellt, wird eine Rotation der zuvor erstellten Kopien vorgenommen und die neue Kopie in einem neuen Ordner \(z.B. Daily.0\) angelegt, wobei im gleichen Ordner beide Daten enthalten sein können, die geänderten und die Dateien, die nicht geändert wurden. Die unveränderten Dateien, werden durch _**Hardlinks**_ verknüpft, so dass sie nicht mehrfach Speicherplatz auf dem Datenträger belegen.

Es ist ein zeitaufwändiger Prozess zu prüfen, ob neue Dateien kopiert oder vorhandene durch einen Hardlink verknüpft werden müssen und die gesamte Zeit über muss der Remote-Client "bedienen". In manchen Fällen mag das keine Rolle spielen, in anderen Fällen schon. Da ist es vielleicht nötig, das Gerät so schnell wie möglich wieder "freizugeben". In letzterem Fall können wir auch die Option "Zuerst Synchronieren" wählen.

Wenn wir diese Option wählen, wird Rsnapshot angewiesen, die Dateien zuerst in einem Ordner mit dem Namen _**.sync**_ zu synchronisieren, um das Gerät so schnell wie möglich wieder freizugeben. Nach Abschluss dieses Teils und nach dem Freigeben des Geräts werden die Daten der letzten Kopie \(z.B. Daily.0\) mit denen im .sync-Ordner verglichen und die neue Struktur durch Hinzufügen der erforderlichen Hardlinks erzeugt.

Wie der Name der Funktion bereits sagt, es werden zuerst die Daten vom Gerät synchronisiert und anschließend die Ordnerstruktur erstellt und die entsprechenden Rotationen durchgeführt.

