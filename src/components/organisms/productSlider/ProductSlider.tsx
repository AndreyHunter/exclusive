import { useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';

import { useMediaQuery } from '@hooks/useMediaQuery';
import { SliderButton } from '@components/atoms/sliderButton/SliderButton';
import { ProductCardContainer as ProductCard } from '@components/molecules/productCard/ProductCardContainer';
import type { Product } from 'types/index';
import { Loader } from '@/components/atoms/loader/Loader';

import { settings } from './settings';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './productSlider.scss';

export interface ProductSliderProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  sliderId: string;
  buttonsPosition?: 'default' | 'top';
}

export const ProductSlider = ({
  products,
  loading,
  error,
  sliderId,
  buttonsPosition = 'default',
}: ProductSliderProps) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const isMobile = useMediaQuery('(max-width: 468px)');
  const isTop = buttonsPosition === 'top';

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
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
        {loading ? (
          <Loader />
        ) : error ? (
          error
        ) : (
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        )}
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
