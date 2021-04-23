---
id: version-1.3-policies-new
title: Adding policies
original_id: policies-new
---

With the seen until now we have managed to make copies, but in a backups system it is necessary to define more things:

* Programming: When are copies made?
* Retention: How long must the old copies be kept?
* Do you have to mix different schedules? Copies during the day, daily, weekly, monthly ....

To define all these concepts we will use _**Policies**_ \(so far we have used the so-called _**Default Policy**_\). Since ElkarBackup is based on the rsnapshot software it is convenient to review the concepts explained in the section **"A review of concepts: Rsnapshot".**

The application will give us the option to define different policies. Each task will be assigned a policy, and a policy can be reused in more than one task.

These are the data that we will have to define when adding a new policy:

* Name and Description: Free text fields
* Exclude: Patterns to exclude files from the copy
* Include: Patterns to include files in the copy, even though they have been excluded by the pattern entered in the _**Exclude**_ field. For example, let's imagine that in general we do not want to include video files in the copy, so we put _**\* .avi**_ in the Exclude field, but we are interested in copying the avi files that are in the manager's folder. In this case we would add _**manager/\*.avi**_ in the Include field for this exception.
* Sync first: When rsnapshot makes a new copy, it makes a rotation of the previously made copies and generates the new copy in a new folder \(for example Daily.0\), incorporating in the same folder both the files that have been modified and the files that have not been modified, so that all are located in the same folder. The files that have not been modified are linked through _**hardlinks**_, so that they do not take up more physical space on the disk.

This is a time consuming process, since when placing each file, it must decide whether it is a new copy or if it has to be linked to a hardlink, and while the remote client is still servicing it. In some cases it will not matter, but in other cases it will be important to release the client as soon as possible. In the latter case we can choose the option _**Sync first**_.


When we choose this option we tell rsnapshot to first synchronize the files in a folder called _**.sync**_ to free the client as soon as possible. When it finishes this part and after leaving the client free, it will compare the data of the last copy \(for example Daily.0\) with those in the .sync folder, and generate the new structure by adding the necessary hardlinks.

Therefore, and responding to the logic that gives us its name, when we choose this option the system will first synchronize the data with the client and subsequently create the folder structure and do the relevant rotations.

