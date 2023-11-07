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
  background: linear-gradient(
    180deg,
    rgba(19, 27, 44, 0.67) 0%,
    rgba(29, 33, 37, 0.9) 100%
  );

  z-index: 1200;
`;

export const StyledForm = styled.form`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 80vh;
  border-radius: 30px 30px 0px 0px;
  border-top: 0.5px solid var(--light-grey);
  background: var(--main-background);
  box-shadow: 0px -16px 16px 0px rgba(0, 0, 0, 0.25);
  padding: 24px 16px 104px;
  overflow-y: auto;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  color: var(--white-text);
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 27px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid var(--light-text);
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.15;
`;

export const TrashButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: var(--brand-color);
  margin-top: 22px;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  line-height: normal;
`;
