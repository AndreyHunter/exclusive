import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import SliderButton from '@components/atoms/sliderButton/SliderButton';

import settings from './settings';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './productInfoSlider.module.scss';

const ProductInfoSlider = ({ images, className }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    return (
        <div className={combinedClasses}>
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
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className={styles.main}>
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

export default ProductInfoSlider;
