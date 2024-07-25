import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
    productsErrorSelector,
    productsLoadingSelector,
    productsSelector,
} from '@store/products/productsSelectors';
import { fetchProductsByCategories, clearProducts } from '@store/products/productsSlice';

import { Utils } from '@utils/index';

import ProductPage from './ProductsPage';

const ProductPageContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);
    const loading = useSelector(productsLoadingSelector);
    const error = useSelector(productsErrorSelector);
    const [limit, setLimit] = useState(20);

    const { pathname } = useLocation();
    const fullPath = pathname.replace('/category', '');

    const categoryName = Utils.getCategoryName(fullPath);
    const breadCrumbs = Utils.generateBreadcrumbs(fullPath);

    useEffect(() => {
        dispatch(fetchProductsByCategories({ limit, category: fullPath }));

        return () => {
            dispatch(clearProducts());
        };
    }, [dispatch, limit, fullPath]);

    return (
        <ProductPage
            products={products}
            error={error}
            loading={loading}
            breadCrumbs={breadCrumbs}
            categoryName={categoryName}
        />
    );
};

export default ProductPageContainer;
