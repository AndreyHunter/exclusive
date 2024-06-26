import SectionLabel from '../../ui/sectionLabel/SectionLabel';
import SectionTitle from '../../ui/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

const sectionLabelWithTitle = ({ label, title, ...props }) => {
    return (
        <div className={styles.titleBox} {...props}>
            <SectionLabel label={label} />
            <SectionTitle title={title} />
        </div>
    );
};

export default sectionLabelWithTitle;
