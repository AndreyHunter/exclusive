import { navPages } from '@constants/navPages';
import { Logo } from '@components/atoms/logo/Logo';
import { Container } from '@components/helpers/container/Container';
import { Search } from '@components/molecules/search/Search';
import { UserActionsContainer as UserActions } from '@components/molecules/userActions/UserActionsContainer';
import { Flex } from '@components/helpers/flex/Flex';

import { HeaderNav } from './headerNav/HeaderNav';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo />
            <div className={styles.nav}>
              <HeaderNav pages={navPages} />
            </div>
          </div>
          <Flex alignItems="center" gap={24}>
            <Search className={styles.search} />
            <UserActions />
          </Flex>
        </div>
      </Container>
    </header>
  );
};
