import InfoPage from '@/components/InfoPage/InfoPage';
import {
  Container,
  Title,
  Subtitle,
  Text,
  NewPost,
  SmallStar,
} from '@/styles/payments.styled';
import { BgFull } from '../../../public/backgrounds';

export default function Terms() {
  return (
    <InfoPage
      title="Terms & Conditions"
      subtitle="Before you start exploring and using our services, please take a moment to review the following terms and conditions that govern your use of our platform."
    >
      <SmallStar src={BgFull} alt="star" style={{ zIndex: -1, top: 915 }} />
      <Container>
        <Title>1. Acceptance of Terms:</Title>
        <Text>
          By accessing or using ADBAZAAR, you agree to abide by these terms and
          conditions. If you do not agree with any part of these terms, please
          do not use our services
        </Text>
      </Container>
      <Container>
        <Title>2. User Accounts:</Title>
        <Text>
          To access certain features, you may need to create a user account. You
          are responsible for maintaining the security of your account
          information and any actions taken under your account.
        </Text>
      </Container>
      <Container>
        <Title>3. Book Listings:</Title>
        <Text>
          As a seller, you agree to provide accurate and complete information
          for your book listings. You are responsible for the content you
          upload, including images and descriptions. Any false or misleading
          information may result in the removal of your listings.
        </Text>
      </Container>
      <Container>
        <Title>4. Transactions:</Title>
        <Text>
          We facilitate transactions between buyers and sellers. We are not
          responsible for the quality, accuracy, legality, or delivery of the
          books listed on our platform. Buyers and sellers are responsible for
          resolving any issues that arise from transactions.
        </Text>
      </Container>
      <Container>
        <Title>5. Privacy:</Title>
        <Text>
          We value your privacy and will handle your personal information in
          accordance with our Privacy Policy.
        </Text>
      </Container>
      <Container>
        <Title>6. Intellectual Property:</Title>
        <Text>
          You retain ownership of the content you upload to our platform. By
          using our services, you grant us a non-exclusive, worldwide,
          royalty-free license to use, display, and distribute your content.
        </Text>
      </Container>
      <Container>
        <Title>7. Prohibited Content:</Title>
        <Text>
          You agree not to post or upload content that is illegal, offensive, or
          violates the rights of others. We reserve the right to remove any
          content that violates our policies.
        </Text>
      </Container>
      <Container>
        <Title>8. Termination:</Title>
        <Text>
          We may suspend or terminate your account if you violate these terms or
          engage in any behavior that we deem inappropriate.
        </Text>
      </Container>
      <Container>
        <Text style={{ textIndent: 0 }}>
          *** <br />
          Thank you for using Adbazaar! If you have any questions or concerns,
          please contact our customer support.
        </Text>
      </Container>
    </InfoPage>
  );
}
