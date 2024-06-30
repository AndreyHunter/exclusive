import { Link } from 'react-router-dom';

import Logo from '../../atoms/logo/Logo';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import FooterInfoTitle from '../../atoms/footerInfoTitle/FooterInfoTitle';
import QrCode from '../../atoms/qrCode/QrCode';
import MobileAppLink from '../../molecules/mobileAppLink/MobileAppLink';
import SocialMediaList from '../../molecules/socialMediaList/SocialMediaList';
import SendEmailForm from '../../molecules/sendEmailForm/SendEmailForm';

import CopyrightIcon from '../../../assets/icons/copyright.svg?react';

import Container from '../../helpers/container/Container';
import Separator from '../../atoms/separator/Separator';

import styles from './footer.module.scss';

const Footer = ({ className, ...props }) => {
    return (
        <footer className={`${styles.footer} ${className}`} {...props}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <FlexBlock column gap={16}>
                            <FlexBlock column gap={24}>
                                <Logo color="white" />
                                <FooterInfoTitle title="Subscribe" />
                                <p>Get 10% off your first order</p>
                            </FlexBlock>
                            <SendEmailForm />
                        </FlexBlock>
                    </div>
                    <div className={styles.column}>
                        <FlexBlock column gap={24}>
                            <FooterInfoTitle title="Support" />
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </FlexBlock>
                    </div>
                    <div className={styles.column}>
                        <FlexBlock column gap={24}>
                            <FooterInfoTitle title="Account" />
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Link to="/my-account" className={styles.link}>
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
                        </FlexBlock>
                    </div>
                    <div className={styles.column}>
                        <FlexBlock column gap={24}>
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
                        </FlexBlock>
                    </div>
                    <div className={styles.column}>
                        <FlexBlock column gap={24}>
                            <FooterInfoTitle title="Download App" />
                            <FlexBlock column gap={8}>
                                <p className={styles.save}>Save $3 with App New User Only</p>
                                <FlexBlock gap={8}>
                                    <QrCode />
                                    <FlexBlock column gap={4}>
                                        <MobileAppLink variant="google" />
                                        <MobileAppLink variant="apple" />
                                    </FlexBlock>
                                </FlexBlock>
                            </FlexBlock>
                            <SocialMediaList />
                        </FlexBlock>
                    </div>
                </div>
            </Container>

            <FlexBlock gap={16} column center className={styles.copyright_block}>
                <Separator className={styles.separator} />
                <Container>
                    <FlexBlock center gap={8} className={styles.copyright}>
                        <CopyrightIcon />
                        <p>Copyright Rimel 2022. All right reserved</p>
                    </FlexBlock>
                </Container>
            </FlexBlock>
        </footer>
    );
};

export default Footer;
