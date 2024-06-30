import useMediaQuery from '../../../../hooks/useMediaQuery';

import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import Button from '../../../atoms/button/Button';
import BestSellersList from '../../bestSellersList/BestSellersList';

import Container from '../../../helpers/container/Container';

import styles from './bestSellersSection.module.scss';
import FlexBlock from '../../../helpers/flexBlock/FlexBlock';

const BestSellersSection = ({ className, ...props }) => {
    const combinedClassName = `${styles.section || ''} ${className || ''}`;
    const isMobile = useMediaQuery('(max-width: 668px)');

    return (
        <section className={combinedClassName} {...props}>
            <Container>
                <div className={styles.block}>
                    <SectionLabelWithTitle label="This Month" title="Best Selling Products" />
                    {!isMobile && <Button title="View All" />}
                </div>
                <BestSellersList />
                {isMobile && (
                    <FlexBlock justifyCenter className={styles.button}>
                        <Button title="View All" />
                    </FlexBlock>
                )}
            </Container>
        </section>
    );
};

export default BestSellersSection;
