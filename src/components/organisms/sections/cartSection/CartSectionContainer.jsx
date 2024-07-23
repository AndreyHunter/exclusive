import CartSection from './CartSection';

const CartSectionContainer = ({ className }) => {
    const cart = [];

    return <CartSection products={cart} className={className} />;
};

export default CartSectionContainer;
