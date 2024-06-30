import styles from './button.module.scss';

const Button = ({ title, className, ...props }) => {
    const combinedClassName = `${styles.button} ${className || ''}`;

    return (
        <button type="button" className={combinedClassName} {...props}>
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;