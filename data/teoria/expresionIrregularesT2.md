# Expresiones irregulares
Son de utilidad en programacion que nos permite buscar patrones y secuencias de caracteres, podremos utilizarlas tanto para buscar determinadas cadenas y saber si existen o no.
Tendremos 2 tipos
* Expresiones Literales
    Van a ir comprendidas entre 2 barras //   ej->/ab+c/
* Funcion constructor RegExp
    const llamadaAConstructor = new RegExp('ab+c');
Funcion test que nos va a permitir validar y la expresion es correcta o ni, será ejecutada dentro de una cadena de busqueda. 
Funcion match se va a encargar de devolver los resultados obtenidos al cruzar el patrón de busqueda en la cadena pasada.

var cadena = "Mi cadena de prueba"
var formato =/ab+c/
var resultadoValor = cadena.match(formato)
var resultadoTest = formato.text(cadena)
## Clases de caracteres
Tendremos por una parte:
Seleccion de conjuntos de caracteres me3diante la expresion explicita
Utilizacion de rangos
Utilizacion de comandos especificos

.. tipos de datos concretos en nuestra expresion. 
Para las 2 primeras (seleccion de conjuntos y utlizacion rango) nos ayudaremos con los corchetes [] para asignar los valors de busqueda.
Para los comandos especificos usaremos la contrabarra \ seguido de una letra que tendra una funcionalidad concreta.

Dentro de las expresiones regulares tendremos diferentesi tipos de datos que podremos usar para la expresion final. Algunos de los principales son: 
* \w Cualquier caracter alfanumerico del alfabeto latino
* \W  Cualquier caracter NO alfanumerico del alfabeto latino
* \d Cualquier caracter de tipo numerico
* \D Cualquier caracter de tipo NO numerico
* \s espacio
* \S NO espacio


## FORMATO:
* /az/; Busca literales
* /[0-9]/  Busca numero
* /[a-z] Busca de la a-z
* /\d/ Busca numero (alternativa)
En las clases de caracters vamos a poder negar la buscqueda usaremos ^
formato = /^A-C/   ->Que no sea A,B, C

## ASERCIONES
Va a insertar que las instrucciones ya tenemos a las ordenes de busqueda
* ^ Coincido con el comienzo de cadena
* $ Coincide con el final de cadena
* \b Espera un caracter limite (fin de una palabra, espacio)
* \B Caracter NO limite
* x(?=y) Encuentra X si y solo si esta seguido de Y
* x(?!y) Encuentra X si y solo si no esta seguido de Y
* (?<=y)x Encontrara X solo si esta precedido de Y


## AGRUPACIONES
Procedemos a usar agrupacionespPara hacer diferentes patrones de busqueda dentro de una misma expresion cada una de estas agrupaciones puede ser diferente en cuanto a donde hace la busqueda. Tambien podra ser diferente en cuanto al numero de caracteres que esta buscando, podremos ademas seguir aplicando otras reglas.

formato = /([0-9]-([A-Z])/    ej->3Z,5D...

## CUANTIFICADORES
Va a determinar el numero de veces el patron de busqueda 

* *Encuentra 0 o N caracteres previos y si lo encuentra sigue buscando
* +encuentra  1 o N caracteres previos
* ?Encuentra 0 o 1 caracter previos y cuando lo encuentra deja de buscar
* {n} Encuentrea el caracter que le precede el nº de vedes determinado por en caracter n    a{3} ej--> aaa    NO->aaia   SI->iaaa
* {n,m} Va a encontrar el caracter que le precede el numero de veces predeterminado por n hasta un maximo de m veces

## FLAGS O BANDERAS
Podremos ademas usar banderas para dar comandos dentro de la busqueda por ejemplo la bandera _g(global)_ nos permite hacer una busqueda globar dentro del patrón teniendo además la particularidad de devolver todas las cadenas que cumplen la regla en el uso de la funcion Match. Que usaremos asignandola fuera de la 2ª barra -> formato = /[0-9]+/g
Bandera _i-> IgnoreCase_


