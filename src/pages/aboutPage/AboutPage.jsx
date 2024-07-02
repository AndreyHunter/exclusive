import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OurStorySection from '../../components/organisms/sections/ourStorySection/OurStorySection';
import OurStatisticList from '../../components/organisms/ourStatisticList/OurStatisticList';
import PartnersSlider from '../../components/organisms/partnersSlider/PartnersSlider';
import AdvantagesSection from '../../components/organisms/sections/advantagesSection/AdvantagesSection';

import styles from './aboutPage.module.scss';

const AboutPage = () => {
    return (
        <>
            <BreadCrumbs activePage="About" />
            <OurStorySection className={`${styles.section} ${styles.ourStory}`} />
            <OurStatisticList className={styles.section} />
            <PartnersSlider className={styles.section} />
            <AdvantagesSection className={styles.section} />
        </>
    );
};

export default AboutPage;
