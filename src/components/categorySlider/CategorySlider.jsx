import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryItem from '../categoryItem/CategoryItem';
import SliderButton from '../../ui/sliderButton/SliderButton';

import settings from './settings';
import categories from '../../constants/categories';

import 'swiper/css';
import 'swiper/css/navigation';
import './categorySlider.scss';

const CategorySlider = () => {
    return (
        <div className="categories-slider">
            <Swiper {...settings}>
                {categories &&
                    categories.map((category) => (
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
