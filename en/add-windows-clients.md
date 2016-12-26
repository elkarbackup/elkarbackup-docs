> _**Note**_: Nowadays we are trying to find a better way in order to make easier the process to backup data from Windows clients. It appears that in the near future Windows versions will have the option to run ssh as service, so we could configure Windows and Linux clients using the same procedure. In the meantime we will continue to use the procedure described below.

The main difference between Windows and Linux clients is in the URL parameter, the rest is the same.

With Windows servers use the _rsync_ protocol in place of ssh protocol. In order to do this, the Windows machine has to accept rsync connections, that is, it needs an active rsync server. 

In our example:

```
Name: Cliente Windows

URL: 10.15.181.156:

QUOTA: -1

Description: One of our Windows Servers

Pre/Post script: We leave it unselected.
```

Pay attention to the URL parameter. After putting the IP address we have to put "_**:**_", this way we say that it uses the rsync protocol.

We can find different Rsync servers for Windows platforms. We will use the free version of [cwRsync](https://www.backupassist.com/rsync/cwRsyncServer_4.1.0_Installer.zip), for which we will download the cwRsyncServer 4.0.5 Installer.

Before we install, we will add a local user to the Windows machine. In the virtual machine with Windows7 that we are using in the example we have called the user _**SvcCWRSYNC**_ and we have given _**elkarbackup**_ as the user's password.

