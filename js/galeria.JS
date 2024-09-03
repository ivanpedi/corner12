// Control del swiper con los botnes

const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Seleccionar los botones de filtro
const filterButtons = document.querySelectorAll('#secondary-nav a');

// Añadir evento click a cada botón
filterButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    // Remover la clase 'active' de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Añadir la clase 'active' al botón clicado
    this.classList.add('active');


    // Obtener el filtro seleccionado
    const filter = this.getAttribute('data-filter');

    // Mostrar/Ocultar slides según el filtro
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      if (filter === 'all') {
        // Mostrar todos los slides
        slide.style.display = 'block';
      } else if (slide.classList.contains(filter)) {
        // Mostrar los slides que tienen la clase correspondiente al filtro
        slide.style.display = 'block';
      } else {
        // Ocultar todos los demás slides
        slide.style.display = 'none';
      }
    });

    // Actualizar Swiper para que reconozca los cambios
    swiper.update();
  });
});



