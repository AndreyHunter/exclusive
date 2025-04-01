import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';

import styles from './sizeList.module.scss';

interface SizeListProps {
  sizes: string[];
  selectedSize: string;
  onChange: (type: 'size' | 'color', value: string) => void;
}

const sizeOrder = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

const sortSizes = (sizes: string[]) => {
  return sizes.slice().sort((a, b) => {
    const indexA = sizeOrder.indexOf(a);
    const indexB = sizeOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
};

export const SizeList = ({ sizes, selectedSize, onChange }: SizeListProps) => {
  const sortedSized = sortSizes(sizes);

  return (
    <Flex tagElement="ul" gap={16} className={styles.root}>
      {sortedSized.map((size) => {
        const displaySize = size.toUpperCase();
        return (
          <li key={size}>
            <Flex
              tagElement="label"
              alignItems="center"
              justifyContent="center"
              className={clsx(styles.label, selectedSize === size && styles.checked)}>
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={() => onChange('size', size)}
              />
              <span>{displaySize}</span>
            </Flex>
          </li>
        );
      })}
    </Flex>
  );
};
