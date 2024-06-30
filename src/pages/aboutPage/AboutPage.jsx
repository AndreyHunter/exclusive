import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import OurStorySection from '../../components/ourStorySection/OurStorySection';

import Container from '../../components/container/Container';

import styles from './aboutPage.module.scss';

const AboutPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="About" />
            </Container>
            <OurStorySection className={styles.section} />
        </>
    );
};

export default AboutPage;