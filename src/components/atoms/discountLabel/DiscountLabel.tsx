import styles from './discountLabel.module.scss';

export const DiscountLabel = ({ discount, className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return <div>{discount && <div className={combinedClasses}>-{discount}%</div>}</div>;
};
