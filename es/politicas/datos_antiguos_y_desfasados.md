## Datos antiguos y desfasados

Imaginémonos que en una política tenemos puesta una retención de 6 para los Hourly, esto significa que tendremos las carpetas Hourly.0, ..., Houry.5 con los datos de las últimas copias. Por alguna razón pensamos que es excesivo, y modificamos la retención  a 4,  por lo tanto utilizará las carpetas Hourly.0, ..., Houry.3.

¿ Y qué ocurre con las carpetas Hourly.4 y Houry.5 ? Pues que ahí estarán hasta que nosotros las borremos. No se actualizarán y se quedarán desactualizadas porque tampoco entrarán en el ciclo de rotaciones, pero estarán ahí, ***“haciendo ruido”***. Lo mejor en estos casos es que borremos a mano esas carpetas.

¿Y no sería mejor que en estos casos el sistema eliminara estas carpetas de forma automática? Podría ser, pero el eliminar datos de forma automática también tiene sus riesgos. Imaginémonos que en una política que tenemos ***en producción*** estamos haciendo cambios y que por error modificamos el parámetro de retención poniendo un valor demasiado pequeño, y que en consecuencia el sistema elimina automáticamente las carpetas con las copias. En la medida de lo posible debemos evitar la pérdida de datos, por lo que es mejor borrar a mano estas carpetas cuando sea necesario.
