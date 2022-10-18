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
    //Indicamos id del parrafo creado
    parrafo.id="p3";
    var nodo = document.createTextNode("Parrafo dinamico");
    //Añadimos el nodo al nuevo parrafo
    parrafo.appendChild(nodo);
    //Añadimos el nuevo nodo al contenedor 'div1'
    var element = document.getElementById("div1");
    element.appendChild(parrafo);
}

function eliminarParrafo(){
    var element = document.getElementById("div1");
   // var element = document.getElementsByClassName("claseParrafo");

    element.removeChild(element.lastChild);
   // element.parentNode.removeChild(element);

}


function modificarParrafo(){
    var element = document.getElementById("div1");
    var valor = prompt("¿Que valor quieres asignarles?");
    //element.innerHTML(element.childNodes)=valor;

    element.replaceChildren(valor);
  
}
//Generar un boton con funcion eliminarParrafo() que elimine el parrafo con id="p3" generado previamente
//Para ello generaremos igualmente una variable con el parrafo a eliminar
//y usaremos la instruccion variable.remove 