import { Link } from 'react-router-dom';

import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';

import FlexBlock from '../../components/helpers/flexBlock/FlexBlock';
import Button from '../../components/atoms/button/Button';

import styles from './notFoundPage.module.scss';
import Container from '../../components/helpers/container/Container';

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
                    <Button
                        type="link"
                        to="/"
                        title="Back to home page"
                        className={styles.button}
                    />
                </FlexBlock>
            </section>
        </>
    );
};

export default NotFoundPage;
