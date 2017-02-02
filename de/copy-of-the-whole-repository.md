Bis hierher konnten wir sehen, dass wir in der Lage sind, Kopien von Daten von unterschiedlichen Servern anzufertigen, Speicherplatz optimal zu nutzen und verschiedene Regeln hinsichtlich Aufbewahrung und Häufigkeit zu verwenden.

Nun haben wir alle Daten zentralisiert an einem Platz auf einer Platte. Wenn jetzt etwas mit unserer Festplatte passiert, können wir uns von unseren gesicherten Daten verabschieden.

Es wäre also wichtig, eine Kopie der gesamten Platte zu haben an einem weiteren, physikalisch getrennten Ort \(unabhängig vom Ort der Katastrophe für unsere ElkarBackup-Platte\) zu haben und, soweit möglich, diese Daten automatisiert mit unseren Sicherungen synchron zu halten.

In unserem _**Konfigurationsmenu**_ findet sich der Eintrag _**Repository Sicherungsskript**_ und dort findet sich die Möglichkeit unser _**Sicherungsskript**_ herunterzuladen.

![](/assets/repository_backup_script.png)

Wenn wir diesen Button anklicken, laden wir das folgende Skript herunter:

> \#!/bin/bash
>
>
>
> MYSQL\_DB=ElkarBackup
>
> MYSQL\_HOST=localhost
>
> MYSQL\_PASSWORD=root
>
> MYSQL\_USER=root
>
> REPOSITORY=/var/spool/ElkarBackup/backups
>
> SERVER=ElkarBackup
>
> SERVER\_USER=ElkarBackup
>
> UPLOADS=/var/spool/ElkarBackup/uploads
>
>
>
> ssh "$SERVER\_USER@$SERVER" "cd '$REPOSITORY'; find . -maxdepth 2 -mindepth 2" \| sed s/^..// \| while read jobId
>
> do
>
>     echo Backing up job $jobId
>
>     mkdir -p $jobId 2&gt;/dev/null
>
>     rsync -aH --delete "$SERVER\_USER@$SERVER:$REPOSITORY/$jobId/" $jobId
>
> done
>
> echo Backing up mysql DB
>
> ssh "$SERVER\_USER@$SERVER" "mysqldump -u$MYSQL\_USER -p$MYSQL\_PASSWORD -h$MYSQL\_HOST $MYSQL\_DB" &gt; ElkarBackup.sql
>
> echo Backing up uploads
>
> rsync -aH --delete "$SERVER\_USER@$SERVER":"$UPLOADS/" uploads



Wenn wir dieses Skript auf einer anderen Maschine laufen lassen, passiert das Folgende:

* Es wird sich mit unserem ElkarBackup-Server verbinden und eine Synchronisierung mit unseren existierenden Sicherungen vornehmen.
* Dann wird die MySQL-Datenbank in der Datei ElkarBackup.sql gesichert.
* Und abschließend werden noch die Skripte gesichert, die in das Verzeichnis _**/var/spool/elkarbackup/uploads**_ hochgeladen wurden.

Es reicht also aus, die Ausführung des Skripts auf dem anderen Server zu planen, um eine vollständige Kopie des ElkarBackup-Servers auf einer anderen Platte zu erstellen.

Um einen Datenverlust in einem Worst-Case-Scenario \(Feuer, Wasserschaden, Diebstahl\) zu verhindern, macht es wenig Sinn, wenn beide Maschinen am selben Ort stünden...
