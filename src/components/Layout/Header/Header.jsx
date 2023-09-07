import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectSettings, selectIsLoggedIn } from '@/redux/selectors';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  User,
  Logo,
  Burger,
  ShoppingCart,
  Heart,
} from '../../../../public/svg-layout';
import { Img32Girl } from '../../../../public/png';
import {
  HeaderContainer,
  ButtonContainer,
  Button,
  Circle,
  StyledImg,
} from './Header.styled';

export default function Header() {
  const router = useRouter();
  const settings = useSelector(selectSettings);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [state, setState] = useState(settings);
  const [showMenu, setShowMenu] = useState(false);

  const onOpenMenu = () => {
    setShowMenu(true);
  };

  const onCLoseMenu = () => {
    setShowMenu(false);
  };

  return (
    <HeaderContainer>
      <ButtonContainer>
        <Button type="button" onClick={onOpenMenu}>
          <Burger style={{ width: 20, height: 20 }} />
        </Button>
        <Button type="button" onClick={() => router.push('/')}>
          <Logo style={{ width: 55, height: 32 }} />
        </Button>
      </ButtonContainer>
      {isLoggedIn ? (
        <ButtonContainer>
          <Button type="button" onClick={() => router.push('/account')}>
            <Circle>
              <StyledImg
                src={state.avatar ? state.avatar : Img32Girl}
                width={40}
                height={40}
                alt="user avatar"
              />
            </Circle>
          </Button>
          <Button type="button" onClick={() => router.push('/favorites')}>
            <Heart style={{ width: 24, height: 24 }} />
          </Button>
          <Button
            type="button"
            onClick={() => console.log('open shopping cart')}
          >
            <ShoppingCart style={{ width: 24, height: 24 }} />
          </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button type="button" onClick={() => router.push('/login')}>
            <User style={{ width: 24, height: 24 }} />
          </Button>
          <Button type="button" onClick={() => router.push('/login')}>
            <ShoppingCart style={{ width: 24, height: 24 }} />
          </Button>
        </ButtonContainer>
      )}
      {showMenu ? (
        <MobileMenu onClose={onCLoseMenu} />
      ) : (
        <MobileMenu isClosed={true} />
      )}
    </HeaderContainer>
  );
}
