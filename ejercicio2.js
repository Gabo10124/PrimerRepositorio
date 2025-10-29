
let productos = [];

function agregarProducto(nombre, precio, cantidad) {
    productos.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    });
    console.log(`Producto "${nombre}" agregado.`);
}

function mostrarProductos() {
    console.log("\n--- LISTA DE PRODUCTOS ---");
    if (productos.length === 0) {
        console.log("No hay productos en el catálogo.");
        return;
    }
    
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`);
    });
}

function calcularValorTotal() {
    let total = 0;
    productos.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}

agregarProducto("Laptop", 1200, 5);
agregarProducto("Mouse", 25, 10);
agregarProducto("Teclado", 80, 3);

mostrarProductos();

const valorTotal = calcularValorTotal();
console.log(`\nValor total del inventario: $${valorTotal}`);