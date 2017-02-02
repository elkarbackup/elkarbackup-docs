Hier klären wir die Begriffe _Geräte_ und _Aufgaben_:

* **Gerät**: Als Gerät bezeichnen wir den Host, der die Daten speichert, die wir sichern wollen. Das kann jede Maschine sein, die automatisierte Verbindungen via SSH- oder Rsync-Protokoll unterstützt. In dieser Anleitung werden wir uns auf GNU/Linux- und Windows-Geräte konzentrieren.

* **Aufgabe**: Jedes zu sichernde Stammverzeichnis von jedem Gerät. Jede Aufgabe hat ihre ganz eigene Konfiguration mit eigenen Regeln zu Häufigkeit und Aufbewahrung. Einem Gerät kann mehr als eine Aufgabe zugewiesen sein und für gewöhnlich ist das auch der Fall.

Unser ElkarBackup-Server ist in der Lage Daten von verscheidenen Geräten zu kopieren. Das geschieht aber nur auf, wenn die beteiligten Geräte auf dem SSH- oder Rsync-Protokoll kommunizieren. Das sollte bei GNU/Linux-Geräten bereits vorhanden sein, aber bei Windows-Maschinen unter Windows 10 als OS, werden wir nachhelfen und das Programm [Cwrsync free edition](https://www.itefix.net/content/cwrsync-free-edition) installieren müssen, um Rsync als Dienst ausführen zu lassen.

Wenn Rsync sich um den Datenverkehr kümmert, haben wir einen entscheidenden Vorteil: Bevor überhaupt Daten hin und her geschoben werden, entscheiden beide Seiten \(Server und Gerät\), ob es überhaupt notwendig ist, Daten zu kopieren. Rsync kopiert also nur Dateien, die neu sind und\/oder verändert wurden. Das bedeutet mehr CPU für das Daten sendende Gerät \(das Gerät\) und mehr I\/O für das Deten empfangende Gerät \(der ElkarBackup-Server\).

![](/assets/clients_tasks_02.png)


In GNU/Linux-Umgebungen ist es durchaus üblich immer wieder bestimmte Ordner von unterschiedlichen Geräten zu kopieren: Konfigurationsdateien, Log-Dateien, etc.

Um solche Aufgaben auf weiteren Geräten zu erstellen, reicht es, sie einmal zu erstellen und danach mittels des **Klonen**-Buttons auf der Geräte-Ebene zu duplizieren.

![](/assets/clone-client.png)

Wenn das erledigt ist, reicht es, die einzigartigen und unterschiedlichen Parameter jedes Geräts \(Adresse, etc.\) abzuändern.
