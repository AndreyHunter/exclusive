import SectionLabel from '../../atoms/sectionLabel/SectionLabel';
import SectionTitle from '../../atoms/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

const sectionLabelWithTitle = ({ label, title, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <SectionLabel label={label} />
            <SectionTitle title={title} />
        </div>
    );
};

export default sectionLabelWithTitle;
