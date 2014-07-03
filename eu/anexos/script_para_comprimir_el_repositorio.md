Demagun erabiltzaile ezberdin batzuk fitxategi berdinen kopia ezberdinak gordetzen dituztela sarean, bakoitzak bere karpetan kopia bat duelarik. Dokumentu hauek ofimatikoak direnean (normalean ez oso handiak) ez da hain arazo handia izaten, baina beste mota batzuetakoak direnean, bideoak, software eguneraketak, eta abar, sarean leku asko jaten dute, informazio berdina delarik.

Badakigu kopia egin ondoren datu hauek segurtasun kopia mantentzen duen diskoan ez direla aldatuko, beraz aukera izan dezakegu diskoan behin bakarrik gorde eta beste kopia guztiak  hardlink bidez estekatzeko.

Adibiderako, Debian bezeroan daukagun fitxategiren bat kopiatu eta beste izen batekin itsatsiko dugu `/media/Backups` karpetan. Fitxategi berdina den arren, bi aldiz dago eta diskoan leku bikoitza ari da okupatzen.

```bash
root@DebianBezeroa:~# cd /media/Backups/Software/
root@DebianBezeroa:/media/Backups/Software# cp vlc-2.0.6-win32.exe vlc-2.0.6-win32-kopia.exe
root@DebianBezeroa:/media/Backups/Software# ls -lah
total 209M
drwxr-xr-x 2 root root 4,0K jun 12 12:44 .
drwxr-xr-x 4 root root 4,0K jun  7 11:24 ..
-rw-r--r-- 1 root root 1,1M nov 18  2010 7z920.exe
-rw-r--r-- 1 root root 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
-rw-r--r-- 1 root root  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-r--r-- 1 root root  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe
```


Lan honen kopia egiteko ardura duen lanean sartu eta ***Exekutatu orain*** botoiaren bidez abiatuko dugu. Lana bukatzen denean ikusiko dugu ElkarBackup zerbitzariko karpetan fitxategi biak daudela.

```bash
#cd /var/spool/elkarbackup/backups/0001/0001/Hourly.0/media/Backups/Software/
# ls -lah
total 209M
drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
-rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
-rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
-rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe
```


eta ikusten dugu ere ez daudela hardlink moduan estekatuta, ***inode*** ezberdina dutelako

```bash
# ls -lahi
total 209M
40831 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
40828 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
29332 -rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
29333 -rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
29334 -rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
74101 -rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe
```


Orain ikusiko dugu nola erabili dezakegun postscript script bat hau konpontzeko.

Script honek [Hash](https://es.wikipedia.org/wiki/Función_hash) berdina duten fitxategiak bilatu eta hardlink bidez estekatuko ditu

```bash
#!/bin/bash
# lehenengo tamainaz konparatu eta errepikatuta ez daudenak deskartatu

cd $ELKARBACKUP_PATH
lastHash=''
lastFile=''

find . -mount -type f -printf '%15s %p\0'|sort -nrz|uniq -zDw15|tr "\0" "\n"|cut -b17- |tr "\n" "\0"|xargs$
do
        if [ "x$lastHash" = "x$currentHash" ]
        then
                rm "$file"
                ln "$lastFile" "$file"
        fi
        lastHash=$currentHash
        lastFile="$file"
done
```


Scripta igoko dugu:
- Izena: Errepositorioa txikitu
- Lanen PostScritp moduan erabiltzeko baimendu

Orain Debian bezeroaren lana editatu eta script hau ***PostScript*** bezala aukeratuko dugu, eta azkenik lanaren exekuzioa abiatuko dugu.

```bash
# ls -lahi
total 209M
40838 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 15:22 .
40835 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
29332 -rw-rw-r-- 4 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
29333 -rw-rw-r-- 4 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
29334 -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
29334 -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32-kopia.exe
```

Orain lehenengo zutabean agertzen diren inode zenbakietan erreparatzen badugu, konturatuko gara kopiak diren fitxategiak inode berdinarekin daudela, beraz diskoaren leku berdinera apuntatzen ari dira eta ez dute erabilitako espazioa bikoizten.


