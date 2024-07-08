import { Thumbs, Navigation } from 'swiper/modules';

import styles from './productInfoSlider.module.scss';

const settings = {
    thumbs: {
        modules: [Thumbs],
        slidesPerView: 4,
        watchSlidesProgress: true,
        direction: 'vertical',
        spaceBetween: 15,
    },
    main: {
        modules: [Thumbs, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            prevEl: '.' + styles.prev,
            nextEl: '.' + styles.next,
        },
    },
};

export default settings;
