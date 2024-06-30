import styles from './footerInfoTitle.module.scss';

const FooterInfoTitle = ({ className, title, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            {title}
        </div>
    );
};

export default FooterInfoTitle;
