# GETTERS Y SETTERS

js son atajos sintancticos cuyas finalidades son recuperar y actualizar datos de la clase. 

## Set
set mensaje (m){
this.mensajetarjeta=m;
}
## Get
get mensaje(){
return this.mensajetarjeta;
}


miTarjeta=new TarjetaFelicitaciones("Mensaje");

miTarjeta.mensaje="Nuevo mensaje";
console.log(miTarjeta.mensaje);


# Propiedades y metodos privados en clases
        # Propiedad privada
        
        # Metodo privadoDevolverPropiedadPrivada(){
         return this#propiedadprivada;}

metodopublico DevolverpopiedadPrivada(){
return #metodoprivadoDevolverPropiedadPricada();
}


# Herencia en Js
* Prototipado para objetos dinamicos
Los prototipos son mecanismos que permiten a los objetos js de tipo dinamico heredar caracteristicas de otros objetos. Estos prototipos serán usados para añadir metodos a los constructores existentes. En js la palabra reservada __prototype__ es una propiedad que contiene un objeto en el que se define los miembros que van a ser heredados.
Estos prototipos serán invocados desde la instancia.

function persona(nom,ape,edad){
this.nombre{
    "mom":mom,
    "dad":dad
}
this.edad=edad;


Persona.prototype.despedida=function{
alert(this.nombre.mom


Aparte de usar los prototupos para heradd funcionalidades de los objetos que hereden caract comines .
A la hora de aplicacar la herenca

la mayor especifidad del objeto creado ejemplo de objeto heredado, la clase padre va a ser la clase persona heredada previamente, aparte heredadermos una clase profesor que es mas especifica que la persona y que va a heredar la propiedades comunes de persona. Y generaremos ademas un attbo especifico para el profesor. 
 

function profesor
(nom,ape,materia){
persona.call(this,


vamos a generar un metodo especifico para la clase profesor y vamos a redefinir la funcion despedida segun las necesidades de la clase heredada





profesor.prototype.despedida = function{
alert(this.





