Si el sistema de virtualización admite imágenes en formato RAW no vas a tener demasiado trabajo, en otros casos necesitarás transformar la imagen al sistema que  utilices.

Si utilizas Vmware aquí hay información que puedes utilizar: http://wiki.laptop.org/go/VMware/Convert

Nosotros hemos convertido la imagen con este comando:

```bash
:~# qemu-img convert  ElkarBackupServerBase2GB1.0.9.img -O vmdk ElkarBackupServerBase2GB1.0.9.vmdk
```


Para VirtualBox puedes utilizar este otro comando:
```bash
:~# VBoxManage convertfromraw ElkarBackupServerBase2GB1.0.9.img ElkarBackupServerBase2GB1.0.9.vdi
```


