//Declaramos las variables para asistente
const asistente = {
    nombre: "Pedrito",
    edad: 28,
    institucion: "Empresa",
    correo: "pedrojuan988@gmail.com",
    id: "AS-1234"
}

//Verigicamos edad
let confirmacion = (asistente.edad < 18)? "Es menor, no tiene acceso" : "Tiene acceso";
console.log(confirmacion)

//Verificamos la terminacion del corre
if (!asistente.correo.endsWith(".com")) {
    delete asistente.institucion;
}

//Verificamos que el id inicide con AS- y permitimos acceso
let confirmacionid = (asistente.id.startsWith("AS-"));
let acceso = (asistente.confirmado && idValido) ? "Acceso permitido" : "Acceso denegado";


//Imprimimos los datos al final
console.log(asistente.nombre.toLowerCase());
console.log(asistente.edad.toString());
console.log("Confirmacion ID: ", confirmacionid)
console.log("Resultado de acceso:", acceso);
