const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const topBtn = document.getElementById('topBtn');

// Delegación de eventos
gallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('like')) {
        e.stopPropagation();
        const span = e.target.querySelector('span');
        span.textContent = parseInt(span.textContent) + 1;
        e.target.classList.toggle('liked');
    }
    
    if (e.target.classList.contains('delete')) {
        e.stopPropagation();
        e.target.closest('.card').remove();
    }
    
    if (e.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});

// Doble click para modal
gallery.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'IMG') {
        modalImg.src = e.target.src;
        modal.style.display = 'flex';
    }
});

// Cerrar modal al hacer click fuera
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Mostrar/ocultar descripción
gallery.addEventListener('mouseover', function(e) {
    if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        const desc = card.querySelector('.desc');
        desc.classList.add('show');
    }
});

gallery.addEventListener('mouseout', function(e) {
    if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        const desc = card.querySelector('.desc');
        desc.classList.remove('show');
    }
});

// Botón "Volver arriba"
window.addEventListener('scroll', function() {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});