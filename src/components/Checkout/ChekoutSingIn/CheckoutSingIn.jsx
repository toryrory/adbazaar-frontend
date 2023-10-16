import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { authLogin } from '@/redux/auth/operations';
import { selectAuthError } from '@/redux/selectors';
import GoogleRegistration from '@/components/Authorization/googleRegistration/GoogleRegistration';
import ErrorMessage from '@/components/Authorization/errorMessage/ErrorMessage';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';

import { EyeClosed, EyeOpened } from '../../../../public/svg-authorization';
import { PersonSvg } from '../../../../public/svg-account';
import {
  TitleContainer,
  Title,
  InputList,
  InputItem,
  Input,
  Label,
  PasswordContainer,
  EyeButton,
  ErrorContainer,
  ForgotPasswordLink,
  RedirectLink,
  RedirectText,
} from './CheckoutSingIn.styled';

export default function CheckoutSingIn() {
  const authError = useSelector(selectAuthError);
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    dispatch(authLogin({ email, password }));
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  return (
    <>
      <TitleContainer>
        <PersonSvg style={{ width: 24, height: 24 }} />
        <Title>Sing in</Title>
      </TitleContainer>

      <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
        <InputList>
          <InputItem>
            <Label htmlFor="email">Email</Label>
            <Input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
            />
          </InputItem>
          <InputItem>
            <Label htmlFor="password">Password</Label>
            <PasswordContainer>
              <Input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
              />
              <EyeButton type="button" onClick={togglePassword}>
                {passwordShown ? (
                  <EyeOpened style={{ width: 24, height: 24 }} />
                ) : (
                  <EyeClosed style={{ width: 24, height: 24 }} />
                )}
              </EyeButton>
            </PasswordContainer>
          </InputItem>
        </InputList>
        {authError ? (
          <ErrorContainer>
            <ErrorMessage text="Incorrect password or email." />
            <ForgotPasswordLink href="/login/reset-password">
              Forgot password?
            </ForgotPasswordLink>
          </ErrorContainer>
        ) : (
          <div style={{ textAlign: 'right' }}>
            <ForgotPasswordLink href="/login/reset-password">
              Forgot password?
            </ForgotPasswordLink>
          </div>
        )}
        <SecondaryButton text="Sign in" type="submit" />
      </form>
      <RedirectText>
        Don’t have account?{' '}
        <RedirectLink href="/register"> Create now</RedirectLink>
      </RedirectText>
      <GoogleRegistration />
    </>
  );
}
