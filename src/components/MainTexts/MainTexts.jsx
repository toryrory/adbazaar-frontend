import { Title, Text } from "./MainTexts.styled";

export default function MainTexts({title, text}) {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
}
