import { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Button,
  SortButton,
  SortingForm,
  SortingLabel,
  SortingInput,
} from './Sorting.styled';
import { FilterSvg, SortSvg } from '../../../../public/svg-book';

export default function Sorting({ books, onSortChange }) {
  const [showSorting, setShowSorting] = useState(false);
  const [sorting, setSorting] = useState('popularity');

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

  return (
    <ButtonContainer>
      <Button type="button">
        <FilterSvg />
        Filters
      </Button>
      <SortButton type="button" onClick={onSortOpen}>
        <SortSvg />
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
