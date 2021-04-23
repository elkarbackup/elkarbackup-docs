---
id: version-1.3-installation
title: Installation
original_id: installation
---

The Elkarbackup v1.4 installation has been tested on the next systems:

  1. GNU/Linux
     1. [Debian 10 Buster](#debian-10-buster)
     2. [Debian 9 Stretch](#debian-9-stretch)
     3. [Ubuntu 20.04](#ubuntu-2004-lts)
     4. [Ubuntu 18.04](#ubuntu-1804-lts)
  2. [Docker](#docker)


  [After the installation](/docs/getting-started.md)

  ***
  
  ## Supported Systems
  
  ### Debian 10 Buster

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

  ### Debian 9 Stretch

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
  
  ### Ubuntu 20.04 LTS
  
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
  echo "deb http://elkarbackup.org/apt/ubuntu focal main" > /etc/apt/sources.list.d/elkarbackup.list
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
