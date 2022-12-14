class Persona{
    constructor(nom,ape,edad){
        this.nom = nom;
        this.ape = ape;
        this.edad = edad;
    }

}
var Juan = new Persona("Juan","Alvarez",33);


class Profesor extends Persona {

    constructor(nom,ape,edad,materia){
        super(nom,ape,edad);
        this.materia=materia;
    }

}
function main(){
var profe = new Profesor("Antonio","Lopez",54,"Matematicas");

console.log(profe.nom);
console.log(profe.materia);
}