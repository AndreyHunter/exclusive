import { ROUTES } from '@routes/routes';
import type { Page } from 'types/static';

export const navPages: Page[] = [
  {
    id: 1,
    name: 'Home',
    path: ROUTES.INDEX,
  },
  {
    id: 2,
    name: 'Contacts',
    path: ROUTES.CONTACTS,
  },
  {
    id: 3,
    name: 'About',
    path: ROUTES.ABOUT,
  },
  {
    id: 4,
    name: 'Sign Up',
    path: `${ROUTES.AUTH}/${ROUTES.SIGNUP}`,
  },
];
