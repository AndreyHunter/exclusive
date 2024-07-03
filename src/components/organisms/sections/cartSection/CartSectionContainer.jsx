import products from '../../../../constants/products';

import CartSection from './CartSection';

const CartSectionContainer = ({ className }) => {
    const cart = products.slice(products.length - 2);

    return <CartSection products={cart} className={className} />;
};

export default CartSectionContainer;