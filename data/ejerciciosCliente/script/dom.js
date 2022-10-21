function paginaCargada() {
    debugger;
    var elemento = document.getElementById("div1");
    var elementoClases = document.getElementsByClassName("claseParrafo");
    console.log("Elemento:" + elemento);
    console.log("Clase parrafo: " + elementoClases);
}



//Genera parrafo de forma dinamica
function generarParrafo() {
    //Generamos parrafo y contenido
    var parrafo = document.createElement("p");
    //Indicamos id del parrafo creado
    parrafo.id = "p3";
    var nodo = document.createTextNode("Parrafo dinamico");
    //Añadimos el nodo al nuevo parrafo
    parrafo.appendChild(nodo);
    //Añadimos el nuevo nodo al contenedor 'div1'
    var element = document.getElementById("div1");
    element.appendChild(parrafo);
}

function eliminarParrafo() {
    var element = document.getElementById("div1");
    // var element = document.getElementsByClassName("claseParrafo");

    element.removeChild(element.lastChild);
    // element.parentNode.removeChild(element);

}


function modificarParrafo() {
    //var element = document.getElementById("p3").innerHTML;
    var valor = prompt("¿Que valor quieres asignarles?");
    //element.innerHTML(element.childNodes)=valor;

<<<<<<< HEAD
    // element.replaceChildren(valor);
    document.getElementById("p3").innerHTML = valor;

=======
    element.innerHTML=valor;
  
>>>>>>> 87d4709a8c7058d3ed2724f76717c6ea35aaca7a
}

function hijos(){
    var element = document.getElementById("div1").childNodes;
   // alert("Hay "+document.getElementById("div1").firstChild.nextSibling.textContent+" elementos hijos");
   // element = document.getElementById("div1").firstChild.nextSibling;
    for(var i = 0; i< element.length;i++){
        document.write(element[i].textContent+"<br>");
    }
}



//Generar un boton con funcion eliminarParrafo() que elimine el parrafo con id="p3" generado previamente
//Para ello generaremos igualmente una variable con el parrafo a eliminar
//y usaremos la instruccion variable.remove 


/*
- Generar una variable que contenga todos los hijos de div1
para ello usar la propiedad childNodes
usar ademas los atributos firstchild y last child para ver sus hijos

-Generar la lista desordenada en html y usar las propiedades nextSibling y previousSibling 
para moverse entre nodos hermanos

<ul>
<li id="item1">elemento primero</li><li id="item2">elemento2</li>
</ul>

- que pasa si tengo ospacios o mas elementos entre los elementos de tipo "li"?

*/

function hijosdiv1() {
    debugger;
    var hijosdiv = document.getElementById("div1");
    var hijos = document.getElementById("div1").childNodes;

    var longintud = document.getElementById("div1").childNodes.length;

   /* document.write(hijosdiv.nextSibling);
    var longintud = document.getElementById("div1").childNodes.length;
    for(var i = 0; i< longintud;i++){
        document.write(hijosdiv.childNodes[i].innerHTML+"<br>");
    }
    document.write(hijosdiv);*/
   // document.write(hijos[1].textContent.);

    while(hijos.nextSibling){
    document.write(hijos[1].nextSibling.textContent);
    }
}