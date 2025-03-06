import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { render } from '@testing-library/react';

import { ROUTES } from '@routes/routes';

// Mock page components
const SignUpPage = () => <div data-testid="signup-page">Sign Up Page</div>;
const SignInPage = () => <div data-testid="signin-page">Sign In Page</div>;
const CartPage = () => <div data-testid="cart-page">Cart Page</div>;
const ProductsPage = () => <div data-testid="products-page">Products Page</div>;
const WishListPage = () => <div data-testid="wishlist-page">Wishlist Page</div>;
const PrivacyPolicyPage = () => <div data-testid="privacy-policy-page">Privacy Policy Page</div>;
const TermsOfUsePage = () => <div data-testid="terms-of-use-page">Terms Of Use Page</div>;
const FaqPage = () => <div data-testid="faq-page">FAQ Page</div>;
const ContactsPage = () => <div data-testid="contacts-page">Contacts Page</div>;
const AboutPage = () => <div data-testid="about-page">About Page</div>;
const HomePage = () => <div data-testid="home-page">Home Page</div>;
const CheckoutPage = () => <div data-testid="checkout-page">Checkout Page</div>;
const NotFoundPage = () => <div data-testid="not-found-page">Not Found Page</div>;
const ProductPage = () => <div data-testid="product-page">Product Page</div>;

// Profile page components
const ProfilePage = () => <div data-testid="profile-page">Profile Page</div>;
const AddressBookPage = () => <div data-testid="address-book-page">Address Book Page</div>;
const PaymentOptionsPage = () => <div data-testid="payment-options-page">Payment Options Page</div>;
const OrdersPage = () => <div data-testid="orders-page">Orders Page</div>;
const ReturnsPage = () => <div data-testid="returns-page">Returns Page</div>;
const ReviewsPage = () => <div data-testid="reviews-page">Reviews Page</div>;
const CancellationsPage = () => <div data-testid="cancellations-page">Cancellations Page</div>;

const ProfileTemplate = ({ children }: { children?: React.ReactNode }) => (
  <div data-test-id="profile-template">
    {children}
    <Outlet />
  </div>
);

const EmptyProfileTemplate = () => (
  <div data-test-id="profile-template">
    <Outlet />
  </div>
);

type RenderOptions = {
  initialEntry?: string;
  templateType?: 'profile';
};

export const renderMockPages = (children: React.ReactNode, options: RenderOptions = {}) => {
  const { initialEntry = ROUTES.INDEX, templateType } = options;

  const routes = (
    <Routes>
      <Route path={ROUTES.INDEX} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={`${ROUTES.PRODUCTS}/:category`} element={<ProductsPage />} />
      <Route path={`${ROUTES.PRODUCTS}/:category/:subcategory`} element={<ProductsPage />} />
      <Route path={`${ROUTES.PRODUCT}/:id`} element={<ProductPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
      <Route path={ROUTES.WISHLIST} element={<WishListPage />} />
      <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
      <Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUsePage />} />
      <Route path={ROUTES.FAQ} element={<FaqPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

      <Route path={ROUTES.AUTH} element={<SignUpPage />} />
      <Route path={`${ROUTES.AUTH}/${ROUTES.SIGNUP}`} element={<SignUpPage />} />
      <Route path={`${ROUTES.AUTH}/${ROUTES.SIGNIN}`} element={<SignInPage />} />

      <Route
        path={`/${ROUTES.PROFILE}`}
        element={
          templateType === 'profile' ? (
            <ProfileTemplate>{children}</ProfileTemplate>
          ) : (
            <EmptyProfileTemplate />
          )
        }>
        <Route index element={<ProfilePage />} />
        <Route path={ROUTES.ADDRESS_BOOK} element={<AddressBookPage />} />
        <Route path={ROUTES.PAYMENT_OPTIONS} element={<PaymentOptionsPage />} />
        <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
        <Route path={ROUTES.RETURNS} element={<ReturnsPage />} />
        <Route path={ROUTES.REVIEWS} element={<ReviewsPage />} />
        <Route path={ROUTES.CANCELLATIONS} element={<CancellationsPage />} />
      </Route>
    </Routes>
  );

  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      {!templateType && children}
      {routes}
    </MemoryRouter>,
  );
};
