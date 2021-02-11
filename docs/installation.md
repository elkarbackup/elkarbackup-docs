---
id: installation
title: Installation
---

The Elkarbackup installation has been tested on the next systems:

  1. GNU/Linux
     1. [Debian Buster 10.0](#debian-buster-100)
     2. [Ubuntu 20.04](#ubuntu-2004-lts)
  2. [Docker](#docker)

  <details>
  <summary>Your favorite Linux distribution is not in the list?</summary>

  > You can check the previous [1.3 version](https://github.com/elkarbackup/elkarbackup-docs/installation-1.3.md)
  > Or you can [open an issue](https://github.com/elkarbackup/elkarbackup/issues)
  > requesting it!

  </details>

  [After the installation](/get-started.html)

  ***
  
  ## Supported Systems

  ### Debian Buster (10.0)

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
