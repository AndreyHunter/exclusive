import { useEffect, useRef } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@hooks/useMediaQuery';

import SliderButton from '@components/atoms/sliderButton/SliderButton';
import ProductCard from '@components/molecules/productCard/ProductCardContainer';

import settings from './settings';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './productSlider.scss';

const ProductSlider = ({ products, sliderId, buttonsPosition = 'default' }) => {
    const swiperRef = useRef(null);

    const isMobile = useMediaQuery('(max-width: 468px)');
    const isTop = buttonsPosition === 'top';

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperRef.current]);

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <div className="product-slider">
            <Swiper
                {...settings}
                modules={[Navigation]}
                navigation={{
                    prevEl: `#${sliderId}-prev`,
                    nextEl: `#${sliderId}-next`,
                }}
                ref={swiperRef}>
                {products &&
                    products.map((product) => (
                        <SwiperSlide key={product._id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>

            {isTop && !isMobile ? (
                <div className="product-slider-buttons">
                    <SliderButton
                        direction="left"
                        id={`${sliderId}-prev`}
                        className="swiper-button-prev-custom custom"
                        onClick={handlePrevClick}
                    />
                    <SliderButton
                        direction="right"
                        id={`${sliderId}-next`}
                        className="swiper-button-next-custom custom"
                        onClick={handleNextClick}
                    />
                </div>
            ) : (
                <>
                    <SliderButton
                        direction="left"
                        id={`${sliderId}-prev`}
                        className="swiper-button-prev-custom"
                        onClick={handlePrevClick}
                    />
                    <SliderButton
                        direction="right"
                        id={`${sliderId}-next`}
                        className="swiper-button-next-custom"
                        onClick={handleNextClick}
                    />
                </>
            )}
        </div>
    );
};

export default ProductSlider;
