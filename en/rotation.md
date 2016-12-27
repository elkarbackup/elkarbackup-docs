This is not complicated, but you have to understand it well. In defining frequency, we are also setting different levels of copy, specifying in some way that Weekly precedes Monthly, Daily precedes Weekly, and Hourly precedes Daily. There is no level that precedes Hourly.

![](/assets/rotation.png)

We can have different copy policies, but for the example imagine that our programming is composed as follows:

* Hourly copies at 11:00, 14:00 and 16:00, with a retention of 3
* Daily copies from Monday through Friday at 9:00 PM, with a retention of 10
* Weekly copies on Saturdays at 9pm, with a retention of 5
* Monthly copies on the 1st of each month at 9:00 PM, with a retention of 24

In this case the copies are made as follows:

* When the hour arrives to execute the _**Hourly**_ copy first it deletes the last one \(_**Hourly.2**_\), and next it changes the name of the rest of folders. _**Hourly.1 → Hourly.2**_ and _**Hourly.0 → Hourly.1**_. Then it makes the new copy in the _**Hourly.0**_ folder.



