import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import FormInput from '../../molecules/formInput/FormInput';
import Checkbox from '../../atoms/checkbox/Checkbox';

import styles from './orderForm.module.scss';

const OrderForm = ({ checked, handleSetChecked, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <form className={combinedClasses}>
            <FlexBlock column gap={30} className={styles.inputs}>
                <FlexBlock column>
                    <label>
                        First Name<span>*</span>
                    </label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>Company Name</label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>
                        Street Address<span>*</span>
                    </label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>Apartment, floor, etc. (optional)</label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>
                        Town/City<span>*</span>
                    </label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>
                        Phone Number<span>*</span>
                    </label>
                    <FormInput />
                </FlexBlock>
                <FlexBlock column>
                    <label>
                        Email Address<span>*</span>
                    </label>
                    <FormInput />
                </FlexBlock>
            </FlexBlock>
            <FlexBlock gap={16} alignCenter>
                <Checkbox checked={checked} onChange={handleSetChecked} />
                <span>Save this information for faster check-out next time</span>
            </FlexBlock>
        </form>
    );
};

export default OrderForm;
