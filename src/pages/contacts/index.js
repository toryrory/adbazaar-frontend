import Iframe from 'react-iframe';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import InfoPage from '@/components/InfoPage/InfoPage';
import { Title, SmallStar } from '@/styles/payments.styled';
import {
  Container,
  ContactsSubTitle,
  TextContainer,
  Text,
  Span,
  EmailContainer,
  EmailName,
  Email,
  Form,
  Label,
  Input,
  CommentInput,
  PostBtn,
} from '@/styles/contacts.styled';
import { BgFull } from '../../../public/backgrounds';
import { Send } from '../../../public/svg-book';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setComment('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, subject, comment);
    reset();
    toast.success('Thank you for your question');
  };

  const handleNameChange = (event) => {
    const { value } = event.currentTarget;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const { value } = event.currentTarget;
    setEmail(value);
  };
  const handleSubjectChange = (event) => {
    const { value } = event.currentTarget;
    setSubject(value);
  };
  const handleCommentChange = (event) => {
    const { value } = event.currentTarget;
    setComment(value);
  };

  return (
    <InfoPage
      title="Contacts"
      subtitle="Absolutely, your satisfaction is our top priority. Please don't hesitate to reach out if you have any questions, need assistance"
    >
      <SmallStar src={BgFull} alt="star" style={{ zIndex: -1, top: 915 }} />
      <Container>
        <Title>Address:</Title>
        <TextContainer>
          <ContactsSubTitle>OFFICE ADDRESS</ContactsSubTitle>
          <Text>
            Kyiv, Predslavynska street, building 12, space 14 Ukraine 03155
          </Text>
        </TextContainer>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.795848195862!2d30.516749975184876!3d50.42627518910592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1c00e6e3a5%3A0xfe72dd61238dc0f2!2z0YPQuy4g0J_RgNC10LTRgdC70LDQstC40L3RgdC60LDRjywgMTIsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1699443472358!5m2!1sru!2sua"
          width="100%"
          height="158"
          styles={{
            border: 0,
          }}
        />
        <TextContainer>
          <ContactsSubTitle>
            WAREHOUSE ADDRESS <br /> <Span>Pickup Point</Span>
          </ContactsSubTitle>
          <Text>
            Kyiv, Predslavynska street, building 12, space 14 Ukraine 03155
          </Text>
        </TextContainer>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.795848195862!2d30.516749975184876!3d50.42627518910592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1c00e6e3a5%3A0xfe72dd61238dc0f2!2z0YPQuy4g0J_RgNC10LTRgdC70LDQstC40L3RgdC60LDRjywgMTIsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1699443472358!5m2!1sru!2sua"
          width="100%"
          height="158"
          styles={{
            border: 0,
            color: '#111111',
          }}
        />
        <TextContainer>
          <ContactsSubTitle>Business Hours</ContactsSubTitle>
          <Text>
            Our support team is available 24/7 online The seller can only be
            contacted during European business hours.
          </Text>
        </TextContainer>
        <TextContainer>
          <ContactsSubTitle>EMAIL ADDRESS</ContactsSubTitle>
          <EmailContainer>
            <EmailName>Customer Support</EmailName>
            <Email href="mailto:info@adbazaar.com">info@adbazaar.com</Email>
          </EmailContainer>
          <EmailContainer>
            <EmailName>FOR COOPERATION </EmailName>
            <Email href="mailto:marketing@adbazaar.com">
              marketing@adbazaar.com
            </Email>
          </EmailContainer>
          <EmailContainer>
            <EmailName>SOLUTION OF PROBLEM ISSUES </EmailName>
            <Email href="mailto:help@adbazaar.com">help@adbazaar.com</Email>
          </EmailContainer>
          <EmailContainer>
            <EmailName>DELIVERY DEPARTMENT </EmailName>
            <Email href="mailto:ship@adbazaar.com">ship@adbazaar.com</Email>
          </EmailContainer>
          <EmailContainer>
            <EmailName>COMPLATES</EmailName>
            <Email href="mailto:info@adbazaar.com">
              complaint@adbazaar.com
            </Email>
          </EmailContainer>
        </TextContainer>
        <TextContainer>
          <ContactsSubTitle>
            Contact Us
            <br /> <Span>Feel free send us your message</Span>
          </ContactsSubTitle>
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          <Label>
            Full Name
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Label>
          <Label>
            Subject
            <Input
              type="text"
              name="subject"
              placeholder="Enter subject of appealation"
              value={subject}
              onChange={handleSubjectChange}
              required
            />
          </Label>
          <CommentInput
            type="text"
            name="comment"
            placeholder="Ask questions to clarify any details right here"
            value={comment}
            onChange={handleCommentChange}
            required
          />
          <PostBtn type="submit">
            Send
            <Send
              style={{
                width: 24,
                height: 24,
              }}
            />
          </PostBtn>
        </Form>
      </Container>
      <ToastContainer theme="dark" />
    </InfoPage>
  );
}
