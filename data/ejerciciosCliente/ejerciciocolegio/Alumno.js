class Alumno {

   dni = "";
   nombre = "";
   media = "";

   constructor(dni, nombre, media) {
      this.dni = dni;
      this.nombre = nombre;
      this.media = media;
   }

   setmedia(n) {
      this.media = n;
   }

   getmedia() {
      return this.media;
   }

   //alert("Dni: " + this.dni + " nombre: " + this.nombre+ 

   modificarNumeroAlumnos(num) {

   }
}

function main() {
   per = new Alumno("123", "Pepe", 5);
   console.log("Antes de modificar: "+per.media);
   var modificarmedia = prompt("Introduce nueva media de " + per.nombre);
   per.setmedia(modificarmedia);

   console.log("Despues de modificar: "+per.media);
}