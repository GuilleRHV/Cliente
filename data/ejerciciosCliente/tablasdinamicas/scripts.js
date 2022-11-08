

const PX1_SOLID_RED = '1px solid red';
var filaColores = ['azul', 'rojo', 'verde', 'amarillo', 'morado'];
var columnaFiguras = ['triángulo', 'cuadrado', 'pentágono', 'heptágono', 'hexágono'];

function btnGeneraTabla_click() {
    var nombreTabla = "tblDinamica";
    var padre = "divPrincipal";
    generarTablaDinamica(nombreTabla, padre);
    pintarBordesTabla(nombreTabla);
}

function generarTablaDinamica(identificador, padre) {
    var contenedor = document.getElementById(padre);
    var tabla = generarTabla(identificador);
    for (var i = 0; i < filaColores.length; i++) {
        var fila = generarFila("fil" + i);
        for (var j = 0; j < columnaFiguras.length; j++) {
            var columna = generarColumna("col" + i + j, columnaFiguras[j] + " " + filaColores[i]);
            insertarHijo(fila, columna);
        }
        insertarHijo(tabla, fila);
    }
    insertarHijo(contenedor, tabla);
}

function insertarHijo(padre, hijo) {
    padre.appendChild(hijo);
}

function generarTabla(identificador) {
    tabla = document.createElement("table");
    tabla.id = identificador;
    return tabla;
}

function generarColumna(identificador, contenidoHtml) {
    var columna = document.createElement("td");
    columna.id = identificador;
    columna.innerHTML = contenidoHtml;
    return columna;
}

function generarFila(identificador){
    var fila = document.createElement("tr");
    fila.id = identificador;
    return fila;
}

function pintarBordesTabla(identificador) {
    var tabla = document.getElementById(identificador);
    tabla.border = 1;
    tabla.style.border = PX1_SOLID_RED;
}