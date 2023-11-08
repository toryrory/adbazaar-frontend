import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import FilterType from './FilterType';
import { TypeContainer } from './FilterTypes.styled';

export default function FilterTypes({ types, setFilter }) {
  const [values, setValues] = useState(types);
  // const allTypes = ['paper', 'e-book', 'audio'];

  useEffect(() => {
    setFilter(values);
  }, [values]); // eslint-disable-line

  return (
    <TypeContainer>
      {
        types.length > 0 &&
          types.map((type) => {
            return (
              <FilterType
                key={nanoid()}
                type={type}
                values={values}
                setValues={setValues}
              />
            );
          })
        // : allTypes.map((type) => {
        //     return (
        //       <FilterType
        //         key={nanoid()}
        //         type={type}
        //         values={values}
        //         setValues={setValues}
        //       />
        //     );
        //   })
      }
    </TypeContainer>
  );
}
