import BagIcon from '@assets/icons/bag.svg?react';
import DollarIcon from '@assets/icons/dollar.svg?react';
import HouseIcon from '@assets/icons/house.svg?react';
import moneyBagIcon from '@assets/icons/money-bag.svg?react';

const statisticCards = [
    {
        id: 1,
        amount: 10.5,
        desc: 'Sallers active our site',
        icon: HouseIcon,
        changeOnHover: 'stroke',
    },
    {
        id: 2,
        amount: 33,
        desc: 'Mopnthly Produduct Sale',
        icon: DollarIcon,
        changeOnHover: 'stroke',
    },
    {
        id: 3,
        amount: 45.5,
        desc: 'Customer active in our site',
        icon: BagIcon,
        changeOnHover: 'fill',
    },
    {
        id: 4,
        amount: 25,
        desc: 'Anual gross sale in our site',
        icon: moneyBagIcon,
        changeOnHover: 'fill',
    },
];

export default statisticCards;
