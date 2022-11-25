
#Objetos
## Objetos estaticos
un objeto es un elemento que puede tener 0 o mas pares de clave-valor. Va a poder declarar metodos dentro del objeto simil. Va a poder ser instanciable. Es estatico (no podra declarar sus att de tipo publico/privado.
## Objetos dinamicos
Para los objetos dinamicos usaremos funciones constructoras, gracias al uso de la palabra reservada __this__ que determinará el tipo es public. Con la palabra reservada __var__ sera declarado privado.
        Function persona(nombre, apellido){
        this.nombre = nombre;
        this.apellido=apellido;
        var estado = 'Activo';
        }
   
## Instanciacion
var persona1 = new Persona('Ana','Lopez');
La definicion de metodos determina que estos son añadidos a la funcion constructora despues de ser definida.
Es añadida a la funcion constructora desoues de ser definida.

Esto determina que no son accesibles a traves de la instancia creada, por lo que no va a ser necesario instancias a un objeto para acceder a ellos.

1. Instanciar objeto (Circulo)
2. Acceder al metodo


Persona.atributoestatico=22;
Persona.metodoEstatico = function(){
    console.log("Soy un metodo estatico");
}
console.log(Persona atributoatboestatico);
console.log(Persona.metodoestatico);

# Clases
Vamos a determinar una clase como la definicion de un objeto en software. A su vez instanciaremos como objeto (sera tangible). Una clase va a ser utilizada con un constructor y una vez definida no puede ser redeclarada. 

class tarjetaFeliciataciones{
    constructor(mensaje);{
    this.mensajetargeta=mensaje;
    }
    personaliza(nombre){
    return (nombre + "Tengo este mensaje" + this.mensajetargeta;
        
    }

}
### Instancia de la clase
var miTarjeta = new tarjetaFelicitaciones("Feliz cumple");

sobre el ej anterior pedir por pantalla pedir el mensaje a insertar en la tarjeta que sera guardado en un objeto de la clase y acceder a la clase para asignar ese mensaje al attbo INNERHTML de div principal;
