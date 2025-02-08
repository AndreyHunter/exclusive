import SearchIcon from '@assets/icons/search.svg?react';

import styles from './search.module.scss';

export const Search = ({ className, ...props }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      <input type="text" placeholder="What are you looking for?" />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
};
