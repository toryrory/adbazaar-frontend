import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { selectAuthError } from '@/redux/selectors';
import Modal from '@/components/modal/Modal';
import {
  ResetPage,
  ResetContainer,
  UserImgContainer,
  CloseButton,
  Title,
  InputItem,
  Label,
  Input,
  Text,
  MainButton,
  RedirectText,
  RedirectLink,
  SLText,
  SLList,
  SLItem,
  SocialLink,
} from '@/styles/reset-password.styled';
import { UserSvg, Cross, GoogleIcon, FacebookIcon } from '../components/svg';

export default function ResetPassword() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = ({ email }, actions) => {
    console.log(email);
    setShowModal(true);
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit,
  });

  return (
    <ResetPage>
      <ResetContainer>
        <UserImgContainer>
          <UserSvg style={{ width: 24, height: 24 }} />
        </UserImgContainer>
        <CloseButton type="button" onClick={() => router.push('/log-in')}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>

        <Title>Sign in</Title>
        <form onSubmit={handleSubmit}>
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
          <Text>You will receive a new password to your email</Text>

          <MainButton type="submit">Reset password</MainButton>
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
      </ResetContainer>
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="A password reset instruction has been sent to your e-mail account"
        />
      )}
    </ResetPage>
  );
}
