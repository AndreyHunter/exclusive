import statisticCards from '@constants/statisticCards';

import Container from '@components/helpers/container/Container';
import OurStatisticItem from '@components/molecules/ourStatisticItem/OurStatisticItem';

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
