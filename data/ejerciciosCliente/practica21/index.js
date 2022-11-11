function enviar() {
   
    enviarDatos();
}

function enviarDatos(){
    formulario = document.forms.datos;
     peso =  formulario.peso.value;
     altura = formulario.altura.value;
     altura=Math.round(altura);
     imc = (peso / Math.pow(altura, 2));
    alert("El valor de altura es: "+formulario.altura.value);
    alert("El valor de peso es: "+formulario.peso.value);
    alert("IMC: "+imc)
    formulario.cmpApellidoTxt.focus();

    //Ambito servidor
    formulario.action = ".php";
    formulario.target = "_self";

}