At the time of writing this document \(november 2016\), the Elkarbackup installation has been tested on the next systems:

1. GNU\/Linux

  * Debian Jessie 8.0

  * Debian Wheezy 7.0

  * Ubuntu 14.04

  * Ubuntu 16.04

  * Fedora 24

  * CentOS 7



1. Docker

## Debian Jessie 8.0

1. Install these recommended packages:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Note: remember MySQL admin password!

2. Add package repository key:

  > wget -O - http:\/\/elkarbackup.org\/apt\/archive.gpg.key \| apt-key add -

3. Add elkarbackup repositories:

  > echo "deb http:\/\/elkarbackup.org\/apt\/debian main" &gt; \/etc\/apt\/sources.list.d\/elkarbackup.list

  And update package index files:

  > apt-get update

4. Install Elkarbackup:

  > apt-get install elkarbackup rsnapshot


## Debian Wheezy \(7.0\)

1. Install these recommended packages:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Note: remember MySQL admin password!

2. Add package repository key:

  > wget -O - http:\/\/elkarbackup.org\/apt\/archive.gpg.key \| apt-key add -

3. Add  this line to your \/etc\/apt\/sources.list file:

  > deb http:\/\/elkarbackup.org\/apt\/debian wheezy main

  And update package index files:

  > apt-get update

4. Install Elkarbackup:

  > apt-get install elkarbackup


## Ubuntu 14.04 LTS

1. Install these recommended packages:

  > apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2

  Note: remember MySQL admin password!

2. Add package repository key:

  > wget -O - http:\/\/elkarbackup.org\/apt\/archive.gpg.key \| apt-key add -

3. Add this line to your \/etc\/apt\/sources.list file:

  > deb http:\/\/elkarbackup.org\/apt\/ubuntu trusty main

  And update package index files:

  > apt-get update

4. Install Elkarbackup:

  > apt-get install elkarbackup


## Ubuntu 16.04 LTS

1. Install these recommended packages:

  > apt-get install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libapache2-mod-php7.0 libssh2-1 mysql-client php-ssh2

  Note: remember MySQL admin password!

  Note: should you have any problem with apt locking issues, have a look at this documented bug in Ubuntu 16.04 and how to solve it \([https:\/\/github.com\/boxcutter\/ubuntu\/issues\/73\#issuecomment-231679733](https://github.com/boxcutter/ubuntu/issues/73#issuecomment-231679733)\)

2. Add package repository key:

  > wget -O - http:\/\/elkarbackup.org\/apt\/archive.gpg.key \| apt-key add -

3. Add the elkarbackup repo:

  > echo "deb http:\/\/elkarbackup.org\/apt\/ubuntu xenial main" &gt; \/etc\/apt\/sources.list.d\/elkarbackup.list

  And update package index files:

  > apt-get update

4. Install Elkarbackup:

  > apt-get install elkarbackup


## Fedora 24

1. Install these recommended packages:

  > $ dnf install httpd php mariadb-server rsnapshot zip php-mysql php-xml php-process
  > 
  > \# Start Apache and Mysql server
  > 
  > $ systemctl start httpd
  > 
  > $ systemctl start mariad

2. Configure MySQL root password:

  > $ mysql\_secure\_installation

3. Configure PHP Timezone:

  > $ sed -i "s\/;date.timezone =.\*\/date.timezone = Europe\\/London\/g" \/etc\/php.ini

4. Run ElkarBackup installer:

  > $ bash -c "$\(curl -s https:\/\/gist.githubusercontent.com\/xezpeleta\/c5a5fe960b39cfab29e935dd381a4ab2\/raw\/eb-installer.sh\)"
  > 
  > \# Optional: set it to start automatically at boot time
  > 
  > $ systemctl enable mariadb
  > 
  > $ systemctl enable httpd.service


## CentOS 7

1. Enable REMI repository \(PHP 5.6 or higer required\)

  CentOS 7 provides PHP 5.4, so we need to upgrade it to PHP 5.6 or PHP7

  > yum install https:\/\/dl.fedoraproject.org\/pub\/epel\/epel-release-latest-7.noarch.rpm
  > 
  > yum install http:\/\/rpms.remirepo.net\/enterprise\/remi-release-7.rpm
  > 
  > yum install yum-utils
  > 
  > yum-config-manager --enable remi-php56

  More info: [http:\/\/rpms.remirepo.net\/wizard\/](http://rpms.remirepo.net/wizard/)

2. Install the required packages:

  > $ yum install bzip2 httpd mariadb-server rsnapshot zip php php-mysql php-xml php-process
  > 
  > \# Start apache and mysql server
  > 
  > $ systemctl start httpd
  > 
  > $ systemctl start mariadb

3. Configure MySQL root password:

  > $ mysql\_secure\_installation

4. Configure PHP Timezone:

  > $ sed -i "s\/;date.timezone =.\*\/date.timezone = Europe\\/London\/g" \/etc\/php.ini

5. Run ElkarBackup installer:

  > $ bash -c "$\(curl -s https:\/\/gist.githubusercontent.com\/xezpeleta\/c5a5fe960b39cfab29e935dd381a4ab2\/raw\/eb-installer.sh\)"
  > 
  > \# Optional: set it to start automatically at boot time
  > 
  > $ systemctl enable mariadb
  > 
  > $ systemctl enable httpd.service


## Docker

ElkarBackup docker repo in Docker Hub: [https:\/\/hub.docker.com\/r\/elkarbackup\/elkarbackup\/](https://hub.docker.com/r/elkarbackup/elkarbackup/)



