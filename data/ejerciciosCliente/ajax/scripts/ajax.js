function lanzarPeticionAsincrona(){
//Generamos objeto
    var xhttp = new XMLHttpRequest();
    //Asignamos funcion al evento readystate
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            document.getElementById("contenedor").innerHTML = this.responseText;
            var varxml = this.responseXML;
            var noticia = varxml.getElementsByTagName("noticia");
            for(var i=0; i<noticia.length; i++){
                var titulos = varxml.getElementsByTagName("titulo")[i].innerHTML;
                console.log(titulos);
            }
            
            console.log("Hay "+noticia.length+ " noticias");
            console.log("Titulos: "+titulos);
        }
    };

    //Abrimos fichero de forma asincrona
    xhttp.open("GET", "xml/noticias.xml",true);
    
    //Enviamos solicitud GET
    xhttp.send();
   
}