function main() {
    //arraysDeDatos();
    cadenas();
}


/*function arraysDeDatos() {
    var arrayDatos1 = ["uno", "dos", "tres"];
    var arrayDatos2 = ["valorUno2", "valorDos2", "valorTres2"];
    var arrayDatosCompuesto = [arrayDatos1, arrayDatos2];
    var arrayDatosDiferentes = ["cadena 1",32,false,[1,2,3]];

    var posicion = 0;
    var elementos = 2;
    //Eliminar posicion array (0,1) posicion
    // var elementoeliminado = arrayDatos1.splice(posicion, elementos);

    //indice de un elemento del arrayDatos1
    arrayDatos1.indexOf("dos");

    //Añadir elemento a la ultima posicion
    arrayDatos1.push("Elemento a insertar");

    //Eliminar primer elemento
    var primerElementoEliminado = arrayDatos1.shift();

    //añadir elemento al principio del array
    arrayDatos2.unshift("Nuevo elemento como primero");

    //Eliminar ultimo elemento
    var elementoPop = arrayDatos2.pop();
    
    //Recorrer array
    arrayDatos2.forEach(function (elemento, indice, array) {
        console.log(elemento, indice)
        }
    );

    //Copiar array 
    
    var copiaArray = arrayDatos2.slice();
    
   
    //Saber el tipo de dato que tenemos en una variable
        console.log("El tipo de dato de la variable "+arrayDatos2[2]+" es: "+typeof(arrayDatos2[2]));

}*/


function cadenas(){
    var cadena1 = "Mi cadena de caracteres";
    var cadena = 'Mi cadena con comilla simple'
    cadena = `Mi cadena con comilla simple 2`;

    //Acceso a un caracter determinado
    'CAD'.charAt(1);
    cadena.charAt(4);
    //Longitud de una cadena
    cadena.length;
    // Para hace busquedas dentro de cadenas usaremos:
    var cadenaABuscar = "comi";
    var indice = 0;
    cadena1.indexOf(cadenaABuscar,indice);

    //Uso de subcadenas, posicion inicial, caracteres
    var posicionInicial=2;
    var caracteres = 8;
     misubcadena = cadena1.substring(posicionInicial, caracteres)
     console.log(misubcadena);
    //division de subcadenas a partir de un elemento divisorio
    var separador = ";";
    var cadena2 = "MiPrimeraCadena;MiSegundaCadena";
    arraySubcadenas = cadena2.split(separador);

}