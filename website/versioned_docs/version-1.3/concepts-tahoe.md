---
id: version-1.3-concepts-tahoe
title: A review of concepts: Tahoe
sidebar_label: Tahoe
original_id: concepts-tahoe
---

[Tahoe-LAFS](https://www.tahoe-lafs.org/) is a decentralized, fault-tolerant file system. It distributes the stored data between multiple servers preserving its privacy and security. The storage network is designed for long-term storage, such as backup storage.

The documentation can be accessed from [here](https://www.tahoe-lafs.org/trac/tahoe-lafs/wiki/Doc).

## About the nodes

Tahoe allows to create a network of servers. Each '_**server**_' represents a node that can be a client of the system and at the same time a storage server. In addition, it is imperative that in each network there is a special node, called introducer node, which is responsible for registering the nodes in the network.

When you create a node for the first time you need to configure it. To do this, edit the configuration file _**'tahoe.cfg**_'. Once configured, it is started and connected to the network through the introducer node.

## About the portions

When a client wants to store a file performs, in an automated but configurable way, through the erasure coding method a division of the data. Each piece that is created will be called '_**share**_'.

In Tahoe three parameters are used: K, H and N, also called shares.needed, shares.happy and shares.total respectively. The division of the data is done as follows:

Multiple \(N\) portions are created with redundant data so that, by storing them on the servers in the network \(at least H servers\), data recovery is ensured even though some serviced servers are no longer available \( Data can be retrieved by obtaining at least K portions\). The K-H-N parameters are configurable on each client node.

Data written to the Tahoe network will take up more space than the original file. In fact, assuming that the original file size is D, the space it will occupy in the network is equal to ND/K and not DN as would be if we replicate the data on the N servers in a common way.

## About licenses and the garbage collector

In a Tahoe network, each file can be accessed with a URI that represents both the file ID and the permissions on it.

These URIs are called 'capabilities' or licenses and can be read-write type\(writecap\), read-only \(readcap\), or of verification type \(verifycap\). Therefore the permissions of the files are not linked to the clients but to their license.

It is necessary and sufficient to know the license in order to obtain access to the file.

Tahoe-LAFS uses a garbage collector to avoid conflicts when deleting files. Files have an expiration date that can be renewed, this 'expiration date' is called 'lease' or rent. A rental, as the name implies, can be renewed so that the garbage collector does not delete it. The collector will go through each and every file on the server checking the date of the rents and when it finds an expired one, it eliminates it. You can renew the lease of a directory and all the files that it contains, through its verifycap.



