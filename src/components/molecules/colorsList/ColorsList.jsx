import Flex from '@components/helpers/flex/Flex';

import styles from './colorsList.module.scss';

const ColorsList = ({ colors, checked, onChange }) => {
    return (
        <Flex tagElement="ul" alignItems="center" gap={8}>
            {colors.map((color, index) => (
                <li key={index} className={styles.item}>
                    <Flex
                        tagElement="label"
                        justifyContent="center"
                        alignItems="center"
                        className={`${styles.radio} ${checked === color.name ? styles.checked : ''}`}
                        style={{ background: color.color }}>
                        <input
                            type="radio"
                            name={checked}
                            checked={checked === color.name}
                            onChange={() => onChange(color.name)}
                        />
                    </Flex>
                </li>
            ))}
        </Flex>
    );
};

export default ColorsList;
