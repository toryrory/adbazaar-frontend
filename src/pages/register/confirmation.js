import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '@/redux/selectors';
import { selectAuthError } from '@/redux/selectors';
import PinInput from 'react-pin-input';
import Modal from '@/components/modal/Modal';
import AuthorizationContainer from '@/components/Authorization/authorizationContainer/AuthorizationContainer';
import CloseButton from '@/components/closeButton/CloseButton';
import RegisterHeader from '@/components/Authorization/registerHeader/RegisterHeader';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import { verification, resendVerification } from '@/redux/auth/operations';
import { selectIsVerified } from '@/redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Text,
  Email,
  ErrorText,
  AdditionalText,
  ResendButton,
} from '@/styles/confirmation.styled';

export default function Confirmation() {
  const authError = useSelector(selectAuthError);
  const email = useSelector(selectUserEmail);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(true);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const isVerified = useSelector(selectIsVerified);

  const onChange = (currentValue) => {
    setValue(currentValue);
  };

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onCloseConfirmation = () => {
    setShowModalError(true);
  };

  const onResendCode = () => {
    dispatch(resendVerification({ email: email }));
    if (authError) {
      toast.error(`${authError}`);
    } else {
      toast.success('code has been sent to your email');
    }
  };

  useEffect(() => {
    if (isVerified) {
      setShowModal(true);
      setShowModalError(false);
    } else {
      setValue('');
    }
  }, [isVerified]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(verification({ verification_code: value, email }));
    if (!isVerified) {
      setIsCodeRight(false);
    }
  };

  return (
    <>
      <AuthorizationContainer>
        <CloseButton onClick={onCloseConfirmation} />
        <RegisterHeader />
        <Text>
          You’ve got mail to <Email>{email}. </Email>
        </Text>
        {isCodeRight || isVerified ? (
          <AdditionalText>
            Please enter the four digit code you received
          </AdditionalText>
        ) : (
          <ErrorText>You have entered the wrong code. Try again</ErrorText>
        )}
        <form onSubmit={onSubmit}>
          <PinInput
            length={4}
            placeholder="_"
            focus
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 44,
            }}
            inputStyle={{
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: '1.5px solid var(--brand-color)',
              margin: 0,
              color: 'var(--white-text)',
              width: 56,
              height: 56,
              fontSize: 40,
              lineHeight: 0.6,
              padding: 16,
            }}
            type="numeric"
            onChange={onChange}
          />
          <ResendButton type="button" onClick={onResendCode}>
            Resend code?
          </ResendButton>
          <SecondaryButton type="submit" text="Continue" />
        </form>
      </AuthorizationContainer>
      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully verify your account"
          showTick={true}
          showLoginButton={true}
        />
      )}
      {showModalError && (
        <Modal
          onClose={() => setShowModalError(false)}
          errorMessage=" Vertification failed! Try entering the code again."
          showSadSmile={true}
          showHomeButton={true}
        />
      )}
      <ToastContainer />
    </>
  );
}
