As mentioned earlier, ElkarBackup is a tool based on other free tools, especially in rsnyc and rsnapshot, and since most of its logic responds to rsnapshot logic, it is worth stopping to analyze its behavior.

Rsnapshot is based on the following concepts:

* Origin of the data to copy: Where does he have to copy the data from?
* Frequency: How often does he have to copy? At certain times during the day, once a day the days that interest us, once a week, and once a month on the day we decide, ....
* Rotation: How many copies do you have to maintain at each of the frequencies mentioned above? That is, perhaps it is enough to keep the last 4 copies made during the day, but perhaps we want to keep the end-of-month copies for two years.

Next we will try to explain its operation


