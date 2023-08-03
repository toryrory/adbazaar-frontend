import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authLogin } from '@/redux/operations';
import {
  LogInPage,
  LogInContainer,
  UserImgContainer,
  CloseButton,
  Title,
  AllInputContainer,
  InputContainer,
  PasswordContainer,
  ForgotPasswordLink,
  Label,
  Input,
  EyeButton,
  MainButton,
  ErrorText,
  RedirectText,
  RedirectLink,
  SLText,
  SLContainer,
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    dispatch(authLogin({ email, password }));
    alert('You have successfully logged into your account');
    actions.resetForm();
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
          <AllInputContainer>
            <InputContainer>
              {errors.email && touched.email ? (
                <ErrorText>{errors.email}</ErrorText>
              ) : (
                <Label htmlFor="fullName">Email</Label>
              )}
              <Input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
              />
            </InputContainer>
            <InputContainer>
              {errors.password && touched.password ? (
                <ErrorText>{errors.password}</ErrorText>
              ) : (
                <Label htmlFor="fullName">Password</Label>
              )}
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
            </InputContainer>
          </AllInputContainer>
          <ForgotPasswordLink href="">Forgot password?</ForgotPasswordLink>

          <MainButton type="submit">Sign in</MainButton>
        </form>
        <RedirectText>
          Don’t have account?{' '}
          <RedirectLink href="/sign-up"> Create now</RedirectLink>
        </RedirectText>
        <SLText>Continue with</SLText>
        <SLContainer>
          <SocialLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.google.com/"
          >
            <GoogleIcon style={{ width: 20, height: 20, marginRight: 4 }} />
            Google
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/"
          >
            <FacebookIcon style={{ width: 20, height: 20, marginRight: 4 }} />
            Facebook
          </SocialLink>
        </SLContainer>
      </LogInContainer>
    </LogInPage>
  );
}
