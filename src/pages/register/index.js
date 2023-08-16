import { useFormik } from 'formik';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '@/redux/operations';
import { selectAuthError, selectUserEmail } from '@/redux/selectors';
import { schema } from '@/services/shema';
import Modal from '@/components/modal/Modal';
import AuthorizationContainer from '@/components/authorizationContainer/AuthorizationContainer';
import CloseButton from '@/components/closeButton/CloseButton';
import RegisterHeader from '@/components/registerHeader/RegisterHeader';
import GoogleRegistration from '@/components/googleRegistration/GoogleRegistration';
import ErrorMessage from '@/components/errorMessage/ErrorMessage';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  InputList,
  InputItem,
  PasswordContainer,
  EyeButton,
  Input,
  Label,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  RedirectText,
  RedirectLink,
} from '@/styles/register.styled';
import {
  EyeClosed,
  EyeOpened,
  CheckboxChecked,
  CheckboxEmpty,
} from '../../components/svg';

export default function SignUp() {
  const router = useRouter();
  const authError = useSelector(selectAuthError);
  const isUser = useSelector(selectUserEmail);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const dispatch = useDispatch();

  const onCloseModalError = () => {
    setShowModalError(false);
    router.push('/register');
  };

  useEffect(() => {
    if (authError) {
      console.log('email is already taken');
      setShowModalError(true);
    } else if (!authError && isUser) {
      router.push('/register/confirmation');
    }
  }, [authError, isUser]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (
    { name, email, password, termsChecked, notificationsChecked },
    actions
  ) => {
    dispatch(authRegister({ name, email, password }));
    termsChecked = false;
    notificationsChecked = false;
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirm: '',
        termsChecked: false,
        notificationsChecked: false,
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <>
      <AuthorizationContainer>
        <CloseButton onClick={() => router.push('/')} />
        <RegisterHeader />
        <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
          <InputList>
            <InputItem>
              {errors.name && touched.name ? (
                <ErrorMessage text={errors.name} />
              ) : (
                <Label htmlFor="name">
                  Full Name
                  <span
                    style={{
                      marginLeft: 2,
                      color: 'var(--error-color)',
                    }}
                  >
                    *
                  </span>
                </Label>
              )}
              <Input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </InputItem>
            <InputItem>
              {errors.email && touched.email ? (
                <ErrorMessage text={errors.email} />
              ) : (
                <Label htmlFor="email">
                  Email
                  <span
                    style={{
                      marginLeft: 2,
                      color: 'var(--error-color)',
                    }}
                  >
                    *
                  </span>
                </Label>
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
            </InputItem>
            <InputItem>
              {errors.password && touched.password ? (
                <ErrorMessage text={errors.password} />
              ) : (
                <Label htmlFor="password">
                  Password
                  <span
                    style={{
                      marginLeft: 2,
                      color: 'var(--error-color)',
                    }}
                  >
                    *
                  </span>
                </Label>
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
            </InputItem>
            <InputItem>
              {errors.confirm && touched.confirm ? (
                <ErrorMessage text={errors.confirm} />
              ) : (
                <Label htmlFor="confirm">
                  Confirm your Password
                  <span
                    style={{
                      marginLeft: 2,
                      color: 'var(--error-color)',
                    }}
                  >
                    *
                  </span>
                </Label>
              )}
              <PasswordContainer>
                <Input
                  value={values.confirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={passwordShown ? 'text' : 'password'}
                  name="confirm"
                  id="confirm"
                  placeholder="Confirm your Password"
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
          <CheckboxContainer>
            <CheckboxLabel>
              {values.termsChecked ? (
                <CheckboxChecked style={{ width: 20, height: 20 }} />
              ) : (
                <CheckboxEmpty style={{ width: 20, height: 20 }} />
              )}
              <CheckboxInput
                type="checkbox"
                value={values.termsChecked}
                onChange={handleChange}
                onBlur={handleBlur}
                name="termsChecked"
              />
              You accept
              <Link
                style={{ color: '#a3e9ff', textDecoration: 'underline' }}
                href=""
              >
                our Terms and Conditions
              </Link>
            </CheckboxLabel>

            {errors.termsChecked && touched.termsChecked && (
              <ErrorMessage
                text={errors.termsChecked}
                style={{ marginTop: 4 }}
              />
            )}
            <CheckboxLabel>
              {values.notificationsChecked ? (
                <CheckboxChecked style={{ width: 20, height: 20 }} />
              ) : (
                <CheckboxEmpty style={{ width: 20, height: 20 }} />
              )}
              <CheckboxInput
                type="checkbox"
                value={values.notificationsChecked}
                onChange={handleChange}
                onBlur={handleBlur}
                name="notificationsChecked"
              />
              Sign me up for notifications
            </CheckboxLabel>
          </CheckboxContainer>
          <SecondaryButton text="Sign up" type="submit" />
        </form>
        <GoogleRegistration />
        <RedirectText>
          Have account? <RedirectLink href="/login"> Sign in</RedirectLink>
        </RedirectText>
      </AuthorizationContainer>
      {showModalError && (
        <Modal
          onClose={onCloseModalError}
          message="Email is already taken. Please enter valid email"
        />
      )}
    </>
  );
}