import SearchIcon from '../../ui/searchIcon/SearchIcon';

import styles from './search.module.scss';

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="What are you looking for?" />
            <span>
                <SearchIcon />
            </span>
        </div>
    );
};

export default Search;
