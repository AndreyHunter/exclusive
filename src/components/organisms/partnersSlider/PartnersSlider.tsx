import { Swiper, SwiperSlide } from 'swiper/react';
import { clsx } from 'clsx';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Container } from '@components/helpers/container/Container';
import { PartnerCard } from '@components/molecules/partnerCard/PartnerCard';
import type { TypePartnerCard } from 'types/static';

import { settings } from './settings';
import styles from './partnersSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import './partnersSlider.scss';

interface PartnersSliderProps {
  partners: TypePartnerCard[];
  className?: string;
}

export const PartnersSlider = ({ partners, className }: PartnersSliderProps) => {
  const isSmall = useMediaQuery('(max-width: 1024px)');
  const classes = clsx('partners-section', className);

  return (
    <section className={classes}>
      <Container>
        {partners.length > 3 || isSmall ? (
          <Swiper {...settings} className="partner-slider">
            {partners &&
              partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <PartnerCard partner={partner} renderIn="slider" />
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
