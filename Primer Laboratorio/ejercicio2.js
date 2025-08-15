//Escribimos prompts para pedirle al usuario escribir dos numeros
let num1 = Number(prompt("Ingrese el primer numero:"));
let num2 = Number(prompt("Ingrese el segundo numero:"));

//Hacemos las operaciones necesarios con todos los numeros
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;

//Escribimos el resultado de cada una de las operaciones
console.log("La suma de ambos numeros es: " + suma);
console.log("La resta de ambos numeros es: " + resta);
console.log("La division de ambos numeros es: " + division);
console.log("La multiplicacion de ambos numeros es: " + multiplicacion);