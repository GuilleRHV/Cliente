# Tema 1. SELECCIÓN DE ARQUITECTURAS Y HERRAMIENTAS DE PROGRAMACION

## 1.1	INTERNET : CORREOS, MENSAJES, ARCHIVOS
SERVICIOS: PROTOCOLOS: WWW,HTTP,HTTPS,FTP,
- NAVEGADOR
- SOFTWARE
- HARDWARE: CLIENTE/SERVIDOR

SOFTWARE: Tipos de sw Lenguajes de programacion
1. PROGRAMACION: Realizar aplicaciones, tener control sobre el flujo
2. INFORMATICO: Representar un sistema informático, html
3. LENGUAJE DE ALTO NIVEL- Java, Phyton (Entendible para los humanos)
4. LENGUAJES DE BAJO NIVEL-Ensamblador, código maquina
### DIFERENCIA LENGUAJES COMPILADOS/INTERPRETADOS
- Lenguaje compilador: si tiene algún error te lo dirá cuando completes el código
- Lenguaje interpretado: Intentará ejecutar hasta el código hasta el error, código que interpreta el procesador.
## 1.1	INTERNET : CORREOS, MENSAJES, ARCHIVOS
## 1.2 MODELO DE PROGRAMACION
Es un estilo de programación asociado a una tecnología de forma que esta tecnología provee todos los recursos necesarios para la implementación del software (Ej MVC, POO).
##1.2	MECANISMO DE EJECUCION DE CODIGO EN NAVEGADOR WEB
1.2.1	Ejecuciones de cliente: HTML, CSS, Js
1.2.2	Ejecuciones de servidor: PHP, .net, Java
Server genera todo el html que necesita el cliente
1.2.3	Flujo de Servidores en Cliente
1.2.4	Ventajas de ejecución en cliente
- Optimización
- Descarga del servidor
- Ejecución más rápida de scripts
Cliente usa todos los recursos (html,css..)

## 1.3	MECANISMOS DE EJECUCION
* Ventajas:
* Desventajas ejecución cliente:
    - Mayor tiempo de carga.
	- Frameworks menos potentes que en servidor
		- Ofuscación
		
## 1.4 COMPATIVILIDAD CON NAVEGADORES WEB
Versiones de Chrome
    Ordenadores: 
* WIN
* LINUX
* Mac
    * Intel
	* ARM
•	 Raspberry

Otros dispositivos
* Android
* IOS
Arquitecturas
* Firefox 7     		
* Safari 3

## 1.5	CARACTERISTICAS DE LOS LENGUAJES SCRIPT
* JavaScript
* Phyton
* Script unix
* Power Shell
    Vienen de los Mainframes.
    Mainframes->Todas las tareas del O.S mediante consola.
- Son interfaces en tiempos de ejecución
- Históricamente vienen de procesos de equipos mainframes
- Los lenguajes de lato nivel han acabado acuñando
- El termino script ->Entornos concretos – Propósito general
- Ordenadores empresariales de l1950-1970
## 1.6	TECNOLOGIAS Y LENGUAJES ASOCIADOS
-	HTML – Lenguajes de marcas – HyperText MarkUp Languaje.
Lenguaje representado por etiquetas y una vez abierta debe ser cerrada.

##JSON:
Formato de texto de intercambio de datos muy ligero. Objetos de Js.

##JavaScript
Es un lenguaje de programación enfocado para web que puede modificar y actualizar el html y sus css, modificando el aspecto de la maquina. Además, nos va a permitir calcular, manipular y validar información.
##1.7	HERRAMIENTAS DE DESARROLLO

CTRL+Mayus+i
 



##1.8 EL NAVEGADOR WEB
El navegador web es un software que permite el acceso a internet interpretando la información de distintos tipos de archivos. Se encarga de procesar las etiquetas HTML e interpreta los lenguajes de script según los estándares dados por el consorcio www. Estas organizaciones internacionales se encargan de determinar cómo se crean los documentos web.

