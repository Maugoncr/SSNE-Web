var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // 1240: {
    //   slidesPerView: 4,
    //   spaceBetween: 50,
    // },
  }
});