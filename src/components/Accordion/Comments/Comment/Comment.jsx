import { useState } from 'react';
import Link from 'next/link';
import {
  Item,
  BookImage,
  InfoContainer,
  InfoHeaderContainer,
  Title,
  Date,
  Author,
  Text,
  FullText,
  MoreBtn,
} from './Comment.styled';
import { ArrowUp, ArrowDown } from '../../../../../public/svg-book';

export default function Comment({ comment }) {
  const [showFullComment, setShowFullComment] = useState(false);

  const onShowFullComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <Item key={comment.id}>
      <Link href={`/books/${comment.bookId}`}>
        <BookImage
          src={comment.bookPhoto}
          alt={comment.bookName}
          priority={true}
        />
      </Link>

      <InfoContainer>
        <InfoHeaderContainer>
          <Title>{comment.bookName}</Title>
          <Date>{comment.date.slice(0, 17)}</Date>
        </InfoHeaderContainer>
        <Author>{comment.bookAuthor}</Author>
        {showFullComment ? (
          <FullText>{comment.text}</FullText>
        ) : (
          <Text>{comment.text}</Text>
        )}
      </InfoContainer>
      <MoreBtn type="button" onClick={onShowFullComment}>
        {showFullComment ? (
          <ArrowUp style={{ width: 15.5, height: 15.5 }} />
        ) : (
          <ArrowDown style={{ width: 15.5, height: 15.5 }} />
        )}
      </MoreBtn>
    </Item>
  );
}
