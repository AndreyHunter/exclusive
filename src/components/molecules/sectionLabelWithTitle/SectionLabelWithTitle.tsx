import { SectionLabel } from '@components/atoms/sectionLabel/SectionLabel';
import { SectionTitle } from '@components/atoms/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

interface SectionLabelWithTitleProps {
  label: string;
  title: string;
}

export const SectionLabelWithTitle = ({ label, title }: SectionLabelWithTitleProps) => {
  return (
    <div className={styles.root}>
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{title}</SectionTitle>
    </div>
  );
};
