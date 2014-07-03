## Sincronización con la nube

Hoy en día parece inevitable que al desarrollar una herramienta de copia de seguridad nos detengamos a pensar si hay que incorporar funcionalidades específicas para sincronizar nuestros datos con los servicios en la nube.

En esta aplicación no se ha desarrollado ningún apartado específico para esta función porque hemos visto que con los servicios que ofrecen este tipo de soluciones no hace falta desarrollar nada extra.

Si nos fijamos en el conocido Dropbox, vemos que tiene un tipo de instalación para poder ser [ejecutado como demonio](https://www.dropbox.com/install?os=lnx) en un servidor Linux.

Si tenemos instalado Dropbox en nuestro servidor Elkarbackup, podemos desarrollar un  PostScript para que mediante hardlinks enlace a la carpeta de Dropbox los ficheros que nos interesen de las tareas que queramos. Con esto ya tendríamos estos ficheros copiados en la nube de forma automática.

En este punto podríamos discutir sobre la conveniencia de tener nuestros datos en la nube, cuestiones como la privacidad de los datos, etc, pero bueno, eso lo dejamos para otra ocasión.
