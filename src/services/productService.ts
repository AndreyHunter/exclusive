import type { Product, ProductWithInfo, ProductsResponse } from 'types/index';

import axios from './axiosConfig';

export const getProducts = async ({
  limit,
  page,
  queryFilters,
}: {
  limit: number;
  page: number;
  queryFilters?: object;
}): Promise<ProductsResponse> => {
  try {
    const { data } = await axios.get<{ products: Product[]; hasMore: boolean }>('/products', {
      params: {
        limit,
        page,
        ...queryFilters,
      },
    });

    if (!data || !data.products) {
      throw new Error('Products not found');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getProductsByCategories = async ({
  limit,
  page,
  queryFilters,
  category,
}: {
  limit: number;
  page: number;
  queryFilters?: object;
  category?: string;
}): Promise<ProductsResponse> => {
  try {
    const { data } = await axios.get<ProductsResponse>(`/products/category${category}`, {
      params: {
        limit,
        page,
        ...queryFilters,
      },
    });

    if (!data || !data.products) {
      throw new Error('Products not found for this category');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getFlashSales = async ({
  limit,
  page,
  queryFilters,
}: {
  limit: number;
  page: number;
  queryFilters?: object;
}): Promise<ProductsResponse> => {
  try {
    const { data } = await axios.get<ProductsResponse>('/products/flash-sales', {
      params: {
        limit,
        page,
        ...queryFilters,
      },
    });

    if (!data || !data.products) {
      throw new Error('Flash sales products not found');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getBestSellers = async ({
  limit,
  page,
  queryFilters,
}: {
  limit: number;
  page: number;
  queryFilters?: object;
}): Promise<ProductsResponse> => {
  try {
    const { data } = await axios.get<ProductsResponse>('/products/best-sellers', {
      params: {
        limit,
        page,
        ...queryFilters,
      },
    });

    if (!data || !data.products) {
      throw new Error('Best sellers products not found');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getProduct = async (id: string): Promise<ProductWithInfo> => {
  try {
    const { data } = await axios.get<ProductWithInfo>(`products/${id}`);

    if (!data) {
      throw new Error('Product not found');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};
