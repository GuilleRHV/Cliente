# JavaScript

Es un lenguaje de programación para entornos web, que tiene una sintaxis parecida a C. Es un lenguaje débilmente tipado, Nos va a permitir usar las variables de forma ambigua. Va a ser el interprete el que se va a encargar la conversión de tipos. 
Var opción = “Has seleccionado opción”;
Tendremos un ámbito global a nivel de pagina o un ámbito local a nivel de funciones.
Generar un fichero alert.html con carpeta alert/alert.js
Dentro del fichero js generar una vartiable global asignándole un valor y generando una función llamada “mifuncion” que contendrá una variable local llamada variableLocal, realizar instrucciones alert para imprimir por pantalla los valores de variableGlobal, segundo variableLocal, hacer un incremento de variable Global++ y volver a imprimir el valor de variable global

¿Podemos acceder a variableglobal desde fuera de la función?
Tipos de datos:
*	Numericos
*	String: van a representar letras, digitos y cualquier carácter Unicode que sea representado. Deben estar representados en comillas simples o dobles.
Secuencias de escape
	"\\	\
	\’">"‘
	
	\”		
	
	\m	salto de línea
	
	\t	tabulación
	
	\v 	“
	
	\f 	salto de pagina
	\r 	retorno de carbo


Crear fichero html donde se utilicen diferentes secuencias de escape


* document.wrtite() es una instruccion js para insertar html-> modifica DOM
* alert->INFO Js interprete
_
Operadores
*Aritmeticos
*Logicos
*Asignacion

Comparacion Numeros (devuelve booleano)

    *"<" menor
    *">" mayor
    *"<=" menor o igual
    *">=" mayor o igual
    
    *"!=" diferente
    *"==" igual
    *"===" estrictamente igual
    *"!==" estrictamente diferente
    
    *Si (1==1) entonces es True
    *Si (1===1) entoces es True
    *Si (TRUE==1) entonces es True
    *Si (TRUE===1) entonces es Falso

Declarar 2 variables de tipo numerico y probando operadores aritmeticos con ellas
operadores.html 
generar una segunda funcion donde probar los operadores de asignacion

## Sentencias condicionales
Nos van a permitir la gestion de la toma de decisiones. En estas sentencias se evaluaran las condiciones y se ejecutaran una serie de instrucciones de acuerdo al resultado.

    
    if(expresion){
    bloque true
    }else{
    bloque false{
    
   
## Ambito
Cuanto tiempo estara viva una variable.
var variable = 1;
function fun(){
//Esta durará lo mismo que dure la funcion
var valor=1;

## Uso basico nodos

Una vez acedemos a un nodo podremos usarlo como referencia para usar las siguientes propiedades que van a permitir a movernos entre ellos.
* childNode[nodo] Nos va a decvolver una coleccion con los nodos hijo
El aceso a cada uno de los hijos se hace en un array.
* parentNode : Nos va a devolver el nodo padre del elemento.
* firstChild: Nos va a devolver el 1er nodo hijo y en su defecto un valor nulo.
* lastChild[] nos va a devolver el ultimo hijo o valor null si no lo encuentra
* nextSibling devuelve el siguiente nodo hermano del elemento o valor nulo si es el ultimo.
* previousSibling: Nos va a devolver el anterior nodo hermano del elemento o valor nulo si es el primero.

## Funciones matematicas
### Metodos estaticos
    console.log("valor de PI: Math.PI"+Math.PI);
    console.log("valor de absoluto de -1: Math.abs(-1)"+Math.abs(-1));
    console.log("valor de un numero redondeado:                  Math.floor(2.7)"+Math.FLOOR(2.7));
    console.log("valor de numero redondeado Math.round(2.7)"+Math.round(2.7));
    console.log("valor minimo de varios numeros Math.min(2,7,1)"+Math.min(2,7,1));
    console.log("valor maximo de varios numeros Math.max(2,7,1)"+Math.max(2,7,1));
    
