import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoggedIn,
  selectUserName,
  selectAuthType,
  selectAuthError,
  selectRefreshToken,
  selectUserAvatar,
} from '@/redux/selectors';
import { authLogout, googleLogOut } from '@/redux/auth/operations';
import Link from 'next/link';
import {
  Menu,
  MenuHeader,
  UserContainer,
  UserLinkContainer,
  UserLink,
  Divider,
  UserText,
  UserName,
  Button,
  OverlayContainer,
  Circle,
  StyledImg,
  GreyList,
  GreyItem,
  Title,
  List,
  Item,
  SLList,
  LogoutButton,
  Text,
} from './Overlay.styled';
import {
  Logo,
  Instagram,
  Facebook,
  Cross,
  CategoriesCircle,
  ShoppingCircle,
  LogoutCircle,
  UserBlue,
} from '../../../../public/svg-layout';
import { Img32Girl } from '../../../../public/png';

export default function Overlay({ onClose, style }) {
  const dispatch = useDispatch();
  // const settings = useSelector(selectSettings);
  const name = useSelector(selectUserName);
  const refreshToken = useSelector(selectRefreshToken);
  const authType = useSelector(selectAuthType);
  const authError = useSelector(selectAuthError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const avatar = useSelector(selectUserAvatar);
  // const [state, setState] = useState(settings);

  const onLogOut = () => {
    console.log(authError);
    if (authType === 'google') {
      dispatch(googleLogOut());
    } else if (authType === 'email') {
      dispatch(authLogout({ refresh_token: refreshToken }));
    } else if (!authType) {
      console.log('please log in first');
    }
  };

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

  return (
    <>
      <OverlayContainer onClick={handleOverlayClick} style={style}>
        <Menu>
          <MenuHeader>
            <Logo style={{ width: 55, height: 32 }} />
            <Button type="button" onClick={onClose}>
              <Cross style={{ width: 24, height: 24 }} />
            </Button>
          </MenuHeader>
          <UserContainer>
            <Circle>
              {isLoggedIn ? (
                <StyledImg
                  src={avatar ? avatar : Img32Girl}
                  width={40}
                  height={40}
                  alt="user avatar"
                />
              ) : (
                <UserBlue style={{ width: 24, height: 24 }} />
              )}
            </Circle>
            {isLoggedIn ? (
              <UserName>{name}</UserName>
            ) : (
              <div>
                <UserLinkContainer>
                  <UserLink href="/login">Log in</UserLink>
                  <Divider>|</Divider>
                  <UserLink href="/register">Sign up</UserLink>
                </UserLinkContainer>
                <UserText>Authorize for advanced features</UserText>
              </div>
            )}
          </UserContainer>
          <GreyList>
            <GreyItem>
              <CategoriesCircle style={{ width: 34, height: 34 }} />
              <Link href="/categories" style={{ color: 'inherit' }}>
                Shop by category
              </Link>
            </GreyItem>
            <GreyItem>
              <ShoppingCircle style={{ width: 34, height: 34 }} />
              <Link href="/cart" style={{ color: 'inherit' }}>
                My cart
              </Link>
            </GreyItem>
          </GreyList>
          <div>
            <Title style={{ padding: '0 32px' }}>Help & Settings</Title>
            <List>
              <Item>
                <Link href="/" style={{ color: 'inherit' }}>
                  Delivery and payment
                </Link>
              </Item>
              <Item>
                <Link href="/" style={{ color: 'inherit' }}>
                  Support
                </Link>
              </Item>
              <Item>
                <Link href="/" style={{ color: 'inherit' }}>
                  About us
                </Link>
              </Item>
            </List>
          </div>
          <div style={{ marginBottom: 40, padding: '0 32px' }}>
            <Title>Contact us</Title>
            <ul>
              <Item>
                <a
                  href="mailto:adbazaar@gmail.com"
                  style={{ color: 'inherit' }}
                >
                  adbazaar@gmail.com
                </a>
              </Item>
              <Item>
                <a href="tel:+380665554433 " style={{ color: 'inherit' }}>
                  +38 (066) 555 44 33
                </a>
              </Item>
            </ul>
            <SLList>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Facebook style={{ width: 24, height: 24 }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Instagram style={{ width: 24, height: 24 }} />
                </a>
              </li>
            </SLList>
          </div>
          {isLoggedIn && (
            <LogoutButton type="button" onClick={onLogOut}>
              <LogoutCircle style={{ width: 34, height: 34 }} />
              Log out
            </LogoutButton>
          )}
          <Text>
            © Adbasaar.{' '}
            <a
              href="https://teamchallenge.io/"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                color: 'var(--white-text)',
                textDecoration: 'underline',
              }}
            >
              Teamchallenge.
            </a>{' '}
            2023.{' '}
            <a
              href=""
              //   target="_blank" rel="noreferrer noopener"
              style={{ color: 'var(--white-text)' }}
            >
              Privacy policy.
            </a>
          </Text>
        </Menu>
      </OverlayContainer>
    </>
  );
}
