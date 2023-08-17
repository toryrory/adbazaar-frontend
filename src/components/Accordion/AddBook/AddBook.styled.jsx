import styled from '@emotion/styled';
import { Tab } from '@headlessui/react';

export const ButtonContainer = styled(Tab.List)`
  display: flex;
`;

export const TabButton = styled(Tab)`
  color: var(--white-text);
  background-color: transparent;
  width: 50%;
  border: 1px solid var(--light-grey);
  padding: 0;
  outline: none;
  font-size: 12px;
  line-height: 1.15;
  padding: 0 24px;
  height: 36px;
`;
