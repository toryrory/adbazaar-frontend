import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '@/redux/selectors';
import { addComment, updateRating } from '@/redux/bookSlice';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import Modal from '@/components/modal/Modal';
import CloseButton from '@/components/closeButton/CloseButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  CommentForm,
  CommentFieldTitle,
  CommentInput,
  PostCommentBtn,
} from './BookComments.styled';
import {
  Review,
  ArrowRight,
  Like,
  Dislike,
  EmptyStar,
  Send,
} from '../../../../public/svg-book';

export default function BookComments({ book }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectUserName);
  const [showModal, setShowModal] = useState(false);
  const [showCommentField, setShowCommentField] = useState(false);
  const [commentText, setCommentText] = useState(null);
  const [value, setValue] = useState(0);

  const openCommentField = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }
    setShowCommentField(true);
  };

  const closeCommentField = () => {
    setShowCommentField(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setCommentText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const now = today.toLocaleString();
    dispatch(addComment(book.id, commentText, currentUser, now));
    if (value > 0) {
      const rating = value;
      dispatch(updateRating(book.id, rating));
    }
    toast.success(`Thank you for a comment`);
    reset();
  };

  const reset = () => {
    setCommentText('');
    setValue(0);
    setShowCommentField(false);
  };

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
            precision={0.5}
            defaultValue={book.rating}
            sx={{
              color: 'var(--rose-color)',
            }}
            size="small"
            emptyIcon={<EmptyStar />}
          />
          <Reviews>({book.comments.length} comments)</Reviews>
        </RatingBox>
      </HeadContainer>
      <List>
        {book.comments &&
          book.comments.map((comment) => {
            return (
              <Item>
                <CommentHeader>
                  <CommentTitle>{comment.author}</CommentTitle>
                  <CommentDate>{comment.date.slice(0, 10)}</CommentDate>
                </CommentHeader>
                <CommentText>{comment.text}</CommentText>
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
            );
          })}
      </List>
      {showCommentField ? (
        <CommentForm onSubmit={handleSubmit}>
          <CloseButton onClick={closeCommentField} />
          <CommentFieldTitle>Please rate this book</CommentFieldTitle>
          <Rating
            precision={0.5}
            value={value}
            sx={{
              color: 'var(--rose-color)',
            }}
            size="small"
            emptyIcon={<EmptyStar />}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <CommentInput
            value={commentText}
            onChange={handleChange}
            type="text"
            name="newComment"
            placeholder="Share your impressions or ask any question about this book"
            required
          />
          <PostCommentBtn type="submit">
            Post comment
            <Send
              style={{
                width: 24,
                height: 24,
              }}
            />
          </PostCommentBtn>
        </CommentForm>
      ) : (
        <SecondaryButton
          onClick={openCommentField}
          text="Add Comment"
          style={{ width: 150, fontSize: 14, marginTop: 32 }}
        />
      )}
      {showModal && (
        <Modal
          onClose={onCloseModal}
          message="This service is exclusively available for authorized site visitors"
          messageStyles={{ marginTop: 40, fontSize: 16 }}
          showLoginButton={true}
          showLink={true}
        />
      )}
    </Container>
  );
}
