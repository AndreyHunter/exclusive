import BoxWrapper from '../../atoms/boxWrapper/BoxWrapper';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import FormInput from '../../molecules/formInput/FormInput';
import Button from '../../atoms/button/Button';

import styles from './contactsForm.module.scss';

const ContactsForm = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <BoxWrapper className={combinedClasses}>
            <form className={styles.form}>
                <FlexBlock gap={15} className={styles.inputs}>
                    <FormInput placeholder="Your Name" required />
                    <FormInput placeholder="Your Email" required />
                    <FormInput placeholder="Your Phone" required />
                </FlexBlock>
                <FormInput placeholder="Your Massage" className={styles.message} />
                <FlexBlock justifyEnd>
                    <Button title="Send Massage" />
                </FlexBlock>
            </form>
        </BoxWrapper>
    );
};

export default ContactsForm;
