import styles from './sliderButton.module.scss';

const SliderButton = ({ direction = 'right', color = 'black' }) => {
    const rotation = direction === 'right' ? 180 : 0;

    return (
        <div className={styles.button}>
            <svg
                style={{ transform: `rotate(${rotation}deg)` }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default SliderButton;
