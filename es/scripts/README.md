# Scripts

En muchos casos nos interesará hacer ***algo*** antes y/o después de la ejecución de una tarea, por ejemplo:

Antes:
- Tal vez necesitamos abrir una conexión VPN para conseguir conexión con un servidor remoto
- Crear un [snapshot](http://es.wikipedia.org/wiki/Copia_instantánea_de_volumen) de todo el disco de un cliente remoto para copiar los datos sin interferencias
- Detener un servicio para copiar sus datos (zimbra, MySQL, ....)
- etc.

Después:

- Cerrar la conexión VPN que habíamos abierto
- Asegurarnos de que ciertos datos son coherentes: fechas creación de ficheros, ficheros comprimidos bzip que se descomprimen sin errores, …
- etc.

Utilizaremos los scripts para programar estas acciones, y tendremos autonomía para poder desarrollar nuevos scripts e incluso para compartirlos con otros.
