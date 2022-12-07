function enviar5(){

    formulario5 = document.forms.datos5;
    var password = formulario5.password.value;

 /*
 8-16 char {8,16}
 1 mayuscula [A-Z]
 1 minuscula [a-z]
 1 numero [0-9]
 1 no alfanumerico \W
 */ 
    var resultado5 = password.match(/(?=.*\W+){8,16}(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/);
    if(resultado5){
        alert("Es valido");
    }else{
        alert("No es valido");
    }
}