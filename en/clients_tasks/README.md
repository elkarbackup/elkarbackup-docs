In the next pages we will speak about  _clients_ and _tasks_ :

* **Client**: A client is a host that contains the data we want to save. It could be any machine that supports ssh or rsync automated connectivity. In this manual we'll focus on GNU\/Linux and Windows clients.

* **Task**: Each root folder we want to save from each client. Each task has it's own configuration with it's own frecuency and retention policy. A client could have \(and usually it has\) more than one task.


Our Elkarbackup server will be able to get and copy data from multiple clients, but they need to communicate using rsync or ssh protocols. As you know, this is in the box when we speak about GNU\/Linux computers, but for Windows systems prior to Windows 10 we need help, so we will install the [Cwrsync free edition](https://www.itefix.net/content/cwrsync-free-edition) to set up the rsync service in Windows clients.

With rsync managing the data transfer, we have an important advantage: Before to start transferring files, both sides \(server and client\) decide if it is necessary to copy each file, so they only transfer the files that have been changed and the new ones. It suposse more CPU work for the one that is sending the files \(the client\) and more I\/O for the one that is receiving the files \(the Elkarbackup server\).







![](/assets/clients_tasks_02.png)

