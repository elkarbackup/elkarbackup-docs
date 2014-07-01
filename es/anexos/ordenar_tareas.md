Las tareas que pertenecen a la misma política se ejecutan todas una detrás de la otra. Cuando la ejecución de una tarea requiere mucho tiempo, puede retrasar de forma considerable la ejecución de las tareas que vienen por detrás. Se han detectado al menos dos casos en los que esto puede ocurrir:
- Cuando se hace la primera copia y el volumen de datos a transferir es grande.
- Cuando en una tarea hay muchos ficheros (en las pruebas 302000 ficheros).

El primer caso no debería preocuparnos porque será algo puntual. En cambio en el segundo caso, rsync debe leer un árbol de directorios grande tanto en el servidor como en el cliente, y esto le lleva tiempo. Ocurre lo mismo con las rotaciones de nivel inferior que utilizan operaciones "cp -al". Por último, la situación se repite al calcular el espacio ocupado en disco.

En estos casos tal vez preferiríamos que ciertas tareas se ejecutaran antes que otras, y para eso con el objetivo de ***asignar prioridades a las tareas*** se ha añadido la opción de ordenarlas a través de la opción del menú ***Clientes → Ordenar tareas***.

Para asignar las prioridades se nos mostrarán todas las tareas en una lista que podremos ordenar. Las copias se ejecutarán según el orden establecido en esta lista.
