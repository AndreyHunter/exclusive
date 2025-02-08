import React, { Suspense } from 'react';

import { Container } from '@components/helpers/container/Container';
import { Loader } from '@components/atoms/loader/Loader';

interface SuspenseWrapperProps {
  children: React.ReactNode;
}

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => (
  <Suspense
    fallback={
      <Container paddingTop={20}>
        <Loader />
      </Container>
    }>
    {children}
  </Suspense>
);
