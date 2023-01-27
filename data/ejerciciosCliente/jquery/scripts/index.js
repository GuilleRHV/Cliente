

$(document).ready(function(){
 //$('body').append('<p>Parrafo inyectado</p>');
 //$('.clase1').fadeIn(1500);
 

/*
$("body",function()
{
alert('alertt')
}).append("<p>Pruebaaa</p>")*/
$

$("body",callBackDeBody()).append("<span>Text desde jquery</span> ")




$("#30pxtitulo").click(function(){
    $("#titulo").css("font-size","30px").css("font-weight","bold").css("color","red");
});
$("#quitar30pxtitulo").click(function(){
    $("#titulo").css("font-size","").css("font-weight","").css("color","");
});


$("#24px").click(function(){
    $("#tituloparrafo").css("font-size","24px").css("font-family","italic").css("color","diference").css("color","blue");
});
$("#quitar24px").click(function(){
    $("#tituloparrafo").css("font-size","").css("font-family","").css("color","").css("color","");
});

$("#estilotexto").click(function(){
    $(".info").css("font-size","20px").css("color","green");
});
$("#quitarestilotexto").click(function(){
    $(".info").css("font-size","").css("color","");
});




});


function callBackDeBody(){
    //alert("Se ha añadido un span (callbackdebody)")
}