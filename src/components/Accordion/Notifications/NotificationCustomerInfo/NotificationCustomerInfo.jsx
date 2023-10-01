import InfoContainer from "../InfoContainer/InfoContainer";
import { CustomerInfoBox, CustomerInfoItem, CustomerBox, Circle, StyledImg, CustomerData, CustomerDataField, CustomerName } from "./NotificationCustomerInfo.styled";
import { Seller3 } from "../../../../../public/png";
import { Phone } from "../../../../../public/svg-account";

export default function NotificationCustomerInfo({ data }) {
  const { address, email, full_name, image_path, shipping, promocode, phone, payment } = data;
  
  return (
    <InfoContainer name='order' title='Customer'>
      <CustomerBox>
        <Circle>
          <StyledImg src={image_path} alt='Customer avatar' />
        </Circle>
        <CustomerInfoBox>
          <CustomerInfoItem>
            <CustomerName>{full_name}</CustomerName>
            <CustomerData>
              <Phone
                style={{
                  width: "16px",
                  height: "16px",
                  verticalAlign: "inherit",
                }}
              />
              {phone}
            </CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Address</CustomerDataField>
            <CustomerData>{address}</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Mail</CustomerDataField>
            <CustomerData>{email}</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Shipping</CustomerDataField>
            <CustomerData>{shipping}</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Payment</CustomerDataField>
            <CustomerData>{payment}</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Promocode</CustomerDataField>
            <CustomerData>{promocode ? promocode : '--'}</CustomerData>
          </CustomerInfoItem>
        </CustomerInfoBox>
      </CustomerBox>
    </InfoContainer>
  );
}
