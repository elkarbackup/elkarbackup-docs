# Conectando con el servidor

Ahora con abrir un navegador web y poner la dirección del servidor [ElkarBackup](http://elkarbackup.org) es suficiente para conectarnos a la aplicación. Tenemos dos opciones:

* Utilizar el nombre de **Host**: Como en la configuración de Apache **elkarbackup** es el nombre utilizado en la sección **ServerName**, podemos utilizar la dirección [http://elkarbackup]([http://elkarbackup) para lograr el acceso, siempre que en el DNS de la red se resuelva el nombre **elkarbackup** con la dirección IP del servidor.
* Utilizar la dirección IP: En este caso tendríamos que componer la dirección del modo siguiente: http://DIRECCIONIP/elkarbackup/app.php/login

Y nos validamos en la aplicación con el usuario **root** el cual tiene como password **root** (se puede cambiar dentro de la aplicación).
