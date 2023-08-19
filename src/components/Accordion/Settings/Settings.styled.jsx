import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 16px;
  border-top: 0.5px solid var(--brand-color);
`;

export const FormPhoto = styled.form`
  padding-bottom: 8px;
  border-bottom: 0.5px solid var(--brand-color);
`;

export const Title = styled.h3`
  color: var(--white-text);
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 4px;
  font-weight: 400;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PhotoLabel = styled.label`
  color: var(--brand-color);
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const TrashButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  padding: 0;
  border: none;
`;

export const PhotoPath = styled.p`
  color: var(--brand-color);
  font-size: 12px;
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const InputItem = styled.li`
  border-bottom: 0.3px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 1.66;
  text-align: left;
  color: var(--brand-color);
`;

export const Input = styled.input`
font-size: 16px;
  line-height: 1;
  outline: none;
  background: none;
  border: none;

  padding: 8px;
  color: var(--white-text);

  &::placeholder {
    color: var(--brand-color);
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EyeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  line-height: 1.66;
  text-align: left;
  color: var(--error-color);
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background: none;
  padding: 0;
  color: var(--brand-color);
  margin-top: 24px;
  margin-left: auto;
  font-size: 13px;
`;

export const SavePhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background: none;
  padding: 0;
  color: var(--brand-color);
  font-size: 13px;
`;
