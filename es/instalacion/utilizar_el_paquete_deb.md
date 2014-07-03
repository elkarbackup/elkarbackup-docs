Si en lugar de utilizar la imagen preferimos instalar el software en un servidor que tengamos con Debian, tendremos que realizar también la instalación de algunos otros paquetes de software. ElkaBackup utiliza una base de datos MySQL, por lo que en este punto habrá que tomar una decisión:
- O bien instalamos previamente en nuestro servidor ElkarBackup-Debian el paquete ***mysql-server*** para que el mismo sea quien gestione la base de datos
- O bien utilizamos otro servidor MySQL para gestionar la base de datos

El servidor MySQL se utilizará para guardar la configuración del sistema de backup: información de clientes y tareas, políticas, logs, usuarios, etc.

Además será necesario instalar otros paquetes: cliente mysql, PHP, etc. En nuestro caso los instalamos todos aquí (incluido el servidor mysql):

```bash
root@ElkarBackup:~# aptitude install debconf php5 php5-cli rsnapshot mysql-server php5-mysql acl bzip2 
```


Al instalar el servidor MySQL nos pedirá que introduzcamos la contraseña de su usuario  ***root*** . En nuestro ejemplo le hemos ponemos ***root***, está claro que en producción habría que utilizar otra contraseña.

Ahora realizaremos la instalación del paquete ElkarBackup. Entre las dependencias que  tiene destacaríamos:

- Servidor Web Apache: Lo utilizaremos para gestionar el interfaz web de los usuarios.

- Rsnapshot: El encargado de realizar las copias a disco utilizando HardLinks
-
- ssh y rsync: Software de comunicación y sincronización de datos con los clientes.

- Tiene que tener las ACL activadas en el sistema de ficheros.

Este punto es importante: El sistema tiene que tener instaladas y activadas las ACL en la partición que utilizará para guardar las copias. En Debian7 esto viene de serie, es decir, ya trae las ACL activadas en el sistema de ficheros, pero en Debian6 hay que activarlo de forma manual.

Si estamos instalando elkarbackup en una Debian6, tenemos que activar las ACL en ***la partición root (/)***. Para ello editamos el fichero `/etc/fstab` y añadimos la palabra ***acl***, tal y como se muestra a continuación

```bash
# / was on /dev/sda1 during installation
UUID=e3b77e85-df06-4659-b143-5939ccbf7d52 / ext3    errors=remount-ro,acl 0       1 
```


Ahora lo mejor sería reiniciar el servidor para asegurarnos de que todo va bien.

Una vez que hemos arreglado el tema de las ACL, lo primero que haremos será importar la clave del repositorio. Lo haremos como usuario root:

```bash
root@backups:~# wget -O - http://elkarbackup.org/apt/archive.gpg.key | apt-key add -
```


Editamos el `sources.list`
```bash
root@backups:~# nano /etc/apt/sources.list 
```


Y añadimos estas líneas
```bash
# Elkarbackup repository
deb http://elkarbackup.org/apt/debian wheezy main
```


Por último actualizamos e instalamos:
```bash
root@ElkarBackup:~# aptitude update
root@ElkarBackup:~# aptitude safe-upgrade -y
root@ElkarBackup:~# aptitude install autofs elkarbackup 
```


En la instalación necesita crear una base de datos MySQL para la aplicación, por lo que nos pedirá el nombre de usuario y contraseña del usuario administrador. Estos datos son los que acabamos de introducir en la instalación del servidor MySQL, y decíamos que en nuestro ejemplo eran el usuario  ***root*** con la contraseña ***root*** .

Por último otro detalle. Cuando nos conectamos a una máquina por SSH la primera vez, nuestro servidor nos dice que no conoce a esa máquina y que debemos confirmar su [fingerprint](http://linuxcommando.blogspot.com.es/2008/10/how-to-disable-ssh-host-key-checking.html). Esta es una medida de seguridad, pero en nuestro caso y de cara a la automatización se convierte en problema, por lo que editaremos el fichero  ***/etc/ssh/ssh_config***  del servidor ElkarBackup y le añadiremos esto:
```bash
StrictHostKeyChecking no
```


Y de esta forma no pedirá la confirmación cuando nos conectemos a un nuevo servidor.

Con esto ya tenemos la aplicación instalada y lista para usar.

En el caso en que no tuviéramos activadas las ACL la instalación del paquete nos hubiera dado este error:

```bash
ACLs not supported. Remount with ACL and reconfigure with 'dpkg --configure --pending'
dpkg: error al procesar elkarbackup (--configure):
 el subproceso instalado el script post-installation devolvió el código de salida de error 1
Se encontraron errores al procesar:
 elkarbackup
```


con lo que tras activar las ACLs tendríamos que finalizar la instalación lanzando este comando:

```bash
root@elkarbackup:~#  dpkg --configure --pending
```

