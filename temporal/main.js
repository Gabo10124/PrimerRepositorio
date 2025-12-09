// Variables globales
let tasks = [];
let taskIdCounter = 1;

// Elementos del DOM
const taskForm = document.getElementById('task-form');
const subjectInput = document.getElementById('subject');
const activityInput = document.getElementById('activity');
const dueDateInput = document.getElementById('due-date');
const tasksTable = document.getElementById('tasks-table');
const tasksTableBody = document.getElementById('tasks-table-body');
const noTasksMessage = document.getElementById('no-tasks-message');
const errorMessage = document.getElementById('error-message');

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Configurar la fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    dueDateInput.min = today;
    
    // Cargar tareas desde localStorage
    loadTasks();
    
    // Mostrar tareas en la tabla
    renderTasks();
    
    // Configurar el evento del formulario
    taskForm.addEventListener('submit', addTask);
});

// Función para agregar una tarea
function addTask(event) {
    event.preventDefault();
    
    // Limpiar mensaje de error
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
    
    // Validar campos
    const subject = subjectInput.value.trim();
    const activity = activityInput.value.trim();
    const dueDate = dueDateInput.value;
    
    if (!subject || !activity) {
        showError('Por favor, completa todos los campos.');
        return;
    }
    
    // Validar fecha (no puede ser pasada)
    const selectedDate = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer a medianoche para comparar solo fechas
    
    if (selectedDate < today) {
        showError('La fecha de entrega no puede ser pasada.');
        return;
    }
    
    // Crear nueva tarea
    const newTask = {
        id: taskIdCounter++,
        subject: subject,
        activity: activity,
        dueDate: dueDate,
        status: 'Pendiente'
    };
    
    // Agregar a la lista
    tasks.push(newTask);
    
    // Guardar en localStorage
    saveTasks();
    
    // Actualizar la tabla
    renderTasks();
    
    // Limpiar formulario
    taskForm.reset();
    
    // Restablecer la fecha mínima
    dueDateInput.min = new Date().toISOString().split('T')[0];
}

// Función para mostrar error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Función para renderizar las tareas en la tabla
function renderTasks() {
    // Limpiar la tabla
    tasksTableBody.innerHTML = '';
    
    // Mostrar u ocultar elementos según haya tareas
    if (tasks.length === 0) {
        noTasksMessage.style.display = 'block';
        tasksTable.style.display = 'none';
        return;
    }
    
    noTasksMessage.style.display = 'none';
    tasksTable.style.display = 'table';
    
    // Crear filas para cada tarea
    tasks.forEach(function(task, index) {
        const row = document.createElement('tr');
        
        // Aplicar clase según estado
        if (task.status === 'Completada') {
            row.classList.add('completed');
        } else {
            row.classList.add('pending');
        }
        
        // Formatear fecha para mostrar
        const formattedDate = formatDate(task.dueDate);
        
        // Crear celdas
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.subject}</td>
            <td>${task.activity}</td>
            <td>${formattedDate}</td>
            <td>${task.status}</td>
            <td>
                <div class="action-buttons">
                    ${task.status === 'Pendiente' 
                        ? `<button class="complete-btn" onclick="completeTask(${task.id})">Completar</button>` 
                        : ''}
                    <button class="edit-btn" onclick="editTask(${task.id})">Modificar</button>
                    <button class="delete-btn" onclick="deleteTask(${task.id})">Eliminar</button>
                </div>
            </td>
        `;
        
        tasksTableBody.appendChild(row);
    });
}

// Función para completar una tarea
function completeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].status = 'Completada';
        saveTasks();
        renderTasks();
    }
}

// Función para eliminar una tarea
function deleteTask(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }
}

// Función para editar una tarea
function editTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
        const task = tasks[taskIndex];
        
        // Preguntar por nuevos valores
        const newSubject = prompt('Nueva materia:', task.subject);
        if (newSubject === null) return; // Usuario canceló
        
        const newActivity = prompt('Nueva actividad:', task.activity);
        if (newActivity === null) return;
        
        const newDueDate = prompt('Nueva fecha de entrega (YYYY-MM-DD):', task.dueDate);
        if (newDueDate === null) return;
        
        // Validar fecha
        const selectedDate = new Date(newDueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            alert('La fecha de entrega no puede ser pasada.');
            return;
        }
        
        // Actualizar tarea
        tasks[taskIndex].subject = newSubject.trim();
        tasks[taskIndex].activity = newActivity.trim();
        tasks[taskIndex].dueDate = newDueDate;
        
        saveTasks();
        renderTasks();
    }
}

// Función para formatear fecha
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Funciones para localStorage
function saveTasks() {
    // Guardar también el contador para que los IDs sean únicos
    const data = {
        tasks: tasks,
        taskIdCounter: taskIdCounter
    };
    
    localStorage.setItem('studentTasks', JSON.stringify(data));
}

function loadTasks() {
    const savedData = localStorage.getItem('studentTasks');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        tasks = data.tasks || [];
        taskIdCounter = data.taskIdCounter || 1;
    }
}