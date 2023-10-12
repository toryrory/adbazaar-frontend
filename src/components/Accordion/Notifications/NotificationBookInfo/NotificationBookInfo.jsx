import InfoContainer from '../InfoContainer/InfoContainer';
// import { GreatGatsby } from '../../../../../public/books';
import { Rating } from '@mui/material';
import { EmptyStar } from '../../../../../public/svg-book';
import {
  StyledImg,
  BookInfoBox,
  BookInfoBtn,
  BookInfoText,
  BookAuthor,
  BookTitle,
  BookInfoDollar,
  BookInfoPrice,
  ActiveBtn,
} from './NotificationBookInfo.styled';
import { RatingBox, Reviews } from '@/components/Book/Book.styled';

export default function NotificationBookInfo({ data }) {
  const { id, author, image_path, price, rate, reviews, status, title } = data;

  return (
    <InfoContainer name="book" title={'Ordered book'}>
      <StyledImg src={image_path} alt="book title" width={39.5} height={50} />
      <BookInfoBox id={id}>
        <BookInfoText>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
          <RatingBox>
            <Rating
              readOnly
              precision={0.5}
              defaultValue={rate}
              sx={{
                color: 'var(--rose-color)',
              }}
              size="small"
              emptyIcon={<EmptyStar />}
            />
            <Reviews style={{ margin: 0 }}>({reviews})</Reviews>
          </RatingBox>
        </BookInfoText>
        <BookInfoBtn>
          <ActiveBtn $status={status}>{status}</ActiveBtn>
          <BookInfoPrice>
            <BookInfoDollar>$</BookInfoDollar>
            {price}
          </BookInfoPrice>
        </BookInfoBtn>
      </BookInfoBox>
    </InfoContainer>
  );
}
