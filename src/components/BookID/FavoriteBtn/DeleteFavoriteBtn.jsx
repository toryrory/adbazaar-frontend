import { HeartMinus } from '../../../../public/svg-book';

export default function DeleteFavoriteBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        backgroundColor: '#F38FF5',
        border: 'none',
        borderRadius: '5px 0px 0px 5px',
        padding: 4,
        position: 'absolute',
        top: 24,
        right: 0,
      }}
    >
      <HeartMinus style={{ width: 36, height: 36 }} />
    </button>
  );
}
