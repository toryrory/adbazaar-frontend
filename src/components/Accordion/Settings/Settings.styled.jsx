import styled from 'styled-components';
import Image from "next/image";

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 24px 24px 0;
`
export const Form = styled.form`
  padding-top: 18px;
  padding-bottom: 16px;
  /* border-top: 0.5px solid var(--brand-color); */
`;

export const FormPhoto = styled.form`
  /* border-bottom: 0.5px solid var(--brand-color); */
`;
export const DarkBox = styled.div`
  border-top: 0.5px solid var(--brand-color);
  border-bottom: 0.5px solid var(--brand-color);
  height: 16px;
  background-color: var(--main-background);
  margin-left: -24px;
  margin-right: -24px;
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
  padding: 8px 0;
`;

export const PhotoLabel = styled.label`
  color: var(--brand-color);
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-left: 0.1px solid var(--light-grey);
  padding-left: 16px;
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
  }
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

export const InputHidden = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const StyledImg = styled(Image)`
max-width: 40px;
max-height: 40px;
border-radius: 50%;
`
export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  background: linear-gradient(var(--dark-grey), var(--dark-grey)) padding-box,
    linear-gradient(to right, #51c5ea 3.43%, #f18ff3 100%) border-box;
  border-radius: 50%;
  width: 43px;
  height: 43px;
  /* linear-gradient(82deg, #51c5ea 3.43%, #f18ff3 100%); */
`;
export const PhotoBox = styled.div`
  padding-right: 8px;
`;
// export const StyledImg = styled(Image)`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
// `;
// export const Circle = styled.div`
//   display: flex;
//   align-items: center;
//   border: 3px solid transparent;
//   background: linear-gradient(var(--dark-grey), var(--dark-grey)) padding-box,
//     linear-gradient(to right, #51c5ea 3.43%, #f18ff3 100%) border-box;
//   border-radius: 50%;
//   width: 43px;
//   height: 43px;
//   /* linear-gradient(82deg, #51c5ea 3.43%, #f18ff3 100%); */
// `;