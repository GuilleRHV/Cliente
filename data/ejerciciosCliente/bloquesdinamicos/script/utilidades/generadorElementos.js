const PREFIJO_TEXTO = "txt";

function generarFilaRegistro(idRegistro, idTr)
{
	var trAux = document.createElement("tr");
	trAux.id = "tr" + idRegistro;
	return trAux; 
}
function generarElementRegistro(padre, valor)
{
	var td = document.createElement("td");
	td.innerHTML = valor; 
	padre.appendChild(td);
}
function generarElementInput(padre, valor, id)
{
	var input = document.createElement("input");
	input.type = "text";
	input.id = id;
	input.value = valor;
	padre.appendChild(input);
}
function generarElementoJQuery(tipo, id)
{
	var $elemento = $(tipo);
	$elemento[0].id = id 
	return $elemento[0];
}

function generarElementoJQuery2(tipo, id)
{
	var $elemento = $(tipo);
	$elemento[0].id = id 
	return $elemento;
}
function inyectarElementoDom(padre, hijo)
{
	padre.appendChild(hijo);
}
function inyectarElementosDom(padre, hijos)
{
	padre.append(hijos);
}
function numeroAleatorio(min, max) 
{
	return Math.round(Math.random() * (max - min) + min);
}