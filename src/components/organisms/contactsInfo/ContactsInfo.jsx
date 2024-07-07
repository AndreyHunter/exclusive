import BoxWrapper from '@components/atoms/boxWrapper/BoxWrapper';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';
import ContactsLabel from '@components/molecules/contactsLabel/ContactsLabel';

import styles from './contactsInfo.module.scss';

const ContactsInfo = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <BoxWrapper className={combinedClasses}>
            <Flex flexDirection="column" gap={30}>
                <Flex flexDirection="column" gap={24}>
                    <ContactsLabel label="Call To Us" icon="phone" />
                    <Flex flexDirection="column" gap={15}>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </Flex>
                </Flex>
                <Separator />
                <Flex flexDirection="column" gap={24}>
                    <ContactsLabel label="Write To US" icon="email" />
                    <Flex flexDirection="column" gap={15}>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </Flex>
                </Flex>
            </Flex>
        </BoxWrapper>
    );
};

export default ContactsInfo;
