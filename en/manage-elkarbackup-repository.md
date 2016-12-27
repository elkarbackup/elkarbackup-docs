We are copying the data to disk so we have to define which will be the main folder under which Elkarbackup will save the data. By default it is the _**/var/spool/elkarbackup/backups**_ folder.

If we change this parameter once we have begun to make copies, the system will not delete the old data, but if we try to access them through the _**Restore**_ button the Elkarbackup will not find them. If for some reason we need to modify this parameter once we have copies made, we should connect to the server console and move the data from the old location to the new location.

In addition, we should assign the corresponding permissions on the new folder for the user and group _**elkarbackup**_

> root@backups:~\# chown -Rf elkarbackup.elkarbackup new-path

The disk that the server is using to store the data can be physically connected, or be mounted through the network, for example through [ISCSI](https://en.wikipedia.org/wiki/ISCSI) or [NFS](https://en.wikipedia.org/wiki/Network_File_System) protocols. This is an interesting option when we are using ElkarBackup as a virtual server.



