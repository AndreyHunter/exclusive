import ShopNowLink from '../../../ui/shopNowLink/ShopNowLink';

import styles from './mainSlide.module.scss';

const MainSlide = ({ slide }) => {
    const bg = slide.backgroundColor;

    return (
        <div className={styles.slide} style={{ background: bg }}>
            <div className={styles.info}>
                <div className={styles.name_wrapper}>
                    {slide.images?.icon && <img src={slide.images.icon} alt={slide.name} />}
                    <div className={styles.name}>{slide.productName}</div>
                </div>
                <div className={styles.title}>{slide.title}</div>
                <ShopNowLink arrow direction="row" link={slide.link} />
            </div>
            {slide.images.image && (
                <img src={slide.images.image} alt={slide.name} className={styles.image} />
            )}
        </div>
    );
};

export default MainSlide;