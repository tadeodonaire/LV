// script.js

// Alternar el menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Seleccionamos el separador y la mancha de agua
const separator1 = document.querySelector('#separator1');
const waterDrop = document.querySelector('#separator1 .water-drop');

// Función para mover la "mancha de agua" con el cursor
separator1.addEventListener('mousemove', (e) => {
  const rect = separator1.getBoundingClientRect();
  const x = e.clientX - rect.left; // Posición X relativa al separador
  const y = e.clientY - rect.top;  // Posición Y relativa al separador

  // Ajustar el background-position del gradiente en función de la posición del cursor
  waterDrop.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5))`;
});

// Restaurar la posición de la mancha cuando el cursor sale de la sección
separator1.addEventListener('mouseleave', () => {
  waterDrop.style.background = `radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5))`;
});

// Función para detectar el movimiento del dedo en dispositivos táctiles
separator1.addEventListener('touchmove', (e) => {
  const rect = separator1.getBoundingClientRect();
  const touch = e.touches[0]; // Obtiene el primer toque
  const x = touch.clientX - rect.left; // Posición X relativa al separador
  const y = touch.clientY - rect.top;  // Posición Y relativa al separador

  // Ajustar el background-position del gradiente en función de la posición del toque
  waterDrop.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5))`;
});

// Restaurar la posición de la mancha cuando se termina el toque
separator1.addEventListener('touchend', () => {
  waterDrop.style.background = `radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5))`;
});



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Cerrar todos los demás elementos abiertos
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      }
    });
    
    // Alternar el estado del elemento actual
    item.classList.toggle('active');
    
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Expandir respuesta
    } else {
      answer.style.maxHeight = null; // Colapsar respuesta
    }
  });
});

// Crear burbujas solo en la sección Hero
function createBubbleInHero() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Elegir el tamaño y color de la burbuja
  const sizes = ['small', 'medium', 'large'];
  const colors = ['blue', 'pink', 'white'];
  
  const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];
  
  bubble.classList.add(sizeClass, colorClass);
  
  // Posicionar la burbuja aleatoriamente en la pantalla dentro de Hero
  bubble.style.left = `${Math.random() * 100}%`;
  document.querySelector('#hero .bubbles').appendChild(bubble);
  
  // Eliminar la burbuja después de 9 segundos
  setTimeout(() => {
    bubble.remove();
  }, 12000);
}

// Crear burbujas en intervalos ajustados dentro de Hero
setInterval(createBubbleInHero, 50);

