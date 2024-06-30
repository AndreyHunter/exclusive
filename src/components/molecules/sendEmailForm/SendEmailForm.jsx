import SendIcon from '../../../assets/icons/icon-send.svg?react';

import styles from './sendEmailForm.module.scss';

const SendEmailForm = ({ className, onSubmit, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className={combinedClasses} {...props}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.button}>
                <SendIcon className={styles.icon} />
            </button>
        </form>
    );
};

export default SendEmailForm;
