import { Link } from 'react-router-dom';
import Arrow from '../../atoms/arrow/Arrow';
import Line from './line.svg';

import styles from './showNowLink.module.scss';

const ShopNowLink = ({
    arrow = false,
    direction = 'column',
    line = false,
    link,
    className,
    ...props
}) => {
    const isRow = direction === 'row';
    const isColumn = direction === 'column';

    const rootClass = styles.root;
    const additionalClass = className || '';

    const rowClass = styles.row;
    const columnClass = styles.column;

    const combinedClasses = `${rootClass} ${additionalClass} ${isRow ? rowClass : isColumn ? columnClass : ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <Link to={link}>Shop Now</Link>
            {arrow && <Arrow color="white" />}
            {line && <img src={Line} alt="line" />}
        </div>
    );
};

export default ShopNowLink;
