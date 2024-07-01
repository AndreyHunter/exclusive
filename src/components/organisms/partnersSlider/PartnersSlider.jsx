import { Swiper, SwiperSlide } from 'swiper/react';

import Container from '../../helpers/container/Container';
import PartnerCard from '../../molecules/partnerCard/PartnerCard';

import partners from '../../../constants/partners';
import swiperSettings from './swiperSettings';

import 'swiper/css';
import 'swiper/css/pagination';
import './partnersSlider.scss';

const PartnersSection = ({ className, ...props }) => {
    const combinedClasses = `partners-section ${className || ''}`;

    return (
        <section className={combinedClasses} {...props}>
            <Container>
                <Swiper {...swiperSettings} className="partners-slider">
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
