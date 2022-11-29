function enviar2() {

    enviarDatos2();
}

function enviarDatos2() {

   

      formulario = document.forms.datos;
        edad = formulario.edad.value;
        sexo =formulario.sexo.value;
     //  alert("El valor de altura es: "+formulario.altura.value);
      // alert("El valor de peso es: "+formulario.peso.value);
        if(sexo=="hombre"){
            fcm = 220 - edad;
        }else if(sexo=="mujer"){
            fcm = 226 - edad;
        }
        document.getElementById("respuesta").innerHTML="FCM: "+fcm;
        document.getElementById("recuperacion").innerHTML="Recuperacion: "+fcm*0.6+"-"+fcm*0.7;
        document.getElementById("aerobica").innerHTML="Aerobica: "+fcm*0.7+"-"+fcm*0.8;
        document.getElementById("anaerobica").innerHTML="Anaerobica: "+fcm*0.8+"-"+fcm*0.9;
        document.getElementById("linearoja").innerHTML="Linea roja: "+fcm*0.9+"-"+fcm;
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