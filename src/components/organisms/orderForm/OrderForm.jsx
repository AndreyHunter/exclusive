import Checkbox from '@components/atoms/checkbox/Checkbox';
import Flex from '@components/helpers/flex/Flex';
import FormInput from '@components/molecules/formInput/FormInput';

import styles from './orderForm.module.scss';

const OrderForm = ({ checked, handleSetChecked, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <form className={combinedClasses}>
            <Flex flexDirection="column" className={styles.inputs}>
                <Flex flexDirection="column">
                    <label>
                        First Name<span>*</span>
                    </label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>Company Name</label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>
                        Street Address<span>*</span>
                    </label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>Apartment, floor, etc. (optional)</label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>
                        Town/City<span>*</span>
                    </label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>
                        Phone Number<span>*</span>
                    </label>
                    <FormInput />
                </Flex>
                <Flex flexDirection="column">
                    <label>
                        Email Address<span>*</span>
                    </label>
                    <FormInput />
                </Flex>
            </Flex>
            <Flex alignItems="center" gap={16}>
                <Checkbox checked={checked} onChange={handleSetChecked} />
                <span>Save this information for faster check-out next time</span>
            </Flex>
        </form>
    );
};

export default OrderForm;
