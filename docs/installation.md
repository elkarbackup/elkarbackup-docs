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

Elkarbackup Docker image is published on DockerHub and Github Container Registry.

#### Recommended usage via docker-compose

You can use Docker Compose to easily run ElkarBackup in an isolated environment built with Docker containers:


**docker-compose.yml***

```
version: '3'

services:
  elkarbackup:
    image: elkarbackup/elkarbackup:latest
    environment:
      SYMFONY__DATABASE__PASSWORD: "your-password-here"
      EB_CRON: "enabled"
      volumes:
      - backups:/app/backups
      - uploads:/app/uploads
      - sshkeys:/app/.ssh
    ports:
      - 8000:80
    
  db:
    image: mysql:5.7.22
    environment:
      MYSQL_ROOT_PASSWORD: "your-password-here"
    volumes:
      - db:/var/lib/mysql

volumes:
  db:
  backups:
  uploads:
  sshkeys:
```

Run `docker-compose up`, wait for it to initialize completely, and go to the address:

- http://localhost:80000


You can found more info about the Docker image configuration in the official [README](https://github.com/elkarbackup/elkarbackup/blob/master/docker/README.md):

https://github.com/elkarbackup/elkarbackup/blob/master/docker/README.md