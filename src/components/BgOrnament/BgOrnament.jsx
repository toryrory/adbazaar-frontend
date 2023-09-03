import { BgOrnamentStripe } from "../../../public/backgrounds";
import { OrnamentBox, OrnamentStripe } from "./BgOrnament.styled";

export default function BgOrnament() {
  return (
    <OrnamentBox>
      <OrnamentStripe src={BgOrnamentStripe} alt='ornament stripe' />
      <OrnamentStripe src={BgOrnamentStripe} alt='ornament stripe' />
    </OrnamentBox>
  );
}
// not used component
