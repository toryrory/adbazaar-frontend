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
import moment from 'moment';

export default function Seller({ seller, publicationDate }) {
  
  const dateNow = moment().format("DD/MM/yyyy");
 
  return (
    <Container>
      <SellerContainer>
        <Circle>
          <StyledImg
            src={seller.avatar}
            width={72}
            height={72}
            alt='seller avatar'
          />
        </Circle>
        <SellerInfo>
          <div>
            <Subtitle>Seller name</Subtitle>
            <Name>{seller.name}</Name>
          </div>
          <ContactContainer>
            <ContactLink href={`mailto:${seller.email}`}>
              <MailSeller style={{ width: 20, height: 20 }} />
              {seller.email}
            </ContactLink>
            <ContactLink href={`tel:${seller.phone}`}>
              <Phone style={{ width: 20, height: 20 }} />
              {seller.phone}
            </ContactLink>
          </ContactContainer>
          <List>
            <Item>
              <Subtitle>Publication date</Subtitle>
              <Description>{publicationDate}</Description>
            </Item>
            <Item>
              <Subtitle>On Adbazaar from</Subtitle>
              <Description>{seller.registrationDate}</Description>
            </Item>
            <Item>
              <Subtitle>Seller rate</Subtitle>
              <LikeBtnContainer>
                <LikeBtn
                  type='button'
                  onClick={() => {
                    console.log("like");
                  }}
                >
                  <Like style={{ width: 20, height: 20 }} />
                  {dateNow === seller.registrationDate ? 0 : seller.likes}
                  {/* {seller.likes} */}
                </LikeBtn>
                <LikeBtn
                  type='button'
                  onClick={() => {
                    console.log("dislike");
                  }}
                >
                  <Dislike style={{ width: 20, height: 20 }} />
                  {seller.dislikes}
                </LikeBtn>
              </LikeBtnContainer>
            </Item>
            <Item>
              <Subtitle>Successful sales</Subtitle>
              <Description>
                {dateNow === seller.registrationDate ? 0 : seller.sales}
                {/* {seller.sales} */}
              </Description>
            </Item>
            <Item>
              <Subtitle>Location</Subtitle>
              <Description>{seller.location}</Description>
            </Item>
          </List>
        </SellerInfo>
      </SellerContainer>
    </Container>
  );
}
