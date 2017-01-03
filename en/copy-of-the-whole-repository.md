For what we have seen untilnow, we are able to make copies of the data of several servers, optimizing the disk space and using different policies.

But right now we have all the data on a single disk, and if something bad happens to our disk, we can say goodbye to our copies.

It would be important to have somewhere else a copy of the whole disk where we have the data, in a different physical location \(so that it would not be involved in a catastrophe situation\), and to the extent possible that this copy synchronized with the main one automatically.

In the menu we can see the option _**Configuration → Repository backup script**_, and inside we have the option to _**download Backup Script.**_

![](/assets/repository_backup_script.png)

If we click on this button, we will download the following script:

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



If we run this script on another machine \(onwards Secondary\):

* It will connect to the server where we have ElkarBackup installed and will launch the synchronization of the existing backups.
* Then it will back up the MySQL database in the ElkarBackup.sql file
* Finally, it will also copy the scripts that have been loaded into the _**/var/spool/elkarbackup/uploads**_ folder.

So it would be enough to schedule the execution of this script on the Secondary server to have the synchronized copy of our repository on its own disk.

It we want to avoid data loss in a catastrophical situation, it would not make much sense for both servers to be located on the same site .....


