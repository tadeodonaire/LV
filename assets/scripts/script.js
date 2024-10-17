// script.js

// Alternar el menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Función para crear burbujas desde la parte más baja de la página
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Elegir el tamaño y color de la burbuja
  const sizes = ['small', 'medium', 'large'];
  const colors = ['blue', 'pink', 'white'];
  
  const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];
  
  bubble.classList.add(sizeClass, colorClass);
  
  // Posicionar la burbuja aleatoriamente en la pantalla
  bubble.style.left = `${Math.random() * 100}%`;
  document.querySelector('.bubbles').appendChild(bubble);
  
  // Eliminar la burbuja después de 8 segundos
  setTimeout(() => {
    bubble.remove();
  }, 9000);
}

// Crear burbujas a intervalos ajustados
setInterval(createBubble, 5);
