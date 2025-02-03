import styles from './cardActionButton.module.scss';

export const CardActionButton = ({ icon, className, props }) => {
  const combinedClasses = `${styles.root} ${className || ''}`;

  return (
    <button type="button" className={combinedClasses} {...props}>
      {icon}
    </button>
  );
};
