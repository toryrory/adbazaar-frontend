import styled from 'styled-components';
import bgTop from '../../public/backgrounds/bg-account-top.png';
import bgBottom from '../../public/backgrounds/bg-account-bottom.png';

export const Container = styled.div`
  padding: 112px 0 48px;
  background-image: url(${bgTop.src}), url(${bgBottom.src});
  background-repeat: no-repeat;
  background-position: top 0px left 0px, top 608px right 0px;
`;
export const Title = styled.h2`
  color: var(--brand-color);
  margin-left: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 0.87;
`;
export const LogOutBtn = styled.button`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--brand-color);
  line-height: 1.5;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: var(--error-color);
  width: 156px;
  line-height: 1.15;
`;

export const SendCodeButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--brand-color);
  border: 0.5px solid var(--brand-color);
  font-size: 12px;
  background-color: transparent;
  border-radius: 9px;
  padding: 3px 5px;
`;
