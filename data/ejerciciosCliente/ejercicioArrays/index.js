

var cola = [];
var pila =[];


function btnInsertarCola() {
    var texto = prompt("introduce texto");
    
    cola.push(texto);
    console.log(cola);
}


function btnBorrarCola() {
    cola.shift();
    console.log(cola);
}


function btnInsertarPila() {
    var texto = prompt("introduce texto");
    pila.unshift(texto);
    console.log(pila);
}


function btnBorrarPila() {
    pila.shift();
    console.log(pila);
}