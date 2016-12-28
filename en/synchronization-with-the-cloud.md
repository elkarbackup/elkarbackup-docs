Nowadays it seems inevitable that when developing a backup tool we pause to think about whether to incorporate specific functionalities to synchronize our data with the services in the cloud.

In this application no specific section has been developed for this function because we have seen that with the services that offer this type of solutions we do not need to develop anything extra.

If you look at the well known Dropbox, we see that it has a type of installation [to be executed as a daemon](https://www.dropbox.com/install-linux) on a Linux machine.

If we have installed Dropbox on our Elkarbackup server, we can develop a PostScript so that  links the files we want to sync with the cloud through hardlinks linking to a Dropbox folder. With this we would already have these files copied in the cloud automatically.

At this point we could discuss about the convenience of having our data in the cloud, issues such as data privacy, etc, but hey, we will leave it for another occasion.

