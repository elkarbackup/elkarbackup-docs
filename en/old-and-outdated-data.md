Let's imagine that in a policy we have a retention of 6 for Hourly, this means that we will have the folders Hourly.0, ..., Houry.5 with the data of the last copies. For some reason we think it is excessive, and we modify the retention to 4, therefore it will use the folders Hourly.0, ..., Houry.3.

And what about the Hourly.4 and Houry.5 folders? Well, they'll be there until we delete them. They will not be updated and will be outdated because they will not enter in the rotation cycle, but they will be there, "bothering". The best option in these cases is to delete those folders by hand.

And would not it be better if in these cases the system will delete these folders automatically? It could be, but deleting data automatically also has its risks. Let's imagine that in a policy that we have in production we are making changes and that by mistake we modify the retention parameter by setting a value too small, and that consequently the system automatically deletes the folders with the copies. As far as possible we should avoid losing data, so it is best to manually delete these folders when necessary.



