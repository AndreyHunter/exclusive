import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '@hooks/useAuth';

import { validateContact, validateName, validatePassword } from '@utils/validators';

import Button from '@components/atoms/button/Button';
import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import styles from './registrationForm.module.scss';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigate = useNavigate();
    const { handleSignup, error } = useAuth();

    const onSubmit = async (body) => {
        const success = await handleSignup(body);

        if (success) {
            reset();
            navigate('/');
        }
    };

    return (
        <Flex tagElement="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column" gap={40}>
            <Flex flexDirection="column" gap={24}>
                <h2 className={styles.title}>Create an account</h2>
                <p>Enter your details below</p>
            </Flex>
            <Flex flexDirection="column" gap={40}>
                <div className={`${styles.input} ${errors.name && styles.line}`}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name', { validate: validateName })}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>
                <div className={`${styles.input} ${errors.contact && styles.line}`}>
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        {...register('contact', { validate: validateContact })}
                    />
                    {errors.contact && (
                        <span className={styles.error}>{errors.contact.message}</span>
                    )}
                </div>
                <div className={`${styles.input} ${errors.password && styles.line}`}>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', { validate: validatePassword })}
                    />
                    {errors.password && (
                        <span className={styles.error}>{errors.password.message}</span>
                    )}
                </div>
            </Flex>
            <Flex flexDirection="column" gap={32}>
                <Flex flexDirection="column" gap={16}>
                    <div>{error && <span className={styles.error}>{error}</span>}</div>
                    <Button type="submit" title="Create Account" />
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
