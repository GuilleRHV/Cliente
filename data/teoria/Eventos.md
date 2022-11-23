# Eventos
Es algo que pasa
Accion->Usuario->Entorno
Aplicacion Reloj->Horas puntas

Permite controlar -> Flujo de trabajo
Manejador de eventos -> Funcion de control del evento
->Escuchador asociado al evento
- Atributo onClick: funcion de asociar el manejador al evento
### Click -> Evento
### onClick -> Atributo
* Atributo del EVENTO que pertenece al ESCUCHADOR
* EVENTO 

### Diseño:
Cuando no se haya ejecutado el DOM
### Tiempo de ejecucion
Cuando el DOM está ejecutandose

## Manejadores de evento del DOM
El uso de los manejadores de eventos del dom nos va a permitir asociar varios manejadores de evento a un mismo evento el tiempo de ejecucion.
document.getElementById('id').addEventlistener([EVENTO],[MANEJADOR][FASE])
 -->     .addEventlistener(MOUSEOVER,pintaparrafo(),false)

- Evento Osado sin prefijo On
- Manejador: funcion a la que se asocia el elemento
- Fase 
    - True
    - False
Determina el orden en el que son ejecutados la cadena de eventos.
__removeEventListener__ eliminaremos el manejador de eventos asociado al evento y objeto.
En este caso en la llamado removeEventListener no es necesario pasar el argumento y la fase.

