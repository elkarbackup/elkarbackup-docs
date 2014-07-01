# Utilizar una imagen

Habría que descargarla imagen y añadirla al sistema de virtualización, que puede ser de distintas marcas. Nosotros recomendamos utilizar Proxmos y/o KVM, pero hay muchos más, como XEN, VMWARE, etc. En el apartado “***Transformando las imágenes a otros sistemas de virtualización***” que se encuentra al final de este documento, explicamos como se puede convertir una imagen RAW a los sistemas de virtualización VMWare y VirtualBox.

Las últimas imágenes se pueden descargar desde aquí:
- http://ftp.tknika.net/elkarbackup/ElkarBackupServerBase2GB1.0.9_64b.img Imagen raw de 64-bits para sistemas KVM/Proxmox : 2,1Gb
- http://ftp.tknika.net/elkarbackup/ElkarBackupServerBase2GB1.0.9_64b.vmdk  Imagen VMDK de 64-bits para sistemas VMWare: 1,4Gb

Como la imagen ya tiene toda la instalación hecha no haría falta mucho más para ponerla a trabajar, aunque hay un par de detalles que habrá que cambiar para adaptarla a nuestra red.
El servidor coge la dirección IP por DHCP, y esto habría que modificarlo ya que es conveniente que tenga una IP fija, para lo cual editamos el fichero ***/etc/network/interfaces***

<pre><code>root@ElkarBackup:~# nano /etc/network/interfaces</code></pre>

Y ahí le ponemos la IP, máscara, gateway y DNS.
<pre><code># This file describes the network interfaces available on your system
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
</code></pre>

Probablemente cuando arranque no se activará el interfaz de red ya que se habrá dado cuenta de que su tarjeta (en este caso su tarjeta virtual) ha cambiado. Para solucionarlo editamos el fichero ***70-persistent-net*** borrando su contenido. Una vez que reiniciemos el servidor virtual el propio sistema se encargará de añadir en el fichero la información adecuada
<pre><code>root@ElkarBackup:~# nano /etc/udev/rules.d/70-persistent-net.rules
</pre></code>
En la máquina virtual el usuario **root** tiene la contraseña **root**. Esto es algo que habría que cambiar cuando se ponga el servidor en producción.

<pre><code>root@ElkarBackup:~# passwd root
Introduzca la nueva contraseña de UNIX:
Vuelva a escribir la nueva contraseña de UNIX:
passwd: contraseña actualizada correctamente
</code></pre>
Una vez realizados estos cambios habría que reiniciar la máquina virtual.
<pre><code>root@ElkarBackup:~# shutdown -r now
</code></pre>
