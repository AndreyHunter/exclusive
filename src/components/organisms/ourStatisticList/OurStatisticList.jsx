import statisticCards from '../../../constants/statisticCards';
import OurStatisticItem from '../../molecules/ourStatisticItem/OurStatisticItem';

import Container from '../../helpers/container/Container';

import styles from './ourStatisticList.module.scss';

const OurStatisticList = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Container>
            <ul className={combinedClasses}>
                {statisticCards &&
                    statisticCards.map((card) => <OurStatisticItem key={card.id} card={card} />)}
            </ul>
        </Container>
    );
};

export default OurStatisticList;
