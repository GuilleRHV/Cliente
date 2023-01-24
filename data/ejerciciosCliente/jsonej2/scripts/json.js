var arrayclaseColegios;
//Usare esta variable para saber la posicion de array a modificar
var idmodificar;
//Usare esta variable para manejar la creacion de tabla dinamicas
var contador = 1;
var contadortd= 0;

/********************************************************************************************************* */




function lanzarPeticionAsincrona() {
    console.log("Practica realizada por Guillermo Rodriguez Huguet DAW2");
    //Generamos objeto
    var xhttp = new XMLHttpRequest();
    arrayclaseColegios = new Colegios();
    //Asignamos funcion al evento ready statement
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arrayclaseColegios.arrcolegios = JSON.parse(this.responseText);
            crearTabla(arrayclaseColegios.arrcolegios);
        }
    };
    //Abrimos fichero de forma asincrona
    //xhttp.open("GET","json/libros.json",true);
    xhttp.open("GET", "json/colegio.json");
    //Enviamos solicitud get
    xhttp.send();
}



/***************************************************************************************** */


/*******************CREAR COLEGIO*********************************************** */
function crearcolegio() {
    formulario = document.forms.formulario;
    nombre = formulario.nombre.value;
    direccion = formulario.direccion.value;
    localidad = formulario.localidad.value;
    numeroAlumnos = formulario.numeroAlumnos.value;
    numeroAulas = formulario.numeroAulas.value;

    var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
    arrayclaseColegios.arrcolegios.colegio.push(cole);

    alert("Se ha creado el colegio " + nombre);
    crearTabla(arrayclaseColegios.arrcolegios);

}



//Generador de tabla
function generarTabla() {
    tabla = document.createElement("table");
    tabla.border = 1;
    tabla.className = "table table-primary table-striped";
    tabla.id = "tabla" + contador;
    return tabla;
}

//Generador de columna
function generarColumna(contenidoHtml) {
    var columna = document.createElement("td");
    columna.innerHTML = contenidoHtml;
    return columna;
}

//Generador de fila
function generarFila(identificador){
    var fila = document.createElement("tr");
    fila.id = identificador;
    return fila;
}

function crearTabla(arrayclaseColegios) {

    //Eliminamos tablas anteriores (solo nos mostrara una tabla)
    if (contador > 1) {
        tablaoculta = document.getElementById("tabla" + (contador - 1));
        tablaoculta.style.display = "none";
    }


    //Primera fila (nombre,direccion,localidad,numeroAlumnos,numeroAulas), no son datos
    tabla = generarTabla();
    
    tr = generarFila("fila"+i);

    n = generarColumna("Nombre");
    tr.appendChild(n);

    d = generarColumna("Direccion");
    tr.appendChild(d);

    l = generarColumna("Localidad");
    tr.appendChild(l);

    nal = generarColumna("Numero Alumnos");
    tr.appendChild(nal);

    nau = generarColumna("Numero Aulas");
    tr.appendChild(nau);

    tr.style.fontWeight = "bold";
    tabla.appendChild(tr);



    //Recorremos el array de los colegios (datos) y los metemos en filas y columnas
    for (var i = 0; i < arrayclaseColegios.colegio.length; i++) {

       
         
        tr = generarFila("fila"+i);


        var nombre = arrayclaseColegios.colegio[i].nombre;
        n = generarColumna(nombre);
        tr.appendChild(n);

        var direccion = arrayclaseColegios.colegio[i].direccion;
        d = generarColumna(direccion);
        tr.appendChild(d);

        var localidad = arrayclaseColegios.colegio[i].localidad;;
        l = generarColumna(localidad);
        tr.appendChild(l);

        var numeroAlumnos = arrayclaseColegios.colegio[i].numeroAlumnos;
        nal = generarColumna(numeroAlumnos);
        tr.appendChild(nal);

        var numeroAulas = arrayclaseColegios.colegio[i].numeroAulas;
        nau = generarColumna(numeroAulas);
        tr.appendChild(nau);


        tabla.appendChild(tr);
        cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);


        var boton = document.createElement("button");
        boton.className = "btn btn-outline-warning";
        boton.innerHTML = "Modificar";
        //boton.innerHTML = "Modificar" + i;
        boton.id = "boton" + i;

        boton.onclick = function (boton) {
            //Importante usar el .target.id para saber que id estamos manejando
            modificarcolegio = document.getElementById("modificarcolegio");
            formulariomodificar = document.getElementById("formulariomodificar");
            formulariomodificar.style.display = "block";
            //Sacamos el id del boton (ej: id->"boton1") y lo separamos a partir de la palabra boton
            //Recogemos el split[1] y asi sabemos unicamente cual es la posicion en el array
            separador = boton.target.id.split("boton");
            var iddef = separador[1];
            idmodificar = iddef;
            //El formulario oculto mostrara los datos del colegio que queremos modificar
            formulario = document.forms.formulariomodificar;
            formulario.nombre.value = arrayclaseColegios.colegio[idmodificar].nombre;
            formulario.direccion.value = arrayclaseColegios.colegio[idmodificar].direccion;
            formulario.localidad.value = arrayclaseColegios.colegio[idmodificar].localidad;
            formulario.numeroAlumnos.value = arrayclaseColegios.colegio[idmodificar].numeroAlumnos;
            formulario.numeroAulas.value = arrayclaseColegios.colegio[idmodificar].numeroAulas;
            //Ahora modificaremos esos datos
            modificarcolegio.onclick = function () {
                modificar();
            };
        };
        tr.appendChild(boton);
    }
    document.body.appendChild(tabla);
    contador++;
}




function modificar() {
    formulario = document.forms.formulariomodificar;
    //Cambiamos las propiedades del colegio
    arrayclaseColegios.arrcolegios.colegio[idmodificar].nombre = formulario.nombre.value;
    arrayclaseColegios.arrcolegios.colegio[idmodificar].direccion = formulario.direccion.value;
    arrayclaseColegios.arrcolegios.colegio[idmodificar].localidad = formulario.localidad.value;
    arrayclaseColegios.arrcolegios.colegio[idmodificar].numeroAlumnos = formulario.numeroAlumnos.value;
    arrayclaseColegios.arrcolegios.colegio[idmodificar].numeroAulas = formulario.numeroAulas.value;
    //Modificamos el colegio y volvemos a crear la tabla
    crearTabla(arrayclaseColegios.arrcolegios);

    //Ocultamos de nuevo el formulario de modificar
    formulariomodificar = document.getElementById("formulariomodificar");
    formulariomodificar.style.display = "none";

}