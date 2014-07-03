Irudia erabili beharrean aurrez dugun Debian batean instalatu nahi badugu, kontutan izan hainbat pakete agian eskuz instalatu beharko direla. Elkabackup paketeak besteak beste MySQL datu base bat behar du, beraz hemen aukeraketak egiteko unea heldu da:
- Edo aurrez gure ElkarBackup-Debian zerbitzarian ***mysql-server*** paketea instalatzen dugu berak datu basea ere kudeatu dezan
- Edo beste zerbitzari batean instalatuta daukagun MySQL zerbitzaria erabiltzen dugu datu basea kudeatzeko.

MySQL zerbitzarian backup sistemaren konfigurazio informazioa gordeko da: bezero eta lanen datuak, politikak, log-ak, erabiltzaileak, eta abar.

Hortaz aparte beste bakete batzuk derrigorrez instalatu behar dira: mysql bezeroa, PHP, eta abar. Guk hemen denak batera instalatuko ditugu (mysql zerbitzaria ere bai):
```bash
root@ElkarBackup:~# aptitude install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2
```


MySQL zerbitzaria instalatzerakoan bere ***root*** erabiltzailearen pasahitza eskatuko digu. Guk adibiderako ***root*** jarriko diogu, baina esan beharrik ez dago hau produkzioan aldatu beharko litzatekeela.

Orain ElkarBackup paketea instalatuko dugu. Paketeak dituen menpekotasunen artean, hauek nabarmenduko genituzke:

 - Apache Web zerbitzaria: Erabiltzailearen web interfazea kudeatzeko erabiliko da
 - Rsnapshot: HardLink-ak erabiliz diskora kopiak egiteko ardura izango duen softwarea
 - ssh eta rsync: Bezeroekin konektatu eta datuak sinkronizatzeko erabiliko den softwarea.
 - Fitxategi sisteman ACLak aktibatuta izan behar ditu.

Azken puntu honek garrantzia du: Sistemak ACLak instalatuta eta aktibatuta izan behar ditu gerora diskoan datuak gordetzeko erabiliko duen partizioan. Debian 7an hau horrela dator instalaziotik, hau da balio lehenetsi moduan ACLak aktibatut datoz, baina Debian 6an ez da horrela.

Elkarbackup paketea Debian 6an instalatzen ari bagara, ***root partizioan (/)*** ACL-ak aktibatu behar ditugu. Horretarako `/etc/fstab` fitxategia editatu eta acl jarriko dugu, ondoren azaltzen den moduan:
```bash
# / was on /dev/sda1 during installation
UUID=e3b77e85-df06-4659-b143-5939ccbf7d52 / ext3    errors=remount-ro,acl 0       1
```


Hau egin ondoren hoberena sistema berrabiraztea litzateke, hau ondo egin dugula ziurtatzeko.

ACL kontu hauek konpondu ondoren, lehenik eta behin errepositorioaren gakoa inportatu beharko dugu. Hau root erabiltzailearekin egin beharreko lana da:

```bash
root@backups:~# wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
```


Hau egin ondoren `sources.list` editatu
```bash
root@backups:~# nano /etc/apt/sources.list
```


eta lerro hauek gehitu
```bash
# Elkarbackup repository
deb http://elkarbackup.org/apt/debian wheezy main
```


Azkenik eguneratu eta instalatu
```bash
root@ElkarBackup:~# aptitude update
root@ElkarBackup:~# aptitude safe-upgrade -y
root@ElkarBackup:~# aptitude install autofs elkarbackup
```


Instalazioan MySQL datu base bat sortu behar du aplikaziorako, beraz gure MySQLko admin erabiltzaile izena eta pasahitza eskatuko dizkigu. Gogoan izan horiek MySQL zerbitzariaren instalazioan emandako datuak direla, eta gure kasuan ***root*** erabiltzailea ***root*** pasahitzarekin jarri dugula.

Azkenik beste ukitu bat. SSH konexioetan makina batera lehenengo aldiz konektatzen garenean, gure zerbitzariak esaten digu ez duela makina hori ezagutzen eta bere [fingerprint](http://linuxcommando.blogspot.com.es/2008/10/how-to-disable-ssh-host-key-checking.html) eskuz baieztatu behar dugula. Hau segurtasun neurri bat da, baina gure kasuan eta automatizazioari begira arazo bihurtzen da, beraz ElkarBackup zerbitzarian `/etc/ssh/ssh_config` editatuko dugu eta hau gehituko diogu:
```bash
StrictHostKeyChecking no
```


Honela ez du galderarik egingo zerbitzari berri batera konektatzen denean.

Datu horiek sartu eta aplikazioaren instalazioa egingo da. Honekin paketea instalatuta eta lanerako prest izango dugu.

Kontutan izan ACLak aktibatuta ez baditugu paketearen instalazioak bukaeran errore hau emango digula:

```bash
ACLs not supported. Remount with ACL and reconfigure with 'dpkg --configure --pending'
dpkg: error al procesar elkarbackup (--configure):
 el subproceso instalado el script post-installation devolvió el código de salida de error 1
Se encontraron errores al procesar:
 elkarbackup
```

eta azalpenak dioen moduan, hau konpontzeko ACLak aktibatu eta ondoren instalazioa agindu honekin  burutu daiteke:

```bash
root@elkarbackup:~#  dpkg --configure --pending
```

