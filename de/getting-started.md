Wir sehen uns nun an, wie neue Geräte angelegt werden, um Sicherungen einzurichten. Der gerade installierte ElkarBackup-Server wird sich auf diese Geräte verbinden, um Sicherungen anzulegen und verwendet dabei das SSH- und Rsync-Protokoll.

## SSH Fingerabdruck Funktion

Bevor wir fortfahren, schenken wir der _**"Fingerabdruck-Funktion"**_ in SSH-Verbindungen ein wenig Beachtung. Wenn Sie sich zum ersten Mal bei einem Remote-Host anmelden, ist der Host-Schlüssel des Remote-Hosts dem SSH-Gerät unbekannt. Das Standardverhalten ist, den Benutzer zu bitten, den Fingerabdruck des Remote-Hhost-Schlüssels zu bestätigen. Das ist ein Mechanismus, um die Vertrauenswürdigkeit der Maschine zu bestätigen, mit der Sie eine Verbindung herstellen wollen.

Auch wenn dies ein guter Weg ist, um einen möglichen Man-In-The-Middle-Angriff zu verhindern (https://en.wikipedia.org/wiki/Man-in-the-middle_attack), würde es doch nicht möglich sein, die Verbindung der Geräte automatisiert und ohne Konsole zu etablieren. An dieser Stelle empfehlen wir, diese Funktion in der SSH-Konfiguration des Elkarbackup-Servers zu deaktivieren, indem die folgende Zeile in die Datei _**/etc/ssh/ssh_config**_ eingefügt wird:

> StrictHostKeyChecking no

Jetzt sehen wir uns, wie neue Geräte und Aufgaben angelegt werden.
