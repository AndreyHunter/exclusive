import { useDispatch } from 'react-redux';

import { closeUserMenu } from '@store/userMenu/userMenuSlice';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import MainSlide from './mainSlide/MainSlide';
import mainSlides from './mainSlides';

import 'swiper/css';
import 'swiper/css/pagination';

import './mainSlider.scss';

const MainSlider = () => {
    const dispatch = useDispatch();

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

export default MainSlider;
