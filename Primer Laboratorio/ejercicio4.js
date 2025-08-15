//Definimos las variables con los numeros del ejercicio
let num1 = 25;
let num2 = 40;
let num3 = 60

//Calculamos e imprimimos el subtotal
suma = num1 + num2 + num3;
console.log("El precio de los 3 productos es; "+ suma);

//Calculamos e imprimimos el descuento
descuento = suma * 0.15;
console.log("El descuento es: " + descuento);


//Calcululamos e imprimimos el total final
total = suma - descuento;
console.log("El total a pagar es: "+ total);