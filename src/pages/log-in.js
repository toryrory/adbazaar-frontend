import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { authLogin } from '@/redux/operations';
import { selectAuthError } from '@/redux/selectors';
import {
  LogInPage,
  LogInContainer,
  UserImgContainer,
  CloseButton,
  Title,
  InputList,
  InputItem,
  PasswordContainer,
  ForgotPasswordLink,
  Label,
  Input,
  EyeButton,
  MainButton,
  ErrorContainer,
  ErrorText,
  RedirectText,
  RedirectLink,
  SLText,
  SLList,
  SLItem,
  SocialLink,
} from '@/styles/log-in.styled';
import {
  UserSvg,
  Cross,
  EyeClosed,
  EyeOpened,
  GoogleIcon,
  FacebookIcon,
} from '../components/svg';

export default function LogIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  let authError = useSelector(selectAuthError);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    dispatch(authLogin({ email, password }));
    authError === useSelector(selectAuthError);
    if (authError) {
      return;
    } else {
      alert('You have successfully logged into your account');
      actions.resetForm();
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit,
    });

  return (
    <LogInPage>
      <LogInContainer>
        <UserImgContainer>
          <UserSvg style={{ width: 24, height: 24 }} />
        </UserImgContainer>
        <CloseButton
          type="button"
          onClick={() => console.log('close button pressed')}
        >
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>

        <Title>Sign in</Title>
        <form onSubmit={handleSubmit}>
          <InputList>
            <InputItem>
              <Label htmlFor="fullName">Email</Label>
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
              <Label htmlFor="fullName">Password</Label>

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
              <ErrorText>Incorrect password or email.</ErrorText>
              <ForgotPasswordLink href="">Forgot password?</ForgotPasswordLink>
            </ErrorContainer>
          ) : (
            <ForgotPasswordLink href="">Forgot password?</ForgotPasswordLink>
          )}

          <MainButton type="submit">Sign in</MainButton>
        </form>
        <RedirectText>
          Don’t have account?{' '}
          <RedirectLink href="/sign-up"> Create now</RedirectLink>
        </RedirectText>
        <SLText>Continue with</SLText>
        <SLList>
          <SLItem>
            <SocialLink
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.google.com/"
            >
              <GoogleIcon style={{ width: 20, height: 20, marginRight: 4 }} />
              Google
            </SocialLink>
          </SLItem>
          <SLItem>
            <SocialLink
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/"
            >
              <FacebookIcon style={{ width: 20, height: 20, marginRight: 4 }} />
              Facebook
            </SocialLink>
          </SLItem>
        </SLList>
      </LogInContainer>
    </LogInPage>
  );
}
