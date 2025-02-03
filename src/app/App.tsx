import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useInit } from '@/hooks/useInit';
import router from '@routes/index';

export const App: FC = () => {
  useInit();
  return <RouterProvider router={router} />;
};
