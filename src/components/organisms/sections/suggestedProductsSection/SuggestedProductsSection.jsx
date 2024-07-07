import products from '@constants/products';

import Button from '@components/atoms/button/Button';
import SectionLabel from '@components/atoms/sectionLabel/SectionLabel';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import ProductSlider from '@components/organisms/productSlider/ProductSlider';

import styles from './suggestedProductsSection.module.scss';

const SuggestedProductsSection = ({ sectionTitle, linkButtonTitle, linkButtonPath, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const justForYou = products.slice(products.length - 4);

    return (
        <section className={combinedClasses}>
            <Container>
                <Flex justifyContent="space-between" className={styles.block}>
                    <SectionLabel label={sectionTitle} />
                    {linkButtonTitle && (
                        <Button
                            type="link"
                            to={linkButtonPath}
                            title={linkButtonTitle}
                            variant="transparent"
                        />
                    )}
                </Flex>
                <ProductSlider products={justForYou} buttonsPosition="default" />
            </Container>
        </section>
    );
};

export default SuggestedProductsSection;
