import InfoContainer from "../InfoContainer/InfoContainer";
import { CustomerInfoBox, CustomerInfoItem, CustomerBox, Circle, StyledImg, CustomerData, CustomerDataField, CustomerName } from "./NotificationCustomerInfo.styled";
import { Seller3 } from "../../../../../public/png";
import { Phone } from "../../../../../public/svg-account";

export default function NotificationCustomerInfo() {
  return (
    <InfoContainer title={"Customer"}>
          <CustomerBox>
              <Circle>
                  <StyledImg src={Seller3} alt="Customer avatar" />
              </Circle>
        <CustomerInfoBox>
          <CustomerInfoItem>
            <CustomerName>Mary May</CustomerName>
                      <CustomerData><Phone style={{width: '16px', height: '16px', verticalAlign: 'inherit'}} />+380 55 444 33 22</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Address</CustomerDataField>
            <CustomerData>Kyiv Ukraine 01000 Independence street 1 / 1-33</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Mail</CustomerDataField>
            <CustomerData>Example@gmai</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Shipping</CustomerDataField>
            <CustomerData>Nova Poshta</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Payment</CustomerDataField>
            <CustomerData>Payment upon receipt</CustomerData>
          </CustomerInfoItem>
          <CustomerInfoItem>
            <CustomerDataField>Promocode</CustomerDataField>
            <CustomerData>--</CustomerData>
          </CustomerInfoItem>
        </CustomerInfoBox>
      </CustomerBox>
    </InfoContainer>
  );
}
