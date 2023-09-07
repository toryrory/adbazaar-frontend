import { HeartPlus } from '../../../../public/svg-book';

export default function AddFavoriteBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        backgroundColor: '#355896',
        border: 'none',
        borderRadius: '5px 0px 0px 5px',
        padding: 4,
        position: 'absolute',
        top: 24,
        right: 0,
      }}
    >
      <HeartPlus style={{ width: 36, height: 36 }} />
    </button>
  );
}
