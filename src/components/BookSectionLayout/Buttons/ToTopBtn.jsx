import { FullArrowUp } from "../../../../public/svg-index";
import { TopBtn } from "./ToTopBtn.styled";

export default function ToTopBtn({ style }) {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <TopBtn style={style} onClick={goToTop}>
      <FullArrowUp style={{width: '24px', height: '24px'}} />
    </TopBtn>
  );
}
