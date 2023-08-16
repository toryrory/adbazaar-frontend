import { useDispatch } from 'react-redux';
import { authLogout, googleLogOut } from '@/redux/operations';
import { LogOut } from '@/components/svg';
import { Title, Container } from '@/styles/account.styled';
import { useSelector } from 'react-redux';
import {
  selectAuthType,
  selectUserData,
  selectAuthError,
} from '@/redux/selectors';
import AccountAccordion from '@/components/Accordion/Accordion';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Payments,
  AddBook,
  Messages,
  Favorites,
  OrderHistory,
  Settings,
  Support,
  PersonalInfo,
} from '@/components/Accordion';
import {
  PersonSvg,
  MessagesSvg,
  FavoritesSvg,
  SettingsSvg,
  OrderHistorySvg,
  AddBookSvg,
  PaymentsSvg,
} from '../../../public/svg-account';
import { LogOutBtn } from '@/styles/account.styled';

export default function Account() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector(selectUserData);
  const authType = useSelector(selectAuthType);
  const authError = useSelector(selectAuthError);
  const [showModal, setShowModal] = useState(false);

  const onLogOut = () => {
    console.log(authError);
    if (authType === 'google') {
      dispatch(googleLogOut());
      setShowModal(true);
    } else if (authType === 'email') {
      dispatch(authLogout());
      setShowModal(true);
    } else if (!authType) {
      console.log('please log in first');
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <Container>
      <Title>Hello, {userName.name}</Title>
      <AccountAccordion //сделать покрасивее без повторов
        text="Personal Information"
        icon={<PersonSvg style={{ width: 24, height: 24, marginRight: 16 }} />}
      >
        <PersonalInfo />
      </AccountAccordion>
      <AccountAccordion
        text="Order History"
        icon={
          <OrderHistorySvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <OrderHistory />
      </AccountAccordion>
      <AccountAccordion
        text="Payment Methods"
        icon={
          <PaymentsSvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <Payments />
      </AccountAccordion>
      <AccountAccordion
        text="Favorites"
        icon={
          <FavoritesSvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <Favorites />
      </AccountAccordion>
      <AccountAccordion
        text="Messages & Reviews"
        icon={
          <MessagesSvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <Messages />
      </AccountAccordion>
      <AccountAccordion
        text="Setting"
        icon={
          <SettingsSvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <Settings />
      </AccountAccordion>
      <AccountAccordion
        text="Support"
        icon={
          <SettingsSvg style={{ width: 24, height: 24, marginRight: 16 }} />
        }
      >
        <Support />
      </AccountAccordion>
      <AccountAccordion
        text="Books | sell / Add Book"
        icon={<AddBookSvg style={{ width: 24, height: 24, marginRight: 16 }} />}
      >
        <AddBook />
      </AccountAccordion>
      <LogOutBtn type="button" onClick={onLogOut}>
        <LogOut style={{ width: 24, height: 24 }} />
        Log out
      </LogOutBtn>
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have logged out of your personal account"
          showOkButton={true}
        />
      )}
    </Container>
  );
}
