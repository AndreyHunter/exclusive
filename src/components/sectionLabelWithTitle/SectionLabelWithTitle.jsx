import SectionLabel from '../../ui/sectionLabel/SectionLabel';
import SectionTitle from '../../ui/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

const sectionLabelWithTitle = ({ label, title, className, ...props }) => {
    return (
        <div className={`${styles.titleBox} ${className}`} {...props}>
            <SectionLabel label={label} />
            <SectionTitle title={title} />
        </div>
    );
};

export default sectionLabelWithTitle;
