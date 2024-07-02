import { Navigation, Pagination } from 'swiper/modules';

const settings = {
    modules: [Navigation, Pagination],
    navigation: { prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' },
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        468: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
};

export default settings;
