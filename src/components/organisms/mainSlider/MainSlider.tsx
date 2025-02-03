import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppDispatch } from '@/app/hooks';
import { closeUserMenu } from '@features/userMenu/userMenuSlice';

import { MainSlide } from './mainSlide/MainSlide';
import { mainSlides } from './mainSlides';

import 'swiper/css';
import 'swiper/css/pagination';

import './mainSlider.scss';

export const MainSlider = () => {
  const dispatch = useAppDispatch();

  const handleMenuCLose = () => {
    dispatch(closeUserMenu());
  };

  return (
    <Swiper
      onClick={handleMenuCLose}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{ delay: 6000 }}
      speed={600}>
      {mainSlides &&
        mainSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <MainSlide slide={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
