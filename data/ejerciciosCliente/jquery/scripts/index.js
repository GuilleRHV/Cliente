

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



var array = ["uno","dos","tres"];
$("body").append(array);

console.log(generarnumeroaleatorio());

rellenar(generarnumeroaleatorio,array);
});


function callBackDeBody(){
    //alert("Se ha añadido un span (callbackdebody)")
}



var array = ['It was popularised in the 1960s with the release of Letraset sheet containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'];




function generarnumeroaleatorio(){
    var n =Math.floor(Math.random() * (2+1) +1 );
    return n;
}
function rellenar(numeroaleatorio, array){

    for (var i = 0; i < numeroaleatorio; i++){
        $("body").append(array[i]+"<br>");
    }
}