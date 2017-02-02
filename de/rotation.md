Das ist nicht kompliziert, aber es ist wichtug, das gut zu verstehen. Beim Festlegen der Häufigkeit unserer Sicherungen, definieren wir auch unterschiedliche Ebenen. Dabei bauen diese Ebenen aufeinander auf. Wöchentlich geht Monatlich voraus, Täglich geht Wöchentlich voraus und Täglich folgt auf Stündlich. Es gibt keine Ebene, die Stündlich vorausgeht.

![](/assets/rotation.png)

Wir können verschiedene Sicherungsregeln anwenden, aber für unser Beispiel stellen wir uns folgendes Szenario vor:

* Stündliche (Tagsüber) Sicherungen um 11:00, um 14:00 und um 16:00 Uhr und 3 Sicherungen sollen aufbewahrt werden (Retention)
* Tägliche Sicherungen von Montag bis Freitag, jeweils um 9:00 Uhr und es sollen 10 Sicherungen aufbewahrt werden
* Wöchentliche Sicherungen jeden Samstag um 9:00 Uhr und es sollen 5 Sicherungen aufbewahrt werden
* Monatliche Sicherungen, immer am Ersten des Monats, jeweils um 9:00 Uhr und es sollen 24 Sicherungen aubewahrt werden

In diesem Fall werden die Sicherungen wie folgt angelegt:

* Wenn es Zeit wird, die _**Tagsüber**_-Sicherung anzulegen, wird zuerst die älteste Sicherung gelöscht \(_**Hourly.2**_\) und dann werden die restlichen Ordner umbenannt. _**Hourly.1 → Hourly.2**_ und _**Hourly.0 → Hourly.1**_. Danach wird die neue Sicherung im Ordner _**Hourly.0**_ angelegt.
* Wenn es Zeit wird, die _**Täglich**_e Sicherung anzulegen, wird zuerst die älteste Sicherung gelöscht \(_**Daily.9**_\) und dann werden die restlichen Ordner umbenannt. _**Daily.8 → Daily.9,**_ _**Daily.7 → Daily.8, ..., Daily.0 → Daily.1**_. Und hier gibt es nun einen Unterschied: Die Anwendung _**wird keine neue Sicherung im Ordner Daily.0 anlegen**_, sondern es findet _**eine Rotation mit der letzten Sicherung der vorausgehenden Ebene statt: Hourly.2 → Daily.0**_ 
* Wenn es Zeit wird, die _**Wöchentlich**_e Sicherung anzulegen, wird zuerst die älteste Sicherung gelöscht \(_**Weekly.4**_\) und dann werden die restlichen Ordner umbenannt. _**Weekly.3 → Weekly.4,**_ _**Weekly.2 → Weekly.3, ..., Weekly.0 → Weekly.1**_. _**Auch hier wird keine neue Sicherung angelegt**_ und Weekly.0 erstellt, sondern wieder wird rotiert: _**Daily.9 → Weekly.0**_.
* Wenn es Zeit wird, die _**Monatlich**_e Sicherung anzulegen, wird zuerst die älteste Sicherung gelöscht \(_**Monthly.23**_\) und dann werden die restlichen Ordner umbenannt. _**Monthly.22 → Monthly.23, Monthly.21 → Monthly.22, ..., Monthly.0 → Monthly.1**_. Selbes gilt hier: _**Keine neue Sicherung im Ordner Monthly.0**_, sondern Rotation mit der letzten Sicherung der vorhergehenden Ebene: _**Weekly.9 → Monthly.0**_.

Hier ist, was es zu verstehen gilt: _**Die Rotation bewegt immer nur die letzte Sicherung der vorangegangenen Ebene**_, sonst werden keine Ordner bewegt.

Soll heißen:

* Wenn 3 der "Tagsüber"-Sicherungen aufbewahrt werden sollen, wird nur der Ordner _Hourly.2_ bewegt, niemals die anderen Ordner.
* Wenn 2 der "Tagsüber"-Sicherungen aufbewahrt werden sollen, wird nur der Ordner _Hourly.1_ bewegt, aber niemals _Hourly.0_.

Dieser Logik folgend muss eines klar sein: Fasse nie einen Ordner an, der auf .0 endet. Und es gilt dies: _**der Wert für die aufzubewahrenden Kopien in einer Regel kann nicht auf 1 gesetzt werden, wenn "darüberliegende" Ebenen vorhanden sind**_. Das widerspricht der zugrundeliegenden Logik. "Täglich" wird niemals mit _Hourly.0_ in Berührung kommen, ebenso "Wöchentlich" niemals mit _Daily.0_.

Das ist wirklich wichtig zu verstehen, da nach dieser Logik gearbeitet wird, wenn wir in der Weboberfläche Regeln für unsere Sicherungen definieren und anwenden.

