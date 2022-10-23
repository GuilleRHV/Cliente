function main(){

}
function navegarNodos(){
    debugger;
    var nodosHijos = document.getElementById("div1").childNodes;
    console.log(nodosHijos.length);
    console.log(nodosHijos[1]);
    console.log(nodosHijos[1].textContent);


    //parentNode
    var nodosPadre = document.getElementById("p1").parentNode;
    //Preguntar: porque esta devolviendo Undefined
    console.log(nodosPadre);

    //console.log(nodosPadre[0]);

    //firstChild
    var primerHijo = document.getElementById("div1").firstChild;
    console.log(primerHijo);

    //lastChild
    var ultimohijo = document.getElementById("div1").lastChild;
    console.log(ultimohijo);


    var textoSiguienteHermano = document.getElementById("item1").nextSibling.textContent;

    //var textoSiguienteHermano = document.getElementById("item1").nextSibling.innerHtml;


    //previousSibling

    var item2 = document.getElementById("item2");
    var textoAnteriorHermano = document.getElementById("item2").previousSibling.innerHtml;
    console.log(textoAnteriorHermano);

    //Atributo nodeName
    console.log(nodosHijos[0].nodeName);
    console.log(nodosHijos[3].nodeName);

    //Para recorrer un padre y comprobar si los elementos son validos, puedo usar las siguientes 
    //condiciones
    //nodosHijos[3].tagName==null;
}