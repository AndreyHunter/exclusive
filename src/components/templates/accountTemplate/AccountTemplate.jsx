import { Outlet, useLocation } from 'react-router-dom';

import { Utils } from '../../../utils/';

import Container from '../../helpers/container/Container';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import BreadCrumbs from '../../molecules/breadCrumbs/BreadCrumbs';
import AccountNav from '../../organisms/accountNav/AccountNav';

import styles from './accountTemplate.module.scss';

const AccountTemplate = () => {
    const location = useLocation();

    const breadcrumbs = Utils.generateBreadcrumbs(location.pathname);

    return (
        <>
            <Container>
                <FlexBlock center spaceBetween className={styles.block}>
                    <BreadCrumbs elements={breadcrumbs} />
                    <div className={styles.welcome}>
                        Welcome! <span>Md Rimel</span>
                    </div>
                </FlexBlock>
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