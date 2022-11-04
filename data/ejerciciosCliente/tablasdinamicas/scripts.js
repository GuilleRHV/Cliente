function main() {


    var filas = ['azul', 'rojo', 'verde', 'amarillo', 'morado'];
    var columnas = ['triángulo', 'cuadrado', 'pentágono', 'heptágono', 'hexágono'];
    var elemento = document.createElement("h3");
    elemento.textContent = "prueba";
    document.write(elemento.innerHTML);
    
    
    
    debugger;
    var tabla = document.createElement("table");
    for (var i = 0; i < filas.length; i++) {

        var fila = document.createElement("tr");
        //document.write(fila.innerHTML);
        for (var j = 0; j < columnas.length; j++) {
            var columna = document.createElement("td");
            //document.write(columna.innerHTML);
            var textocolumna = document.createTextNode(columnas[j]);
            columna.appendChild(textocolumna);
            fila.appendChild(columna);
        }

        tabla.appendChild(fila);
    }
    //document.write(tabla.innerHTML);
    //tabla.setAttribute("border", "2");
    
    debugger;
    var contenedor = document.getElementById("divPrincipal");
    contenedor.appendChild(tabla);

}