import { BoxTitle, Box } from "./InfoContainer.styled";

export default function InfoContainer({ name, title, children }) {
  
  return (
    <>
          <BoxTitle>{title}</BoxTitle>
      <Box $name={name}>{children}</Box>
    </>
  );
}
