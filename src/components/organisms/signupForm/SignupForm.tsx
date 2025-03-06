import type { FieldErrors } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { validateName, validateContact, validatePassword } from '@utils/validators';
import { Button } from '@components/atoms/button/Button';
import { Separator } from '@components/atoms/separator/Separator';
import { Flex } from '@components/helpers/flex/Flex';
import type { FormSignupData } from '@hooks/useAuth';
import { ROUTES } from '@routes/routes';

import styles from './signupForm.module.scss';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormSignupData>();
  const navigate = useNavigate();
  const { handleSignup, error } = useAuth();

  const onSubmit = async (body: FormSignupData) => {
    const success = await handleSignup(body);

    if (success) {
      reset();
      navigate('/');
    }
  };

  const isButtonDisabled = !watch('name') || !watch('contact') || !watch('password');
  const typedErrors = errors as FieldErrors<FormSignupData>;

  return (
    <Flex tagElement="form" onSubmit={handleSubmit(onSubmit)} flexDirection="column" gap={40}>
      <Flex flexDirection="column" gap={24}>
        <h2 className={styles.title}>Create an account</h2>
        <p>Enter your details below</p>
      </Flex>
      <Flex flexDirection="column" gap={40}>
        <div className={`${styles.input} ${typedErrors.name && styles.line}`}>
          <input type="text" placeholder="Name" {...register('name', { validate: validateName })} />
          {typedErrors.name && <span className={styles.error}>{typedErrors.name.message}</span>}
        </div>
        <div className={`${styles.input} ${typedErrors.contact && styles.line}`}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            {...register('contact', { validate: validateContact })}
          />
          {typedErrors.contact && (
            <span className={styles.error}>{typedErrors.contact.message}</span>
          )}
        </div>
        <div className={`${styles.input} ${typedErrors.password && styles.line}`}>
          <input
            type="password"
            placeholder="Password"
            {...register('password', { validate: validatePassword })}
          />
          {typedErrors.password && (
            <span className={styles.error}>{typedErrors.password.message}</span>
          )}
        </div>
      </Flex>
      <Flex flexDirection="column" gap={32}>
        <Flex flexDirection="column" gap={16}>
          <div>{error && <span className={styles.error}>{error}</span>}</div>
          <Button disabled={isButtonDisabled} type="submit">
            Create Account
          </Button>
          <Button variant="transparent" icon="google">
            Sign up with Google
          </Button>
        </Flex>
        <Flex gap={16} alignItems="center">
          <span className={styles.account}>Already have account?</span>
          <Flex flexDirection="column" gap={4} className={styles.link}>
            <Link to={`/${ROUTES.AUTH}/${ROUTES.SIGNIN}`}>Log in</Link>
            <Separator />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
