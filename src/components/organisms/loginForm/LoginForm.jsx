import { Link } from 'react-router-dom';

import Button from '@components/atoms/button/Button';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import styles from './loginForm.module.scss';

const LoginForm = () => {
    return (
        <Flex tagElement="form" flexDirection="column" gap={40}>
            <Flex flexDirection="column" gap={24}>
                <h2 className={styles.title}>Log in to Exclusive</h2>
                <p>Enter your details below</p>
            </Flex>
            <Flex flexDirection="column" gap={40}>
                <div className={styles.input}>
                    <input type="text" placeholder="Email or Phone Number" />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder="Password" />
                </div>
            </Flex>
            <Flex flexDirection="column" gap={32}>
                <Flex gap={16} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Button title="Log In" />
                    <Link className={styles.link}>Forget Password?</Link>
                </Flex>
            </Flex>
            <Flex gap={16} alignItems="center" flexWrap="wrap">
                <span className={styles.account}>Don't have an account yet?</span>
                <Flex flexDirection="column" gap={4} className={styles.link}>
                    <Link to="/auth/signup">Signup</Link>
                    <Separator />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default LoginForm;
