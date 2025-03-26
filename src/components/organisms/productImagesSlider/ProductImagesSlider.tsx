import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { clsx } from 'clsx';

import { SliderButton } from '@components/atoms/sliderButton/SliderButton';

import { settings } from './settings';
import styles from './productImagesSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductImagesSliderProps {
  images: string[];
  className?: string;
}

export const ProductImagesSlider = ({ images, className }: ProductImagesSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | undefined>(undefined);
  const classes = clsx(styles.root, className);
  return (
    <div className={classes}>
      <Swiper {...settings.thumbs} onSwiper={setThumbsSwiper} className={styles.thumbs}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.image}>
              <img src={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        {...settings.main}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <img src={image} />
            </div>
          </SwiperSlide>
        ))}
        <SliderButton direction="left" className={styles.prev} />
        <SliderButton direction="right" className={styles.next} />
      </Swiper>
    </div>
  );
};
