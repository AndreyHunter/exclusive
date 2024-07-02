import Container from '../../components/helpers/container/Container';
import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import EditProfileForm from '../../components/organisms/editProfileForm/EditProfileForm';
import AccountNav from '../../components/organisms/accountNav/AccountNav';

import styles from './profilePage.module.scss';

const ProfilePage = () => {
    return (
        <>
            <BreadCrumbs activePage="My Account" />
            <section className={styles.section}>
                <Container>
                    <div className={styles.grid}>
                        <AccountNav className={styles.nav} />
                        <EditProfileForm />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ProfilePage;