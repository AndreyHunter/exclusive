import qrCodeImage from '../../../assets/images/qr-code.jpg';

import styles from './qrCode.module.scss';

const QrCode = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <img src={qrCodeImage} alt="qr-code" />
        </div>
    );
};

export default QrCode;