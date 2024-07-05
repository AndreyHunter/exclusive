import SendIcon from '../../../assets/icons/icon-send.svg?react';

import styles from './sendEmailForm.module.scss';

const SendEmailForm = ({ className, onSubmit }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className={combinedClasses}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.button}>
                <SendIcon className={styles.icon} />
            </button>
        </form>
    );
};

export default SendEmailForm;
