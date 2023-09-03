import {
  Container,
  SellerContainer,
  Circle,
  StyledImg,
  SellerInfo,
  Subtitle,
  Name,
  ContactContainer,
  ContactLink,
  List,
  Item,
  Description,
  LikeBtn,
  LikeBtnContainer,
} from './Seller.styled';
import { MailSeller, Phone, Like, Dislike } from '../../../../public/svg-book';
import { Img32Girl } from '../../../../public/png';

export default function Seller({ seller }) {
  return (
    <Container>
      <SellerContainer>
        <Circle>
          <StyledImg
            src={Img32Girl}
            width={72}
            height={72}
            alt="seller avatar"
          />
        </Circle>
        <SellerInfo>
          <div>
            <Subtitle>Seller name</Subtitle>
            <Name>Coraline Maneskin</Name>
          </div>
          <ContactContainer>
            <ContactLink href="mailto:blablabla@gogle.com">
              <MailSeller style={{ width: 20, height: 20 }} />
              adbazaar@gmail.com
            </ContactLink>
            <ContactLink href="tel:+380665554433">
              <Phone style={{ width: 20, height: 20 }} />
              +38 (066) 555 44 33
            </ContactLink>
          </ContactContainer>
          <List>
            <Item>
              <Subtitle>Publication date</Subtitle>
              <Description>22/12/13 15:30</Description>
            </Item>
            <Item>
              <Subtitle>On Adbazaar from</Subtitle>
              <Description>22/12/13 15:30</Description>
            </Item>
            <Item>
              <Subtitle>Seller rate</Subtitle>
              <LikeBtnContainer>
                <LikeBtn
                  type="button"
                  onClick={() => {
                    console.log('like');
                  }}
                >
                  <Like style={{ width: 20, height: 20 }} />
                  26
                </LikeBtn>
                <LikeBtn
                  type="button"
                  onClick={() => {
                    console.log('dislike');
                  }}
                >
                  <Dislike style={{ width: 20, height: 20 }} />0
                </LikeBtn>
              </LikeBtnContainer>
            </Item>
            <Item>
              <Subtitle>Successful sales</Subtitle>
              <Description>10+</Description>
            </Item>
            <Item>
              <Subtitle>Location</Subtitle>
              <Description>06200 Nice, France</Description>
            </Item>
          </List>
        </SellerInfo>
      </SellerContainer>
    </Container>
  );
}
