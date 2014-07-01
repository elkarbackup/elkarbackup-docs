# Utilizar una imagen

Habría que descargarla imagen y añadirla al sistema de virtualización, que puede ser de distintas marcas. Nosotros recomendamos utilizar Proxmos y/o KVM, pero hay muchos más, como XEN, VMWARE, etc. En el apartado “*Transformando las imágenes a otros sistemas de virtualización*” que se encuentra al final de este documento, explicamos como se puede convertir una imagen RAW a los sistemas de virtualización VMWare y VirtualBox.

Las últimas imágenes se pueden descargar desde aquí:
- http://ftp.tknika.net/elkarbackup/ElkarBackupServerBase2GB1.0.9_64b.img Imagen raw de 64-bits para sistemas KVM/Proxmox : 2,1Gb
- http://ftp.tknika.net/elkarbackup/ElkarBackupServerBase2GB1.0.9_64b.vmdk  Imagen VMDK de 64-bits para sistemas VMWare: 1,4Gb

Como la imagen ya tiene toda la instalación hecha no haría falta mucho más para ponerla a trabajar, aunque hay un par de detalles que habrá que cambiar para adaptarla a nuestra red.
El servidor coge la dirección IP por DHCP, y esto habría que modificarlo ya que es conveniente que tenga una IP fija, para lo cual editamos el fichero ***/etc/network/interfaces***
