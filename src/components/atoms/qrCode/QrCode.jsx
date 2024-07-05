import qrCodeImage from '../../../assets/images/qr-code.jpg';

import styles from './qrCode.module.scss';

const QrCode = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <img src={qrCodeImage} alt="qr-code" />
        </div>
    );
};

export default QrCode;