Con lo visto hasta ahora hemos conseguido realizar copias, pero en un sistema de backups hay que definir más cosas:
- Programación: ¿ Cuándo se hacen las copias ?
- Retención: ¿ Hasta cuándo hay que mantener las copias antiguas ?
- ¿ Hay que mezclar distintas programaciones ? Copias durante el día, diarias, semanales, mensuales ….

Para definir todos estos conceptos utilizaremos ***Políticas*** (hasta ahora hemos utilizado la denominada Default Policy). Dado que ElkarBackup se basa en el software rsnapshot es conveniente repasar los conceptos que se explican en el apartado “***Un repaso de conceptos: Rsnapshot***“ .

La aplicación nos dará la opción de definir distintas políticas. A cada tarea le asignaremos una política, y una política podrá ser reutilizada en más de una tarea.

Estos son los datos que tendremos que definir al añadir una nueva política:

- Nombre y Descripción: Campos de texto libre

- Excluir: Patrones para excluir ficheros de la copia

- Incluir: Patrones para incluir ficheros en la copia, a pesar de que estos hayan quedado excluidos por el patrón introducido en el campo Excluir. Por ejemplo, imaginémonos que en general no queremos incluir en la copia los ficheros de vídeo, por lo que ponemos **\*.avi** en el campo Excluir, pero si que nos interesa copiar los ficheros avi que se encuentran en la carpeta del director. En este caso en el campo Incluir añadiríamos **director/\*.avi** para esta excepción.

- Sincronizar primero: cuando rsnapshot realiza una nueva copia, realiza una rotación de las copias realizadas previamente y genera la nueva copia en una nueva carpeta (por ejemplo Daily.0), incorporando en la misma tanto los ficheros ***que han sido modificados*** como los ficheros ***que no han sido modificados***, de modo que todos estén ubicados en una misa carpeta. Los ficheros que no habían sido modificados los enlaza mediante ***hardlinks***, de forma que no ocupen más espacio físico en el disco.

 Este es un proceso que consume tiempo, ya que al colocar cada fichero debe decidir si es una nueva copia o si tiene que enlazarlo con un hardlink, y de mientras el cliente remoto sigue atendiéndole. En algunos casos no tendrá mayor importancia, pero en otros casos será importante liberar al cliente cuanto antes. En este último caso podemos escoger la opción ***Sincronizar primero***.

 Cuando elegimos esta opción le decimos a rsnapshot que primero haga una sincronización de los ficheros en una carpeta llamada ***.sync*** para liberar cuanto antes al cliente. Cuando finalice esta parte y tras dejar libre al cliente, comparará los datos de la última copia (por ejemplo Daily.0) con los que hay en la carpeta  ***.sync***, y generará la nueva estructura añadiendo los hardlink necesarios.

 Por lo tanto, y respondiendo a la lógica que nos da a entender su nombre, cuando escogemos esta opción el sistema primero hará una sincronización de datos con el cliente y posteriormente creará la estructura de carpetas y hará las rotaciones pertinentes.
