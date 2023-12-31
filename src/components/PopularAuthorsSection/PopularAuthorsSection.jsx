import { sectionTexts } from "@/data/section-text";
import MainTexts from "../MainTexts/MainTexts";
import {
  Container,
  AuthorList,
  AuthorItem,
  AuthorName,
  AuthorWorks,
} from "./PopularAuthorsSection.styled";
import { CircleOut, StyledImg } from "../TopBooksellersSection/TopBookSellersItem/TopBookSellersItem.styled";
import SeeMoreBtn from "../BookSectionLayout/Buttons/SeeMoreBtn";
import ToTopBtn from "@/components/BookSectionLayout/Buttons/ToTopBtn";
import { useState } from "react";

export default function PopularAuthorsSection({ authors }) {
  const [showMore, setShowMore] = useState(false);

  const handleOpenMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <Container>
      <MainTexts title={sectionTexts[6].title} text={sectionTexts[6].text} />
      <AuthorList $showMore={showMore}>
        {authors.map(({ photo, name, works, series, id }) => (
          <AuthorItem key={id}>
              <CircleOut> 
               <StyledImg src={photo} alt={name} /> 
             </CircleOut> 
            <AuthorName>{name}</AuthorName>
            <AuthorWorks>{works}</AuthorWorks>
            <AuthorWorks>{series}</AuthorWorks>
          </AuthorItem>
        ))}
      </AuthorList>
      <SeeMoreBtn
        style={{ marginRight: 0 }}
        onClick={handleOpenMore}
        showMore={showMore}
      />
      <ToTopBtn />
    </Container>
  );
}
