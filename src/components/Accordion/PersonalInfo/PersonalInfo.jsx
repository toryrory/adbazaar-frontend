import { useSelector, useDispatch } from 'react-redux';
import { selectUserData } from '@/redux/selectors';
import { useState } from 'react';
import { useFormik } from 'formik';
import {
  Form,
  Label,
  Input,
  InputBox,
  HiddenBtn,
  InputFlexBox,
  InputLib,
  CountryCode,
  BtnBox,
  Button,
  SocialsLabel,
  PhoneDataText,
} from './PersonalInfo.styled';
import { updateUser, fetchCurrentUser } from '@/redux/auth/operations';
import { FlagUa } from '../../../../public/svg-account';
import { ArrowDown } from '../../../../public/svg-account';
import { Instagram } from '../../../../public/svg-account';
import { Facebook } from '../../../../public/svg-account';
import { Edit, Save } from '../../../../public/svg-account';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PersonalInfo() {
  const userData = useSelector(selectUserData); //возможно так неправильно потому что нельзя изменять значение напрямую
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);

  const handleClickEdit = () => {
    setReadOnly(!readOnly);
    toast.info('Please edit your data');
    //добавить подсветку курсора или фокус на формах типо того или нотификашку что можно редактировать формы
  };

  const { name, email, phone, birthday, socials } = userData;

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      full_name: name,
      email,
      phone,
      birth_date: birthday,
      socials: { first: socials[0], second: socials[1] },
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      toast.success('Info saved');
      setReadOnly(true);
      values.socials = [
        values.socials.first || '',
        values.socials.second || '',
      ];
      alert(JSON.stringify(values, null, 2));
      dispatch(updateUser(values));
    },
  });

  // const toPhoneNumber = numbers => {
  //   const slicedNum = numbers.slice(3).split("");
  //   slicedNum.splice(0, 0, "(");
  //   slicedNum.splice(4, 0, ")");
  //   slicedNum.splice(5, 0, " ");
  //   slicedNum.splice(9, 0, "-");

  //   return slicedNum.join("");
  // }

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <InputBox>
        <Label>
          Full Name
          <Input
            name="full_name"
            type="text"
            value={values.full_name || ''}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </Label>
      </InputBox>
      <Label htmlFor="phone">Phone</Label>
      <InputFlexBox>
        <FlagUa style={{ width: 31, height: 19 }} />
        <HiddenBtn type="button">
          <ArrowDown style={{ width: 17, height: 9 }} />
        </HiddenBtn>
        <CountryCode>+38</CountryCode>
        {readOnly ? (
          <PhoneDataText>
            {/* &nbsp;&nbsp;
            {userData.phone.length === 13
              ? toPhoneNumber(userData.phone)
              : "(000) 000-0000"} */}
            &nbsp;&nbsp;{userData.phone}
          </PhoneDataText>
        ) : (
          <InputLib
            name="phone"
            type="tel"
            onChange={handleChange}
            readOnly={readOnly}
            placeholder={userData.phone}
            mask="(999) 999-9999"
          />
        )}
      </InputFlexBox>
      <InputBox>
        <Label>
          Email
          <Input
            name="email"
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </Label>
      </InputBox>
      <InputBox>
        <Label>
          Date of Birth
          <InputLib
            name="birth_date"
            type="text"
            value={values.birth_date || ''}
            onChange={handleChange}
            readOnly={readOnly}
            mask="99/99/9999"
            placeholder="dd/mm/yyyy"
          />
        </Label>
      </InputBox>
      <SocialsLabel htmlFor="socials">Social media</SocialsLabel>
      <InputFlexBox>
        <Instagram style={{ width: 28, height: 28 }} />
        <HiddenBtn type="button">
          <ArrowDown style={{ width: 17, height: 9 }} />
        </HiddenBtn>
        <Input
          id="socials1"
          name="socials.first"
          type="text"
          value={values.socials.first || ''}
          placeholder="@example"
          onChange={handleChange}
          readOnly={readOnly}
        />
      </InputFlexBox>
      <InputFlexBox>
        <Facebook style={{ width: 28, height: 28 }} />
        <HiddenBtn type="button">
          <ArrowDown style={{ width: 17, height: 9 }} />
        </HiddenBtn>
        <Input
          id="socials2"
          name="socials.second"
          type="text"
          value={values.socials.second || ''}
          placeholder="@example"
          onChange={handleChange}
          readOnly={readOnly}
        />
      </InputFlexBox>

      <BtnBox>
        <Button type="button" onClick={handleClickEdit}>
          <Edit style={{ width: 24, height: 24 }} />
          Edit
        </Button>
        <Button type="submit">
          Save
          <Save style={{ width: 24, height: 24 }} />
        </Button>
      </BtnBox>
    </Form>
  );
}
