function paginaCargada(){
    debugger;
    var elemento = document.getElementById("div1");
    var elementoClases = document.getElementsByClassName("claseParrafo");
    console.log("Elemento:"+elemento);
    console.log("Clase parrafo: "+elementoClases);
}



//Genera parrafo de forma dinamica
function generarParrafo(){
    //Generamos parrafo y contenido
    var parrafo=document.createElement("p");
    parrafo.id="p3";
    var nodo = document.createTextNode("Parrafo dinamico");
    //Añadimos el nodo al nuevo parrafo
    parrafo.appendChild(nodo);
    //Añadimos el nuevo nodo al contenedor 'div1'
    var element = document.getElementById("div1");
    element.appendChild(parrafo);
}

function modificarParrafo(){

}
