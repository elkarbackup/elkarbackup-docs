This is another important point to understand. On the one hand we can see the configuration area of the program consisting of 5 tabs:

### Hourly:

_**Copies**_** **_**or rotations**_ to be made during the day at different times.

* First it will make the rotation of the folders Hourly, erasing the last one and adding +1 to the rest.
* Next, it will create and fill the folder Hourly.0: New files and hardlinks that it consider necessary

### Daily:

_**Copies**_** **_**or rotations**_ to be made _**once a day**_ at a certain time and the days of the week that have been selected. It should be noted that if in this policy have been activated earlier levels here will not be copies, but rotations: The last Hourly will become the Daily.0.

1. First it will rotate the Daily folders, erasing the last folder and adding +1 to the rest.
2. Is the previous level used \(Hourly\) ? 
   1. Yes: _**Daily.0**_ is created renaming the Hourly _**last folder**_
   2. No: Create and fill in the _**Daily.0**_ folder: New files and hardlinks as it deems necessary

### Weekly:

_**Copies**_** **_**or rotations**_ to be made** **_**once a week**_ at a certain day and time. It should be noted that if in this policy have been activated earlier levels here will not be copies, but rotations: The last Daily will become the Weekly.0.n copies, but rotations: The last Daily will become the Weekly.0

1. First it will rotate the Weekly folders, erasing the last folder and adding +1 to the rest.
2. Is the previous level used \(Daily\) ? 
   1. Yes: _**Weekly.0**_ is created renaming the Daily _**last folder **_
   2. No: Create and fill in the _**Weekly.0**_ folder: New files and hardlinks as it deems necessary

### Monthly:

The logic described in the previous points is repeated

### Yearly:

The logic described in the previous points is repeated

![](/assets/policies01.png)

On more than one occasion we have referred to the _**last folder**_ of each level. That has a lot to do with the retention policy. When we say that at a given level the retention is N, this means that the folders that will be generated at that level will be named from 0 to \(N-1\).

For example, if we define that the copies to be made during the day have a retention of 4, that means that the system will save 4 folders: Hourly.0, Hourly.1, Hourly.2 and Hourly.3.

When the time  to perform the rotation of the Hourly folders comes, it will do the following:

Delete the Last Hourly folder

> rm -Rf Hourly.4

Rename all other folders to do the rotation

> mv Hourly.3 Hourly.4
>
> mv Hourly.2 Hourly.3
>
> mv Hourly.1 Hourly.2
>
> mv Hourly.0 Hourly.1

And finally creates a new Hourly.0 with its content, copying the new files and linking through Hardlinks those that have not been modified.

