# Tema 3 Aspectos avanzados de JavaScript

## Eventos
Objetos propietarios del evento
* button: onClick  click
Codigo html->onClick
Atributo=Valor(HTML)
Codigo JS click
Atributo onClick: "Manejador de eventos"


<html>
<body>
<input type="buton" onClick="btnMiboton" dwe "btnMiBoton">
</body>
</html>

Gracias a los eventos vamos a poder tener control en situaciones concretas sobre las que vamos a poder programar acciones, los eventos en Js van a ir determinados por el lenguaje de programacion aunque el usuario podra crear elementos propios que podran desenlazar una accion determinada. 

Event handler/manjeado de eventos: es la función que va a ser ejecutada cuando el elemento es disparado.
Va a ser el elemnto asociado al evento que sera responsable de disparar el evento.

Event listener: escucha el evento
El evento necesita ser atado al elemento y para ello generamos en html un atributo/valor donde el att es el elemento precedido de un On que esta siendo ligado al elemento.
El elemento sera el manejador del evento.
