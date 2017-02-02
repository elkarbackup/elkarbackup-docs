In unserem Beispiel wollen wir das Verzeichnis _**/var/www**_ auf einem GNU/Linux-Gerät mit der IP-Adresse 192.168.1.2 sichern.

## Gerät hinzufügen

Um ein neues Gerät hinzuzufügen, klicken wir zunächst auf _**Gerät hinzufügen**_. Es öffnet sich ein Formular, welches die Erklärungen bereits mitbringt und in das wir die notwendigen Daten eintragen müssen.

In unserem Beispiel

* Name: _My Linux Client_

* URL: root@192.168.1.2

Wenn das erledigt ist, beenden wir die Eingabe mit _**Speichern**_. Das bringt uns zurück in die Geräte- und Aufgabenübersicht, in der unser eben angelegtes Gerät nun gelistet ist.
![](/assets/clients_tasks_03.png)

Da es später ein automatisierter Prozess sein soll, braucht unser Server noch die korrekten Zugangsdaten um sich mit "My Linux Client" zu verbinden, aber wir haben diese Informationen nicht in der Geräte-Konfiguration mit angegeben. Solange wir mit dem SSH-Protokoll verwenden, werden wir mit öffentlichen und privaten Schlüsselpaar arbeiten.

Wir können den öffentlichen Schlüssel unseres Elkarbackup-Servers im _**Optionsmenu --&gt; Parameter verwalten**_ herunterladen.

![](/assets/clients_jobs_04.png)

Nun müssen wir diesen Schlüssel im GNU/Linux-Gerät installieren (hinterlegen). Wenn das geschehen ist, sind wir in der Lage, den Sicherungsprozess via SSH zu automatisieren. Während der Verbindung sind die 2 Rollen wie folgt verteilt:

* ElkarBackup _**Server**_: hat die _**Client**_ Rolle in diesem Verbindungsgebilde inne.
* GNU/Linux _**Gerät**_: hat die _**Server**_ Rolle während der SSH-Verbindung inne. Das macht es nötig, dass das Paket "openssh-server" auf diesem Gerät zu installieren, falls noch nicht geschehen.

Gebe nun folgenden Befehl ein, um den heruntergeladenen Schlüssel in das GNU/Linux-Gerät zu installieren.

> ssh-copy-id -i Publickey.pub root@192.168.1.2

Beachten Sie, dass wir den Benutzer _**root**_ auf dem GNU/Linux-Gerät verwenden. Wie Sie sich sicher denken können, müssen Sie dafür das Kennwort des Root-Benutzers auf dem GNU/Linux-Gerät kennen.

Falls Sie keine Linux-Maschine haben, um dieses Kommando auszuführen, können Sie eine Konsole auf dem Elkarbackup-Server verwenden. Für diesen Fall können Sie den folgenden Befehl verwenden, der den Pfad enthält, wo der öffentliche Schlüssel im Server gespeichert ist:

> root@elkarbackup:~\# ssh-copy-id -i /var/lib/elkarbackup/.ssh/id\_rsa.pub root@192.168.1.2

Ein weiteres benötigtes Paket im GNU/Linux-Gerät, das benötigt wird, ist _**rsync**_. Falls es noch nicht installiert ist, kann es  mit diesem Befehl installiert werden:

> root@LinuxClient:~\# apt-get install rsync

## Aufgabe hinzufügen

Der nächste Schritt ist das Hinzufügen einer Aufgabe. Wie früher beschrieben, wollen wir den Ordner _**/var/www**_ sichern. Dafür müssen wir den Button _**Aufgabe hinzufügen**_ \(das _**+**_\) klicken.

![](/assets/clients_jobs_05.png)

Es öffnet sich wieder ein sich selbst erklärendes Formular, welches beschreibt, welche Informationen wo hingehören. In unserem Beispiel füllen wir die folgenden Felder wie folgt:

* **Name**: www
* **Pfad**: /var/www
* **Beschreibung**: Apache Web Server Folders
* **Regel**: Default policy

Klicke dann einfach _**Speichern**_ und die Aufgabe wird nun auf der Übersichtsseite, wie im folgenden Abbild gezeigt, aufgeführt.

![](/assets/clients_tasks_04.png)

Wie Sie vielleicht bemerkt haben, sind die Spalten _**Letzter Log-Eintrag**_ und _**Status**_ noch leer. Eher früher als später werden Sie sehen, dass in diesen Spalten der Zeitstempel der letzten Aufgabenausführung und der dazugehörige Status ausgegeben werden.

Aber wann? Das ist von der gewählten _**Regel**_ abhängig. Wir haben der Aufgabe die Regel _**Default Policy**_ zugewiesen. Wenn wir uns die Konfiguration der Regel ansehen, sehen wir den dazugehörigen _**Zeitplan**_ und die _**Aufbewahrungsrichtlinie**_.

Es ist empfehlenswert ein klares Verständnis des zugrunde liegenden, angewandten Konzepts zu haben, wie es im Abschnitt _**"Besprechung der Konzepte: Rsnapshot"**_ beschrieben ist, da es die Grundlage für die Logik unserer Anwendung bildet. Am Ende werden wir dieses Thema ausführlicher behandeln.


Wenn wir etwas Zeit vergehen lassen \(in unserem Beispiel ein paar Tage\), um ein paar Kopien anzufertigen und dann auf _**Wiederherstellen**_ ![](/assets/restore.png) klicken, werden wir das wohl das folgende Ergebnis zu sehen bekommen:

![](/assets/clients-jobs8.png)

Wie wir sehen können, enthält der Ordner **Daily.0** die Daten der letzten Sicherung. Aber wir sehen noch mehr Ordner, die die Sicherungen der vorangegangenen Tage enthalten. Wenn wir also eine bestimmte Datei wiederherstellen wollen, müssen wir nur in den Ordner gehen, der die Datei enthält. Wir können einen ganzen Ordner gepackt herunterladen oder eine einzelne Datei.

Im Abschnitt _**Erweiterte Optionen**_ können Sie noch weitere Parameter anpassen, die sich auf die SSH- und Rsync-Verbindungen beziehen, wie bspw. der SSH-Port oder die Bandbreite, die während der Verbindung verwendet werden soll, etc..
