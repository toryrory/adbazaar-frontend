import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import FilterGenre from './FilterGenre';
import { GenresContainer, ShowAllButton } from './FilterGenres.styled';
import { ArrowUp, ArrowDown } from '../../../../../public/svg-book';

export default function FilterGenres({ genres, setFilter }) {
  const [showAll, setShowAll] = useState(false);
  const [values, setValues] = useState(genres);

  const count = genres.length;
  const fiveGenres = genres.slice(0, 5);

  const onShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    setFilter(values);
  }, [values]); // eslint-disable-line

  return (
    <GenresContainer>
      {count > 0 &&
        count <= 5 &&
        genres.map((genre) => {
          return (
            <FilterGenre
              key={nanoid()}
              genre={genre}
              values={values}
              setValues={setValues}
            />
          );
        })}
      {count > 5 && !showAll && (
        <>
          {fiveGenres.map((genre) => {
            return (
              <FilterGenre
                key={nanoid()}
                genre={genre}
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
          {genres.map((genre) => {
            return (
              <FilterGenre
                key={nanoid()}
                genre={genre}
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
    </GenresContainer>
  );
}
