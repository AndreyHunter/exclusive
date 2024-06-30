import SectionLabel from '../../atoms/sectionLabel/SectionLabel';
import SectionTitle from '../../atoms/sectionTitle/SectionTitle';

import styles from './sectionLabelWithTitle.module.scss';

const sectionLabelWithTitle = ({ label, title, className, ...props }) => {
    const combinedClassName = `${styles.titleBox || ''} ${className || ''}`;

    return (
        <div className={combinedClassName} {...props}>
            <SectionLabel label={label} />
            <SectionTitle title={title} />
        </div>
    );
};

export default sectionLabelWithTitle;
