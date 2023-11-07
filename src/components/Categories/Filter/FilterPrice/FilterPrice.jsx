import { useState, useEffect } from 'react';

import {
  PriceForm,
  StyledRangeSlider,
  LabelContainer,
  PriceLabel,
  PriceInput,
} from './FilterPrice.styled';

export default function FilterPrice({ min, max, setFilter }) {
  const [value, setValue] = useState([min, max]);
  const minValue = value[0];
  const maxValue = value[1];

  useEffect(() => {
    setFilter(minValue, maxValue);
  }, [minValue, maxValue]); // eslint-disable-line

  return (
    <PriceForm>
      <LabelContainer>
        <PriceLabel>
          $
          <PriceInput
            type="number"
            value={minValue}
            readOnly
            // onChange={() => setValue(value[0])}
          />
        </PriceLabel>
        <PriceLabel>
          $
          <PriceInput type="number" value={maxValue} readOnly />
        </PriceLabel>
      </LabelContainer>

      <StyledRangeSlider
        min={min}
        max={max}
        step={1}
        value={value}
        onInput={setValue}
      />
    </PriceForm>
  );
}
