const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
showSlide(currentSlide); // Muestra la primera imagen al cargar la página