import { Swiper, SwiperSlide } from 'swiper/react';

import gameCategories from '@constants/gameCategories';

import SliderButton from '@components/atoms/sliderButton/SliderButton';
import CategoryItem from '@components/molecules/categoryItem/CategoryItem';

import settings from './settings';

import 'swiper/css';
import 'swiper/css/navigation';
import './categorySlider.scss';

const CategorySlider = () => {
    return (
        <div className="categories-slider">
            <Swiper {...settings}>
                {gameCategories &&
                    gameCategories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryItem category={category} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="categories-slider-buttons">
                <SliderButton direction="left" className="categories-slider-button-prev" />
                <SliderButton direction="right" className="categories-slider-button-next" />
            </div>
        </div>
    );
};

export default CategorySlider;
