import useMediaQuery from '../../../../hooks/useMediaQuery';

import SectionLabelWithTitle from '../../../molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import Button from '../../../atoms/button/Button';
import BestSellersList from '../../bestSellersList/BestSellersList';

import Flex from '../../../helpers/flex/Flex';
import Container from '../../../helpers/container/Container';

import styles from './bestSellersSection.module.scss';

const BestSellersSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();
    const isMobile = useMediaQuery('(max-width: 668px)');

    return (
        <section className={combinedClasses}>
            <Container>
                <div className={styles.block}>
                    <SectionLabelWithTitle label="This Month" title="Best Selling Products" />
                    {!isMobile && <Button title="View All" />}
                </div>
                <BestSellersList />
                {isMobile && (
                    <Flex justifyContent="center" className={styles.button}>
                        <Button title="View All" />
                    </Flex>
                )}
            </Container>
        </section>
    );
};

export default BestSellersSection;
