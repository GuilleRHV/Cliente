const CLASE_PARRAFO = 'textoParrafo';
const CLASE_TITULO_PARRAFO = 'tituloParrafo';
const CLASE_TITULO_PAGINA = 'tituloPrincipal';
const CLASE_BLOQUE = 'contenido sombreado redondeado';
const CONTENEDOR_PRINCIPAL = 'divContenidos';
const MAX_BLOQUES = 5;
const MAX_PARRAFOS = 7;
const ID_PARRAFO = "p";
const ID_BLOQUE = 'bloque';
const ID_TITULO_PAGINA = 'tituloPag';
const ID_TITULO_BLOQUE = 'tituloBloque';
var titulosParrafos = ["Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.","Consectetur, adipisci velit.","Lorem ipsum dolor sit amet.","Consectetur adipiscing elit.","Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam.","Quis nostrud exercitation ullamco laboris nisi.","ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate.","Velit esse cillum dolore eu fugiat nulla pariatur." ,"Excepteur sint occaecat cupidatat non proident."];
var titulosPagina = ["Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.","Consectetur, adipisci velit.","Lorem ipsum dolor sit amet.","Consectetur adipiscing elit.","Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam.","Quis nostrud exercitation ullamco laboris nisi.","ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate.","Velit esse cillum dolore eu fugiat nulla pariatur." ,"Excepteur sint occaecat cupidatat non proident."];
var textosParrafos = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas hendrerit nulla. Aliquam dui odio, venenatis ac ex at, vestibulum tempor turpis. Aenean vitae aliquet augue, a lobortis nunc. Aenean nisi urna, facilisis vel enim in, placerat venenatis mauris. Aenean mollis, risus eget ultrices suscipit, quam diam tempor justo, at posuere felis magna id ex. Quisque tincidunt, eros quis rhoncus rhoncus, nisi urna congue enim, ac dignissim nulla enim at eros. In tincidunt imperdiet urna nec laoreet. Phasellus in luctus mi. Nam nisl ante, scelerisque vitae augue quis, condimentum varius libero. Nullam posuere nulla ut justo tincidunt molestie. Pellentesque venenatis sed arcu dignissim convallis. Ut mattis quam dolor, nec auctor nisi aliquam ac. Fusce ac ullamcorper nibh, rhoncus bibendum neque. Integer sed tellus facilisis, venenatis augue in, dictum risus. Etiam quis turpis sit amet nulla viverra cursus et at metus. Fusce ultrices, magna et facilisis rutrum, nisl mauris facilisis quam, vitae elementum ipsum dui et massa.","Nulla tellus ipsum, facilisis sed maximus a, iaculis sed ex. Aliquam dictum lacus a nisl ornare faucibus. Aenean sagittis tincidunt ultrices. Phasellus mattis, magna a fringilla ultricies, sapien tortor condimentum lacus, quis mollis neque tortor eget nibh. Donec sodales pulvinar magna vel egestas. Vestibulum ullamcorper magna vel eros bibendum, a luctus massa sollicitudin. Morbi vel lobortis massa. Etiam condimentum felis at erat lacinia, in porta tortor tempus. Nulla diam diam, commodo sed purus sed, vulputate commodo nisl. In hac habitasse platea dictumst. Integer sagittis turpis a imperdiet posuere.","Nam malesuada metus erat. Nunc pellentesque mauris ut hendrerit venenatis. Suspendisse neque quam, semper ut pretium vitae, imperdiet a purus. Maecenas eu mi quis elit lacinia posuere. Ut ut nibh eleifend, egestas tellus at, consequat leo. Cras eget lectus et dui porta pellentesque. Mauris eros mauris, varius vel ipsum vitae, dignissim finibus neque. Nullam vitae eleifend tellus. Fusce euismod at massa ac euismod.","Etiam cursus fringilla tellus, placerat interdum orci mollis sed. Mauris ac ante eu nibh sagittis mollis. Aenean venenatis mauris ut leo convallis, in posuere velit vestibulum. Nunc sed ante nunc. Praesent vulputate malesuada libero in ullamcorper. Nullam venenatis gravida sagittis. Aenean ullamcorper luctus tempus. Fusce non diam arcu. Maecenas at lectus egestas, vehicula lacus id, porttitor nisl. Curabitur feugiat tellus augue, vel posuere lorem pharetra id. Nunc velit velit, sodales ut eros nec, convallis molestie quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.","Morbi efficitur quam a urna lacinia, sed ornare velit porttitor. Praesent eu enim neque. Sed in turpis et nulla lobortis cursus eu non neque. Sed nec justo quis odio mattis vehicula. Donec mauris ipsum, imperdiet non felis in, sagittis ornare sapien. Nullam in felis egestas dolor ullamcorper aliquam. Nullam iaculis tempor purus vel fringilla. Vestibulum tempor dui sit amet purus maximus dictum.","Morbi blandit massa et tempor vestibulum. Proin justo odio, condimentum vel pellentesque quis, semper quis dolor. Pellentesque id velit mollis nisl tincidunt condimentum. Maecenas feugiat mi id nisi rutrum tincidunt. Cras enim enim, venenatis vitae tellus id, dapibus volutpat leo. Aliquam varius massa nec felis congue, a condimentum ex egestas. Morbi vitae tempus leo. Nulla consectetur varius ipsum. Nunc elementum, dolor et feugiat porttitor, odio massa pellentesque est, ut sollicitudin eros urna a risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac luctus tortor. Etiam interdum ligula vitae enim pretium, at mattis nulla porta. Aliquam tempus egestas ex, sed dictum nisi fringilla at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam hendrerit arcu a consectetur.","Duis non imperdiet nunc, nec vehicula diam. Nam vulputate non odio eget tristique. Pellentesque varius commodo erat vitae venenatis. Fusce ullamcorper odio viverra molestie scelerisque. Curabitur nec ornare lorem. Nulla facilisi. Morbi ullamcorper mauris ut luctus volutpat. Fusce vestibulum dui mi, ut laoreet diam sollicitudin suscipit. In sit amet libero et purus viverra rhoncus sed et tortor. Aenean consequat interdum leo, quis gravida odio feugiat vel. Sed sodales ultricies mauris a ultricies. Sed pharetra justo dapibus velit aliquet, eu malesuada nisi dignissim. Maecenas vulputate libero nec neque egestas, sed vehicula lacus posuere. Etiam a libero vitae mauris sodales tincidunt et eget ligula.","Ut imperdiet est urna, eget lacinia ante fringilla vel. Cras dui justo, feugiat vel mattis nec, pulvinar a lectus. Mauris condimentum libero sit amet pharetra dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur finibus sapien id est pretium, non mollis metus lacinia. Proin efficitur ornare magna, eu venenatis risus eleifend nec. Aenean posuere elit lacus.","Integer vestibulum aliquet nulla in pretium. Ut posuere imperdiet lacus et mollis. Suspendisse eu dui turpis. Vivamus quis varius erat. Nullam laoreet purus id nibh iaculis dignissim. Ut a malesuada purus. Nulla facilisi. Vivamus elementum odio sed ullamcorper cursus. Vestibulum euismod tortor lectus, aliquet scelerisque quam posuere eget.","Donec faucibus enim in varius gravida. Vivamus et lorem eleifend, aliquam lectus sed, eleifend urna. Vestibulum non ex non nunc maximus iaculis at nec velit. Fusce pulvinar nulla dolor, nec convallis neque auctor id. Sed vitae est at risus malesuada egestas. Nam vulputate auctor ligula, in posuere est. Nunc accumsan rutrum dui in pharetra. In at efficitur metus. Aliquam venenatis blandit mi, et fermentum dolor tempor sit amet. Nunc non erat nec eros vehicula scelerisque vitae a ligula. Phasellus sed placerat nisl, ac efficitur ligula. Aliquam viverra pulvinar purus vitae tempus. Maecenas vehicula risus sed elit finibus vehicula. Aliquam suscipit, odio at sollicitudin pharetra, augue ligula euismod sapien, eu mattis ligula nisi et magna."];

