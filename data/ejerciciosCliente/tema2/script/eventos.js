function cambiarParrafoColor(){
    parrafo = document.getElementById("p3");
    p3.style.color ="red";
}
//Cambios en tiempo de ejecucion
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