import { BoxTitle, Box } from "./InfoContainer.styled";

export default function InfoContainer({ title, children }) {
  return (
    <>
          <BoxTitle>{title}</BoxTitle>
      <Box>{children}</Box>
    </>
  );
}
