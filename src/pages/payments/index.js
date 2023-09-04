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

export default function Payments() {
  return (
    <InfoPage
      title="Payments & Shipping"
      subtitle="Welcome to ADBAZAAR! We`re excited to provide you with an overview of our Payments & Shipping policies to make your shopping experience smooth and enjoyable."
    >
      <SmallStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Container>
        <Title>Payments</Title>
        <Text>
          <Subtitle>Payment Methods:</Subtitle>
          We accept various payment methods, including credit/debit cards,
          PayPal, and other methods as specified during checkout.
        </Text>
        <Text>
          <Subtitle>Payment Processing:</Subtitle>
          Payments are securely processed through our trusted payment gateway
          partners. Your payment information is encrypted and never stored on
          our servers.
        </Text>
        <Text>
          <Subtitle>Currency:</Subtitle>
          All prices are displayed in US Dollars. Please note that currency
          conversion rates may apply if you are making a purchase from a
          different country.
        </Text>
        <Text>
          <Subtitle>Taxes:</Subtitle>
          Applicable taxes, if any, will be calculated and displayed during
          checkout.
        </Text>
      </Container>
      <Container>
        <Title>Order Processing</Title>
        <Text>
          All ADBAZAAR’S orders are processed and shipped from our stock in
          Europe 2 - 3 business days of order date. Orders are processed and
          shipped out Monday - Friday (excluding major holidays).
        </Text>
        <Text>
          Delivery times are provided as a guideline only and do not factor in
          any delays caused by uncontrollable circumstances i.e. severe weather,
          circumstances related to the courier itself, etc. Shipment delays due
          to uncontrollable circumstances do not qualify for refunds.
        </Text>
        <Text>
          If you have any further questions about shipping internationally,
          please email
          <a
            href="mailto:adbazaar@gmail.com"
            style={{
              color: 'inherit',
              textDecoration: 'underline',
              marginLeft: 4,
            }}
          >
            adbazaar@gmail.com
          </a>
        </Text>
      </Container>
      <Container>
        <Title>USA Shipping</Title>
        <Text>
          We charge a flat rate of $12 USD for all shipments within the US. All
          domestic orders under $500 USD are shipped
          <NewPost
            href="https://novaposhta.ua/"
            target="_blank"
            rel="noreferrer noopener"
          >
            New Post Express.
          </NewPost>
          Orders over $500 USD are shipped using
          <NewPost
            href="https://novaposhta.ua/"
            target="_blank"
            rel="noreferrer noopener"
          >
            New Post Express
          </NewPost>
          3-Day Select and will require signature confirmation
        </Text>
      </Container>
      <Container>
        <Title>International Shipping</Title>
        <Text>
          Rates for international shipping vary by country and are calculated at
          checkout. All international orders are shipped via
          <NewPost
            href="https://novaposhta.ua/"
            target="_blank"
            rel="noreferrer noopener"
          >
            New Post Express
          </NewPost>
          and typically take 3 - 7 business days to arrive. Please note that all
          orders are shipped as Delivery Duty Unpaid (DDU). The recipient of the
          shipment is responsible for all additional tax and duties upon
          delivery.
        </Text>
      </Container>
      <Container>
        <Title>Taxes & Duties</Title>
        <Text>
          International orders may be subject to local taxes, customs, duties,
          and fees collected by the destination country. The recipient of the
          shipment is responsible for all additional tax and duties upon
          delivery. Regulations for import duties and taxes vary by country - we
          are unable to control these costs or predict their amount. If you
          refuse a shipment from Adbazaar, you are responsible for the original
          shipping charges, any import fees that are incurred on the package,
          and additional cost of returning the package back to Adbazaar.
        </Text>
      </Container>
      <Container>
        <Title>Lost/Stolen Packages</Title>
        <Text>
          Adbazaar is not responsible for lost and/or stolen packages. If your
          package has been lost and/or stolen please contact your local USPS
          immediately and provide them with your tracking number. For
          international customers please immediately contact
          <NewPost
            href="https://novaposhta.ua/"
            target="_blank"
            rel="noreferrer noopener"
          >
            New Post Express.
          </NewPost>
        </Text>
      </Container>
      <Container>
        <Text style={{ textIndent: 0 }}>
          *** <br />
          Adbazaar reserves the right to cancel orders in which case a full
          refund will be issued.
        </Text>
      </Container>
    </InfoPage>
  );
}
