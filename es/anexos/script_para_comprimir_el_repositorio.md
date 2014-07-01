Imaginémonos que distintos usuarios tienen copias distintas del mismo fichero en la red, cada uno en su carpeta. Cuando se trata de documentos ofimáticos (generalmente no muy grandes) no suele suponer demasiado problema, pero con otro tipo de ficheros (vídeos, actualizaciones de software, etc) el sitio que pueden estar consumiendo en la red suele ser grande, siendo información duplicada.

Sabemos que una vez se ha realizado la copia de estos ficheros, estos no van a cambiar en el disco de la copia de seguridad, por lo que tenemos la posibilidad de mantener una sola copia y enlazar mediante hardlinks el resto de apariciones del mismo fichero.

En el ejemplo, copiamos y pegamos con otro nombre un fichero de los que tenemos en la carpeta ***/media/Backups*** del Cliente Debian. A pesar de ser el mismo fichero lo tenemos dos veces en el disco por lo que ocupa el doble.

<pre><code>root@DebianCliente:~# cd /media/Backups/Software/
root@DebianCliente:/media/Backups/Software# cp vlc-2.0.6-win32.exe vlc-2.0.6-win32-kopia.exe
root@DebianCliente:/media/Backups/Software# ls -lah
total 209M
drwxr-xr-x 2 root root 4,0K jun 12 12:44 .
drwxr-xr-x 4 root root 4,0K jun  7 11:24 ..
-rw-r--r-- 1 root root 1,1M nov 18  2010 7z920.exe
-rw-r--r-- 1 root root 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
-rw-r--r-- 1 root root  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-r--r-- 1 root root  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe </code></pre>

Accedemos a la tarea encargada de hacer la copia de estos datos y pulsamos el botón ***Ejecutar ahora***. Al finalizar la tarea podremos observar que en la carpeta del servidor ElkarBackup están los dos ficheros

<pre><code>#cd /var/spool/elkarbackup/backups/0001/0001/Hourly.0/media/Backups/Software/
# ls -lah
total 209M
drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
-rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
-rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
-rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
-rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe </code></pre>

y como podemos observar no están enlazados mediante hardlinks, ya que no tienen el mismo ***inode***

<pre><code># ls -lahi
total 209M
40831 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 12:44 .
40828 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
29332 -rw-rw-r-- 3 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
29333 -rw-rw-r-- 3 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
29334 -rw-rw-r-- 3 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
74101 -rw-rw-r-- 2 elkarbackup elkarbackup  22M jun 12 12:44 vlc-2.0.6-win32-kopia.exe </code></pre>

A continuación veremos como podemos utilizar un script postscript para resolver este problema.
Este script busca y enlaza mediante hardlinks aquellos ficheros que tienen el mismo [Hash](https://es.wikipedia.org/wiki/Función_hash)

<pre><code>#!/bin/bash
# Compara por tamaño para descartar los que no se repiten

cd $ELKARBACKUP_PATH
lastHash=''
lastFile=''

find . -mount -type f -printf '%15s %p\0'|sort -nrz|uniq -zDw15|tr "\0" "\n"|cut -b17- |tr "\n" "\0"|xargs$
do
        if [ "x$lastHash" = "x$currentHash" ]
        then
                rm "$file"
                ln "$lastFile" "$file"
        fi
        lastHash=$currentHash
        lastFile="$file"
done </code></pre>

Subimos el Script:
- Nombre: Compactar el repositorio
- Lo habilitamos para que pueda ser ejecutado como PostScritp de tareas

Ahora editamos la tarea del Cliente Debian, seleccionamos este script en la sección PostScript, y lanzamos la ejecución de la tarea.

<pre><code># ls -lahi
total 209M
40838 drwxrwxr-x 2 elkarbackup elkarbackup 4,0K jun 12 15:22 .
40835 drwxrwxr-x 4 elkarbackup elkarbackup 4,0K jun  7 11:24 ..
29332 -rw-rw-r-- 4 elkarbackup elkarbackup 1,1M nov 18  2010 7z920.exe
29333 -rw-rw-r-- 4 elkarbackup elkarbackup 164M may  3 18:16 LibreOffice_4.0.3_Linux_x86_deb.tar.gz
29334 -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32.exe
29334 -rw-rw-r-- 8 elkarbackup elkarbackup  22M abr 15 19:11 vlc-2.0.6-win32-kopia.exe </code></pre>

Si ahora nos fijamos en los números de inodo que aparecen en la primera columna, podemos observar que las copias aparecen con el mismo inode, por lo que están apuntando a la misma ubicación en disco y no duplican el espacio utilizado.


