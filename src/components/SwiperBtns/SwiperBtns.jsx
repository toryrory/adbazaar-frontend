import FastSearchBtn from "../FastSearchBtn/FastSearchBtn";
import { SwiperWrapper } from "./SwiperBtns.styled";
import { UsedImg, NewImg, TopImg, ExchangeImg, ForGiftImg, TextbookImg, BigSaleImg } from "../../../public/png/fast-search";

export default function SwiperBtns() {
  return (
    <SwiperWrapper>
      <FastSearchBtn text={"New"} alt={"new"} icon={NewImg} />
      <FastSearchBtn text={"Used"} alt={"used"} icon={UsedImg} />
      <FastSearchBtn text={"Top"} alt={"top"} icon={TopImg} />
      <FastSearchBtn text={"Exchange"} alt={"exchange"} icon={ExchangeImg} />
      <FastSearchBtn text={"For Gift"} alt={"for gift"} icon={ForGiftImg} />
      <FastSearchBtn text={"Textook"} alt={"textbook"} icon={TextbookImg} />
      <FastSearchBtn text={"Big Sale"} alt={"big sale"} icon={BigSaleImg} />
    </SwiperWrapper>
   
  );
}
