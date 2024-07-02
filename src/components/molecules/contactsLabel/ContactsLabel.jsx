import PhoneIcon from '../../../assets/icons/contacts-phone.svg?react';
import EmailIcon from '../../../assets/icons/contacts-email.svg?react';

import styles from './contactsLabel.module.scss';

const ContactsLabel = ({ label, icon, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    const isPhone = icon === 'phone';
    const isEmail = icon === 'email';
    const iconResult = isPhone ? <PhoneIcon /> : isEmail ? <EmailIcon /> : null;

    return (
        <div className={combinedClasses}>
            {iconResult} <span>{label}</span>
        </div>
    );
};

export default ContactsLabel;
