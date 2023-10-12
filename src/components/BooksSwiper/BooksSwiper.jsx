import Image from 'next/image';
import { List } from './BooksSwiper.styled';
import Book from '../Book/Book';
import { useSelector } from 'react-redux';
import { selectBooks } from '@/redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export default function BooksSwiper({ id, banner }) {
  const books = useSelector(selectBooks);
  const fourBooks = books.slice(0, 4);

  switch (id) {
    case 'bestsellers':
      fourBooks.splice(2, 0, banner);
      break;
    case 'new':
      fourBooks.splice(0, 0, banner);
      break;
    case 'children':
      fourBooks.splice(2, 0, banner);
      break;
    case 'used':
      fourBooks.splice(1, 0, banner);
      break;
    case 'sale':
      fourBooks.splice(0, 0, banner);
      break;

    default:
      break;
  }

  return (
    <List>
      {fourBooks.map((item) => {
        return (
          <li key={nanoid()}>
            {item.name ? (
              <Book book={item} variant={'main'} />
            ) : (
              <div style={{ minWidth: 220 }}>
                <Image
                  src={item}
                  alt="banner"
                  width={220}
                  height={242}
                  priority={true}
                  style={{ height: '242px' }}
                />
              </div>
            )}
          </li>
        );
      })}
    </List>
  );
}
