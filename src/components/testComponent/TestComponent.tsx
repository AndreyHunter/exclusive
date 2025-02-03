import React from 'react';

import styles from './testComponent.module.scss';

export const TestComponent: React.FC = () => {
  return (
    <div className={styles.root} data-testid="test-component">
      HELLO FROM PULL REQUEST!
    </div>
  );
};
