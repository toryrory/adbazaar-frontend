import { useSelector } from 'react-redux';
import { selectUserComments } from '@/redux/selectors';
import { Container } from './Comments.styled';
import Comment from './Comment/Comment';

export default function Comments() {
  const comments = useSelector(selectUserComments);

  return (
    <Container>
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </ul>
    </Container>
  );
}
