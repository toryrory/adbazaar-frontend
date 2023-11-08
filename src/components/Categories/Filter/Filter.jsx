import { useEffect, useState } from 'react';
import 'react-range-slider-input/dist/style.css';

import FilterPrice from './FilterPrice/FilterPrice';
import FilterTypes from './FilterTypes/FilterTypes';
import FilterAuthors from './FilterAuthors/FilterAuthors';
import FilterGenres from './FilterGenres/FilterGenres';
import FilterLanguages from './FilterLanguages/FilterLanguages';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import ToTopBtn from '@/components/BookSectionLayout/Buttons/ToTopBtn';

import {
  Overlay,
  StyledForm,
  Title,
  CloseButton,
  AccordionButton,
  TrashButton,
} from './Filter.styled';
import { FilterSvg, ArrowUp, ArrowDown } from '../../../../public/svg-book';
import { Cross } from '../../../../public/svg-authorization';
import { Trash } from '../../../../public/svg-account';

export default function Filter({ books, onClose, setBooks }) {
  const [showPrice, setShowPrice] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showAuthors, setShowAuthors] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  // const [showCover, setShowCover] = useState(false);
  // const [showPublisher, setShowPublisher] = useState(false);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [types, setTypes] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [genres, setGenres] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [filtredMinPrice, setFiltredMinPrice] = useState(null);
  const [filtredMaxPrice, setFiltredMaxPrice] = useState(null);
  const [filtredTypes, setFiltredTypes] = useState(null);
  const [filtredAuthors, setFiltredAuthors] = useState(null);
  const [filtredGenres, setFiltredGenres] = useState(null);
  const [filtredLanguages, setFiltredLanguages] = useState(null);

  const updateStates = (books) => {
    const priceArray = books.map((book) => Number(book.price));
    const minPrice = Math.min(...priceArray);
    const maxPrice = Math.max(...priceArray);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setFiltredMinPrice(null);
    setFiltredMaxPrice(null);

    const typesArray = books.map((book) => book.type);
    const uniqueTypesArray = typesArray.filter(
      (a, b) => typesArray.indexOf(a) === b
    );
    setTypes(uniqueTypesArray);
    setFiltredTypes(null);

    const genresArray = books.map((book) => book.genre);
    const uniqueGenresArray = genresArray.filter(
      (a, b) => genresArray.indexOf(a) === b
    );
    setGenres(uniqueGenresArray);
    setFiltredGenres(null);

    const authorsArray = books.map((book) => book.author);
    const uniqueAuthorsArray = authorsArray.filter(
      (a, b) => authorsArray.indexOf(a) === b
    );
    setAuthors(uniqueAuthorsArray);
    setFiltredAuthors(null);

    const languagesArray = books.map((book) => book.language);
    const uniqueLanguagesArray = languagesArray.filter(
      (a, b) => languagesArray.indexOf(a) === b
    );
    setLanguages(uniqueLanguagesArray);
    setFiltredLanguages(null);
  };

  useEffect(() => {
    updateStates(books);
  }, [books]);

  const togglePrice = () => {
    setShowPrice(!showPrice);
  };

  const setFilterPrice = (min, max) => {
    setFiltredMinPrice(min);
    setFiltredMaxPrice(max);
  };

  const toggleType = () => {
    setShowType(!showType);
  };

  const setFilterTypes = (values) => {
    setFiltredTypes(values);
  };

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  const setFilterGenres = (values) => {
    setFiltredGenres(values);
  };

  const toggleAuthors = () => {
    setShowAuthors(!showAuthors);
  };

  const setFilterAuthors = (values) => {
    setFiltredAuthors(values);
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const setFilterLanguages = (values) => {
    setFiltredLanguages(values);
  };

  // const toggleCover = () => {
  //   setShowCover(!showCover);
  // };

  // const togglePublisher = () => {
  //   setShowPublisher(!showPublisher);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    const filtredBooks = [];
    let filtersCount = 0;

    if (filtredMinPrice) {
      filtersCount += 1;
      const filtredBooksByMinPrice = books.filter(
        (book) => book.price >= filtredMinPrice
      );
      filtredBooks.push(filtredBooksByMinPrice);
    }

    if (filtredMaxPrice) {
      filtersCount += 1;
      const filtredBooksByMaxPrice = books.filter(
        (book) => book.price <= filtredMaxPrice
      );
      filtredBooks.push(filtredBooksByMaxPrice);
    }

    if (filtredTypes !== null && filtredTypes.length > 0) {
      filtersCount += 1;
      filtredTypes.forEach(function (value) {
        const filtredBooksByType = books.filter((book) => book.type === value);
        filtredBooks.push(filtredBooksByType);
      });
    }

    if (filtredGenres !== null && filtredGenres.length > 0) {
      filtersCount += 1;
      filtredGenres.forEach(function (value) {
        const filtredBooksByGenre = books.filter(
          (book) => book.genre === value
        );
        filtredBooks.push(filtredBooksByGenre);
      });
    }

    if (filtredAuthors !== null && filtredAuthors.length > 0) {
      filtersCount += 1;
      filtredAuthors.forEach(function (value) {
        const filtredBooksByAuthor = books.filter(
          (book) => book.author === value
        );
        filtredBooks.push(filtredBooksByAuthor);
      });
    }

    if (filtredLanguages !== null && filtredLanguages.length > 0) {
      filtersCount += 1;
      filtredLanguages.forEach(function (value) {
        const filtredBooksByLanguage = books.filter(
          (book) => book.language === value
        );
        filtredBooks.push(filtredBooksByLanguage);
      });
    }

    const flatFiltredBooks = filtredBooks.flatMap((book) => book);

    const uniqSet = new Set();
    let uniq = null;

    if (filtersCount === 0) {
      uniq = books;
    } else if (filtersCount === 1) {
      uniq = Array.from(flatFiltredBooks);
    } else if (filtersCount === 2) {
      for (let i = 0; i < flatFiltredBooks.length; i++) {
        for (let j = 0; j < i; j++)
          if (flatFiltredBooks[j].id === flatFiltredBooks[i].id) {
            uniqSet.add(flatFiltredBooks[i]);
          }
      }
      uniq = Array.from(uniqSet);
    } else if (filtersCount === 3) {
      for (let i = 0; i < flatFiltredBooks.length; i++) {
        for (let j = 0; j < i; j++)
          for (let k = 0; k < j; k++)
            if (
              flatFiltredBooks[k].id === flatFiltredBooks[j].id &&
              flatFiltredBooks[k].id === flatFiltredBooks[i].id
            ) {
              uniqSet.add(flatFiltredBooks[i]);
            }
      }
      uniq = Array.from(uniqSet);
    } else if (filtersCount === 4) {
      for (let i = 0; i < flatFiltredBooks.length; i++) {
        for (let j = 0; j < i; j++)
          for (let k = 0; k < j; k++)
            for (let l = 0; l < k; l++)
              if (
                flatFiltredBooks[l].id === flatFiltredBooks[k].id &&
                flatFiltredBooks[l].id === flatFiltredBooks[j].id &&
                flatFiltredBooks[l].id === flatFiltredBooks[i].id
              ) {
                uniqSet.add(flatFiltredBooks[i]);
              }
      }
      uniq = Array.from(uniqSet);
    } else if (filtersCount === 5) {
      for (let i = 0; i < flatFiltredBooks.length; i++) {
        for (let j = 0; j < i; j++)
          for (let k = 0; k < j; k++)
            for (let l = 0; l < k; l++)
              for (let m = 0; m < l; m++)
                if (
                  flatFiltredBooks[m].id === flatFiltredBooks[l].id &&
                  flatFiltredBooks[m].id === flatFiltredBooks[k].id &&
                  flatFiltredBooks[m].id === flatFiltredBooks[j].id &&
                  flatFiltredBooks[m].id === flatFiltredBooks[i].id
                ) {
                  uniqSet.add(flatFiltredBooks[i]);
                }
      }
      uniq = Array.from(uniqSet);
    }

    setBooks(uniq);
    onClose();
  };

  const onReset = () => {
    updateStates(books);
    onClose();
  };

  return (
    <Overlay>
      <StyledForm>
        <Title>
          <FilterSvg style={{ width: 20, height: 20 }} />
          Filters
        </Title>
        <CloseButton type="button" onClick={onClose}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>

        {showPrice ? (
          <AccordionButton
            type="button"
            onClick={togglePrice}
            style={{ borderBottom: 'none' }}
          >
            Price
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        ) : (
          <AccordionButton type="button" onClick={togglePrice}>
            Price
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        )}
        {showPrice && (
          <FilterPrice
            min={minPrice}
            max={maxPrice}
            setFilter={setFilterPrice}
          />
        )}

        {showType ? (
          <AccordionButton
            type="button"
            onClick={toggleType}
            style={{ borderBottom: 'none' }}
          >
            Type of book
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        ) : (
          <AccordionButton type="button" onClick={toggleType}>
            Type of book
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        )}
        {showType && <FilterTypes types={types} setFilter={setFilterTypes} />}

        <AccordionButton type="button" onClick={toggleLanguages}>
          Language
          {showLanguages ? (
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          ) : (
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          )}
        </AccordionButton>

        {showLanguages && (
          <FilterLanguages
            languages={languages}
            setFilter={setFilterLanguages}
          />
        )}

        <AccordionButton type="button" onClick={toggleGenres}>
          Genres
          {showGenres ? (
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          ) : (
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          )}
        </AccordionButton>

        {showGenres && (
          <FilterGenres genres={genres} setFilter={setFilterGenres} />
        )}

        {showAuthors ? (
          <AccordionButton
            type="button"
            onClick={toggleAuthors}
            style={{ borderBottom: 'none' }}
          >
            Authors
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        ) : (
          <AccordionButton type="button" onClick={toggleAuthors}>
            Authors
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          </AccordionButton>
        )}
        {showAuthors && (
          <FilterAuthors authors={authors} setFilter={setFilterAuthors} />
        )}

        {/* <AccordionButton type="button" onClick={toggleCover}>
          Cover type
          {showCover ? (
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          ) : (
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          )}
        </AccordionButton> */}

        {/* <AccordionButton type="button" onClick={togglePublisher}>
          Publishing Houses
          {showPublisher ? (
            <ArrowUp style={{ width: 24, height: 24, padding: 4 }} />
          ) : (
            <ArrowDown style={{ width: 24, height: 24, padding: 4 }} />
          )}
        </AccordionButton> */}

        {/* <ToTopBtn style={{ marginBottom: 24, marginTop: 24 }} /> */}

        <SecondaryButton
          type="submit"
          text="Apply"
          onClick={onSubmit}
          style={{ width: '100%', marginTop: 24 }}
        />
        <TrashButton type="button" onClick={onReset}>
          <Trash style={{ width: 24, height: 24 }} />
          Clear all filters
        </TrashButton>
      </StyledForm>
    </Overlay>
  );
}
