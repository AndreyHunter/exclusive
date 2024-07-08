import Flex from '@components/helpers/flex/Flex';

import styles from './sizeList.module.scss';

const SizeList = ({ selectedSize, onChange, sizes, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex tagElement="ul" gap={16} className={combinedClasses}>
            {sizes &&
                sizes.map((size, index) => (
                    <li key={index}>
                        <Flex
                            tagElement="label"
                            alignItems="center"
                            justifyContent="center"
                            className={`${styles.label} ${selectedSize === size ? styles.checked : ''}`}>
                            <input
                                type="radio"
                                name={size}
                                value={size}
                                checked={selectedSize === size}
                                onChange={() => onChange(size)}
                            />
                            <span>{size}</span>
                        </Flex>
                    </li>
                ))}
        </Flex>
    );
};

export default SizeList;