function main() {


    var filas = ['azul', 'rojo', 'verde', 'amarillo', 'morado'];
    var columnas = ['triángulo', 'cuadrado', 'pentágono', 'heptágono', 'hexágono'];
    var elemento = document.createElement("h3");
    elemento.textContent = "prueba";
    document.write(elemento.innerHTML);
    debugger;
    var tabla = document.createElement("table border=2");
    for (var fil = 0; fil < filas.length; fil++) {

        var hilera = document.createElement("tr");
        document.write(hilera.innerHTML);
        for (var col = 0; col < columnas.length; col++) {
            var celda = document.createElement("td");
            document.write(celda.innerHTML);
            var textocelda = document.createTextNode(columnas[col]);
            celda.appendChild(textocelda);
            hilera.appendChild(celda);
        }

        table.appendChild(hilera);
    }
    document.write(tabla.innerHTML);
    tabla.setAttribute("border", "2");
    document.write(table);


}