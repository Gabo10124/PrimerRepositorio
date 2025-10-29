function calcularPromedio(notas) {

    // Calcular la suma de todas las notas
    const suma = notas.reduce((total, nota) => total + nota, 0);
    
    // Calcular el promedio
    const promedio = suma / notas.length;
    
    // Determinar si aprobó o reprobó
    const estado = promedio >= 6.0 ? "APROBADO" : "REPROBADO";
    
    return {
        promedio: promedio.toFixed(2),
        estado: estado
    };
}

// Ejemplos de uso
const notas1 = [7.5, 8.0, 6.5, 9.0, 5.5, 8.0];
const notas2 = [4.0, 5.0, 3.5, 6.0, 7.0];
const notas3 = [8.0, 9.0, 7.5, 8.5, 6.5];

console.log("Notas:", notas1);
const resultado1 = calcularPromedio(notas1);
console.log(`Promedio: ${resultado1.promedio} - ${resultado1.estado}`);

console.log("\nNotas:", notas2);
const resultado2 = calcularPromedio(notas2);
console.log(`Promedio: ${resultado2.promedio} - ${resultado2.estado}`);

console.log("\nNotas:", notas2);
const resultado3 = calcularPromedio(notas3);
console.log(`Promedio: ${resultado3.promedio} - ${resultado3.estado}`);