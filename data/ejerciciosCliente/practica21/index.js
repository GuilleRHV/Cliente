function enviar() {

    enviarDatos();
}

function enviarDatos() {

   

      formulario = document.forms.datos;
        peso =  formulario.peso.value;
        altura = formulario.altura.value;
        altura=Math.round(altura);
        imc = (peso / Math.pow(altura, 2));
     //  alert("El valor de altura es: "+formulario.altura.value);
      // alert("El valor de peso es: "+formulario.peso.value);
      
        var respuesta = document.getElementById("respuesta");
        if(imc<16.00){
            alert("IMC: "+imc+" Infrapeso(Delgadez severa)");
        } else if(imc>=16.00 && imc<=16.99){
            alert("IMC: "+imc+" Infrapeso (Delgadez moderada)");
        }else if(imc>=17.00 && imc<=18.49){
            alert("IMC: "+imc+" Infrapeso(Delgadez aceptable)");
        }else if(imc>=18.50 && imc<=24.99){
            alert("IMC: "+imc+" Peso normal");
        }else if(imc>=25.00 && imc<=29.99){
            alert("IMC: "+imc+" Sobrepeso");
        }else if(imc>=30.00 && imc<=34.99){
            alert("IMC: "+imc+" Obeso (Tipo I)");
        }else if(imc>=35.00 && imc<=40.00){
            alert("IMC: "+imc+" Obeso (Tipo II)");
        }else if(imc>40.00){
            alert("IMC: "+imc+" Obeso (Tipo III)");
        }
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
    contenedor = document.getElementById("contPrincipal");


    tabla = document.createElement("table");
    tabla.border = 1;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = "<16.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Infrapeso(Delgadez severa)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);



    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "16.00-16.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Infrapeso (Delgadez moderada)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "17.00-18,49";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Infrapeso(Delgadez aceptable)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "18.50-24.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Peso normal";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "25.00-29.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Sobrepeso";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "30.00-34.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo I)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "35.00-40.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo II)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = ">40.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo III)";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);





    //  elh1.appendChild(tr);

    contenedor.appendChild(tabla);
}