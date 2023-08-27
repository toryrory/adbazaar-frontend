import Image from "next/image";
import { BgOrnament} from "../../../public/backgrounds";
import { useFormik } from "formik";
import { sectionTexts } from "@/data/section-text";
import SecondaryButton from "../secondaryButton/SecondaryButton";
import { Text, Input, Form, Container } from "./Subscription.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subscription() {
    const text = sectionTexts[5].subscriptionText;

    const onSubmit = ({ email }, { resetForm }) => {
        console.log(email);
        toast.info("Thanks for subscribing");
        resetForm({email: ''}); 
    }
    const {values, handleChange, handleSubmit,} = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit,
    })
  return (
    <section>
          <Image src={BgOrnament} alt='ornament' />
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
        <SecondaryButton type={"submit"} text={"Send"} style={{width: '114px'}}/>
              </Form>
          </Container>
    </section>
  );
}
