import styled from 'styled-components';
import bgTop from '../../public/backgrounds/bg-account-top.png';
import bgBottom from '../../public/backgrounds/bg-account-bottom.png';
import Link from 'next/link';

export const Container = styled.div`
  padding: 16px 16px 24px;
  background-image: url(${bgTop.src}), url(${bgBottom.src});
  background-repeat: no-repeat;
  background-position: top 0px left 0px, top 608px right 0px;
`;

export const BooksCount = styled.p`
  font-size: 16px;
  color: var(--light-grey);
  line-height: 1.23;
  margin-bottom: 16px;
`;
