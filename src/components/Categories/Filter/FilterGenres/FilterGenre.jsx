import { CheckboxInput, CheckboxLabel } from './FilterGenres.styled';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../../../public/svg-authorization';

export default function FilterGenre({ genre, values, setValues }) {
  const onChange = (genre) => {
    if (values.includes(genre)) {
      const newValues = values.filter((value) => value !== genre);
      setValues(newValues);
    } else {
      setValues([...values, genre]);
    }
  };

  return (
    <CheckboxLabel>
      {values.includes(genre) ? (
        <CheckboxChecked style={{ width: 24, height: 24 }} />
      ) : (
        <CheckboxEmpty style={{ width: 24, height: 24 }} />
      )}
      <CheckboxInput
        type="checkbox"
        value={genre}
        onChange={() => onChange(genre)}
        name={genre}
      />
      {genre}
    </CheckboxLabel>
  );
}
