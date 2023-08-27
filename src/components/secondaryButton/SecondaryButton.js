import { ButtonArrow } from '../../../public/svg-authorization';
import { Button } from './SecondaryButton.styled';

export default function SecondaryButton({ type, text, onClick, style, onSubmit }) {
  return (
    <Button type={type} onClick={onClick} onSubmit={onSubmit} style={style}>
      {text}
      <ButtonArrow style={{ width: 24, height: 24 }} />
    </Button>
  );
}
