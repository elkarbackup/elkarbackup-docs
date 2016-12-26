This is another important point to understand. On the one hand we can see the configuration area of the program consisting of 5 tabs:

### Hourly:

_**Copies**_** **_**or rotations**_ to be made during the day at different times.

* First it will make the rotation of the folders Hourly, erasing the last one and adding +1 to the rest.
* Next, it will create and fill the folder Hourly.0: New files and hardlinks that it consider necessary

### Daily:

_**Copies**_** **_**or rotations**_ to be made _**once a day**_ at a certain time and the days of the week that have been selected. It should be noted that if in this policy have been activated earlier levels here will not be copies, but rotations: The last Hourly will become the Daily.0.

1. First it will rotate the Daily folders, erasing the last folder and adding +1 to the rest.
2. Is the previous level used \(Hourly\) ? 

Yes: Daily.0 is created renaming the last folder Hourly  
No: Create and fill in the Daily.0 folder: New files and hardlinks as it deems necessary

### Weekly:

_**Copies**_** **_**or rotations**_ to be made** **_**once a week**_ at a certain day and time. It should be noted that if in this policy have been activated earlier levels here will not be copies, but rotations: The last Daily will become the Weekly.0.n copies, but rotations: The last Daily will become the Weekly.0

1. First it will rotate the Weekly folders, erasing the last folder and adding +1 to the rest.
2. Is the previous level used \(Daily\) ? 

Yes: Weekly.0 is created renaming the last folder Daily  
No: Create and fill in the Weekly.0 folder: New files and hardlinks as it deems necessary

### Monthly:

The logic described in the previous points is repeated

### Yearly:

The logic described in the previous points is repeated



---- IMAGE









