import { useRouter } from 'next/navigation';
import {
  FooterContainer,
  MainContainer,
  Button,
  Title,
  List,
  Text,
  MenuLink,
  ContactList,
  ContactLink,
  SLList,
  SLLink,
} from './Footer.styled';
import {
  Logo,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from '../../../../public/svg-layout';

export default function Footer() {
  const router = useRouter();

  return (
    <FooterContainer>
      <MainContainer>
        <div>
          <Button type="button" onClick={() => router.push('/')}>
            <Logo style={{ width: 55, height: 32 }} />
          </Button>
          <Title>Menu</Title>
          <List>
            <li>
              <MenuLink href="/">Home</MenuLink>
            </li>
            <li>
              <MenuLink href="/categories">Categories</MenuLink>
            </li>
            <li>
              <MenuLink href="/about">About</MenuLink>
            </li>
            {/* <li>
              <MenuLink href="/">Promotions</MenuLink>
            </li>
            <li>
              <MenuLink href="/">Community</MenuLink>
            </li> */}
            <li>
              <MenuLink href="/account">Personal Account</MenuLink>
            </li>
          </List>
        </div>
        <div>
          <ContactList>
            <li>
              <ContactLink href="mailto:adbazaar@gmail.com">
                adbazaar@gmail.com
              </ContactLink>
            </li>
            <li>
              <ContactLink
                href="tel:+380665554433"
                style={{ textDecoration: 'underline' }}
              >
                +38 (066) 555 44 33
              </ContactLink>
            </li>
          </ContactList>
          <SLList>
            <li>
              <SLLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook style={{ width: 24, height: 24 }} />
              </SLLink>
            </li>
            <li>
              <SLLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram style={{ width: 24, height: 24 }} />
              </SLLink>
            </li>
            <li>
              <SLLink
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Youtube style={{ width: 24, height: 24 }} />
              </SLLink>
            </li>
            <li>
              <SLLink
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Twitter style={{ width: 24, height: 24 }} />
              </SLLink>
            </li>
          </SLList>
          <div>
            <Title>Support</Title>
            <List>
              <li>
                <MenuLink href="/contacts">Contacts</MenuLink>
              </li>
              <li>
                <MenuLink href="/payments">Payment & Shipping</MenuLink>
              </li>
              <li>
                <MenuLink href="/terms">Terms & Conditions</MenuLink>
              </li>
              {/* <li>
                <MenuLink href="/">Order Status</MenuLink>
              </li> */}
            </List>
          </div>
        </div>
      </MainContainer>
      <Text>
        © Adbasaar.{' '}
        <a
          href="https://teamchallenge.io/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: 'var(--white-text)', textDecoration: 'underline' }}
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
    </FooterContainer>
  );
}
