import { Rating } from '@mui/material';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  Container,
  HeadContainer,
  Title,
  RatingBox,
  Reviews,
} from './BookReviews.styled';
import { Review } from '../../../../public/svg-book';

export default function BookReviews({ book }) {
  return (
    <Container>
      <HeadContainer>
        <Title>
          <Review
            style={{
              width: 24,
              height: 24,
            }}
          />
          Reviews
        </Title>
        <RatingBox>
          <Rating
            readOnly
            defaultValue={5}
            sx={{ color: 'var(--rose-color)' }}
            size="small"
          />
          <Reviews>(12 reviews)</Reviews>
        </RatingBox>
      </HeadContainer>
      <SecondaryButton
        text="Add Review"
        style={{ width: 150, fontSize: 14, marginTop: 32 }}
      />
    </Container>
  );
}
