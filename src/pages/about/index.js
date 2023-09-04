import { Text, SmallStar } from '@/styles/about.styled';
import InfoPage from '@/components/InfoPage/InfoPage';
import { BgFull } from '../../../public/backgrounds';

export default function About() {
  return (
    <InfoPage
      title="About Adbazaar"
      subtitle="Adbazaar Online Bookstore Platform - is a Book Marketplace where
            users can buy, sell, and trade both new and used books."
    >
      <SmallStar src={BgFull} alt="star" style={{ zIndex: -1 }} />
      <Text>
        Our Online Bookstore Platform - is a book Marketplace where users can
        buy, sell, and trade both new and used books. We build this platform
        that facilitates direct interaction between authors and readers.
      </Text>
      <Text>
        In developing our book Marketplace design, our team focuses on factors
        such as user experience, security, personal information and payment
        processing, book categorization, and building a trusted community.
      </Text>
      <Text>
        We focus on implementation of advanced search for specific genres, rare
        editions, and as well as providing of a wide range of books to appeal to
        a broader audience.
      </Text>
      <Text>
        ADBAZAAR is a rapidly developing online bookstore run by a dedicated
        team. We aim to provide a comfortable and visually appealing platform
        for book lovers to discover and enjoy good literature. We offer over
        10,000 different books in stock, covering a wide range of topics.
      </Text>
      <Text>
        Our inventory includes light classics, bestsellers, current book
        releases, educational and business development books, children's books,
        informational guides, and gift books.We thoroughly review and verify all
        books before presenting them on our site, ensuring an excellent
        selection for our customers.
      </Text>
      <Text>
        We offer special promotions, bonuses, and discounts to our clients and
        provide convenient payment and delivery options throughout Ukraine,
        Europe, and the world. Our customer service team is always ready to
        help, and we strive to make your shopping experience unforgettable.
      </Text>
    </InfoPage>
  );
}
