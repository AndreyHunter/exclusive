import { clsx } from 'clsx';

import SearchIcon from '@assets/icons/search.svg?react';

import styles from './search.module.scss';

export const Search = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const classes = clsx(styles.root, className);

  return (
    <div {...props} className={classes}>
      <input type="text" placeholder="What are you looking for?" />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
};
