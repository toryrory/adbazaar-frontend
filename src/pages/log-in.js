import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { authLogin } from '@/redux/operations';
import { selectAuthError, selectUserEmail } from '@/redux/selectors';
import Modal from '@/components/modal/Modal';
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
  const router = useRouter();
  const isUser = useSelector(selectUserEmail);
  const authError = useSelector(selectAuthError);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      setShowModal(false);
    } else if (!authError && isUser) {
      setShowModal(true);
    }
  }, [authError, isUser]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    dispatch(authLogin({ email, password }));
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
        <CloseButton type="button" onClick={() => router.push('/')}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>
        <Title>Sign in</Title>
        <form onSubmit={handleSubmit}>
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
              <ErrorText>Incorrect password or email.</ErrorText>
              <ForgotPasswordLink href="/reset-password">
                Forgot password?
              </ForgotPasswordLink>
            </ErrorContainer>
          ) : (
            <ForgotPasswordLink href="/reset-password">
              Forgot password?
            </ForgotPasswordLink>
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
              <GoogleIcon style={{ width: 20, height: 20 }} />
              Google
            </SocialLink>
          </SLItem>
          <SLItem>
            <SocialLink
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/"
            >
              <FacebookIcon style={{ width: 20, height: 20 }} />
              Facebook
            </SocialLink>
          </SLItem>
        </SLList>
      </LogInContainer>
      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully logged into your account"
          showTick={true}
          showButton={true}
        />
      )}
    </LogInPage>
  );
}
