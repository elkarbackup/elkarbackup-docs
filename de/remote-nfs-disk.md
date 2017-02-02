Zunächst einmal gehen wir davon aus, dass, wenn wir einen NFS-Datenträger in unserem Netzwerk verwenden wollen, dieser bereits vorhanden und einsatzbereit ist. Wir werden in diesem Bereich schnell erkennen, wie wir einen NFS-Server in einer Debian-Umgebung installieren und wie wir diesen Datenträger anderen Geräten im Netzwerk zur Verfügung stellen. Im Internet ist dieses Thema gut dokumentiert.

Der Server, der den NFS-Datenträger zur Verfügung stellen soll, benötigt die folgenden Pakete:

> root@backupsNFS:~\# apt-get install nfs-kernel-server portmap nfs-common

Wenn das erledigt wurde, müssen wir den lokalen Ordner bestimmen, der als Datenträger für die anderen Maschinen dienen soll. Zusätzlich muss noch die IP-Range definiert werden, zu der der Zugang gewährt wird. Diese Spezifikationen werden in der Datei **/etc/exports** vorgenommen.

In unserem Beispiel haben wir beschlossen, den Ordner _**/srv/nfsfolder**_ auf dem NFS-Server als Datenträger zur Verfügung zu stellen und zwar allen Geräten im Netzwerk _**192.168.3.0\/24**_. Daher wird folgende Zeile der Datei _**/etc/exports**_ hinzugefügt:

> /srv/nfsfolder  192.168.3.0/24\(rw,sync,no\_subtree\_check\)

Jetzt muss der Dienst neu gestartet und und das Kommando exportfs ausgeführt werden:

> root@backupsNFS:~\# /etc/init.d/nfs-kernel-server restart
>
> root@backupsNFS:~\# exportfs -a

Jetzt sollte der Datenträger für Geräte im Netzwerk 192.168.3.0/24 zur Verfügung stehen. Nun schauen wir uns an, wie wir diesen Datenträger im Elkarbackup-Server einbinden.

Wenn auf dem Elkarbackup-Server das Paket "autofs" noch nicht installiert ist, wird es jetzt Zeit dafür.

> root@ElkarBackup:~\# apt-get install autofs

Stellen Sie sicher, dass in der Datei _**/etc/auto.master**_ die Zeile _**net -host**_ auskommentiert wurde. Falls es noch nicht auskommentiert war, muss der Dienst _**autofs**_ jetzt neu gestartet werden.

Stellen wir nun die Verbindung von unserem NFS-Gerät mit dem Ordner auf dem NFS-Server her, damit dieser als Datenträger eingebunden wird.

Nehmen wir an, dass der NFS-Server die IP-Adresse 192.168.3.100 hat, dann reicht ein _**ls**_ aus, den Ordner auf dem NFS-Gerät zugänglich zu machen:

> root@ElkarBackup:~\# ls /net/192.168.3.100/srv/nfsfolder/

Wenn das Vorangegangene klappt, funktioniert der notwendige Software-Part richtig. Damit die Elkarbackup-Weboberfläche den Datenträger richtig handhaben kann, müssen wir noch die Datei _**/etc/auto.nfs4**_ editieren und folgende Zeile auskommentieren

> /nfs4  /etc/auto.nfs4











