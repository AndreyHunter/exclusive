import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import OurStorySection from '../../components/organisms/sections/ourStorySection/OurStorySection';

import Container from '../../components/helpers/container/Container';

import styles from './aboutPage.module.scss';

const AboutPage = () => {
    return (
        <>
            <BreadCrumbs activePage="About" />
            <OurStorySection className={styles.section} />
        </>
    );
};

export default AboutPage;
