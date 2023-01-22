var arrayclaseColegios;
//Usare esta variable para saber la posicion de array a modificar
var idmodificar;
//Usare esta variable para manejar la creacion de tabla dinamicas
var contador = 1;


//**********************************CLASE COLEGIO******************************
class Colegio {
    nombre = "";
    direccion = "";
    localidad = "";
    numeroAlumnos = "";
    numeroAulas = "";
    constructor(nombre, direccion, localidad, numeroAlumnos, numeroAulas) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.numeroAlumnos = numeroAlumnos;
        this.numeroAulas = numeroAulas;
    }
}

/********************************************************************************************* */


//*******************************************CLASE COLEGIOS*********************************************** */
class Colegios {
    arrcolegios = [];

}
/********************************************************************************************************* */
function lanzarPeticionAsincrona() {
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
    console.log("Array clase colegios: " + arrayclaseColegios.arrcolegios.length);
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


function crearTabla(arrayclaseColegios) {

    //Eliminamos tablas anteriores (solo nos mostrara una tabla)
    if (contador > 1) {
        tablaoculta = document.getElementById("tabla" + (contador - 1));
        tablaoculta.style.display = "none";
    }


    //Primera fila (nombre,direccion,localidad,numeroAlumnos,numeroAulas), no son datos
    tabla = document.createElement("table");
    tabla.border = 1;
    tabla.className = "table table-primary table-striped";
    tabla.id = "tabla" + contador;
    tr = document.createElement("tr");
    tr.id = "fila" + i;

    n = document.createElement("td");
    n.innerHTML = "Nombre"
    tr.appendChild(n);

    d = document.createElement("td");
    d.innerHTML = "Direccion"
    tr.appendChild(d);

    l = document.createElement("td");
    l.innerHTML = "Localidad";
    tr.appendChild(l);

    nal = document.createElement("td");
    nal.innerHTML = "Numero Alumnos";
    tr.appendChild(nal);

    nau = document.createElement("td");
    nau.innerHTML = "Numero Aulas";
    tr.appendChild(nau);

    tr.style.fontWeight = "bold";
    tabla.appendChild(tr);



    //Recorremos el array de los colegios (datos) y los metemos en filas y columnas
    for (var i = 0; i < arrayclaseColegios.colegio.length; i++) {

        tr = document.createElement("tr");
        tr.id = "fila" + i;


        var nombre = arrayclaseColegios.colegio[i].nombre;
        n = document.createElement("td");
        n.innerHTML = nombre;
        console.log("Nombre: " + nombre);
        tr.appendChild(n);

        var direccion = arrayclaseColegios.colegio[i].direccion;
        d = document.createElement("td");
        d.innerHTML = direccion;
        tr.appendChild(d);

        var localidad = arrayclaseColegios.colegio[i].localidad;;
        l = document.createElement("td");
        l.innerHTML = localidad;
        tr.appendChild(l);

        var numeroAlumnos = arrayclaseColegios.colegio[i].numeroAlumnos;
        nal = document.createElement("td");
        nal.innerHTML = numeroAlumnos;
        tr.appendChild(nal);

        var numeroAulas = arrayclaseColegios.colegio[i].numeroAulas;
        nau = document.createElement("td");
        nau.innerHTML = numeroAulas;
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
            console.log("EL id es " + iddef)
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