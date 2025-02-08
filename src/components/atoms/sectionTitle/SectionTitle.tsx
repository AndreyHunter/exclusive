import styles from './sectionTitle.module.scss';

export const SectionTitle = ({ title, className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return <h2 className={combinedClasses}>{title}</h2>;
};
