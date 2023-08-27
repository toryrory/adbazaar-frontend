import Image from "next/image";
import { List } from "./BooksSwiper.styled";
import Book from "../Book/Book";
import { books } from "@/data/books";

export default function BooksSwiper({ id, banner}) {
    const fourBooks = books.slice(0, 4);

      switch (id) {
        case "bestsellers":
              fourBooks.splice(2, 0, banner);
              break
        case "newest":
              fourBooks.splice(0, 0, banner);
              break
        case "children":
              fourBooks.splice(2, 0, banner);
              break
        case "used":
              fourBooks.splice(1, 0, banner);
              break
        case "seller":
              fourBooks.splice(0, 0, banner);
              break

        default:
          break;
      }
  return (
    <List>
      {fourBooks.map((item) => {
        return (
          <>
            {item.name ? (
              <li key={item.id}>
                <Book book={item} variant={"main"} />
              </li>
            ) : (
              <Image
                key={id}
                src={item}
                alt='banner'
                width={210}
                height={242}
                            priority={true}
                            style={{height: '242px'}}
              ></Image>
            )}
          </>
        );
      })}
    </List>
  );
}
