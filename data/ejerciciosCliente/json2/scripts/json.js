var arrayclaseColegios;
var cambio = false;
var longitudArrayDatos;
var contadorbotones = 0;
var idmodificar = 99;
var contador = 1;
var botonselection;


var nombremodificar;
var direccionmodificar;
var localidadmodificar;
var numeroAlumnosmodificar;
var numeroAulasmodificar;
var arraycolegios;


function lanzarPeticionAsincrona() {



    //Generamos objeto
    var xhttp = new XMLHttpRequest();


    arrayclaseColegios = new Colegios();
    colegios = [];

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
    toString() {
        return "Nombre: " + this.nombre + ", direccion: " + this.direccion + ", localidad: " + this.localidad + ", numeroAlumnos: " + this.numeroAlumnos + ", numeroAulas: " + this.numeroAulas + "<br>";
    }
}

/********************************************************************************************* */


//*******************************************CLASE COLEGIOS*********************************************** */
class Colegios {
    arrcolegios = [];

    //El constructor añadira arrays al arrcolegios

    añadir(cole) {

        this.arrcolegios.push(cole);
    }
    /*toString() {
        // return "Nombre: " + this.nombre + ", direccion: " + this.direccion + ", localidad: " + this.localidad + ", numeroAlumnos: " + this.numeroAlumnos + ", numeroAulas: " + this.numeroAulas + "<br>";
    }*/
}
/***************************************************************************************** */


/*******************CREAR COLEGIO*********************************************** */
function enviardatos() {
    console.log("Array clase colegios: " + arrayclaseColegios.arrcolegios.length);
    formulario = document.forms.formulario;
    nombre = formulario.nombre.value;
    direccion = formulario.direccion.value;
    localidad = formulario.localidad.value;
    numeroAlumnos = formulario.numeroAlumnos.value;
    numeroAulas = formulario.numeroAulas.value;

    var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
    arrayclaseColegios.arrcolegios.colegio.push(cole);


    console.log("Array clase colegios: " + arrayclaseColegios.arrcolegios.length);
    console.log("Array clase array datos: " + longitudArrayDatos);


    alert("crewando");
    crearTabla(arrayclaseColegios.arrcolegios);











}

/*var boton = document.getElementById("modificarcolegio");
boton.onclick = function(){
    alert("Aaaa");
}*/
function modificar(oa) {
    // arrayclaseColegios.arrcolegios.nombre = 
    formulario = document.forms.formulariooculto;
    alert(oa);
    /* alert("DIRE mod: " + arrayclaseColegios.arrcolegios.colegio[idmodificar].direccion);
     arrayclaseColegios.arrcolegios.colegio[idmodificar].direccion = formulario.direccion.value;
     arrayclaseColegios.arrcolegios.colegio[idmodificar].localidad = formulario.localidad.value;
     arrayclaseColegios.arrcolegios.colegio[idmodificar].numeroAlumnos = formulario.numeroAlumnos.value;
     arrayclaseColegios.arrcolegios.colegio[idmodificar].numeroAulas = formulario.numeroAulas.value;
     */
    //var boton = documment.getElementById("modificarcolegio");


}


function crearTabla(arrayclaseColegios) {


    if (contador > 1) {
        tablaoculta = document.getElementById("tabla" + (contador - 1));
        tablaoculta.style.display = "none";
    }



    tabla = document.createElement("table");
    tabla.border = 1;
    tabla.className="table table-success table-striped";
    tabla.id = "tabla" + contador;
    tr = document.createElement("tr");
    tr.id = "fila" + i;

    n = document.createElement("td");
    n.innerHTML = "nombre"
    tr.appendChild(n);

    d = document.createElement("td");
    d.innerHTML = "direccion"
    tr.appendChild(d);

    l = document.createElement("td");
    l.innerHTML = "localidad";
    tr.appendChild(l);

    nal = document.createElement("td");
    nal.innerHTML = "numero Alumnos";
    tr.appendChild(nal);

    nau = document.createElement("td");
    nau.innerHTML = "numero Aulas";
    tr.appendChild(nau);

    tr.style.fontWeight = "bold";
    tabla.appendChild(tr);

    //console.log("Longitud arrayclaseColegios: "+arrayclaseColegios.colegio.length);


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
        boton.className="btn btn-warning";
        boton.innerHTML = "Modificar" + i;
        boton.id = "boton" + i;

        boton.onclick = function (boton) {

            console.log("boton: " + boton.target.id);


            //
            modificarcolegio = document.getElementById("modificarcolegio");

            //

            formulariooculto = document.getElementById("formulariooculto");
            formulariooculto.style.display = "block";
            separador = boton.target.id.split("boton");
            var iddef = separador[1];
            console.log("EL id es " + iddef)
            idmodificar = iddef;


            modificarcolegio.onclick = function () {


                formulario = document.forms.formulariooculto;
                alert("EL BOTON ES "+idmodificar);
         
                alert("EL BOTON ES "+arrayclaseColegios);

                alert("DIRE mod: " + arrayclaseColegios.colegio[idmodificar].direccion);
                arrayclaseColegios.colegio[idmodificar].direccion = formulario.direccion.value;
                arrayclaseColegios.colegio[idmodificar].localidad = formulario.localidad.value;
                arrayclaseColegios.colegio[idmodificar].numeroAlumnos = formulario.numeroAlumnos.value;
                arrayclaseColegios.colegio[idmodificar].numeroAulas = formulario.numeroAulas.value;
                crearTabla(arrayclaseColegios);
            };

            // alert(iddef);
        };


        tr.appendChild(boton);


    }


    console.log("nombre: " + nombre);


    document.body.appendChild(tabla);

    arraycolegios = arrayclaseColegios.colegio;
    //console.log("Posiciones arrayclaseColegios: " + arrayclaseColegios.arrcolegios.length);
    //console.log("Posiciones arrayclaseColegios clase colegios: " + arrayclaseColegios.arrcolegios.length);
    contador++;

}