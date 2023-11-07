import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import FilterLanguage from './FilterLanguage';
import { LanguagesContainer } from './FilterLanguages.styled';

export default function FilterLanguages({ languages, setFilter }) {
  const [values, setValues] = useState(languages);

  useEffect(() => {
    setFilter(values);
  }, [values]); // eslint-disable-line

  return (
    <LanguagesContainer>
      {languages.map((language) => {
        return (
          <FilterLanguage
            key={nanoid()}
            language={language.toLowerCase()}
            values={values}
            setValues={setValues}
          />
        );
      })}
    </LanguagesContainer>
  );
}
