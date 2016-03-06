## Configurar el almacenamiento Tahoe

El almacenamiento Tahoe es un almacenamiento secundario, que puede activarse y desactivarse en el menú ***Configuración → Gestionar ubicación de las copias***. Independientemente de que se haya activado o no, la última configuración quedará guardada.  
Es importante tener en cuenta que este almacenamiento se basa en el almacenamiento principal por lo que es imprescindible que el almacenamiento principal está siempre configurado correctamente.

Nota: Para conocer mejor qué proporciona el almacenamiento Tahoe, revisad el apartado ***Repaso de conceptos: Tahoe-LAFS***.

### Configuración básica

Para configurar Tahoe necesitamos conocer la URL que nos permitirá conectar ElkarBackup con la red Tahoe (Furl del nodo introductor).
Además debemos decidir los valores que les vamos a dar a los parámetros K y N (H es opcional).

K representa en número de nodos disponibles que tiene que haber para que ElkarBackup pueda recuperar los datos almacenados en la red. Debe ser mayor que 0.  
N representa el número de nodos en los que se van a almacenar los backups. Debe ser mayor o igual que K.


### Uso avanzado

El directorio en el que se instala el nodo Tahoe para ElkarBackup es /var/lib/elkarbackup/.tahoe/  
El archivo de configuración del nodo es .tahoe/tahoe.cfg

En caso de querer utilizar el nodo de ElkarBackup para acceder a la red Tahoe es necesario hacerlo a través del usuario del sistema elkarbackup.

Ejemplos
 - Para reiniciar el nodo: "~$ tahoe restart"
 - Para hacer un ls sobre el repositorio de backups: "~$ tahoe ls elkarbackup:"
 - Para renovar los alquileres: "~$ tahoe deep-check --add-lease elkarbackup:"
