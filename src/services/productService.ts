import type { Product } from 'types/index';

import axios from './axiosConfig';

export const getProducts = async ({
  limit,
  sort,
}: {
  limit: number;
  sort?: string;
}): Promise<Product[]> => {
  try {
    const { data } = await axios.get<{ products: Product[] }>('/products', {
      params: {
        limit,
        sort,
      },
    });

    if (!data || !data.products) {
      throw new Error('Products not found');
    }

    return data.products;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getProductsByCategories = async ({
  category,
  limit,
  sort,
}: {
  category: string;
  limit: number;
  sort?: string;
}): Promise<Product[]> => {
  try {
    const { data } = await axios.get<{ products: Product[] }>(`/products/category${category}`, {
      params: {
        limit,
        sort,
      },
    });

    if (!data || !data.products) {
      throw new Error('Products not found for this category');
    }

    return data.products;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getFlashSales = async ({
  limit,
  sort,
}: {
  limit: number;
  sort?: string;
}): Promise<Product[]> => {
  try {
    const { data } = await axios.get<{ products: Product[] }>('/products/flash-sales', {
      params: {
        limit,
        sort,
      },
    });

    if (!data || !data.products) {
      throw new Error('Flash sales products not found');
    }

    return data.products;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getBestSellers = async ({
  limit,
  sort,
}: {
  limit: number;
  sort?: string;
}): Promise<Product[]> => {
  try {
    const { data } = await axios.get<{ products: Product[] }>('/products/best-sellers', {
      params: {
        limit,
        sort,
      },
    });

    if (!data || !data.products) {
      throw new Error('Best sellers products not found');
    }

    return data.products;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};
