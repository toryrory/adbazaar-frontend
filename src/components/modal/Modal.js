import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CloseButton from '../closeButton/CloseButton';
import SecondaryButton from '../secondaryButton/SecondaryButton';
import Link from 'next/link';
import { Tick, SadSmile } from '../../../public/svg-authorization';
import {
  Overlay,
  ModalWindow,
  WhooText,
  Message,
  ErrorMessage,
  LinkText,
} from './Modal.styled';

export default function Modal({
  onClose,
  message,
  showTick,
  showButton,
  showOkButton,
  showHomeButton,
  errorMessage,
  showSadSmile,
  showLoginButton,
  showLink,
  messageStyles,
}) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const onPress = () => {
    router.push('/account');
  };

  const onPressOk = () => {
    router.push('/');
  };

  const onPressLogin = () => {
    router.push('/login');
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        {showTick && (
          <>
            <Tick style={{ width: 40, height: 40 }} />
            <WhooText>Whoo!</WhooText>
          </>
        )}
        {showSadSmile && (
          <>
            <SadSmile style={{ width: 40, height: 40 }} />
            <WhooText>Sorry!</WhooText>
          </>
        )}
        <CloseButton onClick={onClose} />
        {message && <Message style={messageStyles}>{message}</Message>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {showButton && (
          <SecondaryButton
            type="button"
            onClick={onPress}
            text="Go to personal account"
            style={{ marginTop: 40 }}
          />
        )}
        {showOkButton && (
          <SecondaryButton
            type="button"
            onClick={onPressOk}
            text="OK"
            style={{ marginTop: 40 }}
          />
        )}
        {showLoginButton && (
          <SecondaryButton
            type="button"
            onClick={onPressLogin}
            text="Sign in"
            style={{ marginTop: 32, marginBottom: 24 }}
          />
        )}
        {showHomeButton && (
          <SecondaryButton
            type="button"
            onClick={onPressOk}
            text="Home page"
            style={{ marginTop: 40 }}
          />
        )}
        {showLink && (
          <LinkText>
            Don’t have account?{' '}
            <Link
              href="/register"
              style={{ color: 'inherit', fontWeight: 700 }}
            >
              Create now
            </Link>
          </LinkText>
        )}
      </ModalWindow>
    </Overlay>
  );
}
