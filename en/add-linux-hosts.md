In our example, we want to backup the **_\/var\/www_** folder from a GNU\/Linux client that has the 192.168.1.12 IP address.

## Add the client

In order to add a new client, we have to click on the **_Add Client_** button, and we will face a self-documented form where we will enter the client data.

In our example,

* Name: _My Linux Client_

* URL: root@192.168.1.12


Once we have enter this data, we will click on the **_Save_** button and we will see the new client in the main page.
![](/assets/clients_tasks_03.png)

As this has to be an automated proccess, our server needs to use the correct credentials to connect to "My Linux Client", but we haven't given this information in the client configuration. As long as we are using the ssh protocol, we will use the public\/private key pair.

We can download the Elkarbackup server public key from the **_Configuration menu --&gt; Manage parameters_**.

![](/assets/clients_jobs_04.png)

Now, we have to configure this public key in the GNU\/Linux client. Once it is done, we will be able to automatice the ssh connections needed for the backup proccess. In this backup connections, we have two roles:

* ElkarBackup _**Server**_: It has the _**client**_ role in the connection.
* GNU\/Linux _**Client**_: It has the _**server**_ role in the ssh connection, so it is neccesary to install there the openssh-server package if it is not previosly installed.

Now we will issue this command in order to copy the newly downloaded public key in the client.

> ssh-copy-id -i Publickey.pub root@192.168.1.12

Take into account that we are using the _**root**_ user in the client machine. As you could imagine, you need to know the root's password in the client machine.

If you don't have a linux machine to issue this command, you can do it from a console in the Elkarbackup server. In this case, you can issue the command using the path where the public key is stored:

> root@elkarbackup:~\# ssh-copy-id -i \/var\/lib\/elkarbackup\/.ssh\/id\_rsa.pub root@192.168.1.12

Another package that we need in the GNU\/Linux client is **_rsync_**, so if it isn't installed, we can install it with this command:

> root@LinuxClient:~\# apt-get install rsync

## Add the job

The next step is to create the job. As we have said before, we want to backup the **_\/var\/www_** folder, so we click in the **_Add job_** button **\(+\)**

![](/assets/clients_jobs_05.png)

