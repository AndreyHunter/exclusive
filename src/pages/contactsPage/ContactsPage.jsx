import BreadCrumbs from '../../components/molecules/breadCrumbs/BreadCrumbs';
import Container from '../../components/helpers/container/Container';
import ContactsForm from '../../components/organisms/contactsForm/ContactsForm';
import ContactsInfo from '../../components/organisms/contactsInfo/ContactsInfo';

import styles from './contactsPage.module.scss';

const ContactsPage = () => {
    return (
        <>
            <BreadCrumbs activePage="Contacts" />
            <section className={styles.section}>
                <Container>
                    <div className={styles.grid}>
                        <ContactsInfo />
                        <ContactsForm />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ContactsPage;