import { useEffect, useState } from 'react';

import Filter from '../Filter/Filter';
import {
  ButtonContainer,
  FilterButton,
  SortButton,
  SortingForm,
  SortingLabel,
  SortingInput,
} from './Sorting.styled';
import { FilterSvg, SortSvg } from '../../../../public/svg-book';

export default function Sorting({ books, onSortChange, setBooks }) {
  const [showSorting, setShowSorting] = useState(false);
  const [sorting, setSorting] = useState('popularity');
  const [showFilter, setShowFilter] = useState(false);
  // const [filter, setFilter] = useState('popularity');

  useEffect(() => {
    if (books) {
      const clone = books.slice(0);

      if (sorting === 'price') {
        const sortedByPrice = clone.sort((a, b) => a.price - b.price);
        onSortChange(sortedByPrice, 'price');
      } else if (sorting === 'alphabetically') {
        const sortedByName = clone.sort((a, b) => a.name.localeCompare(b.name));
        onSortChange(sortedByName, 'alphabetically');
      } else if (sorting === 'rating') {
        const sortedByRating = clone.sort((a, b) => b.rating - a.rating);
        onSortChange(sortedByRating, 'rating');
      } else if (sorting == 'popularity') {
        onSortChange(null, 'popularity');
      }
    }
  }, [sorting]); // eslint-disable-line

  const onSortOpen = () => {
    setShowSorting(true);
  };

  const onFilterOpen = () => {
    setShowFilter(true);
  };

  const onFilterClose = () => {
    setShowFilter(false);
  };

  return (
    <ButtonContainer>
      <FilterButton type="button" onClick={onFilterOpen}>
        <FilterSvg style={{ width: 20, height: 20 }} />
        Filters
      </FilterButton>
      {showFilter && (
        <Filter onClose={onFilterClose} books={books} setBooks={setBooks} />
      )}
      <SortButton type="button" onClick={onSortOpen}>
        <SortSvg style={{ width: 20, height: 20 }} />
        Sorting
        {showSorting && (
          <SortingForm>
            {sorting === 'price' ? (
              <SortingLabel style={{ background: 'var(--main-background)' }}>
                by price
                <SortingInput
                  value="price"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'price'}
                  onChange={() => {
                    setSorting('price');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            ) : (
              <SortingLabel>
                by price
                <SortingInput
                  value="price"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'price'}
                  onChange={() => {
                    setSorting('price');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            )}
            {sorting === 'alphabetically' ? (
              <SortingLabel style={{ background: 'var(--main-background)' }}>
                alphabetically
                <SortingInput
                  value="alphabetically"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'alphabetically'}
                  onChange={() => {
                    setSorting('alphabetically');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            ) : (
              <SortingLabel>
                alphabetically
                <SortingInput
                  value="alphabetically"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'alphabetically'}
                  onChange={() => {
                    setSorting('alphabetically');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            )}
            {sorting === 'popularity' ? (
              <SortingLabel style={{ background: 'var(--main-background)' }}>
                popularity
                <SortingInput
                  value="popularity"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'popularity'}
                  onChange={() => {
                    setSorting('popularity');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            ) : (
              <SortingLabel>
                popularity
                <SortingInput
                  value="popularity"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'popularity'}
                  onChange={() => {
                    setSorting('popularity');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            )}
            {sorting === 'rating' ? (
              <SortingLabel style={{ background: 'var(--main-background)' }}>
                rating
                <SortingInput
                  value="rating"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'rating'}
                  onChange={() => {
                    setSorting('rating');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            ) : (
              <SortingLabel>
                rating
                <SortingInput
                  value="rating"
                  type="radio"
                  name="sorting"
                  checked={sorting === 'rating'}
                  onChange={() => {
                    setSorting('rating');
                    setShowSorting(false);
                  }}
                />
              </SortingLabel>
            )}
          </SortingForm>
        )}
      </SortButton>
    </ButtonContainer>
  );
}
