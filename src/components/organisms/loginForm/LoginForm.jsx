import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '@hooks/useAuth';

import { validateContact, validatePassword } from '@utils/validators';

import Button from '@components/atoms/button/Button';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import styles from './loginForm.module.scss';

const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        watch,
    } = useForm();
    const navigate = useNavigate();
    const { handleSignin, error } = useAuth();

    const onSubmit = async (body) => {
        const success = await handleSignin(body);

        if (success) {
            reset();
            navigate('/');
        }
    };

    const isButtonDisabled = !watch('contact') || !watch('password');

    return (
        <Flex tagElement="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column" gap={30}>
            <Flex flexDirection="column" gap={24}>
                <h2 className={styles.title}>Log in to Exclusive</h2>
                <p>Enter your details below</p>
            </Flex>
            <Flex flexDirection="column" gap={10}>
                <Flex flexDirection="column" gap={40}>
                    <div className={`${styles.input} ${errors.contact && styles.line}`}>
                        <input
                            {...register('contact', { validate: validateContact })}
                            type="text"
                            placeholder="Email or Phone Number"
                        />
                        {errors.contact && (
                            <span className={styles.error}>{errors.contact.message}</span>
                        )}
                    </div>
                    <div className={`${styles.input} ${errors.password && styles.line}`}>
                        <input
                            {...register('password', { validate: validatePassword })}
                            type="password"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <span className={styles.error}>{errors.password.message}</span>
                        )}
                    </div>
                </Flex>
                <div>{error && <span className={styles.error}>{error}</span>}</div>
            </Flex>
            <Flex flexDirection="column" gap={30}>
                <Flex gap={16} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Button type="submit" title="Log In" disabled={isButtonDisabled} />
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
