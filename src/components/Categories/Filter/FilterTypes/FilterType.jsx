import { CheckboxInput, CheckboxLabel } from './FilterTypes.styled';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../../../public/svg-authorization';

export default function FilterType({ type, values, setValues }) {

  const onChange = (type) => {
    if (values.includes(type)) {
      const newValues = values.filter((value) => value !== type);
      setValues(newValues);
    } else {
      setValues([...values, type]);
    }
  };

  return (
    <CheckboxLabel>
      {values.includes(type) ? (
        <CheckboxChecked style={{ width: 24, height: 24 }} />
      ) : (
        <CheckboxEmpty style={{ width: 24, height: 24 }} />
      )}
      <CheckboxInput
        type="checkbox"
        value={type}
        onChange={() => onChange(type)}
        name={type}
      />
      {type}
    </CheckboxLabel>
  );
}
