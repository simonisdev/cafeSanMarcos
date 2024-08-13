// Obtener el botón flotante
 const btnTop = document.getElementById('btn-top');

// Agregar evento de clic al botón
 btnTop.addEventListener('click', () => {
  // Desplazar hasta la parte superior de la página
   window.scrollTo(0, 0);
 });

// const btnTop = document.getElementById('btn-top');
// const header = document.querySelector('header');
// const heroSection = document.querySelector('#herosection');

// window.addEventListener('scroll', () => {
//   const scrollTop = window.scrollY;
//   const headerHeight = header.offsetHeight;
//   const heroSectionHeight = heroSection.offsetHeight;

//   if (scrollTop > headerHeight + heroSectionHeight) {
//     btnTop.classList.add('show');
//   } else {
//     btnTop.classList.remove('show');
//   }
// });