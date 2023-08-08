import { useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '@/redux/selectors';
import { selectAuthError } from '@/redux/selectors';
import * as yup from 'yup';
import Modal from '@/components/modal/Modal';
import {
  ConfirmationPage,
  ConfirmationContainer,
  CloseButton,
  Title,
  Text,
  Email,
  InputList,
  InputItem,
  Input,
  ResendLink,
  MainButton,
  ErrorText,
  AdditionalText,
} from '@/styles/confirmation.styled';
import { Cross } from '../components/svg';

const schema = yup.object({
  code1: yup.string().max(1).required('Please Enter valid code'),
  code2: yup.string().max(1).required('Please Enter valid code'),
  code3: yup.string().max(1).required('Please Enter valid code'),
  code4: yup.string().max(1).required('Please Enter valid code'),
});

export default function Confirmation() {
  const initialCode = [1, 1, 1, 1];
  const authError = useSelector(selectAuthError);
  const email = useSelector(selectUserEmail);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(true);

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = ({ code1, code2, code3, code4 }, actions) => {
    const code = [code1, code2, code3, code4];
    console.log(code);
    if (JSON.stringify(initialCode) === JSON.stringify(code)) {
      setIsCodeRight(true);
      actions.resetForm();
      setShowModal(true);
    } else {
      setIsCodeRight(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        code1: '',
        code2: '',
        code3: '',
        code4: '',
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <ConfirmationPage>
      <ConfirmationContainer>
        <CloseButton type="button" onClick={() => router.push('/')}>
          <Cross style={{ width: 24, height: 24 }} />
        </CloseButton>
        <Title>Sign Up</Title>
        <Text>
          You’ve got mail to <Email>{email}. </Email>
        </Text>
        {isCodeRight ? (
          <AdditionalText>
            Please enter the four digit code you received
          </AdditionalText>
        ) : (
          <ErrorText>You have entered the wrong code. Try again</ErrorText>
        )}
        {/* {errors.code1 && touched.code1 && <ErrorText>{errors.code1}</ErrorText>}
        {errors.code2 && touched.code2 && <ErrorText>{errors.code2}</ErrorText>}
        {errors.code3 && touched.code3 && <ErrorText>{errors.code3}</ErrorText>}
        {errors.code4 && touched.code4 && <ErrorText>{errors.code4}</ErrorText>} */}
        <form onSubmit={handleSubmit}>
          <InputList>
            <InputItem>
              <Input
                value={values.code1}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="code1"
                id="code1"
                placeholder="_"
              />
            </InputItem>
            <InputItem>
              <Input
                value={values.code2}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="code2"
                id="code2"
                placeholder="_"
              />
            </InputItem>
            <InputItem>
              <Input
                value={values.code3}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="code3"
                id="code3"
                placeholder="_"
              />
            </InputItem>
            <InputItem>
              <Input
                value={values.code4}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="code4"
                id="code4"
                placeholder="_"
              />
            </InputItem>
          </InputList>

          <ResendLink href="">Resend code?</ResendLink>
          <MainButton type="submit">Continue</MainButton>
        </form>
      </ConfirmationContainer>
      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully created your account"
          showTick={true}
          showButton={true}
        />
      )}
    </ConfirmationPage>
  );
}
