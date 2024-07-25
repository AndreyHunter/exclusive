import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@hooks/useMediaQuery';

import partners from '@constants/partners';

import Container from '@components/helpers/container/Container';
import PartnerCard from '@components/molecules/partnerCard/PartnerCard';

import settings from './settings';

import 'swiper/css';
import 'swiper/css/pagination';
import './partnersSlider.scss';
import styles from './partnersSlider.module.scss';

const PartnersSection = ({ className }) => {
    const isSmall = useMediaQuery('(max-width: 1024px)');
    const combinedClasses = `partners-section ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                {partners.length > 3 ? (
                    <Swiper {...settings} className="partner-slider">
                        {partners &&
                            partners.map((partner) => (
                                <SwiperSlide key={partner.id}>
                                    <PartnerCard partner={partner} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ) : isSmall ? (
                    <Swiper {...settings} className="partner-slider">
                        {partners &&
                            partners.map((partner) => (
                                <SwiperSlide key={partner.id}>
                                    <PartnerCard partner={partner} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                ) : (
                    <ul className={styles.list}>
                        {partners.map((partner) => {
                            return <PartnerCard key={partner.id} partner={partner} />;
                        })}
                    </ul>
                )}
            </Container>
        </section>
    );
};

export default PartnersSection;
