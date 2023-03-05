

function asincronaxml() {
    let xhttp = new XMLHttpRequest();
    console.log("sa");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let varxml = xhttp.responseXML;
            let colegios = varxml.getElementsByTagName('colegio');

            console.log("a");
            for (var i = 0; i < colegios.length; i++) {
                let colegio = varxml.getElementsByTagName('nombre')[i];
                console.log(colegio.innerHTML);
            }


        }
    }


    xhttp.open("GET", "xml/colegio.xml", true);

    xhttp.send();
}



function asincronajson() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            let arrayDatos = JSON.parse(this.responseText);
            console.log(arrayDatos.colegio.length);
            for (let i = 0; i < arrayDatos.colegio.length; i++) {
            let cole = arrayDatos.colegio[i].nombre;
            console.log(cole);
            }

        }
    }

    xhttp.open("GET","json/colegio.json",true);
    xhttp.send();
}





































