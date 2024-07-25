import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@hooks/useMediaQuery';

import SliderButton from '@components/atoms/sliderButton/SliderButton';
import ProductCard from '@components/molecules/productCard/ProductCard';

import settings from './settings';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './productSlider.module.scss';

const ProductSlider = ({ products, buttonsPosition = 'default' }) => {
    const isMobile = useMediaQuery('(max-width: 468px)');
    const isTop = buttonsPosition === 'top';

    return (
        <div className={styles.slider}>
            <Swiper {...settings}>
                {products &&
                    products.map((product) => (
                        <SwiperSlide key={product._id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            {isTop && !isMobile ? (
                <div className={styles.buttons}>
                    <SliderButton direction="left" className={`${styles.prev} ${styles.custom}`} />
                    <SliderButton direction="right" className={`${styles.next} ${styles.custom}`} />
                </div>
            ) : (
                <>
                    <SliderButton direction="left" className={styles.prev} />
                    <SliderButton direction="right" className={styles.next} />
                </>
            )}
        </div>
    );
};

export default ProductSlider;
