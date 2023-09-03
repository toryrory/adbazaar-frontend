import Image from "next/image";
import { BgOrnament } from "../../../public/backgrounds";
import SecondaryButton from "../secondaryButton/SecondaryButton";
import { sectionTexts } from "@/data/section-text";
import {
  Text,
  Container,
  Button,
  BtnContainer,
  Section,
} from "./BecomeSeller.styled";
import { FullOrnamentClipped } from "../../../public/backgrounds";
import { FullOrnamentImg } from "../Subscribtion/Subscription.styled";
import { ArrowRight } from "../../../public/svg-index";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/selectors";

export default function BecomeSeller() {
  const router = useRouter();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const text = sectionTexts[6].becomeSellerText
  
  const handleTransition = () => {
  isLoggedIn ? router.push("/account") : router.push('/register')
  }
  return (
    <Section>
      <FullOrnamentImg src={FullOrnamentClipped} alt='ornament' />
      <Container>
        <Text>{text}</Text>
        <BtnContainer>
          <Button type='button'>
            {" "}
            See Details
            <ArrowRight
              style={{
                backgroundColor: "var(--main-background)",
                width: 14,
                height: 15,
              }}
            />
          </Button>
          <SecondaryButton
            type={"button"}
            text={"Become a seller"}
            style={{ width: "194px", margin: 0 }}
            onClick={handleTransition}
          />
        </BtnContainer>
      </Container>
    </Section>
  );
}
