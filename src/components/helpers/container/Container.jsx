import styles from './container.module.scss';

export const Container = ({ variant = 'default', children, className, paddingTop }) => {
  const combinedClasses = [
    `${styles.root} ${className || ''}`,
    variant === 'default' && styles.default,
    variant === 'small' && styles.small,
    variant === 'large' && styles.large,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={combinedClasses} style={{ paddingTop }}>
      {children}
    </div>
  );
};
