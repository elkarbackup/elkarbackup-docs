Das ist ein weiterer wichtiger Punkt, den es zu verstehen gilt. Auf der einen Seite sehen wir den Konfigurationsbereich des Programms, der aus 5 Registerkarten besteht:


### Tagsüber (Hourly):

_**Sicherungen**_ oder _**Rotationen**_, die über den Tag zu unterschiedlichen Zeiten angefertigt werden.

* Zuerst wird die Rotation der \(Hourly\)-Ordner erledigt. Das bedeutet, dass die älteste Sicherung gelöscht wird und die anderen umbenannt werden, indem die laufende Nummer um +1 erhöht wird.
* Danach wird Hourly.0-Ordner erstellt und gefüllt: mit neuen Dateien und notwendigen Hardlinks


### Täglich:

_**Sicherungen**_ oder _**Rotationen**_, die _**einmal pro Tag**_ zu einer bestimmten Zeit an den ausgewählten Tagen erstellt werden. Es sei darauf hingewiesen, dass wenn diese Regel eine vorgehende Ebene hat, keine neue Sicherung stattfindet, sondern Rotation: die älteste Hourly-Sicherung wird dann zu Daily.0.

1. Zuerst werden die "Täglich"-Ordner rotiert, wobei der älteste Ordner gelöscht wird und die anderen umbenannt, immer mit +1.
2. Ist die vorhergehende Ebene \(Tagsüber [Hourly]\) aktiv?
   1. Ja: Der _**älteste**_ Hourly-Ordner wird in _**Daily.0**_ umbenannt
   2. Nein: _**Daily.0**_ wird angelegt und mit neuen Datein und den notwendigen Hardlinks gefüllt

   
### Wöchentlich:

_**Sicherungen**_ oder _**Rotationen**_, die _**einmal pro Woche**_ an einem bestimmten Tag zu einer bestimmten Zeit erstellt werden. Es sei darauf hingewiesen, dass wenn diese Regel eine vorgehende Ebene hat, keine neue Sicherung stattfindet, sondern Rotation: die älteste "Täglich"-Sicherung wird dann zu Weekly.0.

1. Zuerst werden die "Wöchentlich"-Ordner rotiert, wobei der älteste Ordner gelöscht wird und die anderen umbenannt, immer mit +1.
2. Ist die vorhergehende Ebene \(Täglich\) aktiv?
   1. Ja: der _**älteste**_ Täglich-Ordner wird in _**Weekly.0**_ umbenannt
   2. Nein: _**Weekly.0**_ wird angelegt und mit neuen Datein und den notwendigen Hardlinks gefüllt

   
### Monatlich:

Die Logik, wird wie in den vorangegangenen Punkten wiederholt.


### Jährlich:

Die Logik, wird wie in den vorangegangenen Punkten wiederholt.

![](/assets/policies01.png)

Mehr als einmal haben wir auf den _**letzten Ordner**_ einer Ebene verwiesen. Das hat viel mit der Aufbewahrungspolitik zu tun. Wenn wir N Sicherungen aufbewahren wollen, bedeutet das, dass die Namen der Ordner, die auf dieser Ebene angelegt werden, mit einer laufenden Nummer versehen werden, beginnend mit 0, endend mit \(N-1\).

Wenn wir beispielsweise festlegen, dass wir 4 "Tagsüber"-Sicherungen aufbewahren wollen, wird das System die folgenden Ordner anlegen und aufbewahren: Hourly.0, Hourly.1, Hourly.2 und Hourly.3.

Sobald die Regel angewandt wird, passiert folgendes:

Der letzte Hourly-Ordner wird gelöscht

> rm -Rf Hourly.3

Umbenennen der restlichen Ordner der Ebene \(Rotation\)

> mv Hourly.2 Hourly.3
>
> mv Hourly.1 Hourly.2
>
> mv Hourly.0 Hourly.1

Zu guter Letzt wird ein neuer Hourly.0-Ordner angelegt und mit dem Inhalt des anstehenden Sicherungslaufs befüllt.
