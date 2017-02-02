Während der Zeit, in der dieses Dokument entstanden ist \(November 2016\), wurde Elkarbackup auf den folgenden Systemen getestet:

1. GNU/Linux

  * Debian Jessie 8.0

  * Debian Wheezy 7.0

  * Ubuntu 14.04

  * Ubuntu 16.04

  * Fedora 24

  * CentOS 7


2. Docker


## Debian Jessie 8.0

1. Installiere die folgenden empfohlenen Pakete:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Beachte: Merke Dir das MySQL-Admin Passwort!

2. Füge den Repository-Schlüssel hinzu:

  > wget -O - http://elkarbackup.org/apt/archive.gpg.key \| apt-key add -

3. Füge Elkarbackup Repositories der Quellliste hinzu:

  > echo "deb http://elkarbackup.org/apt/debian main" &gt; /etc/apt/sources.list.d/elkarbackup.list

  Aktualisiere die Paketquellen:

  > apt-get update

4. Installiere Elkarbackup:

  > apt-get install elkarbackup rsnapshot


## Debian Wheezy \(7.0\)

1. Installiere die folgenden empfohlenen Pakete:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Beachte: Merke Dir das MySQL-Admin Passwort!

2. Füge den Repository-Schlüssel hinzu:

  > wget -O - http://elkarbackup.org/apt/archive.gpg.key \| apt-key add -

3. Füge die folgende Zeile zur Datei /etc/apt/sources.list hinzu:

  > deb http://elkarbackup.org/apt/debian wheezy main

  Aktualisiere die Paketquellen:

  > apt-get update

4. Installiere Elkarbackup:

  > apt-get install elkarbackup


## Ubuntu 14.04 LTS

1. Installiere die folgenden empfohlenen Pakete:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Beachte: Merke Dir das MySQL-Admin Passwort!

2. Füge den Repository-Schlüssel hinzu:

  > wget -O - http://elkarbackup.org/apt/archive.gpg.key \| apt-key add -

3. Füge die folgende Zeile zur Datei /etc/apt/sources.list hinzu:

  > deb http://elkarbackup.org/apt/ubuntu trusty main

  Aktualisiere die Paketquellen:

  > apt-get update

4. Installiere Elkarbackup:

  > apt-get install elkarbackup


## Ubuntu 16.04 LTS

1. Installiere die folgenden empfohlenen Pakete:

  > apt-get install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libapache2-mod-php7.0 libssh2-1 mysql-client php-ssh2

  Beachte: Merke Dir das MySQL-Admin Passwort!

  Achtung: Solltest Du Probleme mit "apt locking issues" haben, sieh' bitte in diesem dokumentierten Fall nach, um das Problem zu beheben \([https://github.com/boxcutter/ubuntu/issues/73\#issuecomment-231679733](https://github.com/boxcutter/ubuntu/issues/73#issuecomment-231679733)\)

2. Füge den Repository-Schlüssel hinzu:

  > wget -O - http://elkarbackup.org/apt/archive.gpg.key \| apt-key add -

3. Füge das Elkarbackup-Repository hinzu:

  > echo "deb http://elkarbackup.org/apt/ubuntu xenial main" &gt; /etc/apt/sources.list.d/elkarbackup.list

  Aktualisiere die Paketquellen:

  > apt-get update

4. Installiere Elkarbackup:

  > apt-get install elkarbackup


## Fedora 24

1. Installiere die folgenden empfohlenen Pakete:

  > $ dnf install httpd php mariadb-server rsnapshot zip php-mysql php-xml php-process
  > 
  > \# Start Apache and Mysql server
  > 
  > $ systemctl start httpd
  > 
  > $ systemctl start mariad

2. Konfiguriere das MySQL-Passwort für den Benutzer root:

  > $ mysql\_secure\_installation

3. Konfiguriere die PHP-Zeitzone:

  > $ sed -i "s/;date.timezone =.\*/date.timezone = Europe\/London/g" /etc/php.ini

4. Starte den ElkarBackup-Installer:

  > $ bash -c "$\(curl -s https://gist.githubusercontent.com/xezpeleta/c5a5fe960b39cfab29e935dd381a4ab2/raw/eb-installer.sh\)"
  > 
  > \# Optional: set it to start automatically at boot time
  > 
  > $ systemctl enable mariadb
  > 
  > $ systemctl enable httpd.service


## CentOS 7

1. Aktiviere REMI-Repository \(PHP 5.6 oder höher ist dafür nötig\)

  CentOS 7 bringt PHP 5.4 mit, daher muss es zunächst auf PHP 5.6 oder PHP 7 aktualisiert werden

  > yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
  > 
  > yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
  > 
  > yum install yum-utils
  > 
  > yum-config-manager --enable remi-php56

  Mehr Informationen dazu: [http://rpms.remirepo.net/wizard/](http://rpms.remirepo.net/wizard/)

2. Installiere die benötigten Pakete:

  > $ yum install bzip2 httpd mariadb-server rsnapshot zip php php-mysql php-xml php-process
  > 
  > \# Start apache and mysql server
  > 
  > $ systemctl start httpd
  > 
  > $ systemctl start mariadb

3. Konfiguriere das MySQL-Passwort für den Benutzer root:

  > $ mysql\_secure\_installation

4. Konfiguriere die PHP-Zeitzone:

  > $ sed -i "s/;date.timezone =.\*/date.timezone = Europe\/London/g" /etc/php.ini

5. Starte den ElkarBackup-Installer:

  > $ bash -c "$\(curl -s https://gist.githubusercontent.com/xezpeleta/c5a5fe960b39cfab29e935dd381a4ab2/raw/eb-installer.sh\)"
  > 
  > \# Optional: set it to start automatically at boot time
  > 
  > $ systemctl enable mariadb
  > 
  > $ systemctl enable httpd.service


## Docker

ElkarBackup-Docker-Repo findet sich im Docker-Hub: [https://hub.docker.com/r/elkarbackup/elkarbackup/](https://hub.docker.com/r/elkarbackup/elkarbackup/)

## Nach der Installation

Du kannst nun auf Elkarbackup zugreifen: [http://ip-address/elkarbackup/app.php/login](http://ip-address/elkarbackup/app.php/login) \(root/root\)

Beachte: Du kannst auch die Adresse you can also use the address [http://elkarbackup](http://elkarbackup) benutzen. Dazu musst Du aber zunächst die IP/Name in Deine DNS/hosts-Datei schreiben.

Es wird eindringlich darauf hingewiesen, sich nach der Installation um die folgenden Dinge zu kümmern:

* Das Passwort für den Benutzer "root" zu ändern und eine gültige eMail-Adresse zu hinterlegen \(Benutzer -&gt; Benutzer "root" bearbeiten\)
* Konfiguriere die Protokollierung und den Mail-Server für die Benachrichtigungen \(Optionen -&gt; Parameter verwalten\)

![](/assets/overview_01.png)
