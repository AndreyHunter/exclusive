import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import MainSlide from './mainSlide/MainSlide';

import mainSlides from './mainSlides';

import 'swiper/css';
import 'swiper/css/pagination';

import './mainSlider.scss';

const MainSlider = () => {
    return (
        <Swiper
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

export default MainSlider;
