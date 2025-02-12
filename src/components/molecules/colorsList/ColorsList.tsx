import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';

import styles from './colorsList.module.scss';

interface Color {
  name: string;
  color: string;
}

interface ColorsListProps {
  colors: Color[];
  checked: string;
  onChange: (color: string) => void;
}

export const ColorsList = ({ colors, checked, onChange }: ColorsListProps) => {
  return (
    <Flex tagElement="ul" alignItems="center" gap={8}>
      {colors.map((color, index) => (
        <li key={index} className={styles.item}>
          <Flex
            tagElement="label"
            justifyContent="center"
            alignItems="center"
            className={clsx(styles.radio, checked === color.name && styles.checked)}
            style={{ background: color.color }}>
            <input
              type="radio"
              name={color.name}
              aria-label={color.name}
              checked={checked === color.name}
              onChange={() => onChange(color.name)}
            />
          </Flex>
        </li>
      ))}
    </Flex>
  );
};
