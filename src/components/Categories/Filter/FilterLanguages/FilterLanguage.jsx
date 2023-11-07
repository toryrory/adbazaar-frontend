import { useEffect, useState } from 'react';
import { CheckboxInput, CheckboxLabel } from './FilterLanguages.styled';
import {
  CheckboxChecked,
  CheckboxEmpty,
} from '../../../../../public/svg-authorization';

export default function FilterLanguage({ language, values, setValues }) {
  const [languageName, setLanguageName] = useState(null);

  useEffect(() => {
    if (language === 'en') {
      setLanguageName('English');
    } else if (language === 'ua') {
      setLanguageName('Ukrainian');
    } else if (language === 'fr') {
      setLanguageName('French');
    } else if (language === 'de') {
      setLanguageName('German');
    } else if (language === 'ja') {
      setLanguageName('Japanise');
    } else {
      setLanguageName('Other');
    }
  }, [language]);

  const onChange = (language) => {
    if (values.includes(language)) {
      const newValues = values.filter((value) => value !== language);
      setValues(newValues);
    } else {
      setValues([...values, language]);
    }
  };

  return (
    <CheckboxLabel>
      {values.includes(language) ? (
        <CheckboxChecked style={{ width: 24, height: 24 }} />
      ) : (
        <CheckboxEmpty style={{ width: 24, height: 24 }} />
      )}
      <CheckboxInput
        type="checkbox"
        value={language}
        onChange={() => onChange(language)}
        name={language}
      />
      {languageName}
    </CheckboxLabel>
  );
}
