import {
  PaperType,
  AudioType,
  EBookType,
  State,
  Publisher,
  Cover,
  Calendar,
  Language,
  ISBN,
  Pages,
  Dimensions,
  Weight,
} from '../../../../public/svg-book';
import {
  TypeContainer,
  ActiveType,
  Type,
  List,
  Item,
  Subtitle,
  ActiveDescription,
  Description,
  DescriptionContainer,
} from './BookDetails.styled';

export default function BookDetails({ book }) {
  const bookType = book.type.toLowerCase();
  const bookLanguage = book.language.toLowerCase();
  console.log(bookLanguage);

  return (
    <>
      {bookType === 'paper' && (
        <TypeContainer>
          <ActiveType>
            <PaperType
              style={{
                width: 24,
                height: 24,
                fill: '#D8E9FE',
              }}
            />
            Paper
          </ActiveType>
          <Type>
            <AudioType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            Audio-book
          </Type>
          <Type>
            <EBookType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            E-book
          </Type>
        </TypeContainer>
      )}
      {bookType === 'audio' && (
        <TypeContainer>
          <Type>
            <PaperType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            Paper
          </Type>
          <ActiveType>
            <AudioType
              style={{
                width: 24,
                height: 24,
                fill: '#D8E9FE',
              }}
            />
            Audio-book
          </ActiveType>
          <Type>
            <EBookType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            E-book
          </Type>
        </TypeContainer>
      )}
      {bookType === 'e-book' && (
        <TypeContainer>
          <Type>
            <PaperType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            Paper
          </Type>
          <Type>
            <AudioType
              style={{
                width: 24,
                height: 24,
                fill: '#B8CDE1',
                fillOpacity: '0.5',
              }}
            />
            Audio-book
          </Type>
          <ActiveType>
            <EBookType
              style={{
                width: 24,
                height: 24,
                fill: '#D8E9FE',
              }}
            />
            E-book
          </ActiveType>
        </TypeContainer>
      )}
      <List>
        <Item>
          <Subtitle>State</Subtitle>
          <State style={{ width: 24, height: 24 }} />
          <DescriptionContainer>
            <ActiveDescription>New</ActiveDescription>
            <Description>Used</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <Subtitle>Publisher</Subtitle>
          <Publisher style={{ width: 24, height: 24 }} />
          <ActiveDescription>{book.publisher}</ActiveDescription>
        </Item>
        <Item>
          <Subtitle>Cover</Subtitle>
          <Cover style={{ width: 24, height: 24 }} />
          <DescriptionContainer>
            <ActiveDescription>Soft</ActiveDescription>
            <Description>Hard</Description>
            <Description>Gift</Description>
          </DescriptionContainer>
        </Item>
        <Item>
          <Subtitle>Publish date</Subtitle>
          <Calendar style={{ width: 24, height: 24 }} />
          <ActiveDescription>03/02/2015</ActiveDescription>
        </Item>
        <Item>
          <Subtitle>Language</Subtitle>
          <Language style={{ width: 24, height: 24 }} />
          {bookLanguage === 'en' && (
            <DescriptionContainer>
              <ActiveDescription>EN</ActiveDescription>
              <Description>UA</Description>
              <Description>FR</Description>
            </DescriptionContainer>
          )}
          {bookLanguage === 'ua' && (
            <DescriptionContainer>
              <Description>EN</Description>
              <ActiveDescription>UA</ActiveDescription>
              <Description>FR</Description>
            </DescriptionContainer>
          )}
          {bookLanguage === 'fr' && (
            <DescriptionContainer>
              <Description>EN</Description>
              <Description>UA</Description>
              <ActiveDescription>FR</ActiveDescription>
            </DescriptionContainer>
          )}
          {bookLanguage === 'de' && (
            <DescriptionContainer>
              <Description>EN</Description>
              <ActiveDescription>DE</ActiveDescription>
              <Description>FR</Description>
            </DescriptionContainer>
          )}
          {bookLanguage !== 'ua' &&
            bookLanguage !== 'en' &&
            bookLanguage !== 'fr' &&
            bookLanguage !== 'de' && (
              <DescriptionContainer>
                <Description>EN</Description>
                <Description>FR</Description>
                <ActiveDescription>Other</ActiveDescription>
              </DescriptionContainer>
            )}
        </Item>
        <Item>
          <Subtitle>ISBN-13</Subtitle>
          <ISBN style={{ width: 24, height: 24 }} />
          <ActiveDescription style={{ fontSize: 13 }}>
            978-0385480017
          </ActiveDescription>
        </Item>
        <Item>
          <Subtitle>Print Length</Subtitle>
          <Pages style={{ width: 24, height: 24 }} />
          <ActiveDescription>256 pages</ActiveDescription>
        </Item>
        <Item>
          <Subtitle>Dimensions</Subtitle>
          <Dimensions style={{ width: 24, height: 24 }} />
          <ActiveDescription>24:18:3 sm</ActiveDescription>
        </Item>
        <Item>
          <Subtitle>Weight</Subtitle>
          <Weight style={{ width: 24, height: 24 }} />
          <ActiveDescription>1.2 Kg</ActiveDescription>
        </Item>
      </List>
    </>
  );
}
