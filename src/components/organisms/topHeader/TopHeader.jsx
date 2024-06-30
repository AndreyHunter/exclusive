import { Link } from 'react-router-dom';

import LanguageSelect from '../../molecules/languageSelect/LanguageSelect';
import BurgerButton from '../../atoms/burgerButton/BurgerButton';
import Container from '../../helpers/container/Container';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './topHeader.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';

const TopHeader = ({ handleMenuOpen, className, ...props }) => {
    const isMobile = useMediaQuery('(max-width: 986px)');
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <section className={combinedClasses} {...props}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.message}>
                        <div className={styles.message_text}>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <Link className={styles.link}>ShopNow</Link>
                    </div>

                    <FlexBlock className={styles.flex} gap={30} alignCenter>
                        <LanguageSelect />
                        {isMobile && <BurgerButton onClick={handleMenuOpen} />}
                    </FlexBlock>
                </div>
            </Container>
        </section>
    );
};

export default TopHeader;