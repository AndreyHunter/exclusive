import SearchIcon from '../../atoms/searchIcon/SearchIcon';

import styles from './search.module.scss';

const Search = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <input type="text" placeholder="What are you looking for?" />
            <span>
                <SearchIcon />
            </span>
        </div>
    );
};

export default Search;