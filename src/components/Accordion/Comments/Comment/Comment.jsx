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
  console.log(comment.message.length);

  const onShowFullComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <Item key={comment.id}>
      <Link href={`/books/${comment.book.id}`}>
        <BookImage
          src={comment.book.image_path}
          alt={comment.book.title}
          priority={true}
          width={32}
          height={48}
        />
      </Link>

      <InfoContainer>
        <InfoHeaderContainer>
          <Title>{comment.book.title}</Title>
          <Date>{comment.creation_date.slice(0, 16)}</Date>
        </InfoHeaderContainer>
        <Author>{comment.book.author}</Author>
        {showFullComment ? (
          <FullText>{comment.message}</FullText>
        ) : (
          <Text>{comment.message}</Text>
        )}
      </InfoContainer>
      {comment.message.length > 30 ? (
        <MoreBtn type="button" onClick={onShowFullComment}>
          {showFullComment ? (
            <ArrowUp style={{ width: 15.5, height: 15.5 }} />
          ) : (
            <ArrowDown style={{ width: 15.5, height: 15.5 }} />
          )}
        </MoreBtn>
      ) : (
        <MoreBtn style={{ width: 15 }}></MoreBtn>
      )}
    </Item>
  );
}
