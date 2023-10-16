import { GoogleIcon, FacebookIcon } from '../../../../public/svg-authorization';
import { Text, List, Item, SocialLink } from './GoogleRegistration.styled';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLogin } from '@/redux/auth/operations';

export default function GoogleRegistration() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      console.log(user.access_token);
      dispatch(googleLogin(user.access_token));
    }
  }, [user]);

  return (
    <>
      <Text>Continue with</Text>
      <List>
        <Item>
          <SocialLink onClick={() => login()}>
            <GoogleIcon style={{ width: 20, height: 20 }} />
            Google
          </SocialLink>
        </Item>
        <Item>
          <SocialLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/"
          >
            <FacebookIcon style={{ width: 20, height: 20 }} />
            Facebook
          </SocialLink>
        </Item>
      </List>
    </>
  );
}
