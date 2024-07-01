import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OurStorySection from '../../components/organisms/sections/ourStorySection/OurStorySection';
import OurStatisticList from '../../components/organisms/ourStatisticList/OurStatisticList';

import styles from './aboutPage.module.scss';

const AboutPage = () => {
    return (
        <>
            <BreadCrumbs activePage="About" />
            <OurStorySection className={styles.section} />
            <OurStatisticList className={styles.section} />
        </>
    );
};

export default AboutPage;
