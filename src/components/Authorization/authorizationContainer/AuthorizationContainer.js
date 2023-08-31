import { Page, Container } from './AuthorizationContainer.styled';

export default function AuthorizationContainer({ children }) {
  return (
    <Page>
      <Container>{children}</Container>
    </Page>
  );
}
