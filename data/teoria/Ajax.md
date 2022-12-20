# JavaScript Asincrono
Termino ajax: Proviene de JS Asincrono y Xml
Este termino describe como utilizar varias tecnologias:
* HTML
* CSS
* XML
* JS
Para modificar el dom e inyectarle datos obtenidos a partir de XML y Json
Vamos a ver como usar el objeto XMLHttpReques para el uso de aplicaciones asincronas. 
Ventajas de AJAX:
1. Permite solicitar informacion al servidor despues de que la pagina haya sido cargada.
2. Permite recibir informacion del servidor despues de que la pagina haya sido cargada.
3. Nos permite enviar informacion al servidor en procesos en 2do plano mientras que el usuario usa la aplicacion.
4. Pe3rmite actualizar la pagina web sin tener que hacer una recarga asincrona de toda la pagina.

Formas de ejecucion de peticiones ajax:
1. Se lanza un evento que dispara todo el proceso (ej: pulsar un boton)
2. Se genera un objeto de tipo XMLHttpReques desde nuestro codigo Js
3. Este objeto envia una solicitud al servidor web.
4. La peticion es procesada 
5. El servidor nos va a devolver una respuesta a la pagina web
6. La respuesta es leida por Js
7. Se modifica el DOM acorde a la respuesta recibida


##Objeto XMLHttpReques
Este objeto js es un modelo estandar www y dicho objeto es usado para gestionar operaciones asincronas
Metodos:
* __new()__ : Genera el objeto xmlhttprequest
    var peticion = new XMLHTTPRequest();
* __open()__ : Nos va a especificar la peticion a API
    open(method,url, usuario,pass)
    method GET o POST
    url: localizacion del fichero que vamos a acceder
    asyn: true
    sync: false
    usuario y contraseña: 

* __send()__: envia la peticion al servidor que dependiendo la configuracion del metodo open sera pasada por POST o GET.

###Propiedades importantes del objeto XMLHttpRequest
* onreadystatechange: Nos va a definir la funcion que es llamada ("callback") 
* readystate: El estado de disponible.

