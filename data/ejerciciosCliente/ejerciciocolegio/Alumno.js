class Alumno{

    dni="";
    nombre="";
    media="";

     constructor(dni,nombre,media) {
        this.dni=dni;
        this.nombre=nombre;
        this.media=media;
    }

 set media(n){
    this.media=n;
 }

get media(){
    return this.media;
 }

 //alert("Dni: " + this.dni + " nombre: " + this.nombre+ 

  modificarNumeroAlumnos(num) {
    
 }
}

 function main(){
    per = new Alumno("123","Pepe",5);
    console.log(per.media);
}