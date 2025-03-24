import { useState, useEffect } from 'react';

import { ProductService } from '@services/index';
import type { Product, ProductsResponse } from 'types/index';

interface UseProductsProps {
  page: number;
  limit: number;
  productType: 'products' | 'flash-sales' | 'best-sellers';
}

export const useProducts = ({
  page = 1,
  limit = 8,
  productType = 'products',
}: Partial<UseProductsProps>) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let res: ProductsResponse = { products: [], hasMore: false };

        switch (productType) {
          case 'products':
            res = await ProductService.getProducts({ limit, page });
            break;
          case 'best-sellers':
            res = await ProductService.getBestSellers({ limit, page });
            break;
          case 'flash-sales':
            res = await ProductService.getFlashSales({ limit, page });
            break;
          default: {
            res = await ProductService.getProducts({ limit, page });
          }
        }

        setProducts(res.products);
      } catch (err) {
        const error = (err as Error).message;
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [productType, page, limit]);

  return {
    products,
    loading,
    error,
  };
};
