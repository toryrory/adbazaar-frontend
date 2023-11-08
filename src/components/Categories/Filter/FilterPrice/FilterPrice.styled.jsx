import styled from 'styled-components';
import RangeSlider from 'react-range-slider-input';

export const PriceForm = styled.div`
  padding: 4px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  border: 0.5px solid var(--light-text);
  background: var(--product-background);
  color: var(--light-text);
`;

export const PriceInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--white-text);
`;

export const StyledRangeSlider = styled(RangeSlider)`
  height: 2px;
  background: #597b9a;

  & .range-slider__range {
    background: var(--brand-color);
    transition: height 0.3s;
  }

  & .range-slider__thumb {
    background: var(--brand-color);
    transition: transform 0.3s;
  }

  /* & .range-slider__thumb[data-active] {
    transform: translate(-50%, -50%) scale(1.25);
  }

  & .range-slider__range[data-active] {
    height: 16px;
  } */
`;
