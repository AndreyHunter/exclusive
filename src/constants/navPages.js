import { ROUTES } from '@/routes/routes';

export const navPages = [
  {
    id: 1,
    name: 'Home',
    path: ROUTES.INDEX,
  },
  {
    id: 2,
    name: 'Contact',
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
    path: `${ROUTES.AUTH}/signup`,
  },
];
