import CancelIcon from '@assets/icons/cancel.svg?react';
import OrderIcon from '@assets/icons/order.svg?react';
import ReviewIcon from '@assets/icons/review.svg?react';
import UserIcon from '@assets/icons/userWhite.svg?react';
import { ROUTES } from '@routes/routes';

export const userMenuLinks = [
  {
    id: 1,
    name: 'Manage My Account',
    path: ROUTES.PROFILE,
    icon: UserIcon,
  },
  {
    id: 2,
    name: 'My Orders',
    path: ROUTES.ORDERS,
    icon: OrderIcon,
  },
  {
    id: 3,
    name: 'My Cancellations',
    path: ROUTES.CANCELLATIONS,
    icon: CancelIcon,
  },
  {
    id: 4,
    name: 'My Reviews',
    path: ROUTES.REVIEWS,
    icon: ReviewIcon,
  },
];
