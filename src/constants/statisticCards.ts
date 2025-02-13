import BagIcon from '@assets/icons/bag.svg?react';
import DollarIcon from '@assets/icons/dollar.svg?react';
import HouseIcon from '@assets/icons/house.svg?react';
import moneyBagIcon from '@assets/icons/money-bag.svg?react';
import type { OurStatisticCard } from 'types/static';

export const statisticCards: OurStatisticCard[] = [
  {
    id: 1,
    amount: 10.5,
    desc: 'Sallers active our site',
    changeOnHover: 'stroke',
    icon: HouseIcon,
  },
  {
    id: 2,
    amount: 33,
    desc: 'Mopnthly Produduct Sale',
    changeOnHover: 'stroke',
    icon: DollarIcon,
  },
  {
    id: 3,
    amount: 45.5,
    desc: 'Customer active in our site',
    changeOnHover: 'fill',
    icon: BagIcon,
  },
  {
    id: 4,
    amount: 25,
    desc: 'Anual gross sale in our site',
    changeOnHover: 'fill',
    icon: moneyBagIcon,
  },
];
