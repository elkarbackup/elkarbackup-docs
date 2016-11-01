In our example, we want to backup the "\/var\/www" folder from a GNU\/Linux client that has the 192.168.1.12 IP address.

## Add the client

In order to add a new client, we have to click on the _**Add Client**_ button, and we will face a self-documented form where we will enter the client data.

In our example,

* Name: _My Linux Client_

* URL: root@192.168.1.12


Once we have enter this data, we will click on the _**Save**_ button and we will see the new client in the main page.
![](/assets/clients_tasks_03.png)

As this has to be an automated proccess, our server need to use the correct credentials to connect to "My Linux Client", but we haven't given this data in the client configuration. As we are using the ssh protocol, we will use the public\/private key pair.

We can download the Elkarbackup server public key from the _**Configuration menu --&gt; Manage parameters**_. 

![](/assets/clients_jobs_04.png)

## Add the job

When we edit the client, 

