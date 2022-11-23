function cambiarParrafoColor(){
    parrafo = document.getElementById("p3");
    p3.style.color ="red";
}
//Cambios en tiempo de ejecucion

function btnAtarEvento_Click(){
atarEvento();
}
function atarEvento(){
    alert("Se ha atado el evento onmouseover al parrafo p3\n pasa el cursor sobre el parrafo");
    document.getElementById("p3").onmouseover = cambiarParrafoColor;
}

//Devuelve el objeto del evento click
function dispararEventoP(event){
    alert("P: "+event);
}

function dispararEventoDiv(event){
    alert("Div: "+event);

}


/**////////////////////////////////////////////// */
function cambiarParrafoColorEjercicio(){
    parrafo = document.getElementById("p4");
    p4.style.color ="blue";
}
function cambiarTextoEjercicio(){
    parrafo = document.getElementById("p4");
    p4.innerHTML = "Texto cambiado";
    p4.style.color ="blue";
}
function btnEnlazarEjercicio(){
 //   document.getElementById("p4").addEventListener("onmouseover",cambiarTextoEjercicio);
    document.getElementById("p4").onmouseover=cambiarTextoEjercicio;
}
function btnDesenlazarEjercicio(){
    document.getElementById("p4").removeEventListener("onmouseover",cambiarTextoEjercicio);
}
//Generar un boton  k permita enlazar un parrago 2 eventos mouseover y mouseout 
//de forma que el contenido del parrafo cambie cuando se pase el cursor sobre el parrafo
//generar ademas un 2do boton el codigo para desenlazar dichos elementos