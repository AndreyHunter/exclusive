import SectionLabelWithTitle from '../sectionLabelWithTitle/SectionLabelWithTitle';
import Button from '../../ui/button/Button';
import BestSellersList from '../../components/bestSellersList/BestSellersList';

import Container from '../../components/container/Container';

import styles from './bestSellersSection.module.scss';

const BestSellersSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <div className={styles.block}>
                    <SectionLabelWithTitle label="This Month" title="Best Selling Products" />
                    <Button title="View All" />
                </div>
                <BestSellersList />
            </Container>
        </section>
    );
};

export default BestSellersSection;
