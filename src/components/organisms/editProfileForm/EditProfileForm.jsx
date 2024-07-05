import BoxWrapper from '../../atoms/boxWrapper/BoxWrapper';
import FormLabel from '../../atoms/formLabel/FormLabel';
import FormInput from '../../molecules/formInput/FormInput';
import Button from '../../atoms/button/Button';

import Flex from '../../helpers/flex/Flex';

import styles from './editProfileForm.module.scss';

const EditProfileForm = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <BoxWrapper className={combinedClasses}>
            <form className={styles.form}>
                <div className={styles.grid}>
                    <Flex flexDirection="column" gap={8}>
                        <FormLabel label="First Name" />
                        <FormInput placeholder="Md" />
                    </Flex>
                    <Flex flexDirection="column" gap={8}>
                        <FormLabel label="Last Name" />
                        <FormInput placeholder="Dow" />
                    </Flex>
                    <Flex flexDirection="column" gap={8}>
                        <FormLabel label="Email" />
                        <FormInput placeholder="jhon683@gmail.com" />
                    </Flex>
                    <Flex flexDirection="column" gap={8}>
                        <FormLabel label="Address" />
                        <FormInput placeholder="Kingston, 5236, United State" />
                    </Flex>
                </div>
                <Flex flexDirection="column" gap={24}>
                    <Flex flexDirection="column" gap={8}>
                        <FormLabel label="Password Changes" />
                        <Flex flexDirection="column" gap={15}>
                            <FormInput placeholder="Current Password" />
                            <FormInput placeholder="New Password" />
                            <FormInput placeholder="Confirm New Password" />
                        </Flex>
                    </Flex>
                    <Flex
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={30}
                        className={styles.buttons}>
                        <button type="button" className={styles.chancel}>
                            Chancel
                        </button>
                        <Button title="Save Changes" />
                    </Flex>
                </Flex>
            </form>
        </BoxWrapper>
    );
};

export default EditProfileForm;
