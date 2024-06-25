import styles from './button.module.scss';

const Button = ({ title, className, ...props }) => {
    return (
        <button type="button" className={`${styles.button} ${className}`} {...props}>
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;