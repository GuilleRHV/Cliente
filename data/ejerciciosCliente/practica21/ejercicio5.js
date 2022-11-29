function enviar5(){

    formulario5 = document.forms.datos5;
    var password = formulario5.password.value;

 //  alert("El valor de altura es: "+formulario.altura.value);
  // alert("El valor de peso es: "+formulario.peso.value);
    

   // var resultado = password.match("(?=.*[-,_])(?=.*[a-z])(?=.*[A-Z]){4,8}");
    var resultado5 = password.match(/([0-9]?)([a-z]+)([A-Z]$)/);
    if(resultado5){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
}