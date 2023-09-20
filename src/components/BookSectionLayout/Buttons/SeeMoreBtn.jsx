import { ArrowRight } from "../../../../public/svg-book";
import { BtnSeeMore } from "./SeeMoreBtn.styled";

export default function SeeMoreBtn({onClick, style}) {
  return (
    <>
      <BtnSeeMore type='button' onClick={onClick} style={ style }>
        See more
        <ArrowRight
          style={{
            backgroundColor: "var(--main-background)",
            width: 14,
            height: 15,
          }}
        />
      </BtnSeeMore>
    </>
  );
}
