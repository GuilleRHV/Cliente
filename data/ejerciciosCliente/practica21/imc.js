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
      
        var respuesta = document.getElementById("respuesta1");
        if(imc<16.00){
            alert("IMC: "+imc+" Infrapeso(Delgadez severa)");
            document.getElementById("dsevera").style.color="red";
        } else if(imc>=16.00 && imc<=16.99){
            alert("IMC: "+imc+" Infrapeso (Delgadez moderada)");
            document.getElementById("dsevera").style.color="red";
        }else if(imc>=17.00 && imc<=18.49){
            alert("IMC: "+imc+" Infrapeso(Delgadez aceptable)");
            document.getElementById("daceptable").style.color="orange";
        }else if(imc>=18.50 && imc<=24.99){
            alert("IMC: "+imc+" Peso normal");
            document.getElementById("pnormal").style.color="green";
        }else if(imc>=25.00 && imc<=29.99){
            alert("IMC: "+imc+" Sobrepeso");
            document.getElementById("sobrepeso").style.color="orange";
        }else if(imc>=30.00 && imc<=34.99){
            document.getElementById("sobrepeso2").style.color="orange";
            alert("IMC: "+imc+" Obeso (Tipo I)");
        }else if(imc>=35.00 && imc<=40.00){
            document.getElementById("sobrepeso3").style.color="red";
            alert("IMC: "+imc+" Obeso (Tipo II)");
        }else if(imc>40.00){
            document.getElementById("sobrepeso4").style.color="red";
            alert("IMC: "+imc+" Obeso (Tipo III)");
        }
      // document.write("IMC: "+imc)
       
        
       //Ambito servidor
       formulario.action = ".php";
       formulario.target = "_self";

       //document.getElementById("dsevera").style.color=red;
    
 
     

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
    td2.id="dsevera";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);



    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "16.00-16.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Infrapeso (Delgadez moderada)";
    td2.id="dmoderada";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "17.00-18,49";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Infrapeso(Delgadez aceptable)";
    td2.id="daceptable";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "18.50-24.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Peso normal";
    td2.id="pnormal";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "25.00-29.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Sobrepeso";
    td2.id="sobrepeso";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "30.00-34.99";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo I)";
    td2.id="sobrepeso2";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);


    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "35.00-40.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo II)";
    td2.id="sobrepeso3";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = ">40.00";
    td1.style.setProperty("font-weight","bolder");
    td2.innerHTML = "Obeso (Tipo III)";
    td2.id="sobrepeso4";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tabla.appendChild(tr);





    //  elh1.appendChild(tr);

    contenedor.appendChild(tabla);
}