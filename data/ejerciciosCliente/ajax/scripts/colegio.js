function lanzarPeticionAsincrona(){
    //Generamos objeto
        var xhttp = new XMLHttpRequest();
        //Asignamos funcion al evento readystate
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status==200){
                document.getElementById("contenedor").innerHTML = this.responseText;
                var varxml = this.responseXML;
                var colegio = varxml.getElementsByTagName("colegio");
                var arrayColegios[];
                for(var i=0; i<colegio.length; i++){
                    var nombre = varxml.getElementsByTagName("nombre")[i].innerHTML;
                    console.log(nombre);
                    arrayColegios[i]=varxml.getElementsByTagName("nombre")[i];
                }
                
                console.log("Hay "+colegio.length+ " colegios");
                console.log("nombre: "+nombre);
            }
        };
    
        //Abrimos fichero de forma asincrona
        xhttp.open("GET", "xml/colegio.xml",true);
        
        //Enviamos solicitud GET
        xhttp.send();
       
    }