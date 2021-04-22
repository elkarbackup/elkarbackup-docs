---
id: version-1.3.5-hosts-solving-problems
title: Solving problems
original_id: hosts-solving-problems
---

As we are transfering files between servers, sometimes we can suffer communication problems. The Logs section can be very useful in detecting the cause of these problems.

When writing this document I had a problem communicating with the Windows client, and this is what I saw in the Logs section:

> Command "/usr/bin/rsnapshot" -c "/tmp/rsnapshot.2\_2.cfg" sync 2&gt;&1 failed. Diagnostic information follows: _**rsync: failed to connect to**_ 10.15.181.156: Connection timed out \(110\) rsync error: error in socket IO \(code 10\) at clientserver.c\(122\) \[Receiver=3.0.7\]

The system tells me that we have communication problems. There may be at least two causes:

* The rsync service in the Windows client has problems.
* We have communication problems between our Elkarbackup server and the client using the Rsync protocol

To see if it is the first option we make a telnet to the rsync port \(TCP 873\) from the same Windows client \(in Windows7 telnet does not come preinstalled\). As it is a local connection, we are avoiding other communication problems.

![](assets/screenshots/clients_jobs_21.png)

And if we see that we get a valid connection that means the service is fine

![](assets/screenshots/clients_jobs_22.png)

Now we try the same connection but this time from the ElkarBackup server to the Windows client:

> root@ElkarBackup:~\# telnet 10.15.181.156 873
>
> Trying 10.15.181.156...
>
> telnet: Unable to connect to remote host: Connection timed out

We see that the connection is not established, so everything points to some firewall, surely in the Windows client.

In our example Windows7 has the firewall enabled on the local network as well, and is blocking rsync traffic. Rules to allow rsync \(TCP 873\) between the ElkarBackup server and the Windows client should be added. In our example for going faster, we will choose to stop the firewall.

