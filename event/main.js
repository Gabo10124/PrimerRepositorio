// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    
    // Evento para calcular edad
    document.getElementById('fecha').addEventListener('change', function() {
        const birthDate = new Date(this.value);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        document.getElementById('ageDisplay').textContent = 'Edad: ' + age + ' años';
    });
    
    // Evento para ver fortaleza de contraseña
    document.getElementById('password').addEventListener('input', function() {
        const pass = this.value;
        let strength = 'débil';
        let color = 'red';
        
        if (pass.length >= 8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /\d/.test(pass)) {
            strength = 'fuerte';
            color = 'green';
        } else if (pass.length >= 6) {
            strength = 'media';
            color = 'orange';
        }
        
        document.getElementById('passwordStrength').textContent = 'Fortaleza: ' + strength;
        document.getElementById('passwordStrength').style.color = color;
    });
    
    // Validar formulario al enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const fecha = document.getElementById('fecha').value;
        
        // Validaciones básicas
        if (nombre.length < 3) {
            alert('Nombre debe tener al menos 3 caracteres');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('Email no válido');
            return;
        }
        
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
            alert('Contraseña debe tener 8+ caracteres, 1 mayúscula, 1 minúscula y 1 número');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        const birthDate = new Date(fecha);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            alert('Debes ser mayor de 18 años');
            return;
        }
        
        alert('¡Formulario enviado correctamente!');
        form.reset();
        document.getElementById('passwordStrength').textContent = '';
        document.getElementById('ageDisplay').textContent = '';
    });
});