function lanzarPeticionAsincrona(){
    //Generamos objeto
    var xhttp = new XMLHttpRequest();
    colegios=[];
    //Asignamos funcion al evento ready statement
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
             var arrayDatos = JSON.parse(this.responseText);
           
            /* for (var i = 0; i<arrayDatos.colegio.length;i++){
        
                console.log(arrayDatos.colegio[i].nombre);
              
            }*/


            
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

                var nombre = arrayDatos.colegio[i].nombre;
                n = document.createElement("td");
                n.innerHTML = nombre;
                tr.appendChild(n);

                var direccion =arrayDatos.colegio[i].direccion;
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
                var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
                colegios.push(cole);

                console.log(nombre+" "+direccion+" "+localidad+" "+numeroAlumnos+" "+numeroAulas);

            }

            
            console.log("nombre: " + nombre);


            document.body.appendChild(tabla);

        }
};



//Abrimos fichero de forma asincrona
//xhttp.open("GET","json/libros.json",true);
xhttp.open("GET","json/colegio.json");
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
    colegios ="";
    constructor(colegios) {
        this.colegios = colegios;
       
    }
    toString() {
       // return "Nombre: " + this.nombre + ", direccion: " + this.direccion + ", localidad: " + this.localidad + ", numeroAlumnos: " + this.numeroAlumnos + ", numeroAulas: " + this.numeroAulas + "<br>";
    }
}