import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';

import styles from './sizeList.module.scss';

interface SizeListProps {
  sizes: string[];
  selectedSize: string;
  onChange: (size: string) => void;
}

export const SizeList = ({ sizes, selectedSize, onChange }: SizeListProps) => {
  return (
    <Flex tagElement="ul" gap={16} className={styles.root}>
      {sizes &&
        sizes.map((size, index) => (
          <li key={index}>
            <Flex
              tagElement="label"
              alignItems="center"
              justifyContent="center"
              className={clsx(styles.label, selectedSize === size && styles.checked)}>
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
