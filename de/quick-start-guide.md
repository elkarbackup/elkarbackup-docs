In dieser Anleitung erstellen wir eine einfache Rancher-Installation \(Einzelhost-Installation\), die alles auf einem einzigen Linux-Rechner ausführt.

## Linux-Host vorbereiten

Stellen Sie einen Linux-Host mit 64-Bit-Ubuntu 16.04 und einen Kernel von 3.10 + bereit. Sie können Ihren Laptop, eine virtuelle Maschine oder einen physischen Server verwenden. Bitte stellen Sie außerdem sicher, dass der Linux-Host mindestens 1 GB Arbeitsspeicher hat und installieren Sie dann Docker auf dem Host.

## Elkarbackup-Server installieren

Es braucht nur einen Befehl, um den Rancher-Server zu starten. Nach dem Start des Containers werden die Protokolle des Containers angezeigt und wir können sehen, ob der Server läuft.

$ sudo docker run -d --restart=unless-stopped -p 8080:8080 rancher\/server

\# Logs anzeigen

$ sudo docker logs -f &lt;CONTAINER\_ID&gt;

Es dauert nur wenige Minuten, bis der Rancher-Server gestartet ist. Wenn die Logs zeigen .... Startup succeeded, Listening on port..., ist der Rancher gestartet. Diese Zeile taucht fast sofort nach Abschluss der Konfiguration im Protokoll auf. Es handelt sich dabei aber nicht um die letzte Zeile in den Protokollen.

Unsere Benutzeroberfläche wird auf Port 8080 verfügbar gemacht. Um die Benutzeroberfläche anzuzeigen, gehen Sie zu http:\/\/&lt;SERVER\_IP&gt;:8080. Wenn Sie Ihren Browser auf demselben Host ausführen, auf dem der Rancher-Server ausgeführt wird, müssen Sie die IP-Adresse des Hosts, bspw. http:\/\/192.168.1.100:8080, verwenden und **nicht** http:\/\/localhost:8080 oder http:\/\/127.0.0.1:8080.

## Hosts hinzufügen





