import { Pagination } from 'swiper/modules';

const swiperSettings = {
    modules: [Pagination],
    pagination: {
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
};

export default swiperSettings;