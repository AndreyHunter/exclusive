import BoxWrapper from '../../atoms/boxWrapper/BoxWrapper';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import FormLabel from '../../atoms/formLabel/FormLabel';
import FormInput from '../../molecules/formInput/FormInput';
import Button from '../../atoms/button/Button';

import styles from './editProfileForm.module.scss';

const EditProfileForm = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <BoxWrapper className={combinedClasses}>
            <form className={styles.form}>
                <div className={styles.grid}>
                    <FlexBlock column gap={8}>
                        <FormLabel label="First Name" />
                        <FormInput placeholder="Md" />
                    </FlexBlock>
                    <FlexBlock column gap={8}>
                        <FormLabel label="Last Name" />
                        <FormInput placeholder="Dow" />
                    </FlexBlock>
                    <FlexBlock column gap={8}>
                        <FormLabel label="Email" />
                        <FormInput placeholder="jhon683@gmail.com" />
                    </FlexBlock>
                    <FlexBlock column gap={8}>
                        <FormLabel label="Address" />
                        <FormInput placeholder="Kingston, 5236, United State" />
                    </FlexBlock>
                </div>
                <FlexBlock column gap={24}>
                    <FlexBlock column gap={8}>
                        <FormLabel label="Password Changes" />
                        <FlexBlock column gap={15}>
                            <FormInput placeholder="Current Password" />
                            <FormInput placeholder="New Password" />
                            <FormInput placeholder="Confirm New Password" />
                        </FlexBlock>
                    </FlexBlock>
                    <FlexBlock justifyEnd alignCenter gap={30} className={styles.buttons}>
                        <button type="button" className={styles.chancel}>
                            Chancel
                        </button>
                        <Button title="Save Changes" />
                    </FlexBlock>
                </FlexBlock>
            </form>
        </BoxWrapper>
    );
};

export default EditProfileForm;