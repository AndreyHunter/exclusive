import CancelIcon from '@assets/icons/cancel.svg?react';
import OrderIcon from '@assets/icons/order.svg?react';
import ReviewIcon from '@assets/icons/review.svg?react';
import UserIcon from '@assets/icons/userWhite.svg?react';

const userMenuLinks = [
    {
        id: 1,
        name: 'Manage My Account',
        path: '/account',
        icon: UserIcon,
    },
    {
        id: 2,
        name: 'My Orders',
        path: '/my-orders',
        icon: OrderIcon,
    },
    {
        id: 3,
        name: 'My Cancellations',
        path: '/my-cancellations',
        icon: CancelIcon,
    },
    {
        id: 4,
        name: 'My Reviews',
        path: '/my-reviews',
        icon: ReviewIcon,
    },
];

export default userMenuLinks;
