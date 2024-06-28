import { Navigation } from 'swiper/modules';

const settings = {
    modules: [Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        prevEl: '.categories-slider-button-prev',
        nextEl: '.categories-slider-button-next',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        368: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 6,
        },
    },
};

export default settings;
