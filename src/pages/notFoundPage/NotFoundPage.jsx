import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';

import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <>
            <Container>
                <BreadCrumbs activePage="404 Error" />
            </Container>
            <section className={styles.section}>
                <Flex flexDirection="column" gap={40} className={styles.block}>
                    <h2 className={styles.title}>404 Not Found</h2>
                    <p className={styles.message}>
                        Your visited page not found. You may go home page.
                    </p>
                </Flex>
                <Flex justifyContent="center">
                    <Button
                        type="link"
                        to="/"
                        title="Back to home page"
                        className={styles.button}
                    />
                </Flex>
            </section>
        </>
    );
};

export default NotFoundPage;