$(document).ready(function ()
{
	generarPagina();
});
function generarPagina()
{
	insertarDivContenidos();
	procesarTituloPagina();	
	procesarBloques();
}
function procesarBloques()
{
	var bloques = generarBloquesInformacion();
	insertarBloques(bloques);
}
function procesarTituloPagina()
{
	let titulo = devolverTituloPagina();
	$tituloPagina = generarTituloPagina();
	inyectarTituloPagina($tituloPagina);
}
function insertarDivsMaquetacion()
{
	insertarDivContenidos();
}
function insertarDivContenidos(bloques)
{
	contenedor = generarElementoJQuery('<div>', CONTENEDOR_PRINCIPAL);
	inyectarElementoDom($('#divPrincipal')[0], contenedor);
}
function insertarBloques(bloques)
{
	$padre = $('#divContenidos')
	inyectarElementosDom($padre, bloques);
}
function inyectarTituloPagina(tituloPagina)
{
	$padre = $('#divContenidos');
	inyectarElementosDom($padre, tituloPagina);
}
function generarBloquesInformacion(){
	var numBloques = numeroAleatorio(1,MAX_BLOQUES);
	let bloques = [];
	for (i=0;i!=numBloques;i++)
	{	
		var $bloque = generarBloque(i);
		bloques.push($bloque);
	}
	return bloques;
}
function generarBloque(i){
	var $bloque = $('<div>');
	$bloque[0].id = ID_BLOQUE+i; 
	
	let clases = CLASE_BLOQUE;
	insertarEstilos($bloque, clases);

	var $titulo = generarTituloBloque(i);
	inyectarTituloABloque($bloque[0], $titulo[0]);

	var arrayParrafos = generarParrafosBloque(i);
	inyectarParrafosABloque(arrayParrafos, $bloque);
	
	return $bloque;
}
function inyectarTituloABloque($bloque, $titulo)
{
	inyectarElementoDom($bloque, $titulo);
}
function inyectarParrafosABloque(arrayParrafos, $bloque)
{
	for(var i= 0; i<arrayParrafos.length; i++)
	{
		inyectarElementoDom($bloque[0], arrayParrafos[i][0] );
	}
}
function generarParrafosBloque(i)
{
	var numParrafos = numeroAleatorio(1,MAX_PARRAFOS);
	var arrayParrafos = [];
	for (j=0;j!=numParrafos;j++)
	{		
		var textoParrafo = devolverTextoParrafo(); 
		var $parrafo = generarParrafo(i, j, textoParrafo);
		arrayParrafos.push($parrafo);
	}
	return arrayParrafos;
}
function devolverTextoParrafo()
{
	let numParrafo = numeroAleatorio(1,textosParrafos.length);
	return textosParrafos[numParrafo];
}
function devolverTituloBloque()
{
	let numTitulo = numeroAleatorio(1,titulosParrafos.length);
	return titulosParrafos[numTitulo];
}
function devolverTituloPagina()
{
	let numTitulo = numeroAleatorio(1,titulosPagina.length);
	return titulosPagina[numTitulo];
}
function generarParrafo(i, j, texto)
{
	var $parrafo = $('<p>');
	$parrafo[0].id = ID_PARRAFO+i+j;
	$parrafo[0].innerText = texto;
	insertarEstilos($parrafo, CLASE_PARRAFO);
	return $parrafo;
}
function generarTituloPagina()
{
	var $tituloPagina = $('<span>');
	$tituloPagina[0].id = ID_TITULO_PAGINA; 
	var textoTitulo = devolverTituloPagina();
	insertarTitulo($tituloPagina, textoTitulo);
	insertarEstilos($tituloPagina, CLASE_TITULO_PAGINA);
	return $tituloPagina;
}
function generarTituloBloque(i)
{
	var $tituloBloque = $('<span>');
	$tituloBloque[0].id = ID_TITULO_BLOQUE+i; 
	var textoTitulo = devolverTituloBloque();
	insertarTitulo($tituloBloque, textoTitulo);
	insertarEstilos($tituloBloque, CLASE_TITULO_PARRAFO);
	return $tituloBloque;
}
function insertarTitulo($tituloParrafo, texto)
{
	$tituloParrafo[0].innerText = texto;
}
function insertarEstilos($objeto, clase)
{
	$objeto.addClass(clase);
}
function btnTituloPrincipalActivar_onClick()
{
	$('.tituloPrincipalApagado').removeClass('tituloPrincipalApagado').addClass('tituloPrincipal');
}
function btnTituloPrincipalDesactivar_onClick()
{
	$('.tituloPrincipal').removeClass('tituloPrincipal').addClass('tituloPrincipalApagado');
}
function btnTituloParrafoActivar_onClick()
{
	$('.tituloParrafoApagado').removeClass('tituloParrafoApagado').addClass('tituloParrafo');
}
function btnTituloParrafoDesactivar_onClick()
{
	$('.tituloParrafo').removeClass('tituloParrafo').addClass('tituloParrafoApagado');
}
function btnTextoParrafoActivar_onClick()
{
	$('.textoParrafoApagado').removeClass('textoParrafoApagado').addClass('textoParrafo');
}
function btnTextoParrafoDesactivar_onClick()
{
	$('.textoParrafo').removeClass('textoParrafo').addClass('textoParrafoApagado');
}
function btnMarcosDivActivar_onClick()
{
	$('div').removeClass('divApagado').addClass('div');
}
function btnMarcosDivDesactivar_onClick()
{
	$('.div').removeClass('div').addClass('divApagado');
}
function btnMarcosBasicosActivar_onClick()
{
	$('.contenidoSombreadoRedondeado').removeClass('contenidoSombreadoRedondeado').addClass(' contenido sombreado redondeado');
}
function btnMarcosBasicosDesactivar_onClick()
{
	$('.contenido.sombreado.redondeado').removeClass(' contenido sombreado redondeado').addClass('contenidoSombreadoRedondeado');
}