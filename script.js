const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
  // desplazamos el contenedor .slides en X
  slides.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// cambio automático cada 5 segundos
setInterval(nextSlide, 5000);