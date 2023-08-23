import FastSearchBtn from "../FastSearchBtn/FastSearchBtn";
import { Wrapper } from "./SwiperBtns.styled";

export default function SwiperBtns() {
  return (
      <Wrapper>
          <FastSearchBtn text={'New'} alt={'new'} />
          <FastSearchBtn text={'Used'} alt={'used'} />
          <FastSearchBtn text={'Top'} alt={'top'} />
          <FastSearchBtn text={'Exchange'} alt={'exchange'} />
          <FastSearchBtn text={'For Gift'} alt={'for gift'} />
          <FastSearchBtn text={'Textook'} alt={'textbook'} />
          <FastSearchBtn text={'Big Sale'} alt={'big sale'} />
    </Wrapper>
  )
}
