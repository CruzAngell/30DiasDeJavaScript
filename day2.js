let num1 = 2, num2 = 3;
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
/*const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
"
console.log(paragraph)*/

// Ejercicios
// 1. Declare una variable llamada desafío y asígnela a un valor inicial '30 Días De JavaScript'.
let desafio = '30DíasdeJavaScript'
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

