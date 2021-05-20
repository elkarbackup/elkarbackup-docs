---
id: installation
title: Installation
---

The Elkarbackup installation has been tested on the next systems:

  1. GNU/Linux
     1. [Debian Buster 10.0](#debian-buster-100)
     2. [Debian Bullseye 11.0](#debian-bullseye-110)
     3. [Ubuntu 20.04](#ubuntu-2004-lts)
  2. [Docker](#docker)

  [After the installation](/getting-started.html)

  ***
  
  ## Supported Systems

  ### Debian Buster (10.0)

  #### 1. Install these recommended packages:

  ```sh
  apt install debconf php php-cli rsnapshot apache2 mariadb-server php-mysql acl bzip2 php-xml libapache2-mod-php libssh2-1 mariadb-client gpg
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
  echo "deb http://elkarbackup.org/apt/debian buster main" > /etc/apt/sources.list.d/elkarbackup.list
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

  ### Debian Bullseye (11.0)

  #### 1. Install rsnaphost package from Debian 10 Buster:

  Debian 11 Bullseye won't distribute rsnaphost due to not being actively maintained, 
  so we must use the package from Debian 10 Buster.: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=986709

  ```sh
  wget http://ftp.debian.org/debian/pool/main/r/rsnapshot/rsnapshot_1.4.2-1_all.deb
  apt-get install ./rsnapshot_1.4.2-1_all.deb
  ```

  #### 2. Install mariadb-server and configure root password if you want a dedicated local DB server for Elkarbackup:

  ```sh
  apt install mariadb-server
  mysql_secure_installation
  ```

  #### 3. Add package repository key:

  ```sh
  apt install gpg
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
  ```

  #### 4. Add elkarbackup repositories:

  ```sh
  echo "deb http://elkarbackup.org/apt/debian bullseye main" > /etc/apt/sources.list.d/elkarbackup.list
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

 
  
  ### Ubuntu 20.04 LTS
  
  #### 1. Install these recommended packages:

  ```sh
    sudo apt install debconf php php-cli rsnapshot apache2 mysql-server php-mysql acl bzip2 php-xml libapache2-mod-php libssh2-1 gpg
  ```
  #### 2. Configure MySQL root password and enable access by password:

  ```sh
  sudo mysql_secure_installation
  echo 'UPDATE user SET plugin="mysql_native_password" WHERE user="root";' | sudo mysql -u root mysql
  ```

  #### 3. Add package repository key:

  ```sh
  wget -O - http://elkarbackup.org/apt/archive.gpg.key | sudo apt-key add -
  ```

  #### 4. Add elkarbackup repositories:

  ```sh
  sudo sh -c 'echo "deb http://elkarbackup.org/apt/ubuntu focal main" > /etc/apt/sources.list.d/elkarbackup.list'

  ```
  And update package index files:
      
  ```sh
  sudo apt update
  ```

  #### 5. Install Elkarbackup:

  ```sh
  sudo apt install elkarbackup
  ```

  ***

  ### Docker

  ElkarBackup docker repo in Docker Hub: https://hub.docker.com/r/elkarbackup/elkarbackup/
  
  Demo: [![asciicast](https://asciinema.org/a/CRZZ2NITZJueRU36oGDInxHrN.png)](https://asciinema.org/a/CRZZ2NITZJueRU36oGDInxHrN)

  ### After the installation

  Now you can access to Elkarbackup using the following URL:
  - [http://ip-address/elkarbackup/](http://ip-address/elkarbackup/)
  - [https://ip-address](https://ip-address/e)

  ```yaml
  Default user: root
  Default password: root
  ```

  **Note**: you can also use the address [http://elkarbackup](http://elkarbackup) but first you need to add your IP/name to your DNS/hosts file.

  After the installation, is highly recommended:
  * Change root user's password and email address (Users -> Show -> Users -> "root")
  * Configure notification email server and protocol (Config -> Manage Parameters)
