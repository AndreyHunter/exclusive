import type { Product, ProductPageData } from 'types/index';

export const mockProduct: Product = {
  _id: 'prod123',
  name: 'Classic T-Shirt - Black, M',
  category: 'Clothing/Men/T-Shirts',
  price: 29.99,
  discountedPrice: 24.99,
  inStock: 15,
  images: [
    'https://example.com/images/tshirt-black-front.jpg',
    'https://example.com/images/tshirt-black-back.jpg',
    'https://example.com/images/tshirt-black-side.jpg',
  ],
  color: 'black',
  size: 'm',
  sku: 'TSH-BLK-M-001',
  rating: 4.5,
  reviewsCount: 120,
};

export const mockProductInfo: ProductPageData = {
  variation: {
    _id: 'var123',
    name: 'Classic T-Shirt - Black, M',
    sku: 'TSH-BLK-M-001',
    price: 29.99,
    discountedPrice: 24.99,
    inStock: 15,
    images: [
      'https://example.com/images/tshirt-black-front.jpg',
      'https://example.com/images/tshirt-black-back.jpg',
      'https://example.com/images/tshirt-black-side.jpg',
    ],
    color: 'black',
    size: 'm',
    description: 'A comfortable black cotton T-shirt, perfect for everyday wear.',
    characteristics: ['100% Cotton', 'Machine Washable', 'Regular Fit'],
    category: 'clothing/men/t-shirts',
  },

  baseProduct: {
    _id: 'prod456',
    baseName: 'Classic T-Shirt',
    baseDescription: 'A timeless T-shirt available in multiple colors and sizes.',
    additionalDescription: 'Designed for comfort and durability, suitable for all seasons.',
    baseCharacteristics: ['Breathable Fabric', 'Pre-Shrunk', 'Unisex Design'],
    rating: 4.5,
    reviewsCount: 120,
    manufacturer: 'TeeFactory',
  },

  options: {
    colors: ['black', 'white', 'blue', 'red'],
    sizes: ['xs', 's', 'm', 'l', 'xl'],
  },

  variationsMap: [
    {
      productId: 'var123',
      color: 'black',
      size: 'm',
      price: 29.99,
      discountedPrice: 24.99,
      inStock: 15,
      sku: 'TSH-BLK-M-001',
    },
    {
      productId: 'var124',
      color: 'black',
      size: 's',
      price: 29.99,
      inStock: 10,
      sku: 'TSH-BLK-S-002',
    },
    {
      productId: 'var125',
      color: 'white',
      size: 'm',
      price: 29.99,
      inStock: 20,
      sku: 'TSH-WHT-M-003',
    },
    {
      productId: 'var126',
      color: 'blue',
      size: 'l',
      price: 32.99,
      discountedPrice: 27.99,
      inStock: 8,
      sku: 'TSH-BLU-L-004',
    },
    {
      productId: 'var127',
      color: 'red',
      size: 'xl',
      price: 32.99,
      inStock: 5,
      sku: 'TSH-RED-XL-005',
    },
  ],
};

export const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'Product 1',
    price: 100,
    discountedPrice: 90,
    inStock: 5,
    category: 'category1',
    images: ['image1.jpg'],
    rating: 4.5,
    reviewsCount: 10,
  },
  {
    _id: '2',
    name: 'Product 2',
    price: 200,
    discountedPrice: 180,
    inStock: 5,
    category: 'category2',
    images: ['image2.jpg'],
    rating: 4.2,
    reviewsCount: 5,
  },
];
