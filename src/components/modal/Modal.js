import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CloseButton from '../closeButton/CloseButton';
import { Tick } from '../svg';
import { Overlay, ModalWindow, WhooText, Message } from './Modal.styled';
import SecondaryButton from '../secondaryButton/SecondaryButton';

export default function Modal({
  onClose,
  message,
  showTick,
  showButton,
  showOkButton,
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
        <CloseButton onClick={onClose} />
        <Message>{message}</Message>
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
