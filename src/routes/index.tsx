import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import { SuspenseWrapper } from '@components/atoms/suspenseWrapper/SuspenseWrapper';
import { SigninForm } from '@components/organisms/signinForm/SigninForm';
import { SignupForm } from '@components/organisms/signupForm/SignupForm';
import { LayoutTemplate } from '@components/templates/';
import { PrivateRoute } from '@components/helpers/privateRoute/PrivateRoute';

import { ROUTES } from './routes';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const AboutPage = lazy(() => import('@pages/aboutPage/AboutPage'));
const CartPage = lazy(() => import('@pages/cartPage/CartPageContainer'));
const WishListPage = lazy(() => import('@pages/wishListPage/WishListPage'));
const CheckoutPage = lazy(() => import('@pages/checkoutPage/CheckoutPage'));
const NotFoundPage = lazy(() => import('@pages/notFoundPage/NotFoundPage'));
const ContactsPage = lazy(() => import('@pages/contactsPage/ContactsPage'));
const ProductsPage = lazy(() => import('@pages/productsPage/ProductsPageContainer'));
const ProductPage = lazy(() => import('@pages/productPage/ProductPageContainer'));
const ProfilePage = lazy(() => import('@pages/profilePage/ProfilePage'));

const AuthTemplate = lazy(() => import('@components/templates/authTemplate/AuthTemplate'));
const AccountTemplate = lazy(() => import('@components/templates/accountTemplate/AccountTemplate'));

export default createBrowserRouter([
  {
    path: ROUTES.INDEX,
    element: <LayoutTemplate />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <HomePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.ABOUT,
        element: (
          <SuspenseWrapper>
            <AboutPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.CONTACTS,
        element: (
          <SuspenseWrapper>
            <ContactsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.PRODUCTS,
        element: (
          <SuspenseWrapper>
            <ProductsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: `${ROUTES.PRODUCTS}/:category`,
        element: (
          <SuspenseWrapper>
            <ProductsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: `${ROUTES.PRODUCTS}/:category/:subcategory`,
        element: (
          <SuspenseWrapper>
            <ProductsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: `${ROUTES.PRODUCT}/:id`,
        element: (
          <SuspenseWrapper>
            <ProductPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.CART,
        element: (
          <SuspenseWrapper>
            <CartPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.WISHLIST,
        element: (
          <SuspenseWrapper>
            <WishListPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.CHECKOUT,
        element: (
          <SuspenseWrapper>
            <CheckoutPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <PrivateRoute>
            <SuspenseWrapper>
              <AccountTemplate />
            </SuspenseWrapper>
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: ROUTES.ADDRESS_BOOK,
            element: <div>Address book</div>,
          },
          {
            path: ROUTES.PAYMENT_OPTIONS,
            element: <div>Payment Options</div>,
          },
          {
            path: ROUTES.ORDERS,
            element: <div>Orders</div>,
          },
          {
            path: ROUTES.RETURNS,
            element: <div>Returns</div>,
          },
          {
            path: ROUTES.CANCELLATIONS,
            element: <div>Cancellations</div>,
          },
        ],
      },
      {
        path: ROUTES.AUTH,
        element: (
          <SuspenseWrapper>
            <AuthTemplate />
          </SuspenseWrapper>
        ),
        children: [
          {
            index: true,
            element: <SignupForm />,
          },
          {
            path: ROUTES.SIGNUP,
            element: <SignupForm />,
          },
          {
            path: ROUTES.SIGNIN,
            element: <SigninForm />,
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: (
          <SuspenseWrapper>
            <NotFoundPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
