import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { authLogin } from '@/redux/auth/operations';
import { selectAuthError, selectIsLoggedIn } from '@/redux/selectors';
import Modal from '@/components/modal/Modal';
import AuthorizationContainer from '@/components/Authorization/authorizationContainer/AuthorizationContainer';
import CloseButton from '@/components/closeButton/CloseButton';
import LoginHeader from '@/components/Authorization/loginHeader/LoginHeader';
import GoogleRegistration from '@/components/Authorization/googleRegistration/GoogleRegistration';
import ErrorMessage from '@/components/Authorization/errorMessage/ErrorMessage';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  InputList,
  InputItem,
  PasswordContainer,
  ForgotPasswordLink,
  Label,
  Input,
  EyeButton,
  ErrorContainer,
  RedirectText,
  RedirectLink,
} from '@/styles/login.styled';
import { EyeClosed, EyeOpened } from '../../../public/svg-authorization';

export default function LogIn() {
  const router = useRouter();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      setShowModal(false);
    } else if (!authError && isLoggedIn) {
      setShowModal(true);
    }
  }, [authError, isLoggedIn]);

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

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  return (
    <>
      <AuthorizationContainer>
        <CloseButton onClick={() => router.push('/')} />
        <LoginHeader />
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
      </AuthorizationContainer>

      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully logged into your account"
          showTick={true}
          showButton={true}
        />
      )}
    </>
  );
}
