import { Button, Counter, Span } from './CounterButton.styled';

export default function CounterButton({ children, onClick, count }) {
  return (
    <Button type="button" onClick={onClick}>
      {count > 0 && (
        <Counter>
          <Span>{count}</Span>
        </Counter>
      )}
      {children}
    </Button>
  );
}
