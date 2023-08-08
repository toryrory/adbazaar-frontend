import { useFormik } from 'formik';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '@/redux/operations';
import { selectAuthError } from '@/redux/selectors';
import { schema } from '@/services/shema';
import Modal from '@/components/modal/Modal';
import {
  SignUpPage,
  SignUpContainer,
  CloseButton,
  Title,
  InputList,
  InputItem,
  PasswordContainer,
  EyeButton,
  ErrorText,
  Input,
  Label,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  MainButton,
  SLList,
  SLItem,
  SLText,
  SocialLink,
  RedirectText,
  RedirectLink,
} from '@/styles/sign-up.styled';
import {
  Cross,
  EyeClosed,
  EyeOpened,
  GoogleIcon,
  FacebookIcon,
  CheckboxChecked,
  CheckboxEmpty,
} from '../components/svg';

export default function SignUp() {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    if (authError) {
      console.log('email is already taken');
      setShowModal(false);
    }
  }, [authError]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = (
    { name, email, password, termsChecked, notificationsChecked },
    actions
  ) => {
    dispatch(authRegister({ name, email, password }));
    setShowModal(true);
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
    <SignUpPage>
      <SignUpContainer>
        <CloseButton type="button" onClick={() => router.push('/')}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <InputList>
            <InputItem>
              {errors.name && touched.name ? (
                <ErrorText>{errors.name}</ErrorText>
              ) : (
                <Label htmlFor="name">Full Name</Label>
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
                <ErrorText>{errors.email}</ErrorText>
              ) : (
                <Label htmlFor="email">Email</Label>
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
                <ErrorText>{errors.password}</ErrorText>
              ) : (
                <Label htmlFor="password">Password</Label>
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
                <ErrorText>{errors.confirm}</ErrorText>
              ) : (
                <Label htmlFor="confirm">Confirm your Password</Label>
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
              <ErrorText style={{ marginTop: 4 }}>
                {errors.termsChecked}
              </ErrorText>
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

          <MainButton type="submit">Sign in</MainButton>
        </form>
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
        <RedirectText>
          Have account? <RedirectLink href="/log-in"> Sign in</RedirectLink>
        </RedirectText>
      </SignUpContainer>
      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully created your account"
          showTick={true}
          showButton={true}
        />
      )}
    </SignUpPage>
  );
}
