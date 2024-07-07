import styles from './formLabel.module.scss';

const FormLabel = ({ label, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return <div className={combinedClasses}>{label}</div>;
};

export default FormLabel;
