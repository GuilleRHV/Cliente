# TEMA 5

##iQUERY
Tiene el objetivo de ser rapida en el acceso y modificacion de los metodos html
JQuery nos va a permitir desde la animacion de componentes hasta el manejo de eventos o al accesso y manipulacion de hojas de estilo.
Otra de las caracteristivcas que ha echo iquery un estandar es que evita tener que programar sobre navegadores. 
Va a ser el mismo framework el que se va a encargar de utilizar los archivos html y css
De forma que js va a gestionar esto en una capa de abstracción más baja a la capa de interfaz de usuario, de cara al usuario esta será transparente.
iquery es además una tecnologia de licencia abierta para ser usado en cualquier plataforma, de forma propia o comercial.
Como iquery es una libreria js corriente, a la hora de utilizarse la invocaremos como cualquier fichero js de forma que estará referenciada desde nuestro fichero html, a la hora de usar las lbrerias podremos apuntar a librerias locales a nuestra maquina o podremos usar librerias colgadas en intenet, por ejemplo la referencias a los servidores oficiales, que serán descargados por nuestros clientes (guardados en cache y podremos utilizarlo)


 __Funcion $__->Esta funcion podremos determinarla como la funcion jquery que va a ser la encargada de ejecutar las funcionalidades de la api. La funcion $ es una funcion fuertemente sobrecargada, lo que significa que permitira realizar diferentes operaciones dependiendo de los elementos pasados. Los mas comun es pasar una cadena que representara un selector, a partir de ese selector yquery cvreara un objeto
El selector nos va a determinar el elemento que vamos a acceder dentro del DOM,
Cuando accedemos al selector con # accedemos con identificadores


En la invocacion de la funcion jquery tendremos un argumento llamado contexto al que llamaremos callback que va a ser la que permita ejecutar codigo cuando finalice la funcion

* __css__ -> Modifica el estido del elemento


* __append()__-> Añadir elementos. Esta funcion va a insertar el contenido sobre el ultimo hijo del elemento en la coleccion. El tipo de eleemnto que podremos pasar como argumento podra ser una cadena de texto html, un texto o un array de objetos jquery. 
Por contra se queremos meterlo al principio tenemos la funcion __prepend()__ 

* __html()__->devolvera el contenido html el primer elemento del array elementos que devuelva la expresion, __en caso de llevar un argumento va a sustituir el contenido original por el contenido pasado en la cadena__


* __text()__ ->Obtendra una cadena de texto formada por todos los elementos de tipo texto de los hijos del elemento llamado, si le pasamos un argumento va a asignar la cadena al elemento referenciado.

# Examen 8 marzo
## Ejercicio
Ejercicio generar un html: de forma dinamica usando solo jquery 
1. El div principal (parrafo titulo y botones de control) seguiran siendo elementos estaticos dentro de la pagina
2. Los bloques de informacion van a ser generados de forma aleatoria ayudandose de la funcion __mathrandom()__ de forma que el numero de bloques sea aleatorio,
3.  dentro de estos el parrafo de titulo de bloque será fijo. y el resto aleatorios tambien
4. La generacion de elementos y propiedades debe ser hecha de forma dinamica con jquery





# Manejo de eventos jquery

Al igual que js, en jquery vamos a poder modificar los eventos asociados a los elementos

Funciones:
* one() -> Nos va a permitir asignar una funcion al evento para que sea ejecutada una sola vez. Va a recibir 2 argumentos: 1l 1º la cadena con el nombre del evento y la 2º la funcion a ejecutar

$(@btn).one("click",function(){
alert("Disparando 1 vez")
});


# Delegacion de eventos
## Ejercicio
vamos a tener el par de funciones on/off que nos va a permitir asignar y desasignar eventos en tiempo de ejecucion, tal como podriamos hacer en Js
Nos va a permitir asignar eventos por pertenecer a un grupo, el evento se va a asociar al padre y se llamara por un filtro que identifique el hijo que lo llamka, de forma que el evento se lanza asociado al hijo correspondiente.
 
La funcion __on__ puede terner la siguiente sintaxis

_on(eventos,[selector],[data],handler)_
* eventos-> va a determinar los eventos a asociar, puede ser 1 o varios separados por espacion
* selector-> es opcionar y va a permitir filtrar los elementos hijos desde lo que queremos que se asocie el manejador de eventos.
* data-> Es opcional, puede ser cualquer tipo de dato que necesitemos pasar a la funcion.
* handler-> Va a ser la funcion asociada al evento, se dispara cuando el evento se ha lanzado




# ANIMACIONES

Jquery nos va a permitir animar contenido gracias a la modificacion de los elementos html y sus propiedades css. funciones
* __show
* __hide
Nos van a permitir mostrar u ocultar los elementos seleccionados
La funcion se puede pasar sin argumentos o coun un argumento que puede ser el valor numerico en milisegundos o una cadena que represente la velocidad
(1000)  ("slow") ("normal") ("faster")
Nos va a permitir ademas s una funcion 


* __fadeIn__
* __fadeOut__
Estas funciones van a modificar la opacidad del componente, el funcionamiento será equivalente a las funciones anteriores 

* __fadeTo__
Nos va a generar una animacion en la que varia la opacidad de los elementos invocados, esta funcion es similar a fadeIn pero a diferencia de esta no va a mostrar completamente el elemento ya que fadeIn devuelve una opacidad del 100%

* __animate__
Me va a dejar hacer modificaciones a medida de los css, los argumentos que pasare a la funcion van a ser las propiedades que quiero modificar que serán propiedades css, podre pasarle a continuacion una serie de opciones como por ejemplo la duracion de la animacion, despues podremos invocar la funcion de retorno

Teniendo por ej un objeto 
