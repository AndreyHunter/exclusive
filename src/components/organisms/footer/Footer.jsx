import { Link } from 'react-router-dom';

import Logo from '../../atoms/logo/Logo';
import FooterInfoTitle from '../../atoms/footerInfoTitle/FooterInfoTitle';
import QrCode from '../../atoms/qrCode/QrCode';
import MobileAppLink from '../../molecules/mobileAppLink/MobileAppLink';
import SocialMediaList from '../../molecules/socialMediaList/SocialMediaList';
import SendEmailForm from '../../molecules/sendEmailForm/SendEmailForm';
import Separator from '../../atoms/separator/Separator';

import Container from '../../helpers/container/Container';
import Flex from '../../helpers/flex/Flex';

import CopyrightIcon from '../../../assets/icons/copyright.svg?react';

import styles from './footer.module.scss';

const Footer = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <footer className={combinedClasses}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Flex flexDirection="column" gap={16}>
                            <Flex flexDirection="column" gap={24}>
                                <Logo color="white" />
                                <FooterInfoTitle title="Subscribe" />
                                <p>Get 10% off your first order</p>
                            </Flex>
                            <SendEmailForm />
                        </Flex>
                    </div>
                    <div className={styles.column}>
                        <Flex flexDirection="column" gap={24}>
                            <FooterInfoTitle title="Support" />
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </Flex>
                    </div>
                    <div className={styles.column}>
                        <Flex flexDirection="column" gap={24}>
                            <FooterInfoTitle title="Account" />
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Link to="/account" className={styles.link}>
                                        My Account
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/auth" className={styles.link}>
                                        Login / Register
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/cart" className={styles.link}>
                                        Cart
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/wishlist" className={styles.link}>
                                        Wishlist
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/catalog" className={styles.link}>
                                        Shop
                                    </Link>
                                </li>
                            </ul>
                        </Flex>
                    </div>
                    <div className={styles.column}>
                        <Flex flexDirection="column" gap={24}>
                            <FooterInfoTitle title="Quick Link" />
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Link to="/privacy-policy" className={styles.link}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/terms-of-use" className={styles.link}>
                                        Terms Of Use
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="faq" className={styles.link}>
                                        FAQ
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to="/contacts" className={styles.link}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </Flex>
                    </div>
                    <div className={styles.column}>
                        <Flex flexDirection="column" gap={24}>
                            <FooterInfoTitle title="Download App" />
                            <Flex flexDirection="column" gap={8}>
                                <p className={styles.save}>Save $3 with App New User Only</p>
                                <Flex gap={8}>
                                    <QrCode />
                                    <Flex flexDirection="column" gap={4}>
                                        <MobileAppLink variant="google" />
                                        <MobileAppLink variant="apple" />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <SocialMediaList />
                        </Flex>
                    </div>
                </div>
            </Container>

            <Flex flexDirection="column" gap={16} className={styles.copyright_block}>
                <Separator className={styles.separator} />
                <Container>
                    <Flex gap={8} alignItems="center" className={styles.copyright}>
                        <CopyrightIcon />
                        <p>Copyright Rimel 2022. All right reserved</p>
                    </Flex>
                </Container>
            </Flex>
        </footer>
    );
};

export default Footer;
