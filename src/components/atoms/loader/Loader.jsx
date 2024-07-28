import styles from './loader.module.scss';

const Loader = ({ small }) => {
    return <div className={`${styles.root} ${small && styles.small}`}></div>;
};

export default Loader;
