import BoxWrapper from '../../atoms/boxWrapper/BoxWrapper';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import Separator from '../../atoms/separator/Separator';
import ContactsLabel from '../../molecules/contactsLabel/ContactsLabel';

import styles from './contactsInfo.module.scss';

const ContactsInfo = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <BoxWrapper className={combinedClasses}>
            <FlexBlock column gap={30}>
                <FlexBlock gap={24} column>
                    <ContactsLabel label="Call To Us" icon="phone" />
                    <FlexBlock gap={15} column>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </FlexBlock>
                </FlexBlock>
                <Separator />
                <FlexBlock gap={24} column>
                    <ContactsLabel label="Write To US" icon="email" />
                    <FlexBlock gap={15} column>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </FlexBlock>
                </FlexBlock>
            </FlexBlock>
        </BoxWrapper>
    );
};

export default ContactsInfo;