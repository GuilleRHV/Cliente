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
      
        var respuesta1 = document.getElementById("respuesta1");
        if(imc<16.00){
            alert(" IMC: "+imc+" Infrapeso(Delgadez severa)");
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


///////////////////////////



contenedor2 = document.getElementById("contPrincipal2");


    tabla = document.createElement("table");
    tabla.border = 1;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = "Zona de recuperacion";
    td1.mainstyle.setProperty("font-weight","bolder");
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

//EJERCICIO 4****************************************************
//Actividades

var deportes = ["pilates","pesas","spinning","estiramientos","boxeo","yoga","descanso","meditacion"];

for (var i=0;i<6;i++){
    deportes.forEach((dep,i) => {
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(dep);
        //No me sirve en este caso el mentodo crearFila
        td1.appendChild(txt1);
        var identif1 = (i+1).toString();
        var mostrar1 = document.getElementById("ac"+identif1);
        mostrar1.appendChild(td1);
    });
}




//FISIO
var fisio = ["Andrea","Jose","Pedro","Laura","Andrea","Jose","Ivan","Ines","Pepe","Andrea"];

for (var i=0;i<5;i++){
    fisio.forEach((persona,ind) => {
        var td = document.createElement("td");
        var txt = document.createTextNode(persona);
        //No me sirve en este caso el mentodo crearFila
        td.appendChild(txt);
        var identif = (ind+1).toString();
        var mostrar = document.getElementById("fi"+identif);
        mostrar.appendChild(td);
    });
}




}

//ej2

function enviar2() {

    enviarDatos2();
}

function enviarDatos2() {

   

      formulario2 = document.forms.datos2;
        edad = formulario2.edad.value;
        sexo =formulario2.sexo.value;
     //  alert("El valor de altura es: "+formulario.altura.value);
      // alert("El valor de peso es: "+formulario.peso.value);
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
       formulario2.action = ".php";
       formulario2.target = "_self";

    
 
     

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


//Ej 5

function enviar5(){

    formulario5 = document.forms.datos5;
    var password = formulario5.password.value;

 //  alert("El valor de altura es: "+formulario.altura.value);
  // alert("El valor de peso es: "+formulario.peso.value);
    

    //var resultado5 = password.match(/(?=.*[-,_])(?=.*[a-z])(?=.*[A-Z]){4,8}/);
    var resultado5 = password.match(/?=[0-9]/);
    if(resultado5){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
}
//eJERCICIO 4***********************************
function enviarfisio(){
    var mostrar="";
    var tablafisio=document.getElementById("tablafisio");
    var persona = document.getElementsByName("fisio");
    
    var td = tablafisio.getElementsByTagName("td");
    for (var i=0;i<persona.length;i++){
        if(persona[i].checked == true){
            mostrar = persona[i].value;
            alert(persona[i].value);
        }
    }
    
  //  window.alert(td.length+"a");
    //Ahora pintamos
    for (var x = 0; x<5;x++){
          for(var y=0; y<td.length;y++){
             if(td[y].innerHTML==mostrar){
              td[y].style.backgroundColor="yellow";
              
             }
          }
    }

}

function enviaractividad(){
  var mostrar="";
  var tablaact=document.getElementById("tablaact");
  var actividad = document.getElementsByName("act");
  
  var td = tablaact.getElementsByTagName("td");
  for (var i=0;i<actividad.length;i++){
      if(actividad[i].checked == true){
          mostrar = actividad[i].value;
          alert(actividad[i].value);
      }
  }
  
//  window.alert(td.length+"a");
  //Ahora pintamos
  for (var x = 0; x<5;x++){
        for(var y=0; y<td.length;y++){
           if(td[y].innerHTML==mostrar){
            td[y].style.backgroundColor="yellow";
            
           }
        }
  }

}
