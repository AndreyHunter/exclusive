import styles from './separator.module.scss';

export const Separator = ({ className, ...props }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return <div className={combinedClasses} {...props} />;
};
