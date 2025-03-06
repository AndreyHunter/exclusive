import type { FieldErrors } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { validateContact, validatePassword } from '@utils/validators';
import { Button } from '@components/atoms/button/Button';
import { Separator } from '@components/atoms/separator/Separator';
import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';
import type { FormSigninData } from '@hooks/useAuth';

import styles from './signinForm.module.scss';

export const SigninForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormSigninData>();
  const navigate = useNavigate();
  const { handleSignin, error } = useAuth();

  const onSubmit = async (body: FormSigninData) => {
    const success = await handleSignin(body);

    if (success) {
      reset();
      navigate('/');
    }
  };

  const typedErrors = errors as FieldErrors<FormSigninData>;
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
            {typedErrors.contact && (
              <span className={styles.error}>{typedErrors.contact.message}</span>
            )}
          </div>
          <div className={`${styles.input} ${errors.password && styles.line}`}>
            <input
              {...register('password', { validate: validatePassword })}
              type="password"
              placeholder="Password"
            />
            {typedErrors.password && (
              <span className={styles.error}>{typedErrors.password.message}</span>
            )}
          </div>
        </Flex>
        <div>{error && <span className={styles.error}>{error}</span>}</div>
      </Flex>
      <Flex flexDirection="column" gap={30}>
        <Flex gap={16} alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <Button type="submit" disabled={isButtonDisabled}>
            Log In
          </Button>
          <Link to="/auth/forgot-password" className={styles.link}>
            Forgot Password?
          </Link>
        </Flex>
      </Flex>
      <Flex gap={16} alignItems="center" flexWrap="wrap">
        <span className={styles.account}>Don't have an account yet?</span>
        <Flex flexDirection="column" gap={4} className={styles.link}>
          <Link to={`/${ROUTES.AUTH}/${ROUTES.SIGNUP}`}>Signup</Link>
          <Separator />
        </Flex>
      </Flex>
    </Flex>
  );
};
