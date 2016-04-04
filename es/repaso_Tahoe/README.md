# Repaso de conceptos: Tahoe-LAFS

[Tahoe-LAFS](https://www.tahoe-lafs.org/) es un sistema de archivos descentralizado y tolerante a fallos. Distribuye los datos almacenados entre múltiples servidores preservando su privacidad y seguridad.
La red de almacenamiento está diseñada para almacenamiento a largo plazo, como puede ser el almacenamiento de copias de seguridad.

Se puede acceder a la documentación desde [aquí](https://www.tahoe-lafs.org/trac/tahoe-lafs/wiki/Doc).


### Sobre los nodos

Tahoe permite formar una red de servidores. Cada ‘servidor’ representa un nodo que puede ser cliente del sistema y a la vez servidor de almacenamiento. Además, es imprescindible que en cada red haya un nodo especial, llamado nodo introductor (introducer node), que es el que se encarga de las altas de los nodos en la red.  
Cuando se crea un nodo por primera vez hace falta configurarlo. Para ello hay que editar el archivo de configuración ‘tahoe.cfg’. Una vez configurado, se lanza y se conecta a la red a través del nodo introductor.

### Sobre las porciones

Cuando un cliente quiere almacenar un archivo realiza, de forma automatizada pero configurable, a través del método de **erasure coding** una división de los datos. A cada pedazo que se crea le vamos a llamar 'porción' (término en inglés: share).  
En Tahoe se utilizan tres parámetros: K, H y N, también denominados shares.needed, shares.happy y shares.total respectivamente. La división de los datos se realiza de la siguiente manera:

Se crean múltiples porciones (N) con datos redundantes de forma que, al almacenarlos en los servidores de la red (al menos H servidores) se asegura la recuperación de los datos aunque algunos servidores en los que se guardaron las porciones ya no estén disponibles (se podrán recuperar los datos obteniendo al menos K porciones).
Los parámetros K-H-N son configurables en cada nodo cliente.

Los datos que se escriban en la red Tahoe ocuparán más espacio que el archivo original. De hecho, suponiendo que lo que pesa el archivo original es D, el espacio que ocupará en la red es igual a N*D/K y no D*N como ocuparía si replicáramos los datos en los N servidores de forma común.

### Sobre las licencias y el recolector de basura

En una red Tahoe, se puede acceder a cada archivo con una URI que representa tanto la identificación del archivo como los permisos sobre él.  
A estas URIs se les llama ‘capabilities’ o licencias y pueden ser de tipo escritura-lectura (writecap), de tipo sólo-lectura (readcap) o de tipo verificación (verifycap). Por lo tanto los permisos de los archivos no están sujetos a los clientes sino a su licencia.  
Es necesario y suficiente conocer la licencia para obtener el acceso al archivo.

Tahoe-LAFS utiliza un recolector de basura para evitar conflictos a la hora de borrar archivos. Los archivos tienen una fecha de caducidad que se puede renovar, a esta ‘fecha de caducidad’ se le llama ‘lease’ o alquiler. Un alquiler, como su nombre indica, puede ser renovado para que el recolector de basura no lo borre.
El recolector lo que hará es recorrer todos y cada uno de los archivos del servidor comprobando la fecha de los alquileres y cuando encuentra uno caducado, lo elimina.
Se puede renovar el alquiler de un directorio, y a su vez todos los archivos que este contiene, a través de su verifycap.

