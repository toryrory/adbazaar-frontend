import styled from '@emotion/styled';
import { Tab } from '@mui/material';

export const TabBtn = styled(Tab)`
  width: 195px;
  padding: 0 24px;
  border-right: 0.5px solid var(--light-grey);
  border-bottom: ${({ focused }) =>
    focused === "true" ? "none " : "0.5px solid var(--light-grey)"};
  background-color: ${({ focused }) =>
    focused === "true" ? "var(--grey)" : "var(--main-background)"};
  color: ${({ focused }) =>
    focused === "true" ? "var(--white-text)" : "var(--white-text-06)"};
  font-family: Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: none;
`;
export const Text = styled.p`
  color: var(--white-text);
  font-size: 16px;
`;









// export const ButtonContainer = styled(Tab.List)`
//   display: flex;
// `;

// export const TabButton = styled(Tab)`
//   color: var(--white-text);
//   background-color: transparent;
//   width: 50%;
//   border: 1px solid var(--light-grey);
//   padding: 0;
//   outline: none;
//   font-size: 12px;
//   line-height: 1.15;
//   padding: 0 24px;
//   height: 36px;
// `;
