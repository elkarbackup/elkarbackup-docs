Dies sind die Daten, die Elkarbackup abfragt, wenn ein neues Skript erstellt werden soll:

* Name und Beschreibung
* Datei: Um die Datei auf den Server zu laden, die gerade auf unserem Computer programmiert wurde
* Ausführungsoptionen \(Starte bei\): Abhängig von der Logik jedes Skripts werden einige für die Ausführung auf _**Geräte-Ebene**_ entworfen, während andere für die _**Aufgaben-Ebene**_ gedacht sind. Skripte können als _**Pre-Script**_ \(vor der Ausführung der eigentlichen Aktion\) oder als _**Post-Script**_ ausgeführt werden sollen \(nach Ausführung der Aktion\). Abhängig vom Design Deines Skripts, gibt es die Möglichkeit, es "Vorher" und / oder "Danach" auf Geräte- und / oder Aufgaben-Ebene ausführen zu lassen.
* Umgebungsvariablen: Da Skripte in mehr als einem Gerät und einer Aufgabe verwendet werden können, wissen wir vielleicht noch nicht, mit welchem Gerät oder Ordner die Skript-Ausführung \(später\) zusammenhängt. Aber in den meisten Fällen sind diese Informationen erforderlich. In unseren Skripten können wir daher die folgenden Umgebungsvariablen verwenden:
  * ELKARBACKUP\_LEVEL: Dieser Wert kann JOB oder CLIENT sein
  * ELKARBACKUP\_EVENT: Dieser Wert kann PRE oder POST sein
  * ELKARBACKUP\_URL: Dieser Wert ist die komplette URL der Aufgabe oder des Geräts 
  * ELKARBACKUP\_ID: Aufgaben-ID oder Geräte-ID \(Nummer\)
  * ELKARBACKUP\_PATH: Komplette Pfadangabe des Root-Ordners
  * ELKARBACKUP\_STATUS: Post-Skripts Ausgabe-Status, immer 0.

Wenn wir die Informationen eines zuvor erstellten Skripts anzeigen lassen oder bearbeiten wollen, können wir sehen, wo es verwendet wird und wir haben auch die Möglichkeit, es auf unseren Computer herunterzuladen. Skripte werden auf dem Elkarbackup-Server im Verzeichnis _**/var/spool/elkarbackup/uploads**_ gespeichert.

![](/assets/scripts1.png)

Du kannst ein Beispielskript im Bereich _**"Script to compress the repository"**_ finden.

