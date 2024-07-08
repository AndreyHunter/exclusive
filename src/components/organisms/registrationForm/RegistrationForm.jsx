import { Link } from 'react-router-dom';

import Button from '@components/atoms/button/Button';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import styles from './registrationForm.module.scss';

const RegistrationForm = () => {
    return (
        <Flex tagElement="form" flexDirection="column" gap={40}>
            <Flex flexDirection="column" gap={24}>
                <h2 className={styles.title}>Create an account</h2>
                <p>Enter your details below</p>
            </Flex>
            <Flex flexDirection="column" gap={40}>
                <div className={styles.input}>
                    <input type="text" placeholder="Name" />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder="Email or Phone Number" />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder="Password" />
                </div>
            </Flex>
            <Flex flexDirection="column" gap={32}>
                <Flex flexDirection="column" gap={16}>
                    <Button title="Create Account" />
                    <Button variant="transparent" title="Sign up with Google" icon="google" />
                </Flex>
                <Flex gap={16} alignItems="center">
                    <span className={styles.account}>Already have account?</span>
                    <Flex flexDirection="column" gap={4} className={styles.link}>
                        <Link to="/auth/signin">Log in</Link>
                        <Separator />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RegistrationForm;
