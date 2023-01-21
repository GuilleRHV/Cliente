var arrayclaseColegios;
var cambio = false;
var longitudArrayDatos;
var contadorbotones = 0;
var idmodificar;

var nombremodificar;
var direccionmodificar;
var localidadmodificar;
var numeroAlumnosmodificar;
var numeroAulasmodificar;



function lanzarPeticionAsincrona() {


    arrayclaseColegios = new Colegios();
    //Generamos objeto
    var xhttp = new XMLHttpRequest();
    colegios = [];

    //Asignamos funcion al evento ready statement

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arrayDatos = JSON.parse(this.responseText);
            longitudArrayDatos = arrayDatos.colegio.length;

            tabla = document.createElement("table");
            tabla.border = 1;
            tabla.id = "tablainicial";
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


            for (var i = 0; i < arrayDatos.colegio.length; i++) {

                tr = document.createElement("tr");
                tr.id = "fila" + i;

                var nombre = arrayDatos.colegio[i].nombre;
                n = document.createElement("td");
                n.innerHTML = nombre;
                tr.appendChild(n);

                var direccion = arrayDatos.colegio[i].direccion;
                d = document.createElement("td");
                d.innerHTML = direccion;
                tr.appendChild(d);

                var localidad = arrayDatos.colegio[i].localidad;;
                l = document.createElement("td");
                l.innerHTML = localidad;
                tr.appendChild(l);

                var numeroAlumnos = arrayDatos.colegio[i].numeroAlumnos;
                nal = document.createElement("td");
                nal.innerHTML = numeroAlumnos;
                tr.appendChild(nal);

                var numeroAulas = arrayDatos.colegio[i].numeroAulas;
                nau = document.createElement("td");
                nau.innerHTML = numeroAulas;
                tr.appendChild(nau);


                tabla.appendChild(tr);
                cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
                console.log("COLEGIO: " + cole.toString());
                colegios.push(cole);

                arrayclaseColegios.arrcolegios.push(cole);

                arrayclaseColegios.añadir(cole);
                console.log("COLEGIO: " + cole);
                console.log(arrayclaseColegios.arrcolegios + "*****");

                var boton = document.createElement("button");
                boton.innerHTML = "Modificar";
                boton.id = "boton" + i;


                boton.onclick = function (i) {
                    // colegiomod = document.getElementById(arrayclaseColegios.arrcolegios[i]);

                    alert("El nombre es: " + boton.id);
                    formulariooculto = document.getElementById("formulariooculto");
                    formulariooculto.style.display = "block";
                    separador = boton.id.split("boton");
                    var iddef = separador[1];
                    idmodificar=iddef;
                    modificar();
                   // alert(iddef);






                };


                tr.appendChild(boton);


            }


            console.log("nombre: " + nombre);


            document.body.appendChild(tabla);


            console.log("Posiciones array: " + arrayDatos.colegio.length);
            console.log("Posiciones array clase colegios: " + arrayclaseColegios.arrcolegios.length);


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
var contador = 1;

/*******************CREAR COLEGIO*********************************************** */
function enviardatos() {
    formulario = document.forms.formulario;
    nombre = formulario.nombre.value;
    direccion = formulario.direccion.value;
    localidad = formulario.localidad.value;
    numeroAlumnos = formulario.numeroAlumnos.value;
    numeroAulas = formulario.numeroAulas.value;
    //alert("Nombre: " + nombre + ", direccion: " + direccion + ", localidad: " + localidad + ", numeroAlumnos:" + numeroAlumnos + ", numeroAulas:" + numeroAulas);
    var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
    arrayclaseColegios.añadir(cole);


    console.log("Array clase colegios: " + arrayclaseColegios.arrcolegios.length);
    console.log("Array clase array datos: " + longitudArrayDatos);


    //ELIMINAMOS TABLAS REPETIDAS


    if (arrayclaseColegios.arrcolegios.length > longitudArrayDatos) {
        var tablainicial = document.getElementById("tablainicial");
        tablainicial.style.display = "none";

        tablasecundaria = document.createElement("table");
        tablasecundaria.border = 1;
        tablasecundaria.id = "tablasecundaria" + contador;


        if (tablarepetida = document.getElementById("tablasecundaria" + (contador - 1))) {
            tablarepetida.style.display = "none";
        }


        tr = document.createElement("tr");


        n = document.createElement("td");
        n.innerHTML = "nombre secundaria"
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

        nau = document.createElement("td"); alert("El nombre es: " + boton.id);
        direccionmodificar = formulario.direccion.value;
        localidadmodificar = formulario.localidad.value;
        numeroAlumnosmodificar = formulario.numeroAlumnos.value;
        numeroAulasmodificar = formulario.numeroAulas.value;
        tr.style.fontWeight = "bold";
        tablasecundaria.appendChild(tr);

        //FOR

        for (var i = 0; i < arrayclaseColegios.arrcolegios.length; i++) {

            tr = document.createElement("tr");

            var nombre2 = arrayclaseColegios.arrcolegios[i].nombre;
            n = document.createElement("td");
            n.innerHTML = nombre2;
            tr.appendChild(n);

            var direccion2 = arrayclaseColegios.arrcolegios[i].direccion;
            d = document.createElement("td");
            d.innerHTML = direccion2;
            tr.appendChild(d);

            var localidad2 = arrayclaseColegios.arrcolegios[i].localidad;;
            l = document.createElement("td");
            l.innerHTML = localidad2;
            tr.appendChild(l);

            var numeroAlumnos2 = arrayclaseColegios.arrcolegios[i].numeroAlumnos;
            nal = document.createElement("td");
            nal.innerHTML = numeroAlumnos2;
            tr.appendChild(nal);

            var numeroAulas2 = arrayclaseColegios.arrcolegios[i].numeroAulas;
            nau = document.createElement("td");
            nau.innerHTML = numeroAulas2;
            tr.appendChild(nau);



            var boton = document.createElement("button");
            boton.innerHTML = "Modificar";
            boton.id = "boton"


            boton.addEventListener("click", function () {
                alert("El nombre es: " + nombremodificar);
                formulariooculto = document.getElementById("formulariooculto");
                formulariooculto.style.display = "block";

                formulario = document.forms.formulariooculto;
                direccionmodificar = formulario.direccion.value;
                localidadmodificar = formulario.localidad.value;
                numeroAlumnosmodificar = formulario.numeroAlumnos.value;
                numeroAulasmodificar = formulario.numeroAulas.value;

            });
            tr.appendChild(boton);

            tablasecundaria.appendChild(tr);


        }
        document.body.appendChild(tablasecundaria);
        contador++;

        console.log(contador);



    }





}

function modificar() {
    // arrayclaseColegios.arrcolegios.nombre = 
    formulario = document.forms.formulariooculto;
    alert("DIRE mod: "+arrayclaseColegios.arrcolegios[idmodificar].direccion);
    arrayclaseColegios.arrcolegios[idmodificar].direccion = formulario.direccion.value;
    arrayclaseColegios.arrcolegios[idmodificar].localidad = formulario.localidad.value;
    arrayclaseColegios.arrcolegios[idmodificar].numeroAlumnos = formulario.numeroAlumnos.value;
    arrayclaseColegios.arrcolegios[idmodificar].numeroAulas = formulario.numeroAulas.value;
    alert("a");

}