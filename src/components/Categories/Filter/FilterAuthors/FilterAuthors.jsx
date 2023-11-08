import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import FilterAuthor from './FilterAuthor';
import { AuthorsContainer, ShowAllButton } from './FilterAuthors.styled';
import { ArrowUp, ArrowDown } from '../../../../../public/svg-book';

export default function FilterAuthors({ authors, setFilter }) {
  const [showAll, setShowAll] = useState(false);
  const [values, setValues] = useState(authors);

  const count = authors.length;
  const fiveAuthors = authors.slice(0, 5);

  const onShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    setFilter(values);
  }, [values]); // eslint-disable-line

  return (
    <AuthorsContainer>
      {count > 0 &&
        count <= 5 &&
        authors.map((author) => {
          return (
            <FilterAuthor
              key={nanoid()}
              author={author}
              values={values}
              setValues={setValues}
            />
          );
        })}
      {count > 5 && !showAll && (
        <>
          {fiveAuthors.map((author) => {
            return (
              <FilterAuthor
                key={nanoid()}
                author={author}
                values={values}
                setValues={setValues}
              />
            );
          })}
          <ShowAllButton type="button" onClick={onShowAll}>
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
            see all
          </ShowAllButton>
        </>
      )}
      {count > 5 && showAll && (
        <>
          {authors.map((author) => {
            return (
              <FilterAuthor
                key={nanoid()}
                author={author}
                values={values}
                setValues={setValues}
              />
            );
          })}
          <ShowAllButton type="button" onClick={onShowAll}>
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
            hide all
          </ShowAllButton>
        </>
      )}
    </AuthorsContainer>
  );
}
