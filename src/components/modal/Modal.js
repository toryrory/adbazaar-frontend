import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tick, Cross } from '../svg';
import {
  Overlay,
  ModalWindow,
  CloseButton,
  WhooText,
  Message,
  MainButton,
} from './Modal.styled';

export default function Modal({ onClose, message, showTick, showButton }) {
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

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        {showTick && (
          <>
            <Tick style={{ width: 40, height: 40 }} />
            <WhooText>Whoo!</WhooText>
          </>
        )}
        <CloseButton type="button" onClick={onClose}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>

        <Message>{message}</Message>
        {showButton && (
          <MainButton type="button" onClick={onPress}>
            Go to personal account
          </MainButton>
        )}
      </ModalWindow>
    </Overlay>
  );
}
