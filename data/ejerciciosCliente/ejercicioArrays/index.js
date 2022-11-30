

var cola = [1];
var pila =[];


function btnInsertarCola() {
    var texto = prompt("introduce texto");
    
    cola.push(texto);
    console.log(cola);
    main();
}


function btnBorrarCola() {
  //  cola.pop();
    cola.shift();
    console.log(cola);
    main();
}


function btnInsertarPila() {
    var texto = prompt("introduce texto");
  //  pila.unshift(texto);
    pila.push(texto);
    console.log(pila);
    main();
}


function btnBorrarPila() {
    //pila.shift();
    pila.pop();
    console.log(pila);
    main();
}

function main(){
    //recorrer foreach
    cola.forEach(function(elemento,indice,array) {
        array[indice]=elemento;
       
    })
    document.getElementById("espacio").innerHTML=cola;

    mostrarpila(pila);
    mostrarcola(cola);
    //cola normal
    
}

function mostrarpila(array){
    //En pila se resta 
    var cadena="";
    for(var i=array.length-1;i>=0;i--){
    //for(var i=0;i<array.length;i++){
    
        cadena=cadena+", "+array[i];
        //pintardatp(arraypila,i);
    }
    console.log("Representacion pila: "+cadena);
}

function mostrarcola(array){
    //En pila se resta 
    var cadena="";
    //for(var i=array.length-1;i>=0;i--){
    for(var i=0;i<array.length;i++){
    
        cadena=cadena+", "+array[i];
        //pintardatp(arraypila,i);
    }
    console.log("Representacion cola: "+cadena);
}