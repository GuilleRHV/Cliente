    function arraysDeDatos() {
    var arrayDatos1 = ["uno", "dos", "tres"];
    var arrayDatos2 = ["valorUno2", "valorDos2", "valorTres2"];
    var arrayDatosCompuesto = [arrayDatos1, arrayDatos2];
    var arrayDatosDiferentes = ["cadena 1",32,false,[1,2,3]];

    var posicion = 0;
    var elementos = 2;

    En la posicion 0 eliminar 1 elemento
Eliminar posicion array (0,1) posicion
     var elementoeliminado = arrayDatos1.splice(posicion, elementos);

* indice de un elemento del arrayDatos1
    arrayDatos1.indexOf("dos");

* Añadir elemento a la ultima posicion
    arrayDatos1.push("Elemento a insertar");

* Eliminar primer elemento
    var primerElementoEliminado = arrayDatos1.shift();

* Añadir elemento al principio del array
    arrayDatos2.unshift("Nuevo elemento como primero");

* Eliminar ultimo elemento
    var elementoPop = arrayDatos2.pop();
    
* Recorrer array
    arrayDatos2.forEach(function (elemento, indice, array) {
        console.log(elemento, indice)
        //array[indice]=elemento;
        }
    );

* Copiar array 
    var copiaArray = arrayDatos2.slice();
    
   
* Saber el tipo de dato que tenemos en una variable
    console.log("El tipo de dato de la variable "+arrayDatos2[2]+" es: "+typeof(arrayDatos2[2]));


