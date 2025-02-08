import styles from './loader.module.scss';

export const Loader = ({ small, paddingTop }) => {
  return <div className={`${styles.root} ${small && styles.small}`} style={{ paddingTop }}></div>;
};
