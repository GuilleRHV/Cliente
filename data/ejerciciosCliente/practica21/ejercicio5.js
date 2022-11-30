function enviar5(){

    formulario5 = document.forms.datos5;
    var password = formulario5.password.value;

 //  alert("El valor de altura es: "+formulario.altura.value);
  // alert("El valor de peso es: "+formulario.peso.value);
    

  //var resultado5 = password.match(/^[A-Z]+$/g);
    //var resultado5 = password.match(/^([s-z])([a-c]{1,3})(\s)([A-Z]$)/g);
    var resultado5 = password.match(/([0-9]?)([a-z]+)([A-Z]$)/);
    if(resultado5){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
}