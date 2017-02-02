Stellen wir uns vor, verschiedene User haben eine Kopie der gleichen Datei im Netzwerk, jeweils im eigenen Ordner. Wenn es um Office-Dokumente geht \(üblicherweise nicht sehr groß\) macht das vielleicht nicht viel, aber wenn es um andere Dateiformate geht \(Videos, Softwareupdates, etc.\), sieht das schnell anders aus. Dann belegen doppelte Dateien, doppelten Speicher.

Wir wissen, dass, sobald die Sicherung dieser Dateien erstellt wurde, sie sich auf dem Elkarbackup-Datenträger nicht mehr verändern werden. Das gibt uns die Möglichkeit nur eine einzelne Kopie solcher Dateien zu behalten und die anderen Vorkommen der selben Datei durch Hardlinks zu verknüpfen. Das spart Speicherplatz.

<br />

Im folgenden Beispiel kopieren wir auf einem Debian-Gerät eine Datei aus dem Ordner _**/media/backup**_ und fügen sie mit anderem Namen im selben Ordner wieder ein. Die selbe Datei existiert also mit unterschiedlichem Namen zweimal und verbraucht somit doppelten Speicherlatz.

> root@DebianClient:~\# cd /media/Backups/Software/
>
> root@DebianClient:/media/Backups/Software\# cp vlc-2.0.6-win32.exe vlc-2.0.6-win32-kopia.exe
>
> root@DebianClient:/media/Backups/Software\# ls -lah
>
> total 209M
>
> drwxr-xr-x 2 root root 4,0K jun 12 12:44 .
>
> drwxr-xr-x 4 root root 4,0K jun  7 11:24 ..
>
> -rw-r--r-- 1 root root 1,1M nov 18  2010 7z920.exe
>
> -rw-r--r-- 1 root root 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
>
> -rw-r--r-- 1 root root  22M abr 15 19:11 _**vlc-2.0.6-win32.exe**_
>
> -rw-r--r-- 1 root root  22M jun 12 12:44 _**vlc-2.0.6-win32-copy.exe**_

<br />

Lassen Sie uns nun eine Aufgabe mittels _**Jetzt starten**_ ausführen, deren Job es ist, den Ordner _**/media/backup**_ unseres Debian-Gerätes zu sichern. Wenn Sie unsere Beispieldateien in der Sicherung suchen, werden sie die beiden danach finden.

> \#cd /var/spool/elkarbackup/backups/0001/0001/Hourly.0/media/Backups/Software/
>
> \# ls -lah
>
> total 209M
>
> drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
>
> drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
>
> -rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
>
> -rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice\_4.0.3\_Linux\_x86\_deb.tar.gz
>
> -rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 _**vlc-2.0.6-win32.exe**_
>
> -rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 _**vlc-2.0.6-win32-copy.exe**_

<br />

Sie sind deswegen nicht durch Hardlinks verknüpft, weil die _**[Inodes](https://de.wikipedia.org/wiki/Inode)**_ beider Dateien \(s. erste Spalte\) nicht identisch sind.

> \# ls -lah**i**
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
> **29334** -rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
>
> **74101** -rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-copy.exe

<br />

Das Problem, identische Dateien zu finden und doppelten Speicherbedarf zu verhindern, lässt sich mittels eines Postskript-Skripts lösen. Das folgende Skript sucht nach Dateien, deren _**[Hash](https://en.wikipedia.org/wiki/Hash_function)**_ identisch ist und verknüpft diese dann durch Hartlinks.

> \#!/bin/bash
>
> \# Compare by size to discard those that do not repeat
>
>
>
> cd $ELKARBACKUP\_PATH
>
> lastHash=''
>
> lastFile=''
>
>
>
> find . -mount -type f -printf '%15s %p\0'\|sort -nrz\|uniq -zDw15\|tr "\0" "\n"\|cut -b17- \|tr "\n" "\0"\|xargs -0 sha256sum|sort|uniq -Dw40|while read currentHash file
>
> do
>
>         if [ "x$lastHash" = "x$currentHash" ]
>
>         then
>
>                 rm "$file"
>
>                 ln "$lastFile" "$file"
>
>         fi
>
>         lastHash=$currentHash
>
>         lastFile="$file"
>
> done

<br />

Laden Sie das Skript auf den Server:

* Name: Repository komprimieren
* Aktivieren Sie es als Postskript-Skript, indem Sie _"Danach"_ bei _"Aufgabe"_ anhaken.

<br />

Jetzt editieren wir die Aufgabe, die wir oben bereits ausgeführt haben. Nur das wir jetzt noch das eben hochgeladene Skript im Feld _Postskript_ aktivieren. Speichern Sie die Aufgabe anschließend und führen Sie sie mittels _**Jetzt starten**_ aus. Das Ergebnis sollte so aussehen:

> \# ls -lah**i**
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

Die _**[Inodes](https://de.wikipedia.org/wiki/Inode)**_ sind jetzt identisch. Beide Dateien, die vorher doppelt Platz (symbolisiert durch unterschiedliche Inodes) auf der Platte verbraucht haben, benutzen jetzt nur noch einmal Platz auf dem Speicher.

