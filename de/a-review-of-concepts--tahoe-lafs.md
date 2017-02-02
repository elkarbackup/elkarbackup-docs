[Tahoe-LAFS](https://www.tahoe-lafs.org/) Ist ein dezentrales, fehlertolerantes Dateisystem. Es verteilt die gespeicherten Daten auf mehrere Server, die ihre Privatsphäre und Sicherheit bewahren. Das Speicher-Netzwerk wurde für die langfristige Speicherung entwickelt, bspw. Backup-Speicher.

Auf die Dokumentation kann [hier](https://www.tahoe-lafs.org/trac/tahoe-lafs/wiki/Doc) zugegriffen werden.

## Über Knotenpunkte

Tahoe ermöglicht es, ein Netzwerk von Servern zu erstellen. Jeder '_**Server**_' repräsentiert einen Knoten, der ein Gerät des Systems und zugleich ein Speicherserver sein kann. Darüber hinaus ist es zwingend erforderlich, dass in jedem Netzwerk ein spezieller Knoten, der sogenannte Introducer-Knoten, existiert, der für die Registrierung aller Knoten im Netzwerk zuständig ist.

Wenn Sie einen Knoten zum ersten Mal erstellen, müssen Sie ihn konfigurieren. Bearbeiten Sie dazu die Konfigurationsdatei '_**tahoe.cfg**_'. Nach der Konfiguration wird er mithilfe des Introducer-Knoten gestartet und mit dem Netzwerk verbunden.

## Über Portionen

Wenn ein Gerät eine Datei speichern möchte, führt er automatisiert, aber konfigurierbar, mittels eines Löschcodierungsverfahren, eine Aufteilung der Daten durch. Jedes Stück, das erstellt wird, wird '_**Share**_' genannt.

In Tahoe werden drei Parameter verwendet: K, H und N, die auch als shares.needed, shares.happy und shares.total bezeichnet werden. Die Aufteilung der Daten erfolgt wie folgt:

Mehrere \(N\) Abschnitte werden mit redundanten Daten erzeugt, so dass durch die Speicherung auf den Servern im Netzwerk (mindestens H-Servern) die Datenwiederherstellung selbst dann gewährleistet ist, wenn einzelne Server nicht mehr verfügbar sind \(Daten können abgerufen werden, da mindestens K Teile erhalten bleiben\). Die K-H-N-Parameter sind auf jedem Knoten konfigurierbar.

Daten, die in das Tahoe-Netzwerk geschrieben werden, benötigen mehr Speicherplatz als die ursprünglichen Dateien. Annehmend, dass die ursprüngliche Dateigröße D ist, ist der Speicherplatz, den es im Netzwerk einnimmt, gleich ND/K und nicht DN, wie es üblich, wenn wir die Daten auf den N-Servern auf herkömmliche Weise replizieren würden.

## Über Lizenzen und Müllsammler

In einem Tahoe-Netzwerk kann auf jede Datei mittels einer URI zugegriffen werden, sofern diese  die Datei-ID, als auch die Berechtigungen enthält.

Diese URIs werden als "Fähigkeiten" oder Lizenzen bezeichnet und können folgenden Typs sein: lesen & schreiben \(writecap\), nur lesen \(readcap\) oder verifizierbar \(verifycap\) sein. Daher sind die Berechtigungen der Dateien nicht mit Geräten verknüpft, sondern mit ihren Lizenzen.

Um Zugriff auf eine Datei zu erhalten, muss man im Besitz ihrer Lizenz sein.

Tahoe-LAFS verwendet einen Müllsammler, um Konflikte beim Löschen von Dateien zu vermeiden. Alle Dateien haben ein Verfallsdatum, das verlängert werden kann. Dieses Verfallsdatum wird als "Leasing" oder Miete bezeichnet. Eine Mietung, wie der Name schon sagt, kann erneuert werden, damit der Müllsammler sie nicht löscht. Der Sammler prüft jede einzelne Datei auf dem Server auf ihr Verfallsdatum hin und überprüft, ob es Dateien mit abgelaufenen Datum findet. Findet er welche, werden diese gelöscht. Sie können die Miete eines Verzeichnisses und aller Dateien, die es enthält, mittels „verifycap“ erneuern.