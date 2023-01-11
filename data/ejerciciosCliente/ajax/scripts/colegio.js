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


function lanzarPeticionAsincrona() {
    //Generamos objeto
    var xhttp = new XMLHttpRequest();
    colegios = [];
    //Asignamos funcion al evento readystate
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedor").innerHTML = this.responseText;
            var varxml = this.responseXML;
            var colegio = varxml.getElementsByTagName("colegio");


            ;
            tabla = document.createElement("table");
            tabla.border = 1;



            tr = document.createElement("tr");


            n = document.createElement("td");
            n.innerHTML = "colegio"
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


            for (var i = 0; i < colegio.length; i++) {

                tr = document.createElement("tr");

                var nombre = varxml.getElementsByTagName("nombre")[i].innerHTML;
                n = document.createElement("td");
                n.innerHTML = nombre;
                tr.appendChild(n);

                var direccion = varxml.getElementsByTagName("direccion")[i].innerHTML;
                d = document.createElement("td");
                d.innerHTML = direccion;
                tr.appendChild(d);

                var localidad = varxml.getElementsByTagName("localidad")[i].innerHTML;
                l = document.createElement("td");
                l.innerHTML = localidad;
                tr.appendChild(l);

                var numeroAlumnos = varxml.getElementsByTagName("numeroAlumnos")[i].innerHTML;
                nal = document.createElement("td");
                nal.innerHTML = numeroAlumnos;
                tr.appendChild(nal);

                var numeroAulas = varxml.getElementsByTagName("numeroAulas")[i].innerHTML;
                nau = document.createElement("td");
                nau.innerHTML = numeroAulas;
                tr.appendChild(nau);


                tabla.appendChild(tr);
                var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
                colegios.push(cole);

                console.log(nombre);

            }

            console.log("Hay " + colegio.length + " colegios");
            console.log("nombre: " + nombre);


            document.body.appendChild(tabla);


            /* document.write("<h2>Clase Colegio</h2>");
              for(var i=0; i<colegios.length; i++){
                 document.write(colegios[i].toString());
              }
 
              */
        }
    };

    //Abrimos fichero de forma asincrona
    xhttp.open("GET", "xml/colegio.xml", true);

    //Enviamos solicitud GET
    xhttp.send();

}