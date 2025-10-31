let carrito = [];

function agregarProducto(nombre, precio, cantidad) {
    carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });
    console.log(` ${cantidad} x ${nombre} agregado al carrito`);
}

function eliminarProducto(nombre) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito.splice(i, 1);
            console.log(` ${nombre} eliminado del carrito`);
            return;
        }
    }
    console.log(` Producto "${nombre}" no encontrado`);
}

function modificarCantidad(nombre, nuevaCantidad) {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito[i].cantidad = nuevaCantidad;
            console.log(` Cantidad de ${nombre} modificada a ${nuevaCantidad}`);
            return;
        }
    }
    console.log(` Producto "${nombre}" no encontrado`);
}

function calcularTotal() {
    let subtotal = 0;
    
    for (let i = 0; i < carrito.length; i++) {
        subtotal += carrito[i].precio * carrito[i].cantidad;
    }
    
    let descuento = 0;
    if (subtotal > 100) {
        descuento = subtotal * 0.10;
    }
    
    let total = subtotal - descuento;
    
    return {
        subtotal: subtotal,
        descuento: descuento,
        total: total
    };
}

function mostrarResumen() {
    console.log("\n--- RESUMEN DE COMPRA ---");
    
    if (carrito.length === 0) {
        console.log("El carrito está vacío");
        return;
    }
    
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let totalProducto = producto.precio * producto.cantidad;
        console.log(`${producto.cantidad} x ${producto.nombre} - $${producto.precio} c/u = $${totalProducto}`);
    }
    
    let calculos = calcularTotal();
    console.log(`\nSubtotal: $${calculos.subtotal.toFixed(2)}`);
    console.log(`Descuento (10%): $${calculos.descuento.toFixed(2)}`);
    console.log(`TOTAL: $${calculos.total.toFixed(2)}`);
}


agregarProducto("Laptop", 50, 2);
agregarProducto("Mouse", 15, 1);
agregarProducto("Teclado", 30, 1);

mostrarResumen();

console.log("\n--- Modificando carrito ---");
modificarCantidad("Mouse", 3);
eliminarProducto("Teclado");

mostrarResumen();