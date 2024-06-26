import SendIcon from '../../assets/icons/icon-send.svg?react';

import styles from './/sendEmailForm.module.scss';

const SendEmailForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.button}>
                <SendIcon className={styles.icon} />
            </button>
        </form>
    );
};

export default SendEmailForm;