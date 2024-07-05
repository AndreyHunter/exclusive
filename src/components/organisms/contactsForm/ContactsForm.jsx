import BoxWrapper from '../../atoms/boxWrapper/BoxWrapper';
import FormInput from '../../molecules/formInput/FormInput';
import Button from '../../atoms/button/Button';

import Flex from '../../helpers/flex/Flex';

import styles from './contactsForm.module.scss';

const ContactsForm = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <BoxWrapper className={combinedClasses}>
            <form className={styles.form}>
                <Flex gap={15} className={styles.inputs}>
                    <FormInput placeholder="Your Name" required />
                    <FormInput placeholder="Your Email" required />
                    <FormInput placeholder="Your Phone" required />
                </Flex>
                <FormInput placeholder="Your Massage" className={styles.message} />
                <Flex justifyContent="flex-end">
                    <Button title="Send Massage" />
                </Flex>
            </form>
        </BoxWrapper>
    );
};

export default ContactsForm;