//Asignamos las variables iniciales
let nombreCompleto =  "Ana Lucia Rodriguez";
let edad = 28;
var salarioBase = 1200.50;
let esactivo = true;
let departamento = null

//Creamos un objeto y le asignamos propiedades
const empleado = {
    nombre: nombreCompleto,
    edadE: edad,
    salario: salarioBase,
    activo: esactivo,
    fechaingreso: new Date(),
    habilidades: ["Analisis", "Excel", "Power Pi"]
};
   

//Agregamos la propiedad departamento
empleado.departamento = "Contabilidad";

//Aumentamos el salario en un 15%
empleado.salario = empleado.salario*1.15;


//Eliminamos la propiedad activo
delete empleado.activo;



//Imprimimos los valores
console.log("===FICHA DE EMPLEADO===");
console.log("Nombre: ", empleado.nombre.toUpperCase());
console.log("Edad: ", empleado.edadE);
console.log("Salario: ", empleado.salario.toFixed(2));
console.log("Departamento: ", empleado.departamento.toLowerCase());
console.log("Año de ingreso: ", empleado.fechaingreso.getFullYear());
console.log("Habilidades: ", empleado.habilidades.length);

