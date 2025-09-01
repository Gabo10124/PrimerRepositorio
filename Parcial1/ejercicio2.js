//Declaramos las variables
let nombreCliente = "Juan";
let producto = "Pan";
let precioUnidad = 1;
let cantidad = 15;
let cupon = "SWEET2021";


//Calcular subtotal
var subtotal = precioUnidad * cantidad;

//Aplicar descuento si tiene SWEET
let descuento = cupon.startsWith("SWEET")? subtotal*0.10 : 0;

//Asignar una variable para guardar descuetos
descuento =+ 0;

//Calcular el nuevo subtotal
totalfinal = subtotal - descuento;

//Dar mensaje para decir compra grande o regular
let mensaje = (cantidad > 3 && subtotal >= 10)? "Compra grane" : "Compra regular";

//Imprimir los valores
console.log("Nombre: ", nombreCliente.toUpperCase());
console.log("Producto: ", producto);
console.log("Longitud: ", producto.length);
console.log("Subtotal", subtotal);
console.log("Descuento: ", descuento);
console.log("Total final: ", totalfinal);
console.log("Mensaje: ", mensaje);