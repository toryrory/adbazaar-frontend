import { Rating } from '@mui/material';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  Container,
  HeadContainer,
  Title,
  RatingBox,
  Reviews,
  List,
  Item,
  CommentHeader,
  CommentTitle,
  CommentDate,
  CommentText,
  BtnSeeMore,
  AllBtnContainer,
  LikeBtnContainer,
  LikeBtn,
} from './BookReviews.styled';
import { Review, ArrowRight, Like, Dislike } from '../../../../public/svg-book';

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
          Comments
        </Title>
        <RatingBox>
          <Rating
            readOnly
            defaultValue={5}
            sx={{ color: 'var(--rose-color)' }}
            size="small"
          />
          <Reviews>(12 comments)</Reviews>
        </RatingBox>
      </HeadContainer>
      <List>
        <Item>
          <CommentHeader>
            <CommentTitle>H. Bono</CommentTitle>
            <CommentDate>08/08/2018</CommentDate>
          </CommentHeader>
          <CommentText>
            Krier gives a thorough lesson in architecture, taking obvious
            pleasure is shredding the myths of modernism to pieces and exposing
            its false prophecies. However, the text never goes beyond the most
            superficially descriptive, often involving comparisons and an appeal
            to common sense. While Krier can point out, using his trademark
            caricatures, how absurd the patterns of modern sprawl are, he has no
            explanation as to why such patterns would exist, except that it may
            be just one big conspiracy.
          </CommentText>
          <AllBtnContainer>
            <BtnSeeMore type="button">
              See more
              <ArrowRight
                style={{
                  width: 14,
                  height: 15,
                }}
              />
            </BtnSeeMore>
            <LikeBtnContainer>
              <LikeBtn type="button">
                <Like style={{ width: 20, height: 20 }} />
              </LikeBtn>
              <LikeBtn type="button">
                <Dislike style={{ width: 20, height: 20 }} />
              </LikeBtn>
            </LikeBtnContainer>
          </AllBtnContainer>
        </Item>
        <Item>
          <CommentHeader>
            <CommentTitle>Mathieu Hélie</CommentTitle>
            <CommentDate>08/06/2018</CommentDate>
          </CommentHeader>
          <CommentText>
            Here's one architect and urban planner who has an appreciation of
            all that came before. Without a grounding in the history of
            traditional community building, how can designers claim professional
            expertise? Today...apart from practitioners like Leon Krier and
            Piercarlo Bontempi...the design of modern urban places has lost its
            way.
          </CommentText>
          <AllBtnContainer>
            <BtnSeeMore type="button">
              See more
              <ArrowRight
                style={{
                  width: 14,
                  height: 15,
                }}
              />
            </BtnSeeMore>
            <LikeBtnContainer>
              <LikeBtn type="button">
                <Like style={{ width: 20, height: 20 }} />
              </LikeBtn>
              <LikeBtn type="button">
                <Dislike style={{ width: 20, height: 20 }} />
              </LikeBtn>
            </LikeBtnContainer>
          </AllBtnContainer>
        </Item>
        <Item>
          <CommentHeader>
            <CommentTitle>H. Bono</CommentTitle>
            <CommentDate>08/08/2018</CommentDate>
          </CommentHeader>
          <CommentText>
            Krier gives a thorough lesson in architecture, taking obvious
            pleasure is shredding the myths of modernism to pieces and exposing
            its false prophecies. However, the text never goes beyond the most
            superficially descriptive, often involving comparisons and an appeal
            to common sense. While Krier can point out, using his trademark
            caricatures, how absurd the patterns of modern sprawl are, he has no
            explanation as to why such patterns would exist, except that it may
            be just one big conspiracy.
          </CommentText>
          <AllBtnContainer>
            <BtnSeeMore type="button">
              See more
              <ArrowRight
                style={{
                  width: 14,
                  height: 15,
                }}
              />
            </BtnSeeMore>
            <LikeBtnContainer>
              <LikeBtn
                type="button"
                onClick={() => {
                  console.log('like');
                }}
              >
                <Like style={{ width: 20, height: 20 }} />
              </LikeBtn>
              <LikeBtn
                type="button"
                onClick={() => {
                  console.log('dislike');
                }}
              >
                <Dislike style={{ width: 20, height: 20 }} />
              </LikeBtn>
            </LikeBtnContainer>
          </AllBtnContainer>
        </Item>
      </List>
      <SecondaryButton
        text="Add Review"
        style={{ width: 150, fontSize: 14, marginTop: 32 }}
      />
    </Container>
  );
}
