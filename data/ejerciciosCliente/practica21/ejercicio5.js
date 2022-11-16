function enviar(){

    formulario = document.forms.datos;
    var password = formulario.password.value;

 //  alert("El valor de altura es: "+formulario.altura.value);
  // alert("El valor de peso es: "+formulario.peso.value);
    

    var resultado = password.match("(?=.*[-,_])(?=.*[a-z])(?=.*[A-Z]){4,8}");
    if(resultado){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
}