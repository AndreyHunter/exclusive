import useMediaQuery from '@hooks/useMediaQuery';

import Button from '@components/atoms/button/Button';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import SectionLabelWithTitle from '@components/molecules/sectionLabelWithTitle/SectionLabelWithTitle';
import BestSellersList from '@components/organisms/bestSellersList/BestSellersList';

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
