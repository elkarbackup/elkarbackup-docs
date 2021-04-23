---
id: version-1.3-installation
title: Installation
original_id: installation
---

Elkarbackup v1.3 installation has been tested on the next systems:

  1. GNU/Linux
     1. [Debian Stretch 9.0](#debian-stretch-90)
     2. [Debian Jessie 8.0](#debian-jessie-80)
     3. [Debian Wheezy 7.0](#debian-wheezy-70)
     4. [Ubuntu 18.04](#ubuntu-1804-lts)
     5. [Ubuntu 16.04](#ubuntu-1604-lts)
     6. [Ubuntu 14.04](#ubuntu-1404-lts)
  2. [Docker](#docker)

  <details>
  <summary>Your favorite Linux distribution is not in the list?</summary>

  > You can [open an issue](https://github.com/elkarbackup/elkarbackup/issues)
  > requesting it!

  </details>

  [After the installation](/get-started.html)

  ***
  
  ## Supported Systems

  ### Debian Stretch (9.0)

  #### 1. Install these recommended packages:

  ```sh
  apt install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libapache2-mod-php7.0 libssh2-1 mysql-client
  ```
  #### 2. Configure MySQL root password:

  ```sh
  $ mysql_secure_installation
  ```

  #### 3. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 4. Add elkarbackup repositories:

  ```sh
  echo "deb http://elkarbackup.org/apt/debian stretch main" > /etc/apt/sources.list.d/elkarbackup.list
  ```
  And update package index files:
      
  ```sh
  apt update
  ```

  #### 5. Install Elkarbackup:

  ```sh
  apt install elkarbackup rsnapshot
  ```

  ***


  ### Debian Jessie (8.0)

  #### 1. Install these recommended packages:

  ```sh
  apt install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2
  ```
  Note: remember MySQL admin password!

  #### 2. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 3. Add elkarbackup repositories:

  ```sh
  echo "deb http://elkarbackup.org/apt/debian jessie main" > /etc/apt/sources.list.d/elkarbackup.list
  ```
  And update package index files:
      
  ```sh
  apt update
  ```

  #### 4. Install Elkarbackup:

  ```sh
  apt install elkarbackup rsnapshot
  ```

  ***

  ### Debian Wheezy (7.0) 
  #### 1. Install these recommended packages:

  ```sh
  apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2
  ```
  Note: remember MySQL admin password!

  #### 2. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 3. Add this line to your `/etc/apt/sources.list` file:

  ```sh
  deb http://elkarbackup.org/apt/debian wheezy main
  ```
  And update package index files:
      
  ```sh
  apt-get update
  ```

  #### 4. Install Elkarbackup:

  ```sh
  apt-get install elkarbackup
  ```
  
  ### Ubuntu 18.04 LTS
  
  #### 1. Install these recommended packages:

  ```sh
  apt install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libapache2-mod-php libssh2-1 mysql-client
  ```
  #### 2. Configure MySQL root password:

  ```sh
  $ mysql_secure_installation
  ```

  #### 3. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 4. Add elkarbackup repositories:

  ```sh
  echo "deb http://elkarbackup.org/apt/ubuntu bionic main" > /etc/apt/sources.list.d/elkarbackup.list
  ```
  And update package index files:
      
  ```sh
  apt update
  ```

  #### 5. Install Elkarbackup:

  ```sh
  apt install elkarbackup
  ```

  ***

  
  ### Ubuntu 16.04 LTS

  #### 1. Install these recommended packages:

  ```sh
  apt install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libapache2-mod-php7.0 libssh2-1 mysql-client
  ```
  Note: remember MySQL admin password!

  #### 2. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 3. Add the elkarbackup repo:

  ```sh
  echo "deb http://elkarbackup.org/apt/ubuntu xenial main" > /etc/apt/sources.list.d/elkarbackup.list
  ```
  And update package index files:
      
  ```sh
  apt update
  ```

  #### 4. Install Elkarbackup:

  ```sh
  apt install elkarbackup
  ```


  ### Ubuntu 14.04 LTS

  #### 1. Install these recommended packages:

  ```sh
  apt-get install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2
  ```
  Note: remember MySQL admin password!

  #### 2. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 3. Add this line to your `/etc/apt/sources.list` file:

  ```sh
  deb http://elkarbackup.org/apt/ubuntu trusty main
  ```
  And update package index files:
      
  ```sh
  apt-get update
  ```

  #### 4. Install Elkarbackup:

  ```sh
  apt-get install elkarbackup
  ```

  ### Fedora 24

  #### 1. Install these required packages:

  ```sh
  $ dnf install httpd php mariadb-server rsnapshot zip php-mysql php-xml php-process

  # Start Apache and Mysql server
  $ systemctl start httpd
  $ systemctl start mariadb
  ```

  #### 2. Configure MySQL root password:

  ```sh
  $ mysql_secure_installation
  ```

  #### 3. Configure PHP Timezone

  ```sh
  $ sed -i "s/;date.timezone =.*/date.timezone = Europe\/London/g" /etc/php.ini
  ```

  #### 4. Run ElkarBackup installer:

  ```sh
  $ bash -c "$(curl -s https://raw.githubusercontent.com/elkarbackup/elkarbackup/master/install/eb-installer.sh)"

  # Optional: set it to start automatically at boot time
  $ systemctl enable mariadb
  $ systemctl enable httpd.service
  ```

  ### CentOS 7

  #### 1. Enable REMI repository (PHP 5.6 or higer required)

  CentOS 7 provides PHP 5.4, so we need to upgrade it to PHP 5.6 or PHP7

  ```sh
  yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
  yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
  yum install yum-utils
  yum-config-manager --enable remi-php56
  ```
  More info: http://rpms.remirepo.net/wizard/

  #### 2. Install the required packages:

  ```sh
  $ yum install bzip2 httpd mariadb-server rsnapshot zip unzip which git php php-mysql php-xml php-process

  # Start apache and mysql server
  $ systemctl start httpd
  $ systemctl start mariadb
  ```

  #### 3. Configure MySQL root password:

  ```sh
  $ mysql_secure_installation
  ```

  #### 4. Configure PHP Timezone

  ```sh
  $ sed -i "s/;date.timezone =.*/date.timezone = Europe\/London/g" /etc/php.ini
  ```

  #### 5. Run ElkarBackup installer:

  ```sh
  $ bash -c "$(curl -s https://raw.githubusercontent.com/elkarbackup/elkarbackup/master/install/eb-installer.sh)"

  # Optional: set it to start automatically at boot time
  $ systemctl enable mariadb
  $ systemctl enable httpd.service
  ```


  ### Docker

  ElkarBackup docker repo in Docker Hub: https://hub.docker.com/r/elkarbackup/elkarbackup/
  
  Demo: [![asciicast](https://asciinema.org/a/CRZZ2NITZJueRU36oGDInxHrN.png)](https://asciinema.org/a/CRZZ2NITZJueRU36oGDInxHrN)

  ### After the installation

  Now you can access to Elkarbackup using the following URL:
  - [http://ip-address/elkarbackup/app.php/login](http://ip-address/elkarbackup/app.php/login)
  - [https://ip-address](https://ip-address/e)

  ```yaml
  Default user: root
  Default password: root
  ```

  **Note**: you can also use the address [http://elkarbackup](http://elkarbackup) but first you need to add your IP/name to your DNS/hosts file.

  After the installation, is highly recommended:
  * Change root user's password and email address (Users -> Show -> Users -> "root")
  * Configure notification email server and protocol (Config -> Manage Parameters)
