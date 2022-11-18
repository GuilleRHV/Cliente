function resolver1() {


    formulario = document.forms.ejercicio1;
    var texto = formulario.ej1.value;
  
      var respuesta = texto.match(/[0-9]/);
     if (respuesta){
        alert("Ejercicio 1: Correcto");
     }else{
        alert("Ejercicio 1:  incorrecto");
     }
    //Ambito servidor
    formulario.action = ".php";
    formulario.target = "_self";

//////


var cadena = "Mi cadena de prueba";
var formato = /ab+c/;
var resultadoValor = cadena.match(formato);
var resultadoTest = formato.test(cadena);
}

function resolver2() {
    formulario = document.forms.ejercicio2;
    var texto = formulario.ej2.value;
  
      var respuesta = texto.match(/[^a1ALsS]/);
     if (respuesta){
        alert("Ejercicio 2: Correcto");
     }else{
        alert("Ejercicio 2:  incorrecto");
     }

}



function resolver3() {
    formulario = document.forms.ejercicio3;
    var texto = formulario.ej3.value;
  
      var respuesta = texto.match(/^[^A]/);
     if (respuesta){
        alert("Ejercicio 3: Correcto");
     }else{
        alert("Ejercicio 3:  incorrecto");
     }

}

function resolver4() {
    formulario = document.forms.ejercicio4;
    var texto = formulario.ej4.value;
  
      var respuesta = texto.match(/^[\D]/);
     if (respuesta){
        alert("Ejercicio 4: Correcto");
     }else{
        alert("Ejercicio 4:  incorrecto");
     }

}

function resolver5() {
    formulario = document.forms.ejercicio5;
    var texto = formulario.ej5.value;
  
      var respuesta = texto.match(/^[a-z]/);
     if (respuesta){
        alert("Ejercicio 5: Correcto");
     }else{
        alert("Ejercicio 5:  incorrecto");
     }

}


function resolver6() {
    formulario = document.forms.ejercicio6;
    var texto = formulario.ej6.value;
  
      var respuesta = texto.match(/^[A-Z]$[r]/);
     if (respuesta){
        alert("Ejercicio 6: Correcto");
     }else{
        alert("Ejercicio 6:  incorrecto");
     }

}


function resolver7() {
    formulario = document.forms.ejercicio7;
    var texto = formulario.ej7.value;
  
      var respuesta = texto.match(/\bye/);
     if (respuesta){
        alert("Ejercicio 7: Correcto");
     }else{
        alert("Ejercicio 7:  incorrecto");
     }

}