
const N_PARRAFOS = 10;


$(document).ready(function(){
 //$('body').append('<p>Parrafo inyectado</p>');
 //$('.clase1').fadeIn(1500);
 

/*
$("body",function()
{
alert('alertt')
}).append("<p>Pruebaaa</p>")*/


$("body",callBackDeBody()).append("<span>Text desde jquery</span> ")






rellenar(arrayparrafos);


$(".tituloon").click(function(){
    $(".titulo").css("font-size","30px").css("font-weight","bold").css("color","red");
});
$(".tituloof").click(function(){
    $(".titulo").css("font-size","").css("font-weight","").css("color","");
});


$(".24px").click(function(){
    $(".tituloparrafo").css("font-size","24px").css("font-family","italic").css("color","diference").css("color","blue");
});
$(".quitar24px").click(function(){
    $(".tituloparrafo").css("font-size","").css("font-family","").css("color","").css("color","");
});

$(".estilotexto").click(function(){
    $(".info").css("font-size","20px").css("color","green");
});
$(".quitarestilotexto").click(function(){
    $(".info").css("font-size","").css("color","");
});


$(".bordeon").click(function(){
    $(".info").css("border","1px solid blue");
});

$(".bordeof").click(function(){
    $(".info").css("border","");
});


//var array = ["uno","dos","tres"];
//$("body").append(array);

//console.log(generarnumeroaleatorio());


});


function callBackDeBody(){
    //alert("Se ha añadido un span (callbackdebody)")
}



var arrayparrafos = ['It was popularised in the 1960s with the release of Letraset sheet containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'];




function generarnumeroaleatorio(){
    var n =Math.floor(Math.random() * (arrayparrafos.length-0) +0 );
    return n;
}

function generarNumAleatorio(n){
    return Math.floor(Math.random() * (n-0) +0 );
}

function generarnumeroaleatoriolongitud(){
    var n =Math.floor(Math.random() * (10-0) +0 );
    return n;
}

function generarnumeroparrafos(){
    return generarNumAleatorio(N_PARRAFOS);

}


function rellenar(arrayparrafos){
    var longitud = generarnumeroparrafos();
    console.log(longitud);
    for (var x = 0; x < longitud; x++){
        //$(".textos").append(arrayparrafos[x]+"<br>");
        var numeroaleatorio = generarnumeroaleatorio();
        console.log(arrayparrafos[numeroaleatorio]);

        //Creamos parrafo
        var datosparrafo = arrayparrafos[numeroaleatorio];
         var nuevoparrafo = document.createElement("p");
        nuevoparrafo.innerHTML = datosparrafo;
        nuevoparrafo.className = "info"
       


       //Creamos el titulo de parrafo
         titparrafo = document.createElement("p");
         titparrafo.innerHTML = "parrafo nº "+(x+1);
        titparrafo.className = "tituloparrafo";

       
        $("#principal").append(titparrafo);
        $("#principal").append("<br>");

        $("#principal").append(nuevoparrafo);
        $("#principal").append("<br><br>");

        console.log("Num aleat: "+numeroaleatorio);
        console.log(x);
    }
}