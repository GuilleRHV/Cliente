function main() {


    var filas = ['azul', 'rojo', 'verde', 'amarillo', 'morado'];
    var columnas = ['triángulo', 'cuadrado', 'pentágono', 'heptágono', 'hexágono'];

    document.createElement("table");
    for (var fil = 0; fil < filas.length; fil++) {

        var hilera = document.createElement("tr");
        
        for (var col = 0; col < columnas.length; col++) {
            var celda = document.createElement("td");
            var textocelda = document.createTextNode(columnas[col]);
            celda.appendChild(textocelda);
            hilera.appendChild(celda);
        }
        debugger;
     table.appendChild(hilera);   
    }
    table.setAttribute("border","2");
    document.write(table);
    
    
}