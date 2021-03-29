var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  pagination: {
    el: '.swiper-pagination',
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
		}
	},
});
// О компании - слайдер.
var swiper2 = new Swiper('.image-slider', {
	slidesPerView: 1,
	spaceBetween: 0,
	freeMode: true,
  
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Бесконечный слайдер
	  loop: true,
  });
