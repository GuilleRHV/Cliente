class Persona{
    constructor(nom,ape,edad){
        this.nom = nom;
        this.ape = ape;
        this.edad = edad;
    }
    saludo(){
        console.log("Hola, soy "+this.nom+" "+this.ape+ ", una persona de "+this.edad+" años" );
    }

}
var Juan = new Persona("Juan","Alvarez",33);


class Profesor extends Persona {

    constructor(nom,ape,edad,materia){
        super(nom,ape,edad);
        this.materia=materia;
    }
    saludo(){
        console.log("Hola, soy "+this.nom+" "+this.ape+" , un profesor de "+this.materia+ " y tengo "+this.edad+" años");
    }

}
function main(){
var profe = new Profesor("Antonio","Lopez",54,"Matematicas");

console.log(profe.nom);
console.log(profe.materia);
profe.saludo();
Juan.saludo();
}