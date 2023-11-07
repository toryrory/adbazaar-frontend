import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterButton = styled.button`
  position: relative;
  display: flex;
  margin-left: -16px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 0 10px 10px 0;
  border-right: 1px solid rgba(59, 120, 232, 0.2);
  border-top: 1px solid rgba(59, 120, 232, 0.2);
  border-bottom: 1px solid rgba(59, 120, 232, 0.2);
  background: var(--very-dark-grey);
  font-size: 12px;
  color: var(--white-text);
  width: 150px;
`;

export const SortButton = styled.button`
  position: relative;
  display: flex;
  margin-right: -16px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 10px 0 0 10px;
  border-left: 1px solid rgba(59, 120, 232, 0.2);
  border-top: 1px solid rgba(59, 120, 232, 0.2);
  border-bottom: 1px solid rgba(59, 120, 232, 0.2);
  background: var(--very-dark-grey);
  font-size: 12px;
  color: var(--white-text);
  width: 150px;
`;

export const SortingForm = styled.form`
  position: absolute;
  /* right: -16px; */
  top: 19px;
  background: var(--very-dark-grey);
  padding: 20px 0 16px;
  color: var(--white-text);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 150px;
  border-radius: 0 0px 0px 16px;
  border-left: 0.5px solid rgba(59, 120, 232, 0.2);
  border-right: 0.5px solid rgba(59, 120, 232, 0.2);
  border-bottom: 0.5px solid rgba(59, 120, 232, 0.2);
  /* border: 0.5px solid rgba(59, 120, 232, 0.2); */
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SortingLabel = styled.label`
  display: block;
  color: var(--white-text);
  text-align: right;
  font-size: 14px;
  line-height: 1.43;
  padding: 4px 24px 4px 16px;
  border-bottom: 0.3px solid var(--light-grey);
  width: 100%;
`;

export const SortingInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;

  /* &:checked + ${SortingLabel} {
    background: var(--main-background);
  } */
`;
