import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import router from '@routes/index';
import { fetchUserCart } from '@/store/cart/CartSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    dispatch(fetchUserCart({ userId }));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
