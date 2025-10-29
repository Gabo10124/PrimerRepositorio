let estudiantes = [];

function registrarEstudiante(nombre, carnet, edad, notas) {
    estudiantes.push({
        nombre: nombre,
        carnet: carnet,
        edad: edad,
        notas: notas
    });
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function encontrarMejorPromedio() {
    if (estudiantes.length === 0) return null;
    
    let mejorEstudiante = estudiantes[0];
    let mejorPromedio = calcularPromedio(estudiantes[0].notas);
    
    for (let i = 1; i < estudiantes.length; i++) {
        let promedioActual = calcularPromedio(estudiantes[i].notas);
        if (promedioActual > mejorPromedio) {
            mejorPromedio = promedioActual;
            mejorEstudiante = estudiantes[i];
        }
    }
    
    return mejorEstudiante;
}

function mostrarEstudiantesOrdenados() {

    let estudiantesConPromedio = [];
    for (let i = 0; i < estudiantes.length; i++) {
        estudiantesConPromedio.push({
            ...estudiantes[i],
            promedio: calcularPromedio(estudiantes[i].notas)
        });
    }
    

    for (let i = 0; i < estudiantesConPromedio.length - 1; i++) {
        for (let j = i + 1; j < estudiantesConPromedio.length; j++) {
            if (estudiantesConPromedio[j].promedio > estudiantesConPromedio[i].promedio) {
                let temp = estudiantesConPromedio[i];
                estudiantesConPromedio[i] = estudiantesConPromedio[j];
                estudiantesConPromedio[j] = temp;
            }
        }
    }
    
    console.log("\n--- ESTUDIANTES ORDENADOS POR PROMEDIO ---");
    for (let i = 0; i < estudiantesConPromedio.length; i++) {
        console.log(`${i + 1}. ${estudiantesConPromedio[i].nombre} - Carnet: ${estudiantesConPromedio[i].carnet} - Promedio: ${estudiantesConPromedio[i].promedio.toFixed(2)}`);
    }
}


registrarEstudiante("Ana García", "A123", 20, [8.5, 9.0, 7.5, 8.0]);
registrarEstudiante("Carlos López", "B456", 22, [6.0, 7.0, 5.5, 6.5]);
registrarEstudiante("María Torres", "C789", 19, [9.5, 9.0, 8.5, 9.0]);

mostrarEstudiantesOrdenados();

let mejor = encontrarMejorPromedio();
console.log(`\n🎓 Mejor estudiante: ${mejor.nombre} con promedio: ${calcularPromedio(mejor.notas).toFixed(2)}`);