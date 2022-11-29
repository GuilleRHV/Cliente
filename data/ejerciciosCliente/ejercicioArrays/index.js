

var cola = [1];
var pila =[];


function btnInsertarCola() {
    var texto = prompt("introduce texto");
    
    cola.push(texto);
    console.log(cola);
    main();
}


function btnBorrarCola() {
    cola.pop();
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
    pila.shift();
 //   pila.pop();
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
    //cola normal
    
}

function mostrarpila(array){
    //En pila se resta 
    //for(var i=array.length;i>0;i--){
    for(var i=0;i<array.length;i++){
    
        console.log(array[i]+ ", ");
        //pintardatp(arraypila,i);
    }
}