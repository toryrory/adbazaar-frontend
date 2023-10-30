import styled from "styled-components";

import {
  TextBookSvg,
  EBookSvg,
  AudioBookSvg,
} from "../../../../../public/svg-index";
import {
  MenuItem,
} from "@mui/material";

export const LanguageBox = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  align-items: center;
  height: 30px;
`;
export const LanguageInput = styled.input`
  width: 30px;
  padding: 6px 4px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--white-text);
  color: var(--white-text);
  font-size: 16px;
  caret-color: transparent;
  opacity: ${({ $selectedlang }) => ($selectedlang === "true" ? 1 : 0.5)};

  &:focus {
    outline: none;
  }
`;

export const FormatBox = styled.div`
  padding: 0 8px 0px 8px;
  display: flex;
  justify-content: space-between;
`;
export const Format = styled.div`
  padding: 6px 0;
  display: flex;
  gap: 4px;
  width: 85px;
  border-bottom: ${({ $selectedformat }) =>
    $selectedformat === "true"
      ? "1px solid var(--white-text)"
      : "1px solid #808080"};

  &:nth-child(3) {
    width: 115px;
  }
`;

export const FormatInput = styled.input`
  border: none;
  background-color: transparent;
  color: var(--white-text);
  font-size: 16px;
  caret-color: transparent;
  opacity: ${({ $selectedformat }) => ($selectedformat === "true" ? 1 : 0.5)};

  &:focus {
    outline: none;
  }
`;

export const PaperSvgStyled = styled(TextBookSvg)`
  width: 20px;
  height: 20px;
  fill: ${({ $selectedformat }) =>
    $selectedformat === "true" ? "white" : "#808080"};
`;
export const EBookSvgStyled = styled(EBookSvg)`
  width: 20px;
  height: 20px;
  fill: ${({ $selectedformat }) =>
    $selectedformat === "true" ? "white" : "#808080"};
`;
export const AudioSvgStyled = styled(AudioBookSvg)`
  width: 20px;
  height: 20px;
  fill: ${({ $selectedformat }) =>
    $selectedformat === "true" ? "white" : "#808080"};
`;

export const FormBox = styled.div`
  /* width: 234px;
  height: 30px;
  border-bottom: 1px solid var(--white-text);
  opacity: ${({ selectedlang }) => (selectedlang === "true" ? 1 : 0.5)}; */
`;

export const SelectLangInput = styled.input`
  border: none;
  background-color: transparent;
  color: var(--white-text);
  font-size: 14px;
  caret-color: transparent;
  padding-left: 5px;

  &::placeholder {
    color: var(--white-text);
    opacity: ${({ $selectedlang }) => ($selectedlang === "true" ? "1" : "0.5")};
  }
  &:focus {
    outline: none;
  }
`;

export const GenreBox = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 8px 0px 8px;
`;

export const GenreInput = styled.input`
  border: none;
  background-color: transparent;
  color: var(--white-text);
  font-size: 16px;
  caret-color: transparent;
  border-bottom: 1px solid var(--white-text);

  &:focus {
    outline: none;
  }
`;

export const SelectListMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ $selectlang }) =>
    $selectlang === "true"
      ? "1px solid var(--light-grey-05)"
      : "1px solid var(--light-grey)"};
  width: ${({ $selectmenu }) =>
    $selectmenu === "language" ? "234px" : "126px"};
`;

export const SelectGenreText = styled.p`
  color: var(--white-text);
  font-size: 14px;
`;
export const SelectGenreBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  /* padding-left: 7px; */
  color: var(--white-text);
  &:focus {
    outline: none;
  }
`;
export const GenreList = styled.ul`
  width: 240px;
  border: 0.5px solid var(--light-grey);
  background: #212837;
  box-shadow: -8px 8px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 0px;
`;
export const GenreItem = styled(MenuItem)`
  padding: ${({ $menutype }) =>
    $menutype === "submenu" ? "0px 48px" : "0px 24px"};
  border-bottom: 0.3px solid var(--light-grey);
  color: var(--white-text);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;

  &:focus {
    background: var(--main-background);
  }
`;
export const Textarea = styled.textarea`
  max-width: 342px;
  padding: 8px 15px 8px 8px;
  resize: vertical;
  background-color: var(--product-background);
  border-radius: 16px;
  border: 0.5px solid var(--light-grey-05);
  font-size: 14px;
  line-height: 1.4;
  color: var(--white-text);
  /* border: 0.5px solid transparent;
  background: var(--gradient);
  box-shadow: inset 0px 0px 0px 100vw;
  background-size: 101%;
  background-position: left -1px top 0px;  //for colored border*/
  &:focus {
    border: 0.5px solid var(--brand-color);
    outline: none;
  }
  &::placeholder {
    color: var(--white-text);
    opacity: 0.5;
  }
`;

export const PriceBox = styled.div`
  padding: 8px 8px 0 8px;
  display: flex;
  gap: 16px;
`;
export const PriceInputBox = styled.div`
  display: flex;
  width: 106px;
  padding: 6px 8px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--white-text);
`;
export const PriceInput = styled.input`
  background-color: transparent;
  border: none;
  color: var(--white-text);
  font-size: 20px;

  &::placeholder {
    color: var(--white-text-06);
  }
  &:focus {
    outline: none;
  }
`;
export const PriceDollar = styled.span`
  font-size: 14px;
  color: var(--white-text);
`;
export const BargainBox = styled.div`
  display: flex;
  padding: 2px 2px;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-bottom: 0.5px solid var(--light-grey);
`;
export const BargainText = styled.p`
  padding: 6px 0px;
  font-size: 14px;
  color: var(--white-text);
`;

export const CancelBtn = styled.button`
  margin: 48px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  background-color: transparent;
  color: var(--brand-color);
  /* font-family: Helvetica Light; */
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;

export const PhotosBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
export const PhotoItemBox = styled.div`
  width: 78px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.5px solid var(--brand-color);
  background-color: var(--product-background);
  background-size: cover;
`;

export const PhotoInputBox = styled.label`
  margin: 15px 7px 18px;
  width: 64px;
  height: 57px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--brand-color);
  text-align: center;
  font-size: 12px;
`;

export const RemovePhotosBtn = styled.button`
  display: flex;
  padding: 8px 0px;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: var(--brand-color);
  font-size: 13px;
`;

// export const StyledImg = styled(Image)`
//   border-radius: 16px;
//   max-width: 78px;
//   max-height: 90px;
// `;
