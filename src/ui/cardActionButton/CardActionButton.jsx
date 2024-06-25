import styles from './cardActionButton.module.scss';

const CardActionButton = ({ icon, className, props }) => {
    return (
        <button type="button" className={`${styles.action_button} ${className}`} {...props}>
            {icon}
        </button>
    );
};

export default CardActionButton;
