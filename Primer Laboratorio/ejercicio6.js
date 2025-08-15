//Solicitamos al usuario su nombre y una palabra
let nombre = String(prompt("Ingrese su nombre:"));
let palabra  = String(prompt("Ingrese una palabra:"));

//Hacemos minuscula la palabra y el nombre para encontrar coincidencias que no tengan que ver con mayusculas o minusculas
nombre = nombre.toLowerCase();
palabra = palabra.toLowerCase();

//Verificamos si la palabra esta incluida en el nombre e imprimimos
verificacion = nombre.includes(palabra);
console.log(verificacion);