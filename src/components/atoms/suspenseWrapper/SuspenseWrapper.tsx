import { Suspense } from 'react';

import { Container } from '@/components/helpers/container/Container';
import { Loader } from '@components/atoms/loader/Loader';

export const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <Container paddingTop={20}>
        <Loader />
      </Container>
    }>
    {children}
  </Suspense>
);
