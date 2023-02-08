$(document).ready(function (){
	
	 $('#btn1').click(function (){
		alert("este es el evento Click");
	 });

	 $('#btn2').one('click', function(){
 		alert('Este evento será disparado una sola vez');
	 });

	 $('#btnAsocia').click(function (){
	 	alert("El evento click ha sido asociado al div1");
 		// vamos a asociar el evento Click a div1
 		$('#div1').on('click', function (){
 			alert("Div 1 ha sido pulsado");
 		});

	 });

	 $('#btnDesasocia').click(function (){
	 	alert("El evento click ha sido desasociado al div1");
 		// vamos a desasociar el evento Click a div1
 		$('#div1').off();
	 });

/*		 */

// caso 1	
// el evento está asociado solo para los elementos originales
/*	 $('#lista a').on('click', function(event){
	 	event.preventDefault();
//	 	alert($(this).text());
	 });*/

/*
// caso 2
// el evento está asociado aunque se añada después el elemento html
	$('#lista').on('click','a', function(event){
	 	event.preventDefault();
	 	alert($(this).text());
	 }); */

//	$('#lista').append('<li><a href="http://direccion4.com">Item #4</a></li>')

});


