import { Container } from "./TopBookSellersSection.styled";
import MainTexts from "../MainTexts/MainTexts";
import { sectionTexts } from "@/data/section-text";

export default function TopBookSellersSection() {
  return (
    <Container>
      <MainTexts title={sectionTexts[4].title} text={sectionTexts[4].text} />
    </Container>
  );
}
