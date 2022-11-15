

function main() {
    
    contenedor = document.getElementById("contPrincipal");
    espacio = document.createElement("div");
    for (var h = 7; h <= 21; h++) {
        crearTabla();

    }
    


}

function crearTabla() {

    ar8=["pilates","pesas","spinning","estiramientos","boxeo","yoga","descanso"];
    var cont=0;
    
    contenedor = document.getElementById("contPrincipal");
    
    tabla = document.createElement("table");
    tabla.border = 1;
    for (var h = 7; h <= 21; h++) {

        if (h % 2 != 0) {
            var tr = document.createElement("tr");
            var dato1=h+":00-"+(h+2)+":00";
           var dato2=ar8[cont];
            
         
            var td1 = document.createElement("td");
            td1.innerHTML=dato1;
            tr.appendChild(td1)

            var td2 = document.createElement("td");
             td2.innerHTML=dato2;
        
           tr.appendChild(td2);
            tabla.appendChild(tr);
            cont++;
        }
    }
    contenedor.appendChild(tabla);


}


    function crearColumna() {
        var columna = document.createElement("tr");
        return columna;
    }
    
    function crearFila(contenido) {
        var fila = document.createElement("td");
        fila.innerHTML(contenido);
        return fila;
    }

