import Header from "../components/Layout/Header/Header";
import { Bg404Frame, BgAdbazaar, BgFull } from "../../public/backgrounds";
import {
  BgImgStar,
  BgImgFrame,
  BgImgTitle,
  PreviousBox,
  PreviousText,
  ErrorCode,
  ErrorCodeBg,
  ErrorCodeBox,
  ErrorCodeText,
  ErrorText,
} from "@/styles/404.styled";
import { ArrowBack } from "../../public/svg-book";
import SecondaryButton from "@/components/secondaryButton/SecondaryButton";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuthError } from "@/redux/selectors";

export default function Custom404() {
    const router = useRouter();
    const error = useSelector(selectAuthError);

    const errorNumber = error?.match(/\d+/)[0];
  
    const goToMainPage = () => {
        router.push('/');
    }
  return (
    <div>
      <Header />
      <BgImgStar src={BgFull} alt='star' priority={true} />
      <BgImgFrame src={Bg404Frame} alt='Frame' priority={true} />
      <BgImgTitle src={BgAdbazaar} alt='adbazaar' priority={true} />
      <PreviousBox type='button' onClick={() => router.back()}>
        <ArrowBack style={{ width: "24px", height: "21px" }} />
        <PreviousText>Previous page</PreviousText>
      </PreviousBox>
      <ErrorCodeBox>
        <ErrorCodeText>error code</ErrorCodeText>
        <ErrorCodeBg>
          <ErrorCode>{errorNumber || '404'}</ErrorCode>
        </ErrorCodeBg>
      </ErrorCodeBox>
      <ErrorText>
        we're continuously working to improve your experience on our website
      </ErrorText>
      <SecondaryButton
        type={"button"}
        text={"Start Over"}
        style={{ width: "358px", marginTop: "26px", marginBottom: "90px" }}
        onClick={goToMainPage}
      />
    </div>
  );
}
