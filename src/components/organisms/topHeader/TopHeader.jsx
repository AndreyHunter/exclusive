import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { mobileMenuSelector } from '@store/mobileMenu/mobileMenuSelectors';
import { toggleMenuOpen } from '@store/mobileMenu/mobileMenuSlice';

import useMediaQuery from '@hooks/useMediaQuery';

import BurgerButton from '@components/atoms/burgerButton/BurgerButton';
import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import LanguageSelect from '@components/molecules/languageSelect/LanguageSelect';

import styles from './topHeader.module.scss';

const TopHeader = ({ className }) => {
    const isOpen = useSelector(mobileMenuSelector);
    const dispatch = useDispatch();

    const handleMenuOpen = () => {
        dispatch(toggleMenuOpen());
    };

    const isMobile = useMediaQuery('(max-width: 986px)');
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.message}>
                        <div className={styles.message_text}>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <Link className={styles.link}>ShopNow</Link>
                    </div>

                    <Flex className={styles.flex} alignItems="center" gap={30}>
                        <LanguageSelect />
                        {isMobile && <BurgerButton isOpen={isOpen} onClick={handleMenuOpen} />}
                    </Flex>
                </div>
            </Container>
        </section>
    );
};

export default TopHeader;
