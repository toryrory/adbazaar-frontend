import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CloseButton from '../closeButton/CloseButton';
import { Tick, SadSmile } from '../../../public/svg-authorization';
import {
  Overlay,
  ModalWindow,
  WhooText,
  Message,
  ErrorMessage,
} from './Modal.styled';
import SecondaryButton from '../secondaryButton/SecondaryButton';

export default function Modal({
  onClose,
  message,
  showTick,
  showButton,
  showOkButton,
  errorMessage,
  showSadSmile,
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
        {message && <Message>{message}</Message>}
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
      </ModalWindow>
    </Overlay>
  );
}
