# DOM
	Document object model:
	Es una representacion estructurada de un documento xml/html generado    automaticamente
	por el navegador. Nos va a permitir acceder y modificar elementos de una
	pagina web, que esta formado por objetos que son elementos html y contendran
	propiedades y metodos.

Las propiedades representarán valores que serán obtenibles o modificables
y los metodos representaran una accion a realizar dentro del ambito del DOM
como por ejemplo recuperar un objeto.

El DOM es representado como un arbol de objetos en los que cada objeto es un nodo
que tiene ademas una serie de dependencias por arriba y por abajo en la jerarquia.
Estas dependencias vendran representadas padre-hijo y dichos nodos van a poder ser accedidos, recorridos, creados o eliminados.
## Tipos de nodos generales
Alguno de los nodos mas habituales seran los siguientes:
* DOCUMENT: Será el nodo raiz.
* Elements: Que son etiquetas HTML, puede contener atributos y tambien podran tener nodos hijos y nodos hermanos.
* Attr: Es un tipo de nodo que almacena una pareja de atributos valores.
* Text: Será el nodo que contiene el texto de una etiqueta HTML.
* Coments: Será el nodo que contiene los comentarios de la página.

## Acceso a los nodos
Solo será posible acceder a estos cuando el arbol del DOM haya sido construido completamente.
El acceso a los elementos va a ser jerarquico, descendiendo desde el nodo raiz y obteniendo una coleccion dinamica
que se adapta a los cambios del DOM.
* document.getElementById("id");
    Nos va a devolber el elemento que tenga ese id
    <p id="parrafo1">Texto</p>
* document.gotElementsByClassName("clase");
    <div class="contenedor"></div>

* document.getElementsByName("name");

* document.getElementsByTagName("name");
    

realizar una funcion division que calcule el resultado dividendo/divisor donde ambos seran pedidos por pantalla, en caso de que el divisor==0 
se mostrara un mensaje alertando que no es posible hacer la division por 0 sino mostrara el resultado. Utiliza este condicional:
    condicion?resultadotrue:resultadofalse
