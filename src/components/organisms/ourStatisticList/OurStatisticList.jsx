import statisticCards from '../../../constants/statisticCards';
import OurStatisticItem from '../../molecules/ourStatisticItem/OurStatisticItem';

import Container from '../../helpers/container/Container';

import styles from './ourStatisticList.module.scss';

const OurStatisticList = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <Container>
            <ul className={combinedClasses} {...props}>
                {statisticCards &&
                    statisticCards.map((card) => <OurStatisticItem key={card.id} card={card} />)}
            </ul>
        </Container>
    );
};

export default OurStatisticList;
