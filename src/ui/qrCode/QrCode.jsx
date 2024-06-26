import styles from './qrCode.module.scss';

const QrCode = ({ className, ...props }) => {
    return (
        <div className={`${styles.wrapper} ${className}`} {...props}>
            <img src="/src/assets/images/qr-code.jpg" alt="qr-code" />
        </div>
    );
};

export default QrCode;