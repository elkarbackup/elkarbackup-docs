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

-- IMAGE-----



As the service is going to run with this user, it is desirable that they have the necessary permissions, so in the example I have added it to the administrators group \(probably with fewer permissions will also be enough\)

--- IMAGE --

We now proceed to the installation of the cwRsyncServer program. The installation will ask for the user and the password for this service, and we will introduce the ones we just created

--- IMAGE --

Once the installation is finished, it will appear among the available programs, and we will edit the file _**rsyncd.conf**_ to specify which are the folders we want to synchronize. In Windows 7 and higher it is necessary to open it as administrator, otherwise it does not allow to save the changes. We will do this by clicking the right button and "running" it as administrator.

--- IMAGE --

This would be the configuration to configure the C: \ Backups folder

At the beginning we put these two lines:

> uid=0
>
> gid=0

Next we add a block for each folder we want to synchronize. In the example we have named the folder as_** \[Data\]:**_





