> _**Hinweis**_: Es gibt bereits heute schon Bemühungen, den Prozess, Daten von Windows-Geräten zu sichern, zu vereinfachen. Es scheint, dass zukünftige Windows-Versionen in naher Zukunft in der Lage sein werden, SSH als Service zu nutzen, sodass wir Windows- und Linux-Geräte mit demselben Verfahren konfigurieren können. Bis dahin halten wir uns an die unten beschriebene Vorgehensweise.

Der Hauptunterschied zwischen Windows- und Linux-Geräten liegt im URL-Parameter, der Rest ist gleich.

Anstelle des SSH- wird auf Windows-Servern das _Rsync_-Protokoll verwendet. Um das zu tun, muss der Maschine beigebracht werden, Rsync-Verbindungen zu akzeptieren. Soll heißen, sie braucht einen aktiven Rsync-Server.

In unserem Beispiel, legen wir in der Elkarbackup-Oberfläche ein neues Gerät an \(_**Gerät hinzufügen**_\):

```
Name: Windows-Gerät

URL: 10.15.181.156:

LIMIT: -1

Beschreibung: Einer unserer Windows-Server

Pre/Post Skript: bleibt leer.
```

Beachten Sie den URL-Parameter. Nach der IP-Adresse verwenden wir "_**:**_", um zu erreichen, dass das Rsync-Protokoll verwendet wird.

Wir werden verschiedene Rsync-Server für Windows finden. Wir werden eine freie Version von [cwRsync](https://www.backupassist.com/rsync/cwRsyncServer_4.1.0_Installer.zip) verwenden. Dafür laden wir den Installationsassistenten von cwRsyncServer 4.0.5 herunter.

Bevor wir mit der Installation beginnen, werden wir einen neuen lokalen Benutzer auf der Windows-Maschine anlegen. In der virtuellen Umgebung, die wir für unser Beispiel nutzen, haben wir dafür den Benutzer _**SvcCWRSYNC**_ mit dem Passwort _**elkarbackup**_ angelegt.

![](/es/assets/clientes-tareas11.png)

Da der Dienst mit diesem Benutzer ausgeführt wird, muss sichergestellt sein, dass er über die benötigten Berechtigungen verfügt. Deswegen haben wir den Benutzer in unserem Beispiel in die Gruppe der Administratoren aufgenommen \(dürfte aber auch mit weniger funktionieren\).

![](/es/assets/clientes-tareas12.png)

Beginnen wir nun mit der Installation des Programms "cwRsyncServer". Der Assistent wird nach Benutzer und Passwort für diesen Dienst fragen. Dafür verwenden wir genau den, den wir gerade dafür angelegt haben.

![](/es/assets/clientes-tareas13.png)

Wenn die Installation abgeschlossen ist, wird das Programm in unserer Liste der verfügbaren Programme auftauchen. Wir müssen nun die Datei _**rsyncd.conf**_ so editieren, dass das Programm weiß, welche Ordner gesichert werden sollen. In Geräten mit Windows 7 und höher, muss die Datei als Admin ausgeführt werden, anderenfalls werden die Änderungen an der Datei nicht akzeptiert. Das wird gemacht, indem die Datei mit der rechten Maustaste angeklickt wird und dann aus dem Menu der Punkt "Ausführen als Administrator" ausgewählt wird.

![](/es/assets/clientes-tareas14.png)

Hier die Konfiguration, um das Verzeichnis C:\Backups zu sichern:

Am Anfang der Datei werden diese 2 Zeilen hinzugefügt:

> uid=0
>
> gid=0

Als nächstes wird für jeden Ordner, den wir sichern wollen, ein eigener Block hinterlegt. Im Beispiel nennen wir den Block _**Data:**_

> \[Data\]
>
> path = /cygdrive/c/Backups
>
> read only = false
>
> transfer logging = yes

Falls das Verzeichnis, dass Du sichern möchtest, statt in _**c:\Backups**_ in _**d:\Backups**_ liegt, muss die Pfadangabe so aussehen:

> path = /cygdrive/d/Backups

![](/assets/clients-jobs15.png)

Nun prüfen wir, ob der Dienst läuft. Tut er das nicht, starten wir ihn und konfigurieren ihn so, dass er automatisch gestartet wird.

![](/es/assets/clientes-tareas16.png)

![](/es/assets/clientes-tareas17.png)

Nun gehen wir zurück in die ElkarBackup-Oberfläche und weisen unserem Windows-Gerät die Aufgabe zu, die wir bspw. _**Backups folder**_ nennen.

Erinnern wir uns: Das zu sichernde Verzeichnis haben wir in der Konfiguration auf der Windows-Maschine im Block namens _**\[Data\]**_ hinterlegt. Und genau das ist der Name, den wir nun im Feld _**Pfad**_  angeben müssen. Außerdem fügen wir der Aufgabe eine Regel hinzu, bspw. die _**Default Policy**_.

![](/assets/clients-jobs18.png)

Wir speichern nun die Aufgabe und klicken die Schaltfläche _**Jetzt starten**_, um zu kontrollieren, dass die Aufgabe fehlerfrei ausgeführt wird. Diese Funktion erlaubt es uns, die Aufgabe auszuführen ohne den geplanten Zeitpunkt der Ausführung abwarten zu müssen. Die Geräte- und Aufgabenübersicht stellt uns auch Informationen über den Status jeder Aufgabe zur Verfügung.

Warten wir kurz, während die Aufgabe ausgeführt wird. Wurde die Aufgabe ausgeführt, finden sich weiterführende Informationen in den _**Logs**_.
