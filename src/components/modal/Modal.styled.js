import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  height: 42vh;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--main-background);
  text-align: center;
  padding: 22px 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const WhooText = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.15;
  color: var(--white-text);
  margin-top: 12px;
`;

export const Message = styled.p`
  font-size: 18px;
  line-height: 1.16;
  color: var(--white-text);
  margin-top: 8px;
`;
