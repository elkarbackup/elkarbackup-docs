---
id: version-1.3-storage-nfs
title: NFS storage
original_id: storage-nfs
---

At first it is assumed that if we want to use an NFS disk that we have accessible in our internal network, everything necessary is already ready to be used. In this section we will see very quickly what would be the way to install an NFS server in a debian environment, and how we could publish a resource to be used as a remote disk from other machines. There is a lot of documentation to go deeper into this topic on the Internet.

On the server that will publish the NFS disk, we will install the necessary packages:

> root@backupsNFS:~\# apt-get install nfs-kernel-server portmap nfs-common

Once this is done, we must decide which will be the local folder to which the other machines are going to access as a remote disk, and we will have to specify the range of IPs to which we allow access. This is specified in the file **/etc/exports**

In our example we have decided that the folder that we are going to publish on this NFS server will be _**/srv/nfsfolder**_ and access will be allowed to the computers of the network _**192.168.3.0/24**_, so we will add this line to the file _**/etc/exports**_

> /srv/nfsfolder  192.168.3.0/24\(rw,sync,no\_subtree\_check\)

At this point, we have to restart the service and execute the command exportfs:

> root@backupsNFS:~\# /etc/init.d/nfs-kernel-server restart
>
> root@backupsNFS:~\# exportfs -a

With this it is assumed that the disk is published and accessible for machines on the 192.168.3.0/24 network. Now we will see how we map it from an NFS client, in our case the elkarbakup server.

At this point it is worth remembering that if we have not previously installed the autofs package on our ElkarBackup server, now is the time to do it.

> root@ElkarBackup:~\# apt-get install autofs

We need to make sure that in the _**/etc/auto.master**_ the line _**net -host**_ is uncommented. If it was commented, please uncomment it and restart the _**autofs**_ service.

Now, it is enough that from our client machine we force access to the folder stored in the NFS server, so that it is mounted in a self-magic way.

Assuming that the NFS server has IP 192.168.3.100, an _**ls**_ like the following one would be enough to make the folder accessible from our NFS client:

> root@ElkarBackup:~\# ls /net/192.168.3.100/srv/nfsfolder/

If the previously seen has worked, that means the necessary software part is working properly. Finally, in order for the Elkarbackup web interface to use the NFS client to correctly manage access to remote disks, we need to edit the _**/etc/auto.nfs4**_ file and uncomment the line

> /nfs4  /etc/auto.nfs4











