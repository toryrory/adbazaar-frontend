import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import {
  SignUpContainer,
  HeaderContainer,
  AllInputContainer,
  InputContainer,
  ErrorText,
  Input,
  Label,
} from '@/styles/sign-up.styled';

const schema = yup.object({
  fullName: yup.string().required('Please Enter your name'),
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
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    values.termsChecked = false;
    values.notificationsChecked = false;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: '',
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
    <SignUpContainer>
      <HeaderContainer>
        <Link href="/">Logo</Link>
        <button type="button">Menu</button>
      </HeaderContainer>

      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <AllInputContainer>
          <InputContainer>
            {errors.fullName && touched.fullName ? (
              <ErrorText>{errors.fullName}</ErrorText>
            ) : (
              <Label htmlFor="fullName">Full Name</Label>
            )}
            <Input
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
            />
          </InputContainer>
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
            <Input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </InputContainer>
          <InputContainer>
            {errors.confirm && touched.confirm ? (
              <ErrorText>{errors.confirm}</ErrorText>
            ) : (
              <Label htmlFor="confirm">Confirm your Password</Label>
            )}

            <Input
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm your Password"
            />
          </InputContainer>
        </AllInputContainer>
        <div>
          <input
            type="checkbox"
            id="terms"
            value={values.termsChecked}
            onChange={handleChange}
            onBlur={handleBlur}
            name="termsChecked"
          />
          {errors.termsChecked && touched.termsChecked ? (
            <ErrorText>{errors.termsChecked}</ErrorText>
          ) : (
            <Label htmlFor="terms">
              You accept our <Link href="">Terms and Conditions</Link>
            </Label>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            id="notifications"
            value={values.notificationsChecked}
            onChange={handleChange}
            onBlur={handleBlur}
            name="notificationsChecked"
          />
          <Label htmlFor="notifications">Sign me up for notifications</Label>
        </div>
        <button type="submit">Sign in</button>
      </form>
      <p>
        Have account? <Link href="/log-in"> Sign in</Link>
      </p>
    </SignUpContainer>
  );
}
