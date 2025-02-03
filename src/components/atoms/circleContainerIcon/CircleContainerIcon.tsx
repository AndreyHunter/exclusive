import styles from './circleContainerIcon.module.scss';

export const CircleContainerIcon = ({ icon, className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return (
    <div className={combinedClasses}>
      <div>{icon}</div>
    </div>
  );
};
