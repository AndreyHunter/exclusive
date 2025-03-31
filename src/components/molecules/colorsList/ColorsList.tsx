import { Flex } from '@components/helpers/flex/Flex';

import styles from './colorsList.module.scss';

interface ColorsListProps {
  colors: string[];
  selectedColor: string;
  onSetColor: (type: 'size' | 'color', value: string) => void;
}

export const ColorsList = ({ colors, selectedColor, onSetColor }: ColorsListProps) => {
  return (
    <Flex tagElement="ul" alignItems="center" gap={8}>
      {colors
        .slice()
        .sort()
        .map((color) => (
          <li key={color} className={styles.item}>
            <label htmlFor={`color-${color}`} className={styles.label}>
              <input
                type="radio"
                id={`color-${color}`}
                name="colorSelection"
                className={styles.input}
                checked={selectedColor === color}
                onChange={() => onSetColor('color', color)}
                value={color}
              />
              <span className={styles.color} style={{ backgroundColor: color }} title={color} />
            </label>
          </li>
        ))}
    </Flex>
  );
};
