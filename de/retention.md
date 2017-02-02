Retention behandelt die Aufbewahrung der Sicherungen. Damit wird definiert, wieviele Kopien eines Sicherungslaufs vom System vorgehalten werden sollen. Zum Beispiel:

* Wenn wir die Aufbewahrungsfrist auf 4 Kopien, die tagsüber \(Hourly\) gemacht werden, setzen, dann ist damit gemeint, dass das System die letzten 4 Sicherungen in den Ordnern Hourly.0, Hourly.1, Hourly.2 und Hourly.3 aufhebt, wobei Hourly.0 die aktuellste Sicherung ist und Hourly.3 die älteste.
* Wenn wir die Aufbewahrungsfrist auf 5 Kopien, erstellt einmal pro Tag \(Daily\), setzen, dann ist damit gemeint, dass das System die letzten 5 Sicherungen in den Ordnern Daily.0, Daily.1, Daily.2, Daily.3 und Daily.4 aufhebt, wobei Daily.0 die aktuellste Sicherung ist und Daily.4 die älteste.
* Die selbe Logik gilt auch für wöchentliche, monatliche oder jährliche Sicherungsläufe.

