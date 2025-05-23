/*let num1 = 2, num2 = 3;
console.log(num1 == num2);

let numeros = [1, 2, 3]
numeros[0] = 10
console.log("La lista de numeros es "+numeros+".");

const PI = Math.PI
console.log("El valor de PI es de "+PI+".");

const randomNum = Math.random()
console.log("El número aleatorio es "+randomNum+".");

let numEntre0y10 = randomNum * 11

let numRandom = Math.floor(numEntre0y10)
console.log("El número aleatorio es "+numRandom+".");


// Concatenar variables.
let primerNombre = 'Angel'
let primerApellido = 'Cruz'
let edad = 23
console.log(primerNombre + primerApellido)
console.log("Mi nombre es " + primerNombre + " " + primerApellido+" y tengo "+edad+ " años.")

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// Continuar con un texto que puede ser demasiado largo.
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
"
console.log(paragraph)*/

// Ejercicios Parte 1
// 1. Declare una variable llamada desafío y asígnela a un valor inicial '30 Días De JavaScript'.
let desafio = '30DíasDeJavaScript'
let compañias = ('Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon')
let frase = ('No puedes terminar una oración con porque porque es una conjunción')
// 2. Imprima la cadena en la consola del navegador usando consola.log()
console.log(desafio)
// 3. Imprimir el longitud de la cadena en la consola del navegador utilizando consola.log()
console.log(desafio.length)
// 4. Cambie todos los caracteres de cadena a letras mayúsculas usando toUpperCase() método
console.log(desafio.toUpperCase())
// 5. Cambie todos los caracteres de cadena a letras minúsculas usando toLowerCase() método
console.log(desafio.toLowerCase())
// 6. Cortar (cortar) la primera palabra de la cadena usando substr() o subcadena() método
console.log(desafio.substring(0,2))
// 7. Corta la frase Días de JavaScript de 30 Días de JavaScript.
console.log(desafio.substring(2,6))
// 8. Compruebe si la cadena contiene una palabra Guión usando incluye() método
console.log(desafio.includes('Guión'))
// 9. Dividir el cuerda en un array usando split() método
console.log(desafio.split(' '))
// 10. Divide la cadena 30 Days Of JavaScript en el espacio usando split() método
console.log(desafio.split())
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dividir la cadena en la coma y cámbiela a una matriz.
console.log(compañias.split(' '))
// 12. Cambiar 30 Días De JavaScript a 30 Días De Python usando reemplazar() método.
console.log(desafio.replace('JavaScript','Python'))
// 13. ¿Qué es el carácter en el índice 15 en la cadena '30 Days Of JavaScript'? Usar charAt() método.
console.log(desafio.charAt(15))
// 14. Cuál es el código de carácter de J en la cadena '30 Days Of JavaScript' usando charCodeAt()
let posicion1 = desafio.charCodeAt(8)
console.log(+ posicion1 + ' Es el código de caracter de J en la cadena desafio.')
// 15. Usar indexOf para determinar la posición de la primera ocurrencia de a en 30 Días De JavaScript
let posicion2 = desafio.indexOf('a')
console.log(+ posicion2 +' Es la primera posición en la que aparece la letra en en el string de desafio.')
// 16. Usar lastIndexOf para determinar la posición de la última ocurrencia de a en 30 Días De JavaScript.
let posicion3 = desafio.lastIndexOf('a')
console.log(+ posicion3 +' Es la ultima posición en la que aparece la letra a en el string de desafio.')
// 17. Usar indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
// 'No puedes terminar una oración con porque porque es una conjunción'
let posicion4 = desafio.indexOf('porque')
console.log(+ posicion4 +' Es la primera posición en la que aparece la palabra "porque" en el string de frase.')
// 18. Usar lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:
// 'No puedes terminar una oración con porque porque es una conjunción'
let posicion5 = frase.lastIndexOf('porque')
console.log(+ posicion5 +' Es la ultima posición en la que aparece la palabra "porque" en el string de frase.')
// 19. Usar search para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
// 'No puedes terminar una oración con porque porque es una conjunción'
let posicion6 = frase.search('porque')
console.log(+ posicion6 +' Es la primera aparición de la palabra porque en la anterior oración.')
// 20. Usar trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena.E.g ' 30 Days Of JavaScript '.
console.log(desafio.trim())
// 21. Usar startsWith() método con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero.
let inicia = desafio.startsWith('3')
console.log('¿La frase ' + desafio + ' inicia con el número "3"?: '+ inicia +'')
// 22. Usar findsWith() método con la cadena 30 Días de JavaScript y hacer que el resultado sea verdadero
let finaliza = desafio.endsWith('t')
console.log('La frase '+ desafio +' termina con la letra "t"?: ' + finaliza +'')
// 23. Usar match() método para encontrar todo el a’s en 30 Días De JavaScript
console.log(desafio.match('a'))
// 24. Usar concat() y fusionar '30 Days of' y 'JavaScript' a una sola cadena, '30 Days Of JavaScript'
let desafio2 = '30 Dias De', desafio3 = ' JavaScript'
console.log(desafio2.concat(desafio3))
// 25. Usar repeat() método para imprimir 30 Días de JavaScript 2 veces.
console.log(desafio.repeat(2))



