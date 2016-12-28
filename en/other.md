Tasks that belong to the same policy are all executed one after the other. When the execution of a task takes a long time, it can considerably delay the execution of the tasks that come from behind. There have been at least two cases in which this may occur:

* When the first copy is made and the volume of data to be transferred is large.
* When in a task there are many files \(in tests 302000 files\).

The first case should not worry us because it will be something punctual. Instead, in the second case, rsync must read a large directory tree on both the server and the client, and this takes time. The same happens with lower-level rotations using "cp -al" operations. Finally, the situation is repeated when calculating the space occupied on disk.

In these cases we might prefer that certain tasks be executed before others, and for that we have added the option to sort them through the button option _**Sort Jobs**_ in the main page. With this we are assigning priorities to the Jobs.


To assign the priorities will be shown all the jobs in a list that we can order. Copies will be executed in the order shown in this list.



