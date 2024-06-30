import styles from './footerInfoTitle.module.scss';

const FooterInfoTitle = ({ className, title, ...props }) => {
    return (
        <div className={`${styles?.title} ${className}`} {...props}>
            {title}
        </div>
    );
};

export default FooterInfoTitle;