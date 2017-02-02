Da wir die Daten auf eine Festplatte kopieren, müssen wir festlegen, welches der Hauptordner sein soll, unter dem Elkarbackup die Daten sichert. Als Standard ist es _**/var/spool/elkarbackup/backups**_.

Wenn wir diesen Parameter ändern, nachdem wir begonnen haben, Kopien zu erstellen, werden die Daten zwar nicht gelöscht, aber wenn sie über den Button _**Wiederherstellen**_ auf sie zugreifen wollen, wird ElkarBackup sie nicht finden können. Wenn wir aus irgendeinem Grund diesen Parameter ändern müssen, nachdem wir Kopien erstellt haben, sollten wir uns auf die Konsole verbinden und die Daten vom alten zum neuen Speicherort verschieben.

Zusätzlich sollten noch die Berechtigungen für den User und die Gruppe _**elkarbackup**_ für den neuen Ort angepasst werden:

> root@backups:~\# chown -Rf elkarbackup.elkarbackup new-path

Die Festplatte, die der Server nutzt um die Daten zu sichern, kann physisch verbunden sein oder sich in einem Netzwerk befinden, z.B. durch [ISCSI](https://en.wikipedia.org/wiki/ISCSI) oder [NFS](https://en.wikipedia.org/wiki/Network_File_System) Protokoll. Das ist eine interessante Option, wenn wir ElkarBackup als virtuellen Server betreiben.

Die Anwendung gibt uns zwei Möglichkeiten, wie wir das Repsitory betreiben können:

* Lokale Festplatte \(dafür den _**Host**_-Parameter leer lassen\): Wir haben ein lokales Verzeichnis auf dem Debian-Server definiert, auf dem wir die ElkarBackup-Anwendung installiert haben. Es kann eine physikalische Festplatte sein oder eine Platte, die zuvor mit anderen Techniken gemountet wurde \(z.B. durch iscsi\) oder
* Wir können einen Ordner auf einem NFS-Server konfigurieren \(indem wir den Hostnamen oder die IP-Adresse im _**Host**_-Parameter setzen\): Um diese Option auf dem Debian-Server, auf dem wir ElkarBackup installiert haben, zu verwenden, müssen wir das _**autofs**_-Paket installiert haben \(was wir eingangs bereits getan haben\).

![](/assets/parameters7.png)

_Hinweis:_ Denken Sie daran, dass wenn wir den Ort für das Repository ändern, dem Beutzer "elkarbackup" auf unserem Server auch die Schreibrechte für die neue Lokation zu gewähren.

_Hinweis:_ Wenn Tahoe-LAFS auf der Maschine installiert ist, können wir den sekundären Speicher aktivieren. Beachten sie, dass Tahoe konfiguriert wurde, um erfolgreich arbeiten zu können.
