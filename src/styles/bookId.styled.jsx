import styled from 'styled-components';
import bgTop from '../../public/backgrounds/bg-account-top.png';
import bgBottom from '../../public/backgrounds/bg-account-bottom.png';
import Image from 'next/image';

export const Container = styled.div`
  padding: 16px 16px 40px;
  background-image: url(${bgTop.src}), url(${bgBottom.src});
  background-repeat: no-repeat;
  background-position: top 0px left 0px, top 608px right 0px;
`;

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  background: transparent;
  border: none;
  color: var(--light-text);
  font-size: 22px;
  line-height: 1.15;
`;

export const Ornament = styled.div`
  width: 106%;
  margin: 16px -16px 24px;
`;

export const OrnamentImg = styled(Image)`
  width: 100%;
`;
