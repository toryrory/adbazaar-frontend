import { useSelector } from "react-redux";
import { selectUserData } from "@/redux/selectors";
import { useState } from "react";
import { useFormik } from "formik";

export default function PersonalInfo() {
  const userData = useSelector(selectUserData); //возможно так неправильно потому что нельзя изменять значение напрямую
  const [readOnly, setReadOnly] = useState(true);

  const handleClick = (e) => {
    setReadOnly(!readOnly);
    //добавить подсветку курсора или фокус на формах типо того или нотификашку что можно редактировать формы
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: userData,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      //диспатчить dispatch(updateUser(values))
    },
  });

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          name='name'
          type='text'
          value={values.name}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <label>
        Phone
        <input
          name='phone'
          type='tel'
          value={values.phone}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder="+380 __ __ __ ___" //сделать спан а инпут это цифры
        />
      </label>
      <label>
        Email
        <input
          name='email'
          type='email'
          value={values.email}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <label>
        Date of Birth
        <input
          name='birthday'
          type='text'
          value={values.birthday}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <label>
        Social media
        <input
          name="socials.first"
          type='text'
          value={values.socials.first}
          onChange={handleChange}
          readOnly={readOnly}
        />
        <input
          name='socials.second'
          type='text'
          value={values.socials.second}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
      <button type='button' onClick={handleClick}>
        Edit дизейбл если не нажата кнопка сейв
      </button>
      <button type='submit'>Save</button>
    </form>
  );
}
