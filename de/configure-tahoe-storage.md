Der Tahoe-Speicher ist ein sekundärer Speicher, der in den _**Optionen → Sicherungsorte verwalten**_ aktiviert und deaktiviert werden kann. Unabhängig davon, ob aktiviert oder nicht, wird die letzte Konfiguration gespeichert.

Es ist wichtig zu beachten, dass dieser Speicher auf dem Hauptspeicher basiert. Es ist daher zwingend erforderlich, dass der Hauptspeicher immer korrekt konfiguriert ist.


Hinweis: Um mehr über die Tahoe-Speicherung zu erfahren, lesen Sie den Abschnitt _**Überblick über die Konzepte:  Tahoe-LAFS**_.

## Basis Konfiguration

Um Tahoe zu konfigurieren, müssen wir die URL kennen, die es uns erlaubt, Elkarbackup mit dem Tahoe-Netzwerk zu verbinden \(Furl des Introducer-Knoten\). Darüber hinaus müssen wir die Werte bestimmen, die wir den Parametern K und N geben werden \(H ist optional\).

K steht für die Anzahl der verfügbaren Knoten, die ElkarBackup benötigt, um die im Netzwerk gespeicherten Daten abrufen zu können. Er muss größer als 0 sein.

N stellt die Anzahl der Knoten dar, in denen Backups gespeichert werden. Er muss größer oder gleich K sein.

## Erweiterte Nutzung

Das Verzeichnis, in dem der Tahoe-Knoten für ElkarBackup installiert ist, ist _**/var/lib/elkarbackup/.tahoe/**_.

Die Konfigurationsdatei für den Knoten ist _**.tahoe/tahoe.cfg**_.

Wenn Sie den ElkarBackup-Knoten verwenden möchten, um auf das Tahoe-Netzwerk zuzugreifen, müssen Sie das mit Hilfe des Systembenutzers "elkarbackup" tun.

Beispiele:

* Um den Knoten neu zu starten: _"~$ tahoe restart"_
* Um _**ls**_ auf dem Backup repository zu machen: _"~$ tahoe ls elkarbackup:"_
* Um Mietungen zu erneuern: _"~$ tahoe deep-check --add-lease elkarbackup:"_
