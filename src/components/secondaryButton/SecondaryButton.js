import { ButtonArrow } from '../svg';
import { Button } from './SecondaryButton.styled';

export default function SecondaryButton({ type, text, onClick, style }) {
  return (
    <Button type={type} onClick={onClick} style={style}>
      {text}
      <ButtonArrow style={{ width: 24, height: 24 }} />
    </Button>
  );
}
