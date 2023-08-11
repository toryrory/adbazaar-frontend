import { GoogleIcon, FacebookIcon } from '../svg';
import { Text, List, Item, SocialLink } from './GoogleRegistration.styled';

export default function GoogleRegistration() {
  return (
    <>
      <Text>Continue with</Text>
      <List>
        <Item>
          <SocialLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.google.com/"
          >
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
