## Tras descargar la imagen

Tenemos que tener en cuenta que todos los que descargamos esta imagen estamos utilizando lo misma clave, lo cual puede suponer un problema de seguridad.

Desde el interfaz web en el apartado ***Configuración → Gestionar parámetros*** vemos el botón ***Descargar*** porque el sistema detecta que la clave ha sido previamente generada. Si por debajo borramos la clave, el interfaz cambiará el botón ***Descargar*** por el botón ***Generar***, y tendremos la opción de generar una nueva clave

```bash
root@ElkarBackup:~# rm /var/lib/elkarbackup/.ssh/id_rsa.pub
```

