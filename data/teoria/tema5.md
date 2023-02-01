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


## Ejercicio
Ejercicio generar un html: de forma dinamica usando solo jquery 
1. El div principal (parrafo titulo y botones de control) seguiran siendo elementos estaticos dentro de la pagina
2. Los bloques de informacion van a ser generados de forma aleatoria ayudandose de la funcion __mathrandom()__ de forma que el numero de bloques sea aleatorio,
3.  dentro de estos el parrafo de titulo de bloque será fijo. y el resto aleatorios tambien
4. La generacion de elementos y propiedades debe ser hecha de forma dinamica con jquery
