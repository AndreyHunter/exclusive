import styles from './sectionTitle.module.scss';

const SectionTitle = ({ title, className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <h2 className={combinedClasses} {...props}>
            {title}
        </h2>
    );
};

export default SectionTitle;
