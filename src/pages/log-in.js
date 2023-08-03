import { useFormik } from 'formik';
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

export default function LogIn() {
  const onSubmit = (values, actions) => {
    console.log(values);
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
    <SignUpContainer>
      <HeaderContainer>
        <Link href="/">Logo</Link>
        <button type="button">Menu</button>
      </HeaderContainer>

      <h2>Sign in</h2>
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
        </AllInputContainer>

        <button type="submit">Sign in</button>
      </form>
      <p>
        Don’t have account? <Link href="/sign-up"> Create now</Link>
      </p>
    </SignUpContainer>
  );
}
