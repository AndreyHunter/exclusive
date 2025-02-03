import { Pagination } from 'swiper/modules';

export const settings = {
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  // allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};
