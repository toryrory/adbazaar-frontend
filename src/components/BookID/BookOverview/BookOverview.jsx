import { useState } from 'react';
import {
  Container,
  ButtonContainer,
  TabButton,
  ActiveTabButton,
  AboutContainer,
  StyledImg,
  Description,
} from './BookOverview.styled';

export default function BookOverview({ book }) {
  const [showAboutBook, setShowAboutBook] = useState(true);
  const [showRead, setShowRead] = useState(false);

  const handleAboutBook = () => {
    setShowAboutBook(true);
    setShowRead(false);
  };

  const handleRead = () => {
    setShowRead(true);
    setShowAboutBook(false);
  };

  return (
    <Container>
      {showAboutBook && (
        <ButtonContainer>
          <ActiveTabButton type="button" onClick={handleAboutBook}>
            About Book
          </ActiveTabButton>
          <TabButton
            type="button"
            onClick={handleRead}
            style={{
              borderWidth: '0px 0px 1px 1px',
            }}
          >
            Read Excerpt
          </TabButton>
        </ButtonContainer>
      )}
      {showRead && (
        <ButtonContainer>
          <TabButton
            type="button"
            onClick={handleAboutBook}
            style={{
              borderWidth: '0px 1px 1px 0px',
            }}
          >
            About Book
          </TabButton>
          <ActiveTabButton type="button" onClick={handleRead}>
            Read Excerpt
          </ActiveTabButton>
        </ButtonContainer>
      )}
      {showAboutBook && (
        <AboutContainer>
          <StyledImg src={book.photo} alt={book.name} priority={true} />
          <Description>{book.description}</Description>
        </AboutContainer>
      )}
      {showRead && <AboutContainer></AboutContainer>}
    </Container>
  );
}
