## Utilizar una imagen

Habría que descargarla imagen y añadirla al sistema de virtualización, que puede ser de distintas marcas. Nosotros recomendamos utilizar Proxmos y/o KVM, pero hay muchos más, como XEN, VMWARE, etc. En el apartado “***Transformando las imágenes a otros sistemas de virtualización***” que se encuentra al final de este documento, explicamos como se puede convertir una imagen RAW a los sistemas de virtualización VMWare y VirtualBox.

Las últimas imágenes, basadas en una Debian Wheezy 64-bits, se pueden descargar desde aquí:
- [**OVA** compatible con VirtualBox y VMWare](http://ftp.tknika.net/elkarbackup/elkarbackup64b-1.0.23-ova.tar.gz) (672 MB)
- [**QCOW2** compatible con KVM/Proxmox](http://ftp.tknika.net/elkarbackup/elkarbackup64b-1.0.23-qcow2.tar.gz) (631 MB)

Como la imagen ya tiene toda la instalación hecha no haría falta mucho más para ponerla a trabajar, aunque hay un par de detalles que habrá que cambiar para adaptarla a nuestra red.
El servidor coge la dirección IP por DHCP, y esto habría que modificarlo ya que es conveniente que tenga una IP fija, para lo cual editamos el fichero `/etc/network/interfaces`

```bash
root@ElkarBackup:~# nano /etc/network/interfaces
```


Y ahí le ponemos la IP, máscara, gateway y DNS.

```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

# The loopback network interface
auto lo
iface lo inet loopback
# The primary network interface
allow-hotplug eth0
# iface eth0 inet dhcp
iface eth0 inet static
address MI-IP
netmask MASCARA
gateway GATEWAY
dns-nameservers DNS
```


Probablemente cuando arranque no se activará el interfaz de red ya que se habrá dado cuenta de que su tarjeta (en este caso su tarjeta virtual) ha cambiado. Para solucionarlo editamos el fichero `70-persistent-net` borrando su contenido. Una vez que reiniciemos el servidor virtual el propio sistema se encargará de añadir en el fichero la información adecuada
```bash
root@ElkarBackup:~# nano /etc/udev/rules.d/70-persistent-net.rules
```

En la máquina virtual el usuario **root** tiene la contraseña **root**. Esto es algo que habría que cambiar cuando se ponga el servidor en producción.

```bash
root@ElkarBackup:~# passwd root
Introduzca la nueva contraseña de UNIX:
Vuelva a escribir la nueva contraseña de UNIX:
passwd: contraseña actualizada correctamente
```

Una vez realizados estos cambios habría que reiniciar la máquina virtual.

```bash
root@ElkarBackup:~# shutdown -r now
```

