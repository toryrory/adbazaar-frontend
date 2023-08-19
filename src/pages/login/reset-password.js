import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '@/components/modal/Modal';
import AuthorizationContainer from '@/components/authorizationContainer/AuthorizationContainer';
import CloseButton from '@/components/closeButton/CloseButton';
import LoginHeader from '@/components/loginHeader/LoginHeader';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import GoogleRegistration from '@/components/googleRegistration/GoogleRegistration';
import {
  InputItem,
  Label,
  Input,
  Text,
  RedirectText,
  RedirectLink,
} from '@/styles/reset-password.styled';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = ({ email }, actions) => {
    console.log(email);
    // dispatch(resetPassword(email));
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
    <>
      <AuthorizationContainer>
        <CloseButton onClick={() => router.push('/login')} />
        <LoginHeader />
        <form
          style={{ paddingTop: 50, marginBottom: 32 }}
          onSubmit={handleSubmit}
        >
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
          <SecondaryButton text="Reset password" type="submit" />
        </form>
        <RedirectText>
          Don’t have account?{' '}
          <RedirectLink href="/register"> Create now</RedirectLink>
        </RedirectText>
        <GoogleRegistration />
      </AuthorizationContainer>
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="A password reset instruction has been sent to your e-mail account"
        />
      )}
    </>
  );
}
