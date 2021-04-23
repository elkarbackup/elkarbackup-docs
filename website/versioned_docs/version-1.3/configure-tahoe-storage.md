---
id: version-1.3-storage-tahoe
title: Configure Tahoe-LAFS storage
original_id: storage-tahoe
---

Tahoe storage is a secondary storage, which can be enabled and disabled in the _**Settings → Manage copies location**_ menu. Regardless of whether it has been activated or not, the last configuration will be saved.

It is important to keep in mind that this storage is based on the main storage so it is imperative that the main storage is always configured correctly.

Note: To learn more about what Tahoe storage provides, review the section _**A review of concepts:  Tahoe-LAFS**_.

## Basic configuration

To configure Tahoe we need to know the URL that will allow us to connect ElkarBackup with the Tahoe network \(Furl of the introductory node\). In addition we must decide the values that we are going to give to the parameters K and N \(H is optional\).

K stands for the number of available nodes that ElkarBackup needs to be able to retrieve the data stored on the network. It must be greater than 0.

N represents the number of nodes where backups will be stored. It must be greater than or equal to K.

## Advanced use

The directory where the Tahoe node for ElkarBackup is installed is _**/var/lib/elkarbackup/.tahoe/**_

The node configuration file is _**.tahoe/tahoe.cfg**_

If you want to use the ElkarBackup node to access the Tahoe network it is necessary to do it through the system user elkarbackup.

Examples:

* To restart the node: "_~$ tahoe restart"_
* To do an _**ls**_ on the backups repository:_ "~$ tahoe ls elkarbackup:"_
* To renew the rentals: "_~$ tahoe deep-check --add-lease elkarbackup:"_





