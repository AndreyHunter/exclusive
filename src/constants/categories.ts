import type { Category } from 'types/static';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Woman’s Fashion',
    path: 'womans-fashion',
    subcategories: [
      {
        id: 1,
        name: 'Headgear',
        path: 'headgear',
      },
      {
        id: 2,
        name: 'Jackets',
        path: 'jackets',
      },
      {
        id: 3,
        name: 'Trousers',
        path: 'trousers',
      },
    ],
  },
  {
    id: 2,
    name: 'Men’s Fashion',
    path: 'mens-fashion',
    subcategories: [
      {
        id: 1,
        name: 'Headgear',
        path: 'headgear',
      },
      {
        id: 2,
        name: 'Jackets',
        path: 'jackets',
      },
      {
        id: 3,
        name: 'Trousers',
        path: 'trousers',
      },
    ],
  },
  {
    id: 3,
    name: 'Electronics',
    path: 'electronics',
    subcategories: [
      {
        id: 1,
        name: 'Computers',
        path: 'computers',
      },
      {
        id: 2,
        name: 'Phones',
        path: 'phones',
      },
      {
        id: 3,
        name: 'SmartWatch',
        path: 'smartwatch',
      },
      {
        id: 4,
        name: 'Gaming',
        path: 'gaming',
      },
      {
        id: 5,
        name: 'Cameras',
        path: 'cameras',
      },
      {
        id: 6,
        name: 'HeadPhones',
        path: 'headphones',
      },
    ],
  },
  {
    id: 4,
    name: 'Home & Lifestyle',
    path: 'home-lifestyle',
  },
  {
    id: 5,
    name: 'Medicine',
    path: 'medicine',
  },
  {
    id: 6,
    name: 'Sports & Outdoor',
    path: 'sports-outdoor',
  },
  {
    id: 7,
    name: 'Baby’s & Toys',
    path: 'baby-toys',
  },
  {
    id: 8,
    name: 'Groceries & Pets',
    path: 'groceries-pets',
  },
  {
    id: 9,
    name: 'Health & Beauty',
    path: 'health-beauty',
  },
];
