import SendIcon from '@assets/icons/icon-send.svg?react';

import styles from './sendEmailForm.module.scss';

interface SendEmailFormProps {
  onSubmit: () => void;
}

export const SendEmailForm = ({ onSubmit }: SendEmailFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <input type="text" placeholder="Enter your email" />
      <button className={styles.button}>
        <SendIcon className={styles.icon} />
      </button>
    </form>
  );
};
