import { Outlet, useLocation } from 'react-router-dom';

import { Utils } from '@utils/';

import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';
import AccountNav from '@components/organisms/accountNav/AccountNav';

import styles from './accountTemplate.module.scss';

const AccountTemplate = () => {
    const location = useLocation();

    const breadcrumbs = Utils.generateBreadcrumbs(location.pathname);

    return (
        <>
            <Container>
                <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <BreadCrumbs elements={breadcrumbs} />
                    <div className={styles.welcome}>
                        Welcome! <span>Md Rimel</span>
                    </div>
                </Flex>
            </Container>
            <section className={styles.section}>
                <Container>
                    <div className={styles.grid}>
                        <AccountNav className={styles.nav} />
                        <Outlet />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AccountTemplate;
