import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '../../../hooks/useMediaQuery';

import ProductCard from '../../molecules/productCard/ProductCard';
import SliderButton from '../../atoms/sliderButton/SliderButton';

import settings from './swiperSettings';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productSlider.scss';

const ProductSlider = ({ products, buttonsPosition = 'default' }) => {
    const isMobile = useMediaQuery('(max-width: 468px)');
    const isDefault = buttonsPosition === 'default';
    const isTop = buttonsPosition === 'top';

    return (
        <div className="product-slider">
            <Swiper {...settings}>
                {products &&
                    products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            {isDefault && (
                <>
                    <SliderButton direction="left" className="swiper-button-prev-custom" />
                    <SliderButton direction="right" className="swiper-button-next-custom" />
                </>
            )}
            {isTop && !isMobile ? (
                <div className="product-slider-buttons">
                    <SliderButton direction="left" className="swiper-button-prev-custom custom" />
                    <SliderButton direction="right" className="swiper-button-next-custom custom" />
                </div>
            ) : (
                <>
                    <SliderButton direction="left" className="swiper-button-prev-custom" />
                    <SliderButton direction="right" className="swiper-button-next-custom" />
                </>
            )}
        </div>
    );
};

export default ProductSlider;