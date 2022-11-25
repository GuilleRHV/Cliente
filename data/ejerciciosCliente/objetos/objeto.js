
var person = {
    nombre: "Pepe"
};
person.atributoestatico = "hola";
function persona(nombre, apellido,mensaje){
    this.nombre = nombre;
    this.apellido=apellido;
    this.mensaje=mensaje;
    var estado = 'Activo';
    }

    class tarjetaFeliciataciones{
        construct(mensaje){
        this.mensajetargeta=mensaje;
        }
        personaliza(mensaje){
        return ("Tengo este mensaje" + this.mensajetargeta);
            
        }
    
    }
    var mensaje = prompt("Introduce un mensaje");
    tarjeta = new tarjetaFeliciataciones(mensaje);
    
    persona1 = new persona("Guillermo","Rodriguez",mensaje);
function main(){
  //  console.log(person.atributoestatico);
   // console.log(persona1.nombre);
    console.log(tarjeta.personaliza);
    
}
   