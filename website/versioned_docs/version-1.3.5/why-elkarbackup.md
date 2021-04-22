---
id: version-1.3.5-why-elkarbackup
title: Why Elkarbackup?
original_id: why-elkarbackup
---

If you are a sysadmin who need a backup solution in order to save files from different machines, sometimes in your own network, but sometimes in external networks through VPN or ssh connections, sometimes with requirement of doing some actions before or after the backup (i.e. your own checks, test etc.), Elkarbackup is your solution.

As you can read on [RSnapshot's web site](http://rsnapshot.org):

> Rsnapshot is a filesystem snapshot utility based on rsync. rsnapshot makes it easy to make periodic 
> snapshots of local machines, and remote machines over ssh. The code makes extensive use of hard links 
> whenever possible, to greatly reduce the disk space required

Elkarbackup offers you an abstraction layer that helps you to use the power of *Rsnapshot* through a web interface, so you don't need to work with the console in order to manage your backups. What is more, once you have set up your backup configuration, you can delegate the backup system management to other people who don't match the sysadmin role.

![Login](assets/screenshots/overview_01.png)
