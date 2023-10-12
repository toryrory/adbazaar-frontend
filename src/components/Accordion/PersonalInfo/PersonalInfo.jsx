import { useSelector } from 'react-redux';
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
} from './PersonalInfo.styled';
import { FlagUa } from '../../../../public/svg-account';
import { ArrowDown } from '../../../../public/svg-account';
import { Instagram } from '../../../../public/svg-account';
import { Facebook } from '../../../../public/svg-account';
import { Edit, Save } from '../../../../public/svg-account';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PersonalInfo() {
  const userData = useSelector(selectUserData); //возможно так неправильно потому что нельзя изменять значение напрямую
  const [readOnly, setReadOnly] = useState(true);

  const handleClickEdit = () => {
    setReadOnly(!readOnly);
    toast.info('Please edit your data');
    //добавить подсветку курсора или фокус на формах типо того или нотификашку что можно редактировать формы
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: userData,
    onSubmit: (values) => {
      toast.success('Info saved');
      alert(JSON.stringify(values, null, 2));

      //диспатчить dispatch(updateUser(values))
    },
  });

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <InputBox>
        <Label>
          Full Name
          <Input
            name="name"
            type="text"
            value={values.name || ''}
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
        <InputLib
          id="phone"
          name="phone"
          type="tel"
          value={values.phone || ''}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder="(000) 000-0000"
          mask="(999) 999-9999"
        />
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
            name="birthday"
            type="text"
            value={values.birthday || ''}
            onChange={handleChange}
            readOnly={readOnly}
            mask="99/99/9999"
            placeholder="00/00/0000"
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
