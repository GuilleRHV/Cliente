function main() {
    //Determinar que formulario esta operativo

    //Deshabilita 'contenido1'
    document.getElementById("contenido1").style.display="none";

    //Deshabilita 'contenido2'
    document.getElementById("contenido2").style.display = "none";
    debugger;
    //listado de opciones
    document.getElementById('lista').children; //Array con sus hijos
    document.getElementById('lista').options; //Array los elementos option
    document.getElementById('lista').options[1]; //Array con sus hijos

    /*
    Dar funcionalidad a los 2 botnoes btnAddClass y btnRemovClass de forma que 
       - Añadan o eliminen una nueva clase a alguno de los elementos
       - La clase se va a llamar componenteUListaL
       - Utilizaremos la funcion .setAttribute(clase,'ClaseAAñadir')
       - Podremos usar tambien .classList.add("clase1,clase2")
       - Para eliminar la clase podremos usar classList.remove('nombreClase');

    */
}


function btnOk_onClick() {
    alert("btnOk_onClick In");
}

function btnCancel_onClick() {
    alert("btnCancel_onClick In");
}

function btnAddClass_onClick() {
    //alert("btnAddClass_onClick In");

    document.getElementById('item1').classList.add("modificado");

}

function btnRemoveClass_onClick() {
    document.getElementById('item1').classList.remove("modificado");
}