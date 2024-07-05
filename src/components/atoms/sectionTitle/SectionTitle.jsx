import styles from './sectionTitle.module.scss';

const SectionTitle = ({ title, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return <h2 className={combinedClasses}>{title}</h2>;
};

export default SectionTitle;
