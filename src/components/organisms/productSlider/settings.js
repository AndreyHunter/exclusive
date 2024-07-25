import { Navigation, Pagination } from 'swiper/modules';

import styles from './productSlider.module.scss';

const settings = {
    modules: [Navigation, Pagination],
    navigation: { prevEl: `.${styles.prev}`, nextEl: `.${styles.next}` },
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 30,
    // allowTouchMove: false,
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
