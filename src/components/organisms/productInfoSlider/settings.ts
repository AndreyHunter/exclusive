import { Thumbs, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import styles from './productInfoSlider.module.scss';

interface SliderSettings {
  thumbs: SwiperOptions;
  main: SwiperOptions;
}

export const settings: SliderSettings = {
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
