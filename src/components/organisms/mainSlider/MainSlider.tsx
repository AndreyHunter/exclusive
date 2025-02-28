import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks';
import { closeUserMenu } from '@features/userMenu/userMenuSlice';
import { ROUTES } from '@routes/routes';
import type { SlideImg } from 'types/static';

import { mainSlides } from './mainSlides';

import 'swiper/css';
import 'swiper/css/pagination';
import './mainSlider.scss';

interface MainSliderProps {
  slides?: SlideImg[];
}

export const MainSlider = ({ slides = mainSlides }: MainSliderProps) => {
  const dispatch = useAppDispatch();

  const handleMenuClose = () => {
    dispatch(closeUserMenu());
  };

  return (
    <Swiper
      onClick={handleMenuClose}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{ delay: 6000 }}
      speed={600}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={`${ROUTES.PRODUCT}/${slide.id}`}>
            <picture>
              <source media="(max-width: 560px)" srcSet={slide.smallImgPath} />
              <source media="(min-width: 561px)" srcSet={slide.largeImgPath} />
              <img src={slide.largeImgPath} alt={`Product-${slide.id}`} loading="lazy" />
            </picture>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
