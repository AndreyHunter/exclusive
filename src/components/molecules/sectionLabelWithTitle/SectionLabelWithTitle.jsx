import SectionLabel from '../../atoms/sectionLabel/SectionLabel';
import SectionTitle from '../../atoms/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

const sectionLabelWithTitle = ({ label, title, className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <SectionLabel label={label} />
            <SectionTitle title={title} />
        </div>
    );
};

export default sectionLabelWithTitle;