### Componentes
Sera la capa que actúa en el usuario y el motor de buscador, visualiza el proceso de carga y gestiona las descargas de forma inteligente.

### Motor de búsquedas
Va a coordinar la interfaz con el motor de renderizado. Tiene las funciones de cargar la dirección web, realizar los mecanismos básicos de navegación, se va a encargar también de gestionar las herramientas de Js.

### Motor de renderizado
Va a ser el encargado de producir una representación visual del recurso obtenido, se generará a partir del código de la pagina web y también se encargará de establecer las dimensiones exactas de cada elemento a mostrar y la posición de estos.

### PARTES DE NAVEGADORES
*	Motor render
		Motores más comunes:
*	Gecko (Mozilla)
*	Trident (Explorer)
*	Webkit (Safari)
*	Blink (Opera, Edege, Chrome)


### SISTEMA DE COMUNICACIONES
Va a tener la finalidad de aplicar los protocolos de transferencia de ficheros así como identificar la codificación de los datos en función de su tipo. También se encarga de la gestión de la cache

### INTERPRETE JAVASCRIP
Estas funcionalidad del navegador se encarga de analizar y ejecutar el código javascript insertado en html. Puede ser configurado desde el motor de renderizado y cada navegador tiene sus propios módulos de navegación.

### PARSER XML
Esta parte del navegador nos va a permitir cargar en memoria una representación del árbol de pagina del dominio.

### CARGA DEL NAVEGADOR
El navegador no esta cargado, cuando cargamos la aplicación la carga en RAM como un proceso.
Árbol de pagina de dominio
Fichero de servidor ->Es una respuesta , datos(SQL), java, php
Fichero de cliente->html, css, js
Proceso: Estado de ejecución de aplicación.
Subproceso: Un proceso del padre	

## DOM
DOM: Document Object Model. Instancia de nuestra página web (en memoria RAM)
El DOM es lo que el navegador construye con el HTML que viene del servidor en forma de respuesta de petición. EL navegador se va a encargar de formatear esa respuesta y construir la pagina. El DOM puede ser manipulado por java script en tiempo de ejecución por lo que dará mucha potencia a la modificación de las páginas web  en tiempo real.

### SERVIDOR DE LA INTERFAZ
Va a ofrecer funcionalidades relacionadas con la visualización de los contenidos de un documento HTML.

### ALMACENAMIENTO DE DATOS
Va a funcionar como almacén de diferentes tipos de datos para los principales subsistemas del ordenador. Puedes estar relacionado con el historial de navegación y mantenimiento de sesiones de usuario en disco. Además, a bajo nivel, administrara los certificados de seguridad y las cookies.
Sesion>Ventana>Abrir>Cerramos.

### IDENTIFICACION DE RECURSOS
Uso de la barra de direcciones. 
*	__URI__: Universal Resource Identifier. Es una cadena de caracteres que identifica un recurso, ya sea usando una dirección, un nombre o ambos al mismo tiempo, de forma que un URI podrá contener un URL o URN al mismo tiempo.
*	__URL__: Uniform Resource Locator, es una cadena de caracteres que hace referencia a una dirección, va ser la forma más usada de localizar recursos en web (www.gmail.com).

*	__URN__: Uniform Resource Name, va a ser el nombre único para un recurso, no obstante no va a dar ninguna información de su localización, solo lo identifica(urn:isbn:3945). 

*	ESTRUCTURA DEL URI
		Esquema: parte jerárquica
			[?] Solicitud
			[#] Fragmento
- __ESQUEMA__: El esquema nos va a identificar el protocolo al solicitar el recurso (http, https,ftp…).
PARTE JERARQUICA->://usuario:contraseña@servidor:puerto/ruta

- __SOLICITUD__: Nos permitirá realizar consultas de información, pasando variables al solicitar el recurso, la ruta se pasará mediante el carácter separador [?].

		/miServer.com/index.php?var=z&vers=valor
- __FRAGMENTO__: Nos va a identificar una subdirección dentro del recurso al que apuntamos. Va a estar separado del resto de la estructura mediante el carácter reservado [#].
