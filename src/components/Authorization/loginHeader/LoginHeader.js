import { UserImgContainer, Title } from './loginHeader.styled';
import { UserSvg } from '../../../../public/svg-authorization';

export default function LoginHeader() {
  return (
    <>
      <UserImgContainer>
        <UserSvg style={{ width: 24, height: 24 }} />
      </UserImgContainer>
      <Title>Sign in</Title>
    </>
  );
}
