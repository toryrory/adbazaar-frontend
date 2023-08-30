import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { books } from '@/data/books';
import SearchBar from '@/components/SearchBar/SearchBar';
import Layout from '@/components/Layout/Layout';
import BookDetails from '@/components/BookID/BookDetails/BookDetails';
import BookOverview from '@/components/BookID/BookOverview/BookOverview';
import BookReviews from '@/components/BookID/BookReviews/BookReviews';
import {
  Container,
  HeadContainer,
  RatingBox,
  Reviews,
  TitleContainer,
  Title,
  Author,
  ShareButton,
  BookContainer,
  StyledImg,
  Label,
  ButtonFavorites,
  PriceContainer,
  Price,
  Dollar,
  ButtonShopping,
  ContactContainer,
  SellerButton,
  ContactButton,
  AccordionButton,
} from '@/styles/bookId.styled';
import { Rating } from '@mui/material';
import {
  Share,
  HeartPlus,
  User,
  Mail,
  Chat,
  ArrowDown,
  ArrowUp,
  Puzzle,
  OverviewImg,
} from '../../../public/svg-book';
import { ShoppingCart } from '../../../public/svg-layout';

export default function BooksId() {
  const router = useRouter();
  const { id } = router.query;
  const currentId = Number(id);
  const [currentBook, setCurrentBook] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  useEffect(() => {
    const newBook = books.find((book) => book.id === currentId);
    setCurrentBook(newBook);
  }, [id]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <Layout>
      <Container>
        <SearchBar />
        {currentBook && (
          <>
            <HeadContainer>
              <TitleContainer>
                <Title>{currentBook.name}</Title>
                <Author>{currentBook.author}</Author>
              </TitleContainer>
              <div>
                <RatingBox>
                  <div>
                    <Rating
                      readOnly
                      defaultValue={5}
                      sx={{ color: 'var(--rose-color)' }}
                      size="small"
                    />
                    <Reviews>(12 reviews)</Reviews>
                  </div>

                  <ShareButton
                    type="button"
                    onClick={() => console.log('share')}
                  >
                    <Share style={{ width: 24, height: 24 }} />
                  </ShareButton>
                </RatingBox>
              </div>
            </HeadContainer>
            <BookContainer>
              <Label>label</Label>
              <ButtonFavorites onClick={() => console.log('add to favorites')}>
                <HeartPlus style={{ width: 36, height: 36 }} />
              </ButtonFavorites>
              <StyledImg
                src={currentBook.photo}
                alt={currentBook.name}
                priority={true}
              />
              <PriceContainer>
                <Price>
                  <Dollar>$</Dollar>
                  {currentBook.price}
                </Price>
                <ButtonShopping
                  type="button"
                  onClick={() => console.log('add to cart')}
                >
                  Add to Cart
                  <ShoppingCart style={{ width: 24, height: 24 }} />
                </ButtonShopping>
              </PriceContainer>
            </BookContainer>
            <ContactContainer>
              <SellerButton
                type="button"
                onClick={() => console.log('clicked')}
              >
                Seller
              </SellerButton>
              <ContactButton
                type="button"
                onClick={() => console.log('clicked')}
              >
                <User style={{ width: 24, height: 24 }} />
              </ContactButton>
              <ContactButton
                type="button"
                onClick={() => console.log('clicked')}
              >
                <Mail style={{ width: 24, height: 24 }} />
              </ContactButton>
              <ContactButton
                type="button"
                onClick={() => console.log('clicked')}
              >
                <Chat style={{ width: 24, height: 24 }} />
              </ContactButton>
            </ContactContainer>
            <AccordionButton type="button" onClick={toggleDetails}>
              <Puzzle style={{ width: 24, height: 24, marginRight: 8 }} />
              Detailed Information
              {showDetails ? (
                <ArrowUp
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              ) : (
                <ArrowDown
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              )}
            </AccordionButton>
            {showDetails && <BookDetails book={currentBook} />}
            <AccordionButton type="button" onClick={toggleOverview}>
              <OverviewImg style={{ width: 24, height: 24, marginRight: 8 }} />
              Overview
              {showOverview ? (
                <ArrowUp
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              ) : (
                <ArrowDown
                  style={{ width: 15, height: 15, marginLeft: 'auto' }}
                />
              )}
            </AccordionButton>
            {showOverview && <BookOverview book={currentBook} />}
          </>
        )}
        <BookReviews book={currentBook} />
      </Container>
    </Layout>
  );
}
