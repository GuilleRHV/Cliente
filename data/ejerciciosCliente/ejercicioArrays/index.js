

var cola = [1];
var pila =[];


function btnInsertarCola() {
    var texto = prompt("introduce texto");
    
    cola.push(texto);
    console.log(cola);
    main();
}


function btnBorrarCola() {
    cola.shift();
    console.log(cola);
    main();
}


function btnInsertarPila() {
    var texto = prompt("introduce texto");
    pila.unshift(texto);
    console.log(pila);
    main();
}


function btnBorrarPila() {
    pila.shift();
    console.log(pila);
    main();
}

function main(){
    //recorrer foreach
    cola.forEach(function(elemento,indice,array) {
        array[indice]=elemento;
       
    })
    document.getElementById("espacio").innerHTML=cola;
}