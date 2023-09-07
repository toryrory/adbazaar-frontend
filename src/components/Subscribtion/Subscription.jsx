import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeSubscription } from "@/redux/mainPageSlice";
import { selectSubscription } from "@/redux/selectors";
import { sectionTexts } from "@/data/section-text";
import SecondaryButton from "../secondaryButton/SecondaryButton";
import {
  Text,
  Input,
  Form,
  Container,
  FullOrnamentImg,
  Section,
} from "./Subscription.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FullOrnamentClipped } from "../../../public/backgrounds";

export default function Subscription() {
  //if user add a subscription block him ability to fill subscription field and make notification that he already has a subscribtion - account/authSlice add field subscribtion: true/false
  const dispatch = useDispatch();
  const subscribed = useSelector(selectSubscription);
  const text = sectionTexts[7].subscriptionText;

  const onSubmit = ({ email }, { resetForm }) => {
    if (!email) {
      toast.error("Please fill in the field");
      return;
    }
    if (!subscribed) {
      console.log(subscribed);
      toast.success("Thanks for subscribing");
      dispatch(changeSubscription(true));
    } else {
      toast.info("You are already subscribed")
    }
    resetForm({ email: "" });
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
  });
  return (
    <Section>
      <FullOrnamentImg src={FullOrnamentClipped} alt='ornament' />
      <Container>
        <Text>{text}</Text>
        <Form onSubmit={handleSubmit}>
          <Input
            type='email'
            onChange={handleChange}
            name='email'
            value={values.email}
            placeholder='Enter your mail |'
          />
          <SecondaryButton
            type={"submit"}
            text={"Send"}
            style={{ width: "114px" }}
          />
        </Form>
      </Container>
    </Section>
  );
}
