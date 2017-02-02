Aufgaben, die die selbe Regel verwenden, werden alle nacheinander abgearbeitet. Wenn die Ausführung einer Aufgabe eine lange Zeit in Anspruch nimmt, kann sich die Ausführung der folgenden Aufgaben erheblich verzögern. Es gibt mindestens zwei Fälle, in denen dies auftreten kann:

* Während der ersten Sicherung, falls die zu übertragende Datenmenge groß ist.
* Wenn eine Aufgabe viele Dateien umfasst \(in Tests 302.000\).
* Wenn eine Aufgabe tausende Dateien umfasst und ein Deduplikations-Skript im Anschluss läuft.

Der erste Fall sollte uns keine großen Sorgen bereiten, das geschieht selten. Im zweiten Fall muss _rsync_ eine große Verzeichnisstruktur auf dem Server und dem Gerät lesen und das braucht eben Zeit. Dasselbe gilt für niedrigere Rotationen mit "cp -al"-Operationen. Schließlich wird die Situation bei der Berechnung des auf der Platte eingenommenen Platzes wiederholt.

Vielleicht ziehen wir es vor, die Reihenfolge der abzuarbeitenden Aufgaben anzupassen. Um das zu tun, können wir über die Schaltfläche _**Aufgaben sortieren**_ im Hauptmenu die anstehenden Jobs priorisieren.

Wir bekommen nun alle Aufgaben angezeit und können sie sortieren. Die Aufgaben werden in der angezeigten Reihenfolge dieser Liste abgearbeitet.
