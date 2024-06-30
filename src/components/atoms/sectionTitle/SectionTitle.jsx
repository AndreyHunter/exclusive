import styles from './sectionTitle.module.scss';

const SectionTitle = ({ title }) => {
    return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;