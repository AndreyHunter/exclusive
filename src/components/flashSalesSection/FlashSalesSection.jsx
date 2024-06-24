import SectionLabel from '../../ui/sectionLabel/SectionLabel';
import SectionTitle from '../../ui/sectionTitle/SectionTitle';

import Container from '../container/Container';

import styles from './flashSalesSection.module.scss';

const FlashSalesSection = () => {
    return (
        <Container>
            <section>
                <div>
                    <div className={styles.titleBox}>
                        <SectionLabel label="Today’s" />
                        <SectionTitle title="Flash Sales" />
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default FlashSalesSection;
