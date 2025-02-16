import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Separator } from '@components/atoms/separator/Separator';
import { ScrollToTopButton } from '@components/molecules/scrollToTopButton/ScrollToTopButton';
import { Footer } from '@components/organisms/footer/Footer';
import { Header } from '@components/organisms/header/Header';
import { MobileMenu } from '@components/organisms/mobileMenu/MobileMenu';
import { TopHeader } from '@components/organisms/topHeader/TopHeader';

import styles from './layoutTemplate.module.scss';

const LayoutTemplate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return (
    <div className={styles.root}>
      <div className={styles.top_header}>
        <TopHeader />
      </div>
      <Header className={styles.header} />
      <Separator />
      <main>
        <Outlet />
      </main>
      <Footer className={styles.footer} />
      <MobileMenu />
      <ScrollToTopButton />
    </div>
  );
};

export default LayoutTemplate;
