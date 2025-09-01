// 1. Crear objeto pedido
let pedido = {
    cliente: {
        nombre: "ana maría GONZÁLEZ",
        codCliente: "USR-123"
    },
    carrito: {
        producto: "Cartera de cuero premium",
        precioUnitario: 85.50,
        cantidad: 3
    },
    cupon: "OFERTA2024",
    creadoEn: new Date()
};

//Convertimos la fecha en ISO
let fechaISo= pedido.creadoEn.toISOString();

//Calculamos el subtototal y el descuento
let subtotal = pedido.carrito.precioUnitario * pedido.carrito.cantidad;
let descuento = 0;


//Verificamos si el cupon tiene validez y agregamos a la variable acumulativa
if (pedido.cupon && pedido.cupon.startsWith("OFERTA")) {
    descuento += subtotal * 0.15;
}
// hacemos una doble verificacion para cumplir dos concidiciones que nos pide el ejercicio sobre 5% extra de descuento, si supera o iguala los 3 productos y los 100 dolares 
if (pedido.carrito.cantidad >= 3 && subtotal > 100) {
    descuento += subtotal * 0.05;
}

// Calculamos el nuevo total con descuentos
let total = subtotal - descuento;

//Validamos si el codigo tiene validez
if (!pedido.cliente.codCliente.startsWith("CL-")) {
    pedido.observacion = "Código de cliente inválido";
}


// Hacemos una condicion para verificar si un producto esta vacio o tiene menos de 3 caracteres
if (!pedido.carrito.producto || pedido.carrito.producto.length < 3) {
    pedido.carrito.producto = "PRODUCTO DESCONOCIDO";
}

//Eliminamos cupon si no hay cupon
if (!pedido.cupon) {
    delete pedido.cupon;
}

//Si el pago es mayor o igual de 50 lo aprobamos 
let estadoPago = (total >= 50) ? "APROBADO" : "RECHAZADO";

//Definiimos que tipo de envio sera, de 5 para arriba es estandar, y de 120 para arriba es prioritario
let etiquetaEnvio = (total >= 120 || pedido.carrito.cantidad >= 5) ? 
    "ENVÍO PRIORITARIO" : "ENVÍO ESTÁNDAR";

// Imprimimos los resultados
console.log("=== DETALLE DEL PEDIDO ===");
console.log("Cliente:", pedido.cliente.nombre);
//Movi hasta abajo esto para no mostrarlo 2 veces
console.log("Año del pedido: ", pedido.creadoEn.getFullYear());
console.log("Fecha ISO:", fechaISo);
console.log("Subtotal: $", subtotal.toFixed(2));
console.log("Descuento: $", descuento.toFixed(2));
console.log("Total final: $", total.toFixed(2));
console.log("Estado de pago:", estadoPago);
console.log("Etiqueta de envío:", etiquetaEnvio);
console.log("Objeto final:", pedido);