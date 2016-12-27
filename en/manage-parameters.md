# SSH Keys

We've already talked about the public key. From here we can download the public key of the server ElkarBackup that previously has been generated from this same site.

# MySQL Server

Here are the parameters to manage the configuration of the MySQL Server. The  backup files that are copied with Rsnapshot are saved to disk, but all other data \(client and task data, policies, etc.\) are stored in the database.

The MySQL server can be located on the same ElkarBackup server or on any other server in our network, here is where the location and connection parameters will be configured.

# Messages via email

If we are interested in receiving alerts by mail, we must decide what  alert levels we want to send and who to send them.

-- IMAGE

By default the alerts will be sent to the owner \(we will see this later\), and the messages that will be sent will be _**"Errors and higher"**_. If we are interested that in addition to the owner alerts are also sent to another email address , we have to select the _**Email**_ option and add the new address in the text box that is displayed.

-- IMAGE

But the server also needs to be configured to send mail, that is, it needs to know how to send the messages, and for that we have the Mailer parameters.

-- IMAGE

As Elkarbackup is based on the Symfony framework, you can find more information about mailing configuration in the [documentation of the symfony project](http://symfony.com/doc/current/email.html).

# Quota Alerts

So far we have not talked about quotas, but we can define the disk quota for each client. This can be practical when a client consumes a lot of space and we do not want to harm the other clients that can run out of disk space.

If we define a maximum in the parameter QUOTA of a client and is exceeded, we will see it highlighted from both the client view and the main view of clients and tasks.

-- IMAGE

-- IMAGE

Keep in mind that _**Elkarbackup will not make copies of the tasks of a client that has exceeded their QUOTA**_.

Before this limit is exceeded the system will send us alerts. With this parameter we will define the threshold from which these alerts will be sent, by default when the use reaches 80% of the quota.

-- IMAGE

# Other parameters

* How long will it keep the LOG information before deleting it
* Maximum number of lines per page to display
* Prefix that the system will use to generate certain URLs if instead of using a DNS resolved name to access the interface \(eg http://elkarbackup\) a fixed IP address is used \(for example http://IP/elkarbackup/app.php/login\), \(in the example _**/elkarbackup**_\)
* 


