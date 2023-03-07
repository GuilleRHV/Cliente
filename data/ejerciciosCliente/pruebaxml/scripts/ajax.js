function asincronaxml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var xml = this.responseXML;
            var colegios = xml.getElementsByTagName("colegio");
            for (var i = 0; i < colegios.length; i++) {
                console.log(xml.getElementsByTagName("nombre")[i].innerHTML);
            }
        }
    }
    xhttp.open("GET","xml/colegio.xml",true);
    xhttp.send();

}



function asincronajson(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4 && xhttp.status==200){
            var arrayDatos = JSON.parse(this.responseText);
            for(var i=0;i<arrayDatos.colegio.length;i++){
                console.log(arrayDatos.colegio[i].nombre);
            }
        }
    }
    xhttp.open("GET","json/colegio.json",true);
    xhttp.send();
}







