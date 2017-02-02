# SSH-Schlüssel

Wir haben schon über den öffentlichen Schlüssel gesprochen. Hier können wir den öffentlichen Schlüssel vom Elkarbackup-Server herunterladen, der während der Installation erstellt wurde.

# MySQL-Server

Hier sind die Parameter für die Konfiguration des MySQL Servers. Die Sicherungs-Dateien, die mit Rsnapshot kopiert wurden, werden auf der Festplatte gespeichert, aber alle anderen Daten \(Geräte- und Aufgaben-Daten, Regeln, usw.\) werden in der Datenbank gespeichert.

Der MySQL-Server kann sich auf demselben ElkarBackup-Server oder auf jedem anderen Server in unserem Netzwerk befinden, hier werden die Standort- und Verbindungsparameter konfiguriert.

# E-Mail-Benachrichtigungen

Wenn wir daran interessiert sind, Warnungen per Mail zu empfangen, müssen wir uns entscheiden, ab welchem Level und zu wem die Nachrichten gesandt werden sollen.

![](/assets/parameters1.png)

Standardmäßig werden die Nachrichten an den Eigentümer \(werden wir uns noch ansehen\) mit dem Level _**"Fehler und höher"**_ gesandt. Wenn wir daran interessiert sind, dass die Besitzerwarnungen auch an eine zusätzliche, andere E-Mail-Adresse gesendet werden, müssen wir die Option _**Email**_ auswählen und diese Adresse in das angezeigte Textfeld eintragen.

![](/assets/parameters2.png)

Aber der Server muss auch so konfiguriert werden, dass er E-Mails senden kann, soll heißen: er muss wissen, wie die Nachrichten gesendet werden sollen und dafür haben wir die Mailer-Parameter.

![](/assets/parameters3.png)

Da ElkarBackup auf dem Symfony-Framework aufbaut, können Sie mehr Informationen dazu in der [Dokumentation des Symfony-Projekts](http://symfony.com/doc/current/email.html) finden.

# Limit-Warnungen

Bisher haben wir nicht über Limitierungen gesprochen, aber wir können die Festplatten-Limits für jedes Gerät festlegen. Das kann nützlich sein, wenn ein Gerät viel Platz verbraucht und wir nicht wollen, dass andere Geräte dadurch nicht mehr bekommen was sie an Platz brauchen.

Wenn wir das Maximum im Parameter _**Limit**_ eines Gerätes definiert haben und überschreiten, sehen wir das sowohl auf der Geräteansicht, als auch auf Geräte- und Aufgabenübersicht hervorgehoben.

![](/assets/parameters4.png)

![](/assets/parameters5.png)

Beachten Sie, dass _**ElkarBackup keine weiteren Sicherungen macht, wenn das Limit des Geräts überschritten wurde**_.

Bevor dieses Limit überschritten wird, sendet das System Warnungen. Mit diesem Parameter definieren wir den Schwellenwert, ab dem diese Warnungen gesendet werden sollen. Standardmäßig liegt dieser Wert 80% des Limits.

![](/assets/parameters6.png)

# Weitere Parameter

* Wie lange sollen die Logs aufgehoben werden, bevor sie gelöscht werden
* Wieviele Zeilen pro Seite angezeigt werden sollen
* Präfix, den das System zur Erzeugung bestimmter URLs verwendet, wenn anstelle eines DNS aufgelösten Namen \(bspw. [http://elkarbackup](http://elkarbackup)\) eine feste IP-Adresse verwendet wird \(zum Beispiel [http://IP-Adresse/elkarbackup/app.php/login](http://IP-Adresse/elkarbackup/app.php/login)\), um die Weboberfläche zu erreichen \(im Beispiel _**/elkarbackup**_\).
