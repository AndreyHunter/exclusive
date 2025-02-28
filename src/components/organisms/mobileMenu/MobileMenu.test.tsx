import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import mobileMenuReducer, {
  toggleMenuOpen,
  closeMobileMenu,
} from '@features/mobileMenu/mobileMenuSlice';

import { MobileMenu } from './MobileMenu';
import styles from './mobileMenu.module.scss';

jest.mock('@components/molecules/socialMediaList/SocialMediaList', () => ({
  SocialMediaList: () => <ul />,
}));

jest.mock('@components/molecules/userActions/UserActionsContainer', () => ({
  UserActionsContainer: () => <div></div>,
}));

const renderWithProvider = (store: any) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MobileMenu />
      </MemoryRouter>
    </Provider>,
  );
};

describe('checks if body toggles its hidden prop', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        mobileMenu: mobileMenuReducer,
      },
    });

    document.body.classList.remove(styles.hidden);
  });

  afterEach(() => {
    document.body.classList.remove(styles.hidden);
  });

  test('checks is body has overflow: hidden', () => {
    act(() => {
      store.dispatch(toggleMenuOpen());
    });
    renderWithProvider(store);
    expect(document.body.classList.contains(styles.hidden)).toBe(true);
  });

  test('checks if body doens"t have overflow: hidden', () => {
    act(() => {
      store.dispatch(toggleMenuOpen());
    });
    renderWithProvider(store);
    expect(document.body.classList.contains(styles.hidden)).toBe(true);

    act(() => {
      store.dispatch(closeMobileMenu());
    });
    expect(document.body.classList.contains(styles.hidden)).toBe(false);
  });
});
