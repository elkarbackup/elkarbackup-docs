Wir verschieben Daten zwischen Servern. Da kann es auch mal zu Kommunikationsproblemen kommen. Der Log-Bereich kann sehr hilfreich sein, bei der Suche nach möglichen Ursachen.

Als dieses Dokument geschrieben wurde, gab es Probleme mit der Kommunikation mit einem Windows-Rechner und das war, was dazu im Log-Bereich zu sehen war:

> Command "/usr/bin/rsnapshot" -c "/tmp/rsnapshot.2\_2.cfg" sync 2&gt;&1 failed. Diagnostic information follows: _**rsync: failed to connect to**_ 10.15.181.156: Connection timed out \(110\) rsync error: error in socket IO \(code 10\) at clientserver.c\(122\) \[Receiver=3.0.7\]

Das System teilt hier mit, dass die Kommunikationsprobleme zwei Ursachen haben können:

* Der Rsync-Service im Windows-Gerät hat Probleme.
* Kommunikationsprobleme zwischen unseren Geräten unter Verwendung des Rsync-Protokolls

Um herauszufinden, ob es sich um das erste Problem handelt, führen wir _telnet_ zum rsync-Port \(873\) vom selben Windows-Rechner \(Unter Windows 7 ist _telnet_ nicht vorinstalliert\) aus. Da es sich um eine lokale Verbindung handelt, vermeiden wir so andere Kommunikationsprobleme.

![](/es/assets/clientes-tareas21.png)

Wenn wir nun sehen, dass eine Verbindung erstellt wurde, wissen wir, dass dieser Service sauber läuft.

![](/es/assets/clientes-tareas22.png)

Nun versuchen wir das Selbe vom Elkarbackup-Server zum Windows-Gerät:

> root@ElkarBackup:~\# telnet 10.15.181.156 873
>
> Trying 10.15.181.156...
>
> telnet: Unable to connect to remote host: Connection timed out

Wir sehen, dass die Verbindung nicht hergestellt werden kann. Das deutet auf ein Firewallproblem, vermutlich im Windows-Gerät, hin.

In diesem Beispiel war auf dem Windows-Rechner die Firewall auch für das lokale Netz aktiv und hat den rsync-Verkehr geblockt. Es sollte in so einem Fall also eine Regel erstellt werden, die rsync \(TCP 873\) zwischen dem Elkarbackup-Server und dem Windows-Gerät erlaubt. Um es schnell zu testen, kann die Firewall auch kurz ausgeschaltet werden. Anschließend das Wiederaktivieren **nicht** vergessen.

