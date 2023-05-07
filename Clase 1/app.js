/* // VARIABLES

let comision = "CoderHouse" //STRING => Cadena de texto

let edad = 27

//let disponible = false //BOOLEAN => Datos boleanos que pueden ser true or false.
let disponible = 89

console.log(disponible)

const nombre = "Fabio"; */



//DIFERENCIAS DE CONST Y LET: 
/* 
LET: Puedo declarar una variable sin valor


let nombre;
nombre= "Harvey"
nombre= true

(Puedo reasignar valores)

CONST: No puedo dejar una variable sin valor y no puedo reasignar valores porque da error. 

const nombre = "Harvey"
nombre = true (ESTO NO PUEDO PORQUE DA ERROR EL ASIGNAR NUEVAMENTE UN VALOR A NOMBRE O A CUALQUIER VARIABLE)
 
*/


// CONCATENACION:
/* const nombreAlumno = "Nelson"
const apellidoAlumno = "Gomez"

const nombreCompleto = nombreAlumno+" "+apellidoAlumno

console.log(nombreCompleto) */


//console.log(parametros)
/* prompt("Ingrese su nombre")
alert("Soy una alerta") */

/* let nombreAlumno = prompt("Ingrese el nombre del alumno")
 
alert("Nombre del alumno:"+" "+nombreAlumno) */

// OPERADORES ARITMETICOS

/* 
+ Suma
- Resta
* Multiplicacion
/ Division
 */

let primerNumero=Number(prompt("ingrese un numero"))//Se puede usar Number o parseInt
let segundoNumero=Number(prompt("ingrese otro numero"))
let suma=primerNumero+segundoNumero
let multiplicacion=primerNumero*segundoNumero
let resta=primerNumero-segundoNumero
let division=primerNumero/segundoNumero
alert("Suma: "+suma)
alert("Multiplicación: "+multiplicacion)
alert("Resta: "+resta)
alert("División: "+division)
