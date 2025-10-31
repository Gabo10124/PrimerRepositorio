let doctores = [];
let citas = [];

function registrarDoctor(nombre, especialidad, codigo) {
    doctores.push({
        nombre: nombre,
        especialidad: especialidad,
        codigo: codigo
    });
    console.log(`Dr. ${nombre} (${especialidad}) registrado`);
}

function agendarCita(paciente, codigoDoctor, fecha, hora, motivo) {
    let doctorExiste = false;
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].codigo === codigoDoctor) {
            doctorExiste = true;
            break;
        }
    }
    
    if (!doctorExiste) {
        console.log("El código de doctor no existe");
        return;
    }

    for (let i = 0; i < citas.length; i++) {
        if (citas[i].codigoDoctor === codigoDoctor && 
            citas[i].fecha === fecha && 
            citas[i].hora === hora) {
            console.log("El doctor ya tiene una cita en esa fecha y hora");
            return;
        }
    }
    
    citas.push({
        paciente: paciente,
        codigoDoctor: codigoDoctor,
        fecha: fecha,
        hora: hora,
        motivo: motivo
    });
    console.log(`Cita agendada para ${paciente}`);
}

function cancelarCita(paciente, fecha) {
    for (let i = 0; i < citas.length; i++) {
        if (citas[i].paciente === paciente && citas[i].fecha === fecha) {
            citas.splice(i, 1);
            console.log(` Cita de ${paciente} del ${fecha} cancelada`);
            return;
        }
    }
    console.log(" Cita no encontrada");
}

function buscarCitasPorEspecialidad(especialidad) {
    let citasEspecialidad = [];
    
    for (let i = 0; i < citas.length; i++) {
        let codigoDoctor = citas[i].codigoDoctor;
        for (let j = 0; j < doctores.length; j++) {
            if (doctores[j].codigo === codigoDoctor && 
                doctores[j].especialidad === especialidad) {
                citasEspecialidad.push(citas[i]);
                break;
            }
        }
    }
    
    console.log(`\n--- CITAS DE ${especialidad.toUpperCase()} ---`);
    if (citasEspecialidad.length === 0) {
        console.log("No hay citas para esta especialidad");
        return;
    }
    
    for (let i = 0; i < citasEspecialidad.length; i++) {
        let cita = citasEspecialidad[i];
        console.log(`${cita.paciente} - ${cita.fecha} ${cita.hora} - ${cita.motivo}`);
    }
}

function mostrarCitasOrdenadas() {

    let citasOrdenadas = [...citas];
    for (let i = 0; i < citasOrdenadas.length - 1; i++) {
        for (let j = i + 1; j < citasOrdenadas.length; j++) {
            if (citasOrdenadas[j].fecha < citasOrdenadas[i].fecha) {
                let temp = citasOrdenadas[i];
                citasOrdenadas[i] = citasOrdenadas[j];
                citasOrdenadas[j] = temp;
            }
        }
    }
    
    console.log("\n--- TODAS LAS CITAS (ORDENADAS POR FECHA) ---");
    if (citasOrdenadas.length === 0) {
        console.log("No hay citas programadas");
        return;
    }
    
    for (let i = 0; i < citasOrdenadas.length; i++) {
        let cita = citasOrdenadas[i];
        console.log(`${cita.fecha} ${cita.hora} - ${cita.paciente} - Motivo: ${cita.motivo}`);
    }
}

function mostrarEstadisticas() {
    console.log("\n--- ESTADÍSTICAS ---");
    

    let citasPorEspecialidad = {};
    for (let i = 0; i < citas.length; i++) {
        let codigoDoctor = citas[i].codigoDoctor;
        for (let j = 0; j < doctores.length; j++) {
            if (doctores[j].codigo === codigoDoctor) {
                let especialidad = doctores[j].especialidad;
                citasPorEspecialidad[especialidad] = (citasPorEspecialidad[especialidad] || 0) + 1;
                break;
            }
        }
    }
    
    console.log("Citas por especialidad:");
    for (let especialidad in citasPorEspecialidad) {
        console.log(`  ${especialidad}: ${citasPorEspecialidad[especialidad]} citas`);
    }
    
    let citasPorDoctor = {};
    for (let i = 0; i < citas.length; i++) {
        let codigoDoctor = citas[i].codigoDoctor;
        citasPorDoctor[codigoDoctor] = (citasPorDoctor[codigoDoctor] || 0) + 1;
    }
    
    let doctorMasCitas = "";
    let maxCitas = 0;
    for (let codigo in citasPorDoctor) {
        if (citasPorDoctor[codigo] > maxCitas) {
            maxCitas = citasPorDoctor[codigo];
            doctorMasCitas = codigo;
        }
    }
    
    if (doctorMasCitas) {
        let nombreDoctor = "";
        for (let i = 0; i < doctores.length; i++) {
            if (doctores[i].codigo === doctorMasCitas) {
                nombreDoctor = doctores[i].nombre;
                break;
            }
        }
        console.log(`Doctor con más citas: Dr. ${nombreDoctor} (${maxCitas} citas)`);
    }
}

// Ejemplo de uso
console.log("=== SISTEMA DE CITAS MÉDICAS ===");

// Registrar doctores
registrarDoctor("Carlos Rodríguez", "Cardiología", "DOC001");
registrarDoctor("Ana Martínez", "Pediatría", "DOC002");
registrarDoctor("Luis García", "Dermatología", "DOC003");

// Agendar citas
agendarCita("María López", "DOC001", "2024-01-15", "09:00", "Chequeo cardíaco");
agendarCita("Juan Pérez", "DOC002", "2024-01-15", "10:00", "Control niño sano");
agendarCita("Pedro Gómez", "DOC001", "2024-01-16", "09:00", "Dolor de pecho");
agendarCita("Laura Díaz", "DOC003", "2024-01-14", "11:00", "Consulta dermatológica");

// Mostrar funciones
mostrarCitasOrdenadas();
buscarCitasPorEspecialidad("Cardiología");
mostrarEstadisticas();

// Cancelar una cita
console.log("\n--- Cancelando cita ---");
cancelarCita("Juan Pérez", "2024-01-15");

mostrarCitasOrdenadas();