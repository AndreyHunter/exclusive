import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OurStorySection from '../../components/organisms/sections/ourStorySection/OurStorySection';
import OurStatisticList from '../../components/organisms/ourStatisticList/OurStatisticList';
import PartnersSlider from '../../components/organisms/partnersSlider/PartnersSlider';
import AdvantagesSection from '../../components/organisms/sections/advantagesSection/AdvantagesSection';

import Container from '../../components/helpers/container/Container';

import styles from './aboutPage.module.scss';

const AboutPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="About" />
            </Container>
            <OurStorySection className={`${styles.section} ${styles.ourStory}`} />
            <OurStatisticList className={styles.section} />
            <PartnersSlider className={styles.section} />
            <AdvantagesSection className={styles.section} />
        </>
    );
};

export default AboutPage;
