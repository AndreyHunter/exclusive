import React from 'react';

import styles from './testComponent.module.scss';

export const TestComponent: React.FC = () => {
  return (
    <div className={styles.root} data-testid="test-component">
      HELLO FROM PULL REQUEST!
      <article className={styles.card}>
        <header>
          <h2>TITLE</h2>
        </header>
        <section>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, eius!</p>
        </section>
      </article>
    </div>
  );
};
