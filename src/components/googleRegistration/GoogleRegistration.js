import { GoogleIcon, FacebookIcon } from '../svg';
import { Text, List, Item, SocialLink } from './GoogleRegistration.styled';
//////////
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { googleLogin } from '@/redux/operations';
// import jwtDecode from 'jwt-decode';
// import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

export default function GoogleRegistration() {
  ///////////////////////////////
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  // const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      // dispatch(googleLogin(user));
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          setProfile(response.data);
          console.log(profile);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

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
      {/* <FacebookLogin
        appId="2055924498093129"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile"
        // onClick={componentClicked}
        callback={responseFacebook}
      /> */}
      {/* <GoogleLogin
        buttonText="login"
        type="icon"
        shape="circle"
        size="small"
        onSuccess={onSuccess}
        onFailure={onFailure}
      /> */}
    </>
  );
}
