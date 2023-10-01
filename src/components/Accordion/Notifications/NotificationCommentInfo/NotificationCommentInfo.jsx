import InfoContainer from "../InfoContainer/InfoContainer";
import {
  Circle,
  CustomerName,
  StyledImg,
  CustomerData,
} from "../NotificationCustomerInfo/NotificationCustomerInfo.styled";
import {
  CommentatorContacts,
  CommentatorInfo,
  CommentatorInfoBox,
  Comment,
} from "./NotificationCommentInfo.styled";
import { Phone, Envelope } from "../../../../../public/svg-account";

export default function NotificationCommentInfo({ data }) {
    const { email, full_name, image_path, phone, message } = data;
    
  return (
    <InfoContainer name='comment' title='Comment'>
      <CommentatorInfoBox>
        <CommentatorInfo>
          <Circle>
            <StyledImg src={image_path} alt='Commentator avatar' />
          </Circle>

          <CustomerName>{full_name}</CustomerName>
        </CommentatorInfo>
        <CommentatorContacts>
          <CustomerData>
            <Phone
              style={{
                width: "16px",
                height: "16px",
                verticalAlign: "inherit",
                marginRight: "10px",
              }}
            />
            {phone}
          </CustomerData>
          <CustomerData>
            <Envelope
              style={{
                width: "16px",
                height: "16px",
                verticalAlign: "inherit",
                marginRight: "10px",
              }}
            />
            {email}
          </CustomerData>
        </CommentatorContacts>
      </CommentatorInfoBox>
      <Comment>{message}</Comment>
    </InfoContainer>
  );
}
