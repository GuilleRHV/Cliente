class Colegio{
    nombre="";
    direccion="";
    localidad="";
    numeroAlumnos="";
    numeroAulas="";
    constructor(nombre,direccion,localidad,numeroAlumnos,numeroAulas){
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.numeroAlumnos = numeroAlumnos;
        this.numeroAulas = numeroAulas;
    }
     toString(){
        return "Nombre: " + this.nombre + ", direccion: " + this.direccion+ ", localidad: " + this.localidad + ", numeroAlumnos: " +this.numeroAlumnos+", numeroAulas: " +this.numeroAulas+"<br>";
    }
}


function lanzarPeticionAsincrona(){
    //Generamos objeto
        var xhttp = new XMLHttpRequest();
         colegios=[];
        //Asignamos funcion al evento readystate
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status==200){
                document.getElementById("contenedor").innerHTML = this.responseText;
                var varxml = this.responseXML;
                var colegio = varxml.getElementsByTagName("colegio");
                
                for(var i=0; i<colegio.length; i++){
                    var nombre = varxml.getElementsByTagName("nombre")[i].innerHTML;
                    var direccion = varxml.getElementsByTagName("direccion")[i].innerHTML;
                    var localidad = varxml.getElementsByTagName("localidad")[i].innerHTML;
                    var numeroAlumnos = varxml.getElementsByTagName("numeroAlumnos")[i].innerHTML;
                    var numeroAulas = varxml.getElementsByTagName("numeroAulas")[i].innerHTML;

                    var cole = new Colegio(nombre, direccion, localidad, numeroAlumnos, numeroAulas);
                    colegios.push(cole);

                    console.log(nombre);
            
                }
                
                console.log("Hay "+colegio.length+ " colegios");
                console.log("nombre: "+nombre);



             document.write("<h2>Clase Colegio</h2>");
             for(var i=0; i<colegios.length; i++){
                document.write(colegios[i].toString());
             }
            }
        };
    
        //Abrimos fichero de forma asincrona
        xhttp.open("GET", "xml/colegio.xml",true);
        
        //Enviamos solicitud GET
        xhttp.send();
       
    }