import { Pagination } from 'swiper/modules';

const swiperSettings = {
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

export default swiperSettings;
