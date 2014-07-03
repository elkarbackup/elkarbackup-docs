Lo que hemos hecho en los pasos anteriores ha sido copiar en la carpeta c:\ElkarBackup los scripts necesarios para montar en la unidad B un snapshot de la unidad C que solo es visible para el demonio rsync. Este snapshot es desmontado una vez finaliza la copia.

Para utilizar esta funcionalidad desde nuestro servidor elkarbackup, simplemente tenemos que  activar el script `TriggerSnapshotGenerateOrDelete.sh` como PRE y POST (si, ambos) del cliente Windows con el que estamos trabajando.

Si nos da algún error, lo aconsejable es probar la copia sin la ejecución de estos scripts (por descartar otro tipo de fallos en la configuración), y una vez que estos funcionan procederíamos a activar de nuevo el scritp como PRE y POST a nivel de cliente.

Un error típico es que el usuario ***SvcCWRSYNC*** no disponga de los permisos necesarios para gestionar snapshots en el cliente windows. En las pruebas realizadas, no era suficiente que el usuario estuviera dentro del grupo de ***Operadores de Copia de Seguridad***, en cambio funciona correctamente si el usuario pertenece al grupo ***Administradores*** del cliente.
