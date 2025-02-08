import styles from './footerInfoTitle.module.scss';

export const FooterInfoTitle = ({ className, title }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return <div className={combinedClasses}>{title}</div>;
};
