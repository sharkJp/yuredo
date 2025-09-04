
// var nextBtn = document.querySelector('.next-sect5-modal'),
//     prevBtn = document.querySelector('.prev-sect5-modal'),
//     carousel = document.querySelector('.carousel-sect5'),
//     list = document.querySelector('.list'),
//     item = document.querySelectorAll('.item'),
//     runningTime = document.querySelector('.carousel-sect5 .timeRunning');




// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextBtn.onclick = function () {
//     showSlider('next-sect5-modal');
// };

// prevBtn.onclick = function () {
//     showSlider('prev-sect5-modal');
// };


// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     nextBtn.click();
// }, timeAutoNext);


// var swiper = new Swiper(".mySwiper5", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         640: { slidesPerView: 2, spaceBetween: 20 },
//         768: { slidesPerView: 3, spaceBetween: 40 },
//         1024: { slidesPerView: 4, spaceBetween: 50 },
//     },
// });


// const modal = document.getElementById("imageModal");
// const closeModal = document.getElementById("closeModal");
// const hamburger = document.querySelector('.hamburger');
// const contenedorSocial = document.querySelector('#contedenedor_social');





// document.querySelectorAll('.swiper-slide img').forEach(img => {
//     img.addEventListener('click', function () {
//         modal.style.display = "flex";
//         document.body.style.overflow = "hidden"; 
//         hamburger.style.display = "none";
//         contenedorSocial.style.display = "none";
//     });
// });


// closeModal.addEventListener('click', function () {
//     modal.style.display = "none";
//     document.body.style.overflow = ""; 


   
//     hamburger.style.display = "block";
//     contenedorSocial.style.display = "block";


// });


// window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//         document.body.style.overflow = ""; 
//         hamburger.style.display = "block";
//         contenedorSocial.style.display = "block"; 
//     }
// });


// function resetTimeAnimation() {
//     runningTime.style.animation = 'none';
//     runningTime.offsetHeight; 
//     runningTime.style.animation = 'runningTime 4s linear 1 forwards';
// }


// function showSlider(type) {
//     let sliderItemsDom = list.querySelectorAll('.carousel-sect5 .list .item');
//     if (type === 'next-sect5-modal') {
//         list.appendChild(sliderItemsDom[0]);
//         carousel.classList.add('next-sect5-modal');
//     } else {
//         list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
//         carousel.classList.add('prev-sect5-modal');
//     }

   
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carousel.classList.remove('next-sect5-modal');
//         carousel.classList.remove('prev-sect5-modal');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         nextBtn.click();
//     }, timeAutoNext);

//     resetTimeAnimation(); 
// }


// resetTimeAnimation();


document.addEventListener('DOMContentLoaded', function () {
  // --- Swiper principal ---
  const swiper = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1024: { slidesPerView: 4, spaceBetween: 18 },
    },
  });

  // --- Modal ---
  const modal = document.getElementById("imageModal");
  const closeModal = document.getElementById("closeModal");
  const hamburger = document.querySelector(".hamburger");
  const contenedorSocial = document.querySelector("#contedenedor_social");

  // Carousel interno del modal
  const carousel = document.querySelector('.carousel-sect5');
  const list = document.querySelector('.carousel-sect5 .list');
  const items = document.querySelectorAll('.carousel-sect5 .list .item');
  const runningTime = document.querySelector('.carousel-sect5 .timeRunning');

  const nextBtn = document.querySelector('.next-sect5-modal');
  const prevBtn = document.querySelector('.prev-sect5-modal');

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut, runNextAuto;

  // --- Abrir modal ---
  document.querySelectorAll('.mySwiper5 .swiper-slide img').forEach((img, index) => {
    img.addEventListener('click', function () {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";

      // ocultar UI externa
      if (hamburger) hamburger.style.display = "none";
      if (contenedorSocial) contenedorSocial.style.display = "none";

      resetTimeAnimation();

      // iniciar auto-next
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    });
  });

  // --- Cerrar modal ---
  closeModal.addEventListener('click', () => closeModalFn());
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFn();
  });

  function closeModalFn() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    if (hamburger) hamburger.style.display = "block";
    if (contenedorSocial) contenedorSocial.style.display = "block";

    clearTimeout(runNextAuto);
  }

  // --- Función animación barra tiempo ---
  function resetTimeAnimation() {
    if (!runningTime) return;
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Forzar reflow
    runningTime.style.animation = 'runningTime 4s linear 1 forwards';
  }

  // --- Navegación modal ---
  function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.item');
    if (type === 'next-sect5-modal') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next-sect5-modal');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('prev-sect5-modal');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove('next-sect5-modal');
      carousel.classList.remove('prev-sect5-modal');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => showSlider('next-sect5-modal'));
    prevBtn.addEventListener("click", () => showSlider('prev-sect5-modal'));
  }

  // Iniciar animación al cargar
  resetTimeAnimation();
});
