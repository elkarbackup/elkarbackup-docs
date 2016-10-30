Now we'll learn how to set up new clients to make backups. Our recently installed Elkarbackup server will connect to these clients band it'll get the data using _ssh_ and _rsync_ protocols.

## SSH fingerprint feature

Before continuing, we'll pay attention to the **_fingerprint_** feature in ssh connections. When you login to a remote host for the first time, the remote host's host key is unknown to the SSH client. The default behavior is to ask the user to confirm the fingerprint of the remote host key. That is a mechanism to confirm the trustworthiness of the the machine you are connecting to.

Even though this is a good way to avoid a possible [Man-In-The-Middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), it would suppose an inconvenience if you are trying to automate ssh connections without using the console. At this point, we advise to disable this feature in the Elkarbackup server ssh configuration adding this line to it's **_ \/etc\/ssh\/ssh\_config_** file:

> StrictHostKeyChecking no



Now, we will see how to configure new clients and tasks. 

