import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { ROUTES } from '@routes/routes';
import { closeMobileMenu, selectIsMobileMenuOpen } from '@features/mobileMenu/mobileMenuSlice';
import { categories } from '@constants/categories';
import { navPages } from '@constants/navPages';
import { SocialMediaList } from '@components/molecules/socialMediaList/SocialMediaList';
import { Logo } from '@components/atoms/logo/Logo';
import { Flex } from '@components/helpers/flex/Flex';
import { UserActionsContainer as UserActions } from '@components/molecules/userActions/UserActionsContainer';

import styles from './mobileMenu.module.scss';

export const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsMobileMenuOpen);

  useEffect(() => {
    const body = document.querySelector('body')!;
    if (isOpen) {
      body.classList.add(styles.hidden);
    } else {
      body.classList.remove(styles.hidden);
    }

    return () => {
      body.classList.remove(styles.hidden);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleCloseMenu = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <section className={clsx(styles.root, isOpen && styles.open)}>
      <Flex flexDirection="column" gap={30} className={styles.content}>
        <Flex alignItems="center" justifyContent="space-between">
          <Logo color="white" className={styles.logo} onClick={handleCloseMenu} />
          <UserActions className={styles.actions} color="white" mobile />
        </Flex>
        <div className={styles.grid}>
          <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  <Link to={`${ROUTES.PRODUCTS}/${category.path}`} onClick={handleCloseMenu}>
                    {category.name}
                  </Link>
                </li>
              ))}
          </Flex>
          <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
            {navPages &&
              navPages.map((page) => (
                <li key={page.id}>
                  <Link to={page.path} onClick={handleCloseMenu}>
                    {page.name}
                  </Link>
                </li>
              ))}
          </Flex>
        </div>
        <SocialMediaList />
      </Flex>
    </section>
  );
};
