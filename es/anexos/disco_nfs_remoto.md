En un principio se supone que si queremos utilizar un disco NFS que tengamos accesible en nuestra red interna, todo lo necesario ya estará preparado para ser utilizado. En este apartado vamos a ver de forma muy rápida cual sería la forma de instalar una servidor NFS en un entorno debian, y como podríamos publicar un recurso para ser utilizado como disco remoto desde otras máquinas. Para profundizar sobre este tema en Internet hay muchísima documentación.

En el servidor que publicará el disco NSF procederemos a la instalación de los paquetes necesarios:

```bash
root@backupsNFS:~# apt-get install nfs-kernel-server portmap nfs-common
```


Una vez hecho esto, debemos decidir cual va a ser la carpeta local a la que las otras máquinas van a acceder como disco remoto, y tendremos que especificar cual es el rango  de IPs al que damos acceso. Esto lo especificamos en el fichero `/etc/exports`

En nuestro ejemplo hemos decido que la carpeta que vamos a publicar en este servidor NFS va a ser `/srv/nfskarpeta` y que tendrán acceso a la misma los equipos de la red 192.168.3.0/24, por lo que añadiremos esta línea al fichero `/etc/exports`

```bash
/srv/nfskarpeta  192.168.3.0/24(rw,sync,no_subtree_check) 
```


En este momento, simplemente podríamos reiniciar el servicio y ejecutar el comando ***exportfs***:

```bash
root@backupsNFS:~# /etc/init.d/nfs-kernel-server restart
root@backupsNFS:~# exportfs -a
```


Con esto, se supone que el disco está publicado y accesible para las máquinas de la red  192.168.3.0/24. Ahora veremos como lo mapeamos desde un cliente NFS, en nuestro caso el servidor elkarbakup.

En este punto conviene recordar que si no hemos instalado previamente el paquete ***autofs*** en nuestro servidor ElkarBackup, ahora es el momento de hacerlo

```bash
root@ElkarBackup:~# apt-get install autofs 
```


Tenemos que asegurarnos de que en el fichero `/etc/auto.master` la línea ***/net   -host*** está descomentada. Si estuviera comentada, la descomentamos y reiniciamos el servicio autofs.

Ahora, basta con que desde nuestra máquina cliente forcemos un acceso a la carpeta del servidor NFS, para que se monte de forma auto-mágica.

Suponiendo que el servidor NFS tenga la IP 192.168.3.100, bastaría con un ***ls*** como el que se muestra a continuación para que desde nuestro cliente NFS la carpeta fuera accesible:

```bash
root@ElkarBackup:~# ls /net/192.168.3.100/srv/nfskarpeta/ 
```


Si hasta aquí todo ha funcionado, eso significa que la parte de software necesaria está funcionando correctamente. Por último, y para que el interfaz web de Elkarbackup utilizar el cliente NFS para gestionar correctamente el acceso a discos remotos, tenemos que editar el fichero ***/etc/auto.nfs4*** y descomentar la línea

```bash
/nfs4  /etc/auto.nfs4
```



