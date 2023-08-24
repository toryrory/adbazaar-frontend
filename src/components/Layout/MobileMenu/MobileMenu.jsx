import Overlay from './Overlay';

export default function MobileMenu({ onClose, isClosed }) {
  return (
    <>
      {isClosed ? (
        <Overlay
          onClose={onClose}
          style={{
            transform: 'translateX(-100%)',
            transition: 'transform 250ms ease-in-out',
          }}
        />
      ) : (
        <Overlay
          onClose={onClose}
          style={{
            transform: 'translateX(0)',
            transition: 'transform 250ms ease-in-out',
          }}
        />
      )}
    </>
  );
}
