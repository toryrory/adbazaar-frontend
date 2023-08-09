import { useDispatch } from 'react-redux';
import { authLogout } from '@/redux/operations';
import { LogOut } from '@/components/svg';

export default function Account() {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(authLogout());
    console.log('logged out');
  };

  return (
    <div>
      <h2>personal account</h2>
      <button type="button" onClick={onLogOut}>
        <LogOut style={{ width: 24, height: 24 }} />
        Log out
      </button>
    </div>
  );
}
