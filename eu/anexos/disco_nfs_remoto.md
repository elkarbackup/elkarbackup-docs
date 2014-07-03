## NFS urruneko diskoa

Gure sarean dugun NFS diskoa erabiltzeko asmoa dugunez, suposatzen dugu urruneko NFS diskoa erabiltzeko prest daukagula. Atal honetan azkar batean NFS zerbitzari bat debian ingurune batean nola instalatu dezakegun ikusiko dugu, eta baita ere nola erabili dezakegun disko hau sareko beste ordenagailuetatik. Gai honetan sakontzeko Internet sarean informazio asko dago.

NFS diskoa publikatuko duen zerbitzarian beharrezkoak diren paketeak instalatuko ditugu:

```bash
root@backupsNFS:~# apt-get install nfs-kernel-server portmap nfs-common
```

Ondoren, beste ordenagailuak urruneko disko moduan ikusiko duten karpeta zein den eta diskora atzipena baimendua izango duen IP sarea zein den zehaztu beharko dugu. Guzti hau `/etc/exports` fitxategian zehazten da.

Gure adibiderako, erabaki dugu zerbitzari honek publikatuko duen karpeta `/srv/nfskarpeta` dela, eta 192.168.3.0/24  sareak atzipena baimenduta izango duela, beraz lerro hau gehitu dugu `/etc/exports` fitxategian

```bash
/srv/nfskarpeta  192.168.3.0/24(rw,sync,no_subtree_check)
```

Hau egin ondoren, zerbitzua berrabiarazi eta ***exportfs*** komandoa exekutatuko dugu

```bash
root@backupsNFS:~# /etc/init.d/nfs-kernel-server restart
root@backupsNFS:~# exportfs -a
```


Honekin diskoa publikatuta dugu 192.168.3.0/24 sareko ordenagailuentzat. Orain NFS bezero batek nola erabili dezakeen ikusiko dugu, gure kasuan ElkarBackup zerbitzaria izango da NFS bezeroa.

Gogoan izan aurrez Elkarbackup zerbitzarian ***autofs*** paketea instalatu ez badugu, orain egin beharko dugula

```bash
root@ElkarBackup:~# apt-get install autofs
```

`/etc/auto.master` fitxategian ***/net   -host*** lerroa ez da komentatuta egon behar, beraz horrela egongo balitz, fitxategia editatu, komentarioa edo iruzkina kendu eta autfs zerbitzua berrabiarazi beharko genuke.

Urruneko NFS diskoa gure ekipoan auto-magikoki muntatzeko egin behar dugun gauza bakarra urruneko diskora atzitzea da, besterik ez.

Demagun gure NFS zerbitzariaren IP helbidea 192.168.3.100 dela. Nahikoa litzateke gure bezerotik ondoren ikusten dugun ***ls*** komandoa erabiltzea aurrerantzean atzipena izateko.

```bash
root@ElkarBackup:~# ls /net/192.168.3.100/srv/nfskarpeta/
```

Orain artekoak ondo funtzionatu badizu, horrek esan nahi du konfigurazio guztia ondo dagoela. ElkarBackup aplikazioak urruneko NFS diskoen atzipena ondo kudeatu dezan egin beharreko gauza bakarra  `/etc/auto.nfs4` fitxategia editatu eta lerro honi komentarioa edo iruzkina kentzea da:

```bash
/nfs4  /etc/auto.nfs4
```



