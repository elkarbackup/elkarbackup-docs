Wir haben uns bei der Entwicklung dieses Tools gefragt, ob wir spezifische Funktionen integrieren müssen, die eine Synchronisation der Daten mit Clouddiensten erlauben.

In dieser Anwendung gibt es keinen speziellen Bereich für diese Funktion. Es gibt genügend Angebote, die solche Lösungen zum Gegenstand haben und wir haben keinen Bedarf gesehen, dafür etwas eigenes zu entwickeln.

Ein genauerer Blick auf Dropbox verrät, dass es eine [als Deamon ausführbare](https://www.dropbox.com/install-linux) Installation für Linux-Maschinen gibt.

Wenn wir Dropbox auf unserem Elkarbackup-Server installiert haben, können wir ein Postskript entwickeln, so dass die Dateien, die wir mit der Cloud synchronisieren möchten, über Hartlinks mit einem Dropbox-Ordner verknüpft werden. Damit hätten wir diese Dateien bereits automatisch in die Cloud kopiert.

An dieser Stelle könnten wir trefflich über Sinn und Unsinn unserer Daten in einer Cloud und den damit einhergehenden Risiken \(Datenschutz, etc.\) diskutieren, aber hey, das heben wir uns für eine andere Gelegenheit auf.
