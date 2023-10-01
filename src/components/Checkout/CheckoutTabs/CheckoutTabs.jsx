import { useState } from 'react';
import {
  ButtonContainer,
  TabButton,
  TabContainer,
} from './CheckoutTabs.styled';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutSingIn from '../ChekoutSingIn/CheckoutSingIn';

export default function CheckoutTabs() {
  const [newBuyer, setNewBuyer] = useState(true);
  const [registredBuyer, setRegistredBuyer] = useState(false);

  const handleNewBuyer = () => {
    setNewBuyer(true);
    setRegistredBuyer(false);
  };

  const handleRegistredBuyer = () => {
    setRegistredBuyer(true);
    setNewBuyer(false);
  };
  return (
    <>
      {newBuyer && (
        <ButtonContainer>
          <TabButton
            type="button"
            onClick={handleNewBuyer}
            style={{
              borderWidth: '0.5px 0px 0px 0px',
            }}
          >
            New buyer
          </TabButton>
          <TabButton
            type="button"
            onClick={handleRegistredBuyer}
            style={{
              borderWidth: '0px 0px 0.5px 0.5px',
            }}
          >
            Already registered
          </TabButton>
        </ButtonContainer>
      )}
      {registredBuyer && (
        <ButtonContainer>
          <TabButton
            type="button"
            onClick={handleNewBuyer}
            style={{
              borderWidth: '0px 0.5px 0.5px 0px',
            }}
          >
            New buyer
          </TabButton>
          <TabButton
            type="button"
            onClick={handleRegistredBuyer}
            style={{
              borderWidth: '0.5px 0px 0px 0px',
            }}
          >
            Already registered
          </TabButton>
        </ButtonContainer>
      )}
      <TabContainer>
        {newBuyer && (
          <CheckoutForm
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              country: '',
              address: '',
              payment: 'receipt',
              promo: '',
              comment: '',
            }}
          />
        )}
        {registredBuyer && <CheckoutSingIn />}
      </TabContainer>
    </>
  );
}
