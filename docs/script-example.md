---
id: script-example
title: Script example
---

Let's imagine that different users have different copies of the same file on the network, each in their folder. When it comes to office documents \(generally not very large\) is not usually too much trouble, but with other types of files \(videos, software updates, etc.\) the space that may be consuming in the network is usually large, being duplicate information.

We know that once you have made the copy of these files, they will not change on the Elkarbackup disk, so we have the possibility to keep a single copy and linking the other occurrences of the same file using hardlinks.

In this example, we copy and paste with another name a file that we have in the folder _**/media/Backups**_ of the Debian Client. Although it is the same file we have it twice on the disk so it occupies the double.

```
root@DebianClient:~\# cd /media/Backups/Software/
root@DebianClient:/media/Backups/Software\# cp vlc-2.0.6-win32.exe vlc-2.0.6-win32-kopia.exe
root@DebianClient:/media/Backups/Software\# ls -lah
total 209M

drwxr-xr-x 2 root root 4,0K jun 12 12:44 .
drwxr-xr-x 4 root root 4,0K jun  7 11:24 ..
-rw-r--r-- 1 root root 1,1M nov 18  2010 7z920.exe
-rw-r--r-- 1 root root 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
-rw-r--r-- 1 root root  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-r--r-- 1 root root  22M jun 12 12:44 vlc-2.0.6-win32-copy.exe
```

Now we access the task in charge of making the copy of this data and press the button _**Run now**_. At the end of the task we can see that in the folder of the ElkarBackup server there are the two files

```
#cd /var/spool/elkarbackup/backups/0001/0001/Hourly.0/media/Backups/Software/
#ls -lah
total 209M
drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
-rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
-rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
-rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-copy.exe
```


And as we can see they are not bound by hardlinks, since they do not have the same inode

> \# ls -lahi
>
> total 209M
>
> 40831 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
>
> 40828 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
>
> 29332 -rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
>
> 29333 -rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
>
> 29334 -rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
>
> 74101 -rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-copy.exe

Here's how we can use a postscript script to solve this problem. This script looks for those files that have the same [Hash](https://en.wikipedia.org/wiki/Hash_function) and links them through hardlinks

> \#!/bin/bash
>
> \# Compare by size to discard those that do not repeat
>
> cd $ELKARBACKUP\_PATH
>
> lastHash=''
>
> lastFile=''
>
> find . -mount -type f -printf '%15s %p\0'|sort -nrz|uniq -zDw15|tr "\0" "\n"|cut -b17- |tr "\n" "\0"|xargs -0 sha256sum|sort|uniq -Dw40|while read currentHash file
>
> do
>
>         if [ "x$lastHash" = "x$currentHash" ]
>
>         then
>                 rm "$file"
>                 ln "$lastFile" "$file"
>         fi
>
>         lastHash=$currentHash
>
>         lastFile="$file"
>
> done



We upload the script:

* Name: Compressing the repository
* We enable it so that it can be executed as PostScritp of tasks

Now we edit the Debian Client task, select this script in the PostScript section, and launch the task's execution.

> \# ls -lahi
>
> total 209M
>
> 40838 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 15:22 .
>
> 40835 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
>
> 29332 -rw-rw-r-- 4 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
>
> 29333 -rw-rw-r-- 4 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
>
> **29334** -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
>
> **29334** -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32-copy.exe

If we now look at the inode numbers that appear in the first column, we can see that the copies appear with the same inode, so they are pointing to the same location on disk and without duplicating the space used.


## Cloud synchronization


Nowadays it seems inevitable that when developing a backup tool we pause to think about whether to incorporate specific functionalities to synchronize our data with the services in the cloud.

In this application no specific section has been developed for this function because we have seen that with the services that offer this type of solutions we do not need to develop anything extra.

If you look at the well known Dropbox, we see that it has a type of installation [to be executed as a daemon](https://www.dropbox.com/install-linux) on a Linux machine.

If we have installed Dropbox on our Elkarbackup server, we can develop a PostScript so that  links the files we want to sync with the cloud through hardlinks linking to a Dropbox folder. With this we would already have these files copied in the cloud automatically.

At this point we could discuss about the convenience of having our data in the cloud, issues such as data privacy, etc, but hey, we will leave it for another occasion.




