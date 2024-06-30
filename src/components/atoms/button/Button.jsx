import styles from './button.module.scss';

const Button = ({ title, className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <button type="button" className={combinedClasses} {...props}>
            {title ? title : 'Button'}
        </button>
    );
};

export default Button;