import { Swiper, SwiperSlide } from 'swiper/react';

import partners from '@constants/partners';

import Container from '@components/helpers/container/Container';
import PartnerCard from '@components/molecules/partnerCard/PartnerCard';

import settings from './settings';

import 'swiper/css';
import 'swiper/css/pagination';
import './partnersSlider.scss';

const PartnersSection = ({ className }) => {
    const combinedClasses = `partners-section ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <Swiper {...settings} className="partners-slider">
                    {partners &&
                        partners.map((partner) => (
                            <SwiperSlide key={partner.id}>
                                <PartnerCard partner={partner} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default PartnersSection;
