import Container from '../container/Container';

import styles from './topHeader.module.scss';

const TopHeader = () => {
    return (
        <div className={styles.bg}>
            <Container variant="default">
                <div className={styles.content}>
                    <div>
                        <div>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                    </div>
                    <select>
                        <option value="english">English</option>
                        <option value="ukraine">Ukraine</option>
                    </select>
                </div>
            </Container>
        </div>
    );
};

export default TopHeader;
