import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { authRegister } from '@/redux/operations';
import { useState } from 'react';
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

const schema = yup.object({
  name: yup.string().required('Please Enter your name'),
  email: yup.string().email().required('Please Enter your Email'),
  password: yup
    .string()
    .min(6, 'Password is too short - should be 6 symbols minimum')
    .max(16, 'Password is too long - should be 16 symbols maximum')
    .required('Please Enter your Password'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password doesn`t match')
    .required('Please Confirm your Password'),
  termsChecked: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  // .required()
  // .default(false),
  // .matches(
  //   '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // )
});

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (
    { name, email, password, termsChecked, notificationsChecked },
    actions
  ) => {
    dispatch(authRegister({ name, email, password }));
    alert(
      ` You’ve got mail to ${email}. Please enter the four digit code you received`
    );
    termsChecked = false;
    notificationsChecked = false;
    actions.resetForm();
  };

  // const onSubmit = (values, actions) => {
  //   console.log(values);
  //   actions.resetForm();
  //   values.termsChecked = false;
  //   values.notificationsChecked = false;
  // };

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
        <CloseButton
          type="button"
          onClick={() => console.log('close button pressed')}
        >
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
              You accept{' '}
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
        <RedirectText>
          Have account? <RedirectLink href="/log-in"> Sign in</RedirectLink>
        </RedirectText>
      </SignUpContainer>
    </SignUpPage>
  );
}
