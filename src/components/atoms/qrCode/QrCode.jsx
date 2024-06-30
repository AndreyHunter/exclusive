import styles from './qrCode.module.scss';

const QrCode = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <img src="/src/assets/images/qr-code.jpg" alt="qr-code" />
        </div>
    );
};

export default QrCode;
