import { Cross } from '../../../public/svg-authorization';

export default function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'absolute',
        top: 12,
        right: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'none',
        padding: 0,
      }}
    >
      <Cross style={{ width: 24, height: 24 }} />
    </button>
  );
}
