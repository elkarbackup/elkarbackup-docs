At the time of writing this document \(november 2016\), the Elkarbackup installation has been tested on the next systems:

1. GNU\/Linux
  * Debian Jessie 8.0

  * Debian Wheezy 7.0

  * Ubuntu 14.04

  * Ubuntu 16.04

  * Fedora 24

  * CentOS 7


2. Docker

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






