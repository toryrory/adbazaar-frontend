import { CheckboxInput, CheckboxLabel } from './FilterAuthors.styled';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../../../public/svg-authorization';

export default function FilterAuthor({ author, values, setValues }) {

  const onChange = (author) => {
    if (values.includes(author)) {
      const newValues = values.filter((value) => value !== author);
      setValues(newValues);
    } else {
      setValues([...values, author]);
    }
  };

  return (
    <CheckboxLabel>
      {values.includes(author) ? (
        <CheckboxChecked style={{ width: 24, height: 24 }} />
      ) : (
        <CheckboxEmpty style={{ width: 24, height: 24 }} />
      )}
      <CheckboxInput
        type="checkbox"
        value={author}
        onChange={() => onChange(author)}
        name={author}
      />
      {author}
    </CheckboxLabel>
  );
}
