function main() {
    //Determinar que formulario esta operativo

    //Deshabilita 'contenido1'
   // document.getElementById("contenido1").style.display = "none"

    //Deshabilita 'contenido2'
    document.getElementById("contenido2").style.display = "none"
    //Deshabilita 'contenido3'
    document.getElementById("contenido3").style.display = "none"
   // debugger
    //listado de opciones
    document.getElementById('lista').children //Array con sus hijos
    document.getElementById('lista').options //Array los elementos option
    document.getElementById('lista').options[1] //Array con sus hijos


    //Listado de opciones multiples
    document.getElementById("listaM").children //array de los hijos
    document.getElementById("listaM").options //array de los hijos
    document.getElementById("listaM").options[1].selected //devuelve boolean si esta seleccionado

    
    //Listas ordenadas/desordenadas
    document.getElementById("ulDesordenadas").children //Nos va a devolver los hijos
    
    //tablas
    document.getElementById("tabla1");
    //txtBoc - password - Hidden
    document.getElementById("cmpTxt").value;
    document.getElementById("cmpPass").value;
    document.getElementById("cmpHidden").value;


    //text Area
    debugger
    var textDelTextArea=document.getElementById("txtArea1").value;
    
    //Radio Button: permite  na sola opcion de seleccion
    var variableRadio = document.getElementsByName("lenguaje");
    for (var i=0; i< variableRadio.length;i++){
        if(variableRadio[i].checked){
            console.log("variableRadio["+i+"]: " + "true");
        }
    }    

    //Checkbox
debugger
var variableCheck = document.getElementsByName("miCheck");
    for (var i=0; i< variableCheck.length;i++){
        if(variableRadio[i].checked){
            console.log("variableCheck["+i+"]: " + "true");
        }
    }  

    /*
    Dar funcionalidad a los 2 botones btnAddClass y btnRemovClass de forma que 
       - Añadan o eliminen una nueva clase a alguno de los elementos
       - La clase se va a llamar componenteUListaL
       - Utilizaremos la funcion .setAttribute(clase,'ClaseAAñadir')
       - Podremos usar tambien .classList.add("clase1,clase2")
       - Para eliminar la clase podremos usar classList.remove('nombreClase')

    */

}


function btnOk_onClick() {
    alert("btnOk_onClick In")
    enviarDatos();
}

function btnCancel_onClick() {
    alert("btnCancel_onClick In")
}

function btnAddClass_onClick() {
    //alert("btnAddClass_onClick In")

    document.getElementById('item1').classList.add("modificado")

}

function btnRemoveClass_onClick() {
    document.getElementById('item1').classList.remove("modificado")
}

function enviarDatos(){
    formulario = document.forms.datos;
    debugger;
    alert("El valor de cmpNombreTxt es: "+formulario.cmpNombreTxt.value);
    formulario.cmpApellidoTxt.focus();

    //Ambito servidor
    formulario.action = ".php";
    formulario.target = "_self";

}
