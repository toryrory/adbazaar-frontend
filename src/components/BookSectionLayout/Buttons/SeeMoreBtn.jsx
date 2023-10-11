import { ArrowRight } from "../../../../public/svg-book";
import { ArrowUp } from "../../../../public/svg-book";
import { BtnSeeMore } from "./SeeMoreBtn.styled";

export default function SeeMoreBtn({ onClick, style, showMore }) {
  return (
    <>
      <BtnSeeMore type='button' onClick={onClick} style={style}>
        {showMore && (
          <>
            Hide more
            <ArrowUp
              style={{
                backgroundColor: "var(--main-background)",
                width: 14,
                height: 15,
              }}
            />
          </>
        )}
        {!showMore && (
          <>
            See more
            <ArrowRight
              style={{
                backgroundColor: "var(--main-background)",
                width: 14,
                height: 15,
              }}
            />
          </>
        )}
      </BtnSeeMore>
    </>
  );
}
