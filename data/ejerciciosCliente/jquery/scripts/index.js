

$(document).ready(function(){
 //$('body').append('<p>Parrafo inyectado</p>');
 //$('.clase1').fadeIn(1500);
 

/*
$("body",function()
{
alert('alertt')
}).append("<p>Pruebaaa</p>")*/


$("body",callBackDeBody()).append("<span>Text desde jquery</span> ")


});


function callBackDeBody(){
    alert("Se ha añadido un span (callbackdebody)")
}