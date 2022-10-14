# DOM
	Document object model:
	Es una representacion estructurada de un documento xml/html generado    automaticamente
	por el navegador. Nos va a permitir acceder y modificar elementos de una
	pagina web, que esta formado por objetos que son elementos html y contendran
	propiedades y metodos.

Las propiedades representyaran valores que seran obtenibles o modificables
y los metodos representaran una accion a realizar dentro del ambnito del DOM
como por ejemplo recuperar un objeto.

El DOM es representadeo como un arbol de objetos en los que cada objeto es un nodo

que tiene ademas una serie de dependencias por arriba y por abajo en la jerarquia.
Estas dependencias vendran representadas padre-hijo y dichos nodos van a poder ser accedidos, recorridos, creados o eliminados
Alguno de los nodos mas habituales seran los siguientes:
    * DOCUMENT: Será el nodo raiz.
    * Elements: Que son etiquetas HTML, puede contener atributos y tambien podran tener nodos hijos y nodos hermanos.
    * Attr: Es un tipo de nodo que almacena una pareja de atributos valores.
    * Text: Será el nodo que contiene el texto de una etiqueta HTML.
    * Coments: Será el nodo que contiene los comentarios de la página.

