import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '../../hooks/useMediaQuery';

import ProductCard from '../productCard/ProductCard';
import SliderButton from '../../ui/sliderButton/SliderButton';
import products from '../../constants/products';

import settings from './swiperSettings';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productSlider.scss';

const ProductSlider = () => {
    const isMobile = useMediaQuery('(max-width: 468px)');

    return (
        <div className="product-slider">
            <Swiper {...settings}>
                {products &&
                    products
                        .filter((product) => product.flashSales)
                        .map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
            </Swiper>
            <div className="custom-pagination"></div>
            {!isMobile && (
                <div className="product-slider-buttons">
                    <SliderButton direction="left" className="swiper-button-prev-custom" />
                    <SliderButton direction="right" className="swiper-button-next-custom" />
                </div>
            )}
        </div>
    );
};

export default ProductSlider;
