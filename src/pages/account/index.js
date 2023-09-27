import { useDispatch } from 'react-redux';
import { authLogout, googleLogOut } from '@/redux/operations';
import { LogOut } from '../../../public/svg-authorization';
import { Title, Container } from '@/styles/account.styled';
import { useSelector } from 'react-redux';
import {
  selectAuthType,
  selectUserData,
  selectAuthError,
  selectIsVerified,
} from '@/redux/selectors';
import AccountAccordion from '@/components/Accordion/Accordion';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Payments,
  AddBook,
  Comments,
  Favorites,
  OrderHistory,
  Settings,
  Support,
  PersonalInfo,
  Notifications,
} from '@/components/Accordion';
import {
  PersonSvg,
  MessagesSvg,
  FavoritesSvg,
  SettingsSvg,
  OrderHistorySvg,
  AddBookSvg,
  PaymentsSvg,
  Load,
  PhonePlus,
  Bell,
} from '../../../public/svg-account';
import {
  LogOutBtn,
  ErrorContainer,
  ErrorMessage,
  SendCodeButton,
} from '@/styles/account.styled';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Layout/Header/Header';

export default function Account() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector(selectUserData);
  const authType = useSelector(selectAuthType);
  const authError = useSelector(selectAuthError);
  const [showModal, setShowModal] = useState(false);

  const isVerified = useSelector(selectIsVerified);

  useEffect(() => {
    //dispatch(authGetUserInfo())
  }, []);

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

  const onSendCode = () => {
    console.log('resend code');
    //dispatch(sendVerificationCode)
    router.push('/register/confirmation');
  };

  return (
    <>
      <Header />
      <Container>
        {!isVerified ? (
          <>
            <Title style={{ marginBottom: 8 }}>Hello, {userName.name}</Title>
            <ErrorContainer>
              <ErrorMessage>
                Vertification failed! Try entering the code again.
              </ErrorMessage>
              <SendCodeButton type='button' onClick={onSendCode}>
                <Load style={{ width: 24, height: 24 }} />
                Send a new code
              </SendCodeButton>
            </ErrorContainer>
          </>
        ) : (
          <Title style={{ marginBottom: 52 }}>Hello, {userName.name}</Title>
        )}
        <AccountAccordion //сделать покрасивее без повторов
          text='Personal Information'
          icon={
            <PersonSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <PersonalInfo />
        </AccountAccordion>
        <AccountAccordion
          text='Order History'
          icon={
            <OrderHistorySvg
              style={{ width: 24, height: 24, marginRight: 16 }}
            />
          }
        >
          <OrderHistory />
        </AccountAccordion>
        <AccountAccordion
          text='Payment Methods'
          icon={
            <PaymentsSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <Payments />
        </AccountAccordion>
        <AccountAccordion
          text='Favorites'
          icon={
            <FavoritesSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <Favorites />
        </AccountAccordion>
        <AccountAccordion
          text='My Comments'
          icon={
            <MessagesSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <Comments />
        </AccountAccordion>
        <AccountAccordion
          text='Notifications'
          icon={<Bell style={{ width: 24, height: 24, marginRight: 16 }} />}
        >
          <Notifications />
        </AccountAccordion>
        <AccountAccordion
          text='Setting'
          icon={
            <SettingsSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <Settings />
        </AccountAccordion>
        <AccountAccordion
          text='Support'
          icon={
            <PhonePlus style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <Support />
        </AccountAccordion>
        <AccountAccordion
          text='Books I sell / Add Book'
          icon={
            <AddBookSvg style={{ width: 24, height: 24, marginRight: 16 }} />
          }
        >
          <AddBook />
        </AccountAccordion>
        <LogOutBtn type='button' onClick={onLogOut}>
          <LogOut style={{ width: 24, height: 24 }} />
          Log out
        </LogOutBtn>
        {showModal && (
          <Modal
            onClose={onCloseModal}
            message='You have logged out of your personal account'
            showOkButton={true}
          />
        )}
        <ToastContainer theme='dark' />
      </Container>
    </>
  );
}
