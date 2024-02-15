const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
