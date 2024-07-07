import BoxWrapper from '@components/atoms/boxWrapper/BoxWrapper';
import Button from '@components/atoms/button/Button';
import Flex from '@components/helpers/flex/Flex';
import FormInput from '@components/molecules/formInput/FormInput';

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
