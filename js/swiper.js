var swiper = new Swiper(".our-offers-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  // pagination: {
  //   el: ".main__our-offers__items__item-right__item-paggination",
  //   type: 'bullets',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.main__our-offers__items__item-right__item-right',
    prevEl: '.main__our-offers__items__item-right__item-left',
  },
  // Бесконечный слайдер
  loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// О компании - слайдер.
var swiper2 = new Swiper(".image-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Бесконечный слайдер
  loop: true,
});

//   Почему выбирают именно нас?
var swiper3 = new Swiper(
  ".main__zemlya-u-nas__wrapper__items-2__main-item__slider",
  {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".zemlya-arrow-right",
      prevEl: ".zemlya-arrow-left",
    },
    // Бесконечный слайдер
    loop: true,
  }
);

// А что у нас нового?
var swiper3 = new Swiper(".main__what-new__slider-container__swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  navigation: {
    nextEl: ".what-new__arrow-right",
    prevEl: ".what-new__arrow-left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Бесконечный слайдер
  loop: true,
  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// var swiper4 = new Swiper(".main__about-company__wrapper__side-items", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   freeMode: true,

//   navigation: {
//     nextEl: ".what-new__arrow-right",
//     prevEl: ".what-new__arrow-left",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // Бесконечный слайдер
//   loop: true,
//   // Брейк поинты (адаптив)
//   // Ширина экрана
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     480: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//   },
// });

