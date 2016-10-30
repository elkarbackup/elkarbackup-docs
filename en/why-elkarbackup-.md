If you are a sysadmin who need a backup solution in order to save files from different machines, sometimes in your own network, but sometimes in external networks through VPN or ssh connections, sometimes with requirement of doing some actions before or after the backup \(i.e. your own checks, test etc.\), Elkarbackup is your solution.

As you can read on [RSnapshot's web site](http://rsnapshot.org), _"rsnapshot is a filesystem snapshot utility based on rsync. rsnapshot makes it easy to make periodic snapshots of local machines, and remote machines over ssh. The code makes extensive use of hard links whenever possible, to greatly reduce the disk space required."_

Elkarbackup offers you an abstraction layer that helps you to use the power of rsnapshot through a web interface, so you don't need to work with the console in order to manage your backups. What is more, once you have set up your backup configuration, you can delegate the backup system management to other people who don't match the sysadmin role.

![](/assets/overview_01.png)

