import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ProductCard from '../productCard/ProductCard';
import SliderButton from '../../ui/sliderButton/SliderButton';
import products from '../../constants/products';

import 'swiper/css';
import 'swiper/css/navigation';
import './productSlider.scss';

const ProductSlider = () => {
    return (
        <div className="product-slider">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                slidesPerView={4}
                freeMode={true}
                spaceBetween={30}>
                {products &&
                    products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="product-slider-buttons">
                <button className="swiper-button-prev-custom">
                    <SliderButton direction="left" />
                </button>
                <button className="swiper-button-next-custom">
                    <SliderButton direction="right" />
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
