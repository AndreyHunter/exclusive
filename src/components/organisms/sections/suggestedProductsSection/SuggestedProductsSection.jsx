import { Link } from 'react-router-dom';

import SectionLabel from '../../../atoms/sectionLabel/SectionLabel';
import FlexBlock from '../../../helpers/flexBlock/FlexBlock';
import Button from '../../../atoms/button/Button';
import ProductSlider from '../../productSlider/ProductSlider';
import Container from '../../../helpers/container/Container';

import products from '../../../../constants/products';

import styles from './suggestedProductsSection.module.scss';

const SuggestedProductsSection = ({ sectionTitle, linkButtonTitle, linkButtonPath, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;
    const justForYou = products.slice(products.length - 4);

    return (
        <section className={combinedClasses}>
            <Container>
                <FlexBlock spaceBetween className={styles.block}>
                    <SectionLabel label={sectionTitle} />
                    {linkButtonTitle && (
                        <Link to={linkButtonPath}>
                            <Button title={linkButtonTitle} variant="transparent" />
                        </Link>
                    )}
                </FlexBlock>
                <ProductSlider products={justForYou} buttonsPosition="default" />
            </Container>
        </section>
    );
};

export default SuggestedProductsSection;