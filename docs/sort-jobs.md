---
id: sort-jobs
title: Sort Jobs
---

Jobs that belong to the same policy are all executed one after the other. When the execution of a job takes a long time, it can considerably delay the execution of the following jobs. There are at least two cases in which this may occur:

* When the first copy is made and the volume of data to be transferred is large.
* When in a job there are many files \(in tests 302000 files\).
* When in a job with thousands of files we have a postscript for deduplication

The first case should not worry us because it will be something punctual. Instead, in the second case, rsync must read a large directory tree on both the server and the client, and this takes time. The same is true for lower-level rotations using "cp -al" operations. Finally, the situation is repeated when calculating the space occupied on disk.

In these cases we might prefer that certain jobs be performed before others. Due to this and with the_** objective of assigning priorities to the jobs**_, we have the option to sort them through the button _**Sort jobs**_ in the main page.

We will be shown all the jobs in a list that we can order. Copies will be executed in the order shown in this list.

