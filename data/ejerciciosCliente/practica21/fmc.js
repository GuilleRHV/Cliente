function enviar2() {

    enviarDatos2();
}

function enviarDatos2() {

   

      formulario = document.forms.datos;
        edad = formulario.edad.value;
        sexo =formulario.sexo.value;
        if(sexo=="hombre"){
            fcm = 220 - edad;
        }else if(sexo=="mujer"){
            fcm = 226 - edad;
        }
        document.getElementById("respuesta").innerHTML="FCM: "+fcm;
        document.getElementById("recuperacion").innerHTML="Recuperacion: "+Math.round(fcm*0.6,2)+"-"+Math.round(fcm*0.7,2);
        document.getElementById("aerobica").innerHTML="Aerobica: "+Math.round(fcm*0.7,2)+"-"+Math.round(fcm*0.8,2);
        document.getElementById("anaerobica").innerHTML="Anaerobica: "+Math.round(fcm*0.8,2)+"-"+Math.round(fcm*0.9,2);
        document.getElementById("linearoja").innerHTML="Linea roja: "+Math.round(fcm*0.9,2)+"-"+Math.round(fcm,2);
        alert("Tu fcm es de "+fcm);

      // document.write("IMC: "+imc)
       
   
       //Ambito servidor
       formulario.action = ".php";
       formulario.target = "_self";

    
 
     

}

function crearColumna() {
    var columna = document.createElement("tr");
    return columna;
}

function crearFila(contenido) {
    var fila = document.createElement("td");
    fila.innerHTML(contenido);
    return fila;
}

function main(){
    contenedor2 = document.getElementById("contPrincipal2");


    tabla = document.createElement("table");
    tabla.border = 1;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = "Zona de recuperacion";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "60%-70%";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);



    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "Zona aerobica";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "70%-80%";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "Zona anaerobica";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "80%-90%";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "Linea roja";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "90%-100%";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);




    //  elh1.appendChild(tr);

    contenedor2.appendChild(tabla);
}