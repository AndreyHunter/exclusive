import { Link } from 'react-router-dom';

import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

import FlexBlock from '../../components/flexBlock/FlexBlock';
import Button from '../../ui/button/Button';

import styles from './notFoundPage.module.scss';
import Container from '../../components/container/Container';

const NotFoundPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="404 Error" />
            </Container>
            <section className={styles.section}>
                <FlexBlock column gap={40} className={styles.block}>
                    <h2 className={styles.title}>404 Not Found</h2>
                    <p className={styles.message}>
                        Your visited page not found. You may go home page.
                    </p>
                </FlexBlock>
                <FlexBlock justifyCenter>
                    <Link to="/">
                        <Button title="Back to home page" className={styles.button} />
                    </Link>
                </FlexBlock>
            </section>
        </>
    );
};

export default NotFoundPage;
