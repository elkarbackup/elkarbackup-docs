# Un repaso de conceptos: RSnapshot

Tal y como hemos comentado anteriormente ElkarBackup es una herramienta basada en  otras herramientas libres, sobre todo en rsnyc y rsnapshot, y como la mayor parte de su lógica responde a la lógica de rsnapshot, merece la pena detenerse para analizar su comportamiento.

Rsnapshot se basa en los siguientes conceptos:

- Origen de los datos a copiar: De donde tiene que copiar los datos ?

- Frecuencia: ¿Cada cuánto los tiene que copiar? En ciertas horas durante el día,  una vez al día los días que nos interese, una vez a la semana y al mes el día que decidamos,  ....

- Rotación: ¿Cuantas copias tiene que mantener en cada una de las frecuencias arriba mencionadas? Es decir, tal vez es suficiente con mantener las últimas 4 copias realizadas durante el día, pero las de final de mes las queremos guardar durante dos años.

A continuación intentaremos explicar su funcionamiento
