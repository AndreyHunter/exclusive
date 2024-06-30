import styles from './sectionLabel.module.scss';

const SectionLabel = ({ label, className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="40"
                viewBox="0 0 20 40"
                fill="none">
                <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>
            {label}
        </div>
    );
};

export default SectionLabel;