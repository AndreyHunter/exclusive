import { SectionLabel } from '@components/atoms/sectionLabel/SectionLabel';
import { SectionTitle } from '@components/atoms/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

export const SectionLabelWithTitle = ({ label, title, className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return (
    <div className={combinedClasses}>
      <SectionLabel label={label} />
      <SectionTitle title={title} />
    </div>
  );
};
