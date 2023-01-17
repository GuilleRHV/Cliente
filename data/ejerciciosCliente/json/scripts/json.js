var arrayclaseColegios; 
function lanzarPeticionAsincrona() {
     arrayclaseColegios = new Colegios();
    //Generamos objeto
    var xhttp = new XMLHttpRequest();
    colegios = [];

    //Asignamos funcion al evento ready statement

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var arrayDatos = JSON.parse(this.responseText);

            tabla = document.createElement("table");
            tabla.border = 1;



            tr = document.createElement("tr");


            n = document.createElement("td");
            n.innerHTML = "nombre"
            tr.appendChild(n);

            d = document.createElement("td");
            d.innerHTML = "direccion"
            tr.appendChild(d);

            l = document.createElement("td");
            l.innerHTML = "localidad"; 
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

                colegios.push(cole);

                arrayclaseColegios.añadir(cole);
                //arrayclaseColegios = new Colegios(colegios);
                console.log("A");
               // console.log(nombre + " " + direccion + " " + localidad + " " + numeroAlumnos + " " + numeroAulas);

                //for(i = 0; i<arrayclaseColegios.length;i++){
                    console.log(cole);
                    console.log(arrayclaseColegios.arrcolegios+"*****");
                  
                 //   }

            }



            















            






            console.log("nombre: " + nombre);


            document.body.appendChild(tabla);

        }
    };



    //Abrimos fichero de forma asincrona
    //xhttp.open("GET","json/libros.json",true);
    xhttp.open("GET", "json/colegio.json");
    //Enviamos solicitud get
    xhttp.send();
}




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
        // return "Nombre: " + this.nombre + ", direccion: " + this.direccion + ", localidad: " + this.localidad + ", numeroAlumnos: " + this.numeroAlumnos + ", numeroAulas: " + this.numeroAulas + "<br>";
    }
}


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

function enviardatos() {
    formulario = document.forms.formulario;
    nombre = formulario.nombre.value;
    direccion = formulario.direccion.value;
    localidad = formulario.localidad.value;
    numeroAlumnos = formulario.numeroAlumnos.value;
    numeroAulas = formulario.numeroAulas.value;
    alert("Nombre: " + nombre + ", direccion: " + direccion + ", localidad: " + localidad + ", numeroAlumnos:" + numeroAlumnos + ", numeroAulas:" + numeroAulas);
    var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
    arrayclaseColegios.añadir(cole);

}