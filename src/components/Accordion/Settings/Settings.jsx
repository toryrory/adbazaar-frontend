import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changePasswordSchema } from '@/services/shema';
import { Clip, Trash, Save } from '../../../../public/svg-account';
import { EyeOpened, EyeClosed } from '../../../../public/svg-authorization';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '@/redux/auth/operations';
import { updatePassword } from '@/redux/account/operations';
import {
  Form,
  FormPhoto,
  Title,
  PhotoContainer,
  PhotoLabel,
  TrashButton,
  PhotoPath,
  InputList,
  InputItem,
  Label,
  Input,
  PasswordContainer,
  EyeButton,
  ErrorMessage,
  SaveButton,
  SavePhotoButton,
  InputHidden,
  StyledImg,
  Circle,
  PhotoBox,
  DarkBox,
  Container,
} from "./Settings.styled";
import { selectSettings, selectUserAvatar } from "@/redux/selectors";
import { Img32Girl } from '../../../../public/png';

export default function Settings() {
  const dispatch = useDispatch();
  // const settings = useSelector(selectSettings);
  const userAvatar = useSelector(selectUserAvatar); //selectUserAvatar
  const [passwordShown, setPasswordShown] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [state, setState] = useState(userAvatar);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChangePhoto = (event) => {
    setState(null)
    setPhoto(window.URL.createObjectURL(event.target.files[0]));
    // console.log(event.target.files[0]);
    // console.log(window.URL.createObjectURL(event.target.files[0]));
   
  };
  const handleSubmitPhoto = (event) => {

    const formFile = new FormData();
    formFile.append("image_url", photo); // "avatar" это свойство картинки в БД на бекенде, нужно узнать как будет называться это поле.

    event.preventDefault();
    dispatch(updateUser(formFile)); //диспачить нужно будет formFile
   
    toast.success("You updated your photo");
    setPhoto("");
  };

  const onSubmit = ({ password, newPassword }, actions) => {
    const passwordData = { cur_pass: password, new_pass: newPassword };
    console.log(passwordData);
    dispatch(updatePassword(passwordData));
    toast.success("You updated your password");

    actions.resetForm();
  };

  const onCLearInput = () => {
    setPhoto('');
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        newPassword: '',
        confirm: '',
      },
      validationSchema: changePasswordSchema,
      onSubmit,
    });

  return (
    <Container>
      <FormPhoto onSubmit={handleSubmitPhoto}>
        <Title>Change Photo</Title>
        <PhotoContainer>
          <PhotoBox><Circle>
          <StyledImg
            src={state ? state : photo || Img32Girl} 
            width={40}
            height={40}
            alt='user avatar'
          /></Circle></PhotoBox>
          
          <PhotoLabel>
            <Clip style={{ width: 20, height: 20 }} />
            Upload a photo
            <InputHidden
              onChange={handleChangePhoto}
              type='file'
              name='photo'
              placeholder='Upload a photo'
              accept='image/png, image/jpeg'
            />
          </PhotoLabel>
          <TrashButton type='button' onClick={onCLearInput}>
            <Trash style={{ width: 24, height: 24 }} />
          </TrashButton>
        </PhotoContainer>
        {photo && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 24,
            }}
          >
            {/* <PhotoPath>{photo}</PhotoPath> */}
            <SavePhotoButton type='submit'>
              Save
              <Save style={{ width: 24, height: 24 }} />
            </SavePhotoButton>
          </div>
        )}
      </FormPhoto>
      <DarkBox></DarkBox>
      <Form onSubmit={handleSubmit}>
        <Title>Change Password</Title>
        <InputList>
          <InputItem>
            {errors.password && touched.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : (
              <Label htmlFor='password'>
                Enter your current password
                <span
                  style={{
                    marginLeft: 8,
                    color: "var(--error-color)",
                  }}
                >
                  *
                </span>
              </Label>
            )}
            <PasswordContainer>
              <Input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordShown ? "text" : "password"}
                name='password'
                id='password'
                placeholder='Password'
              />
              <EyeButton type='button' onClick={togglePassword}>
                {passwordShown ? (
                  <EyeOpened style={{ width: 24, height: 24 }} />
                ) : (
                  <EyeClosed style={{ width: 24, height: 24 }} />
                )}
              </EyeButton>
            </PasswordContainer>
          </InputItem>
          <InputItem>
            {errors.newPassword && touched.newPassword ? (
              <ErrorMessage>{errors.newPassword}</ErrorMessage>
            ) : (
              <Label htmlFor='newPassword'>
                Enter new password
                <span
                  style={{
                    marginLeft: 8,
                    color: "var(--error-color)",
                  }}
                >
                  *
                </span>
              </Label>
            )}
            <PasswordContainer>
              <Input
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordShown ? "text" : "password"}
                name='newPassword'
                id='newPassword'
                placeholder='New password'
              />
              <EyeButton type='button' onClick={togglePassword}>
                {passwordShown ? (
                  <EyeOpened style={{ width: 24, height: 24 }} />
                ) : (
                  <EyeClosed style={{ width: 24, height: 24 }} />
                )}
              </EyeButton>
            </PasswordContainer>
          </InputItem>
          <InputItem>
            {errors.confirm && touched.confirm ? (
              <ErrorMessage>{errors.confirm}</ErrorMessage>
            ) : (
              <Label htmlFor='confirm'>
                Repeat new password
                <span
                  style={{
                    marginLeft: 8,
                    color: "var(--error-color)",
                  }}
                >
                  *
                </span>
              </Label>
            )}
            <PasswordContainer>
              <Input
                value={values.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordShown ? "text" : "password"}
                name='confirm'
                id='confirm'
                placeholder='Confirm your Password'
              />
              <EyeButton type='button' onClick={togglePassword}>
                {passwordShown ? (
                  <EyeOpened style={{ width: 24, height: 24 }} />
                ) : (
                  <EyeClosed style={{ width: 24, height: 24 }} />
                )}
              </EyeButton>
            </PasswordContainer>
          </InputItem>
        </InputList>
        <SaveButton type='submit'>
          Save
          <Save style={{ width: 24, height: 24 }} />
        </SaveButton>
      </Form>
    </Container>
  );
}
