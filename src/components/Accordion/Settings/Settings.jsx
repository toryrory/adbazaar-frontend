import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changePasswordSchema } from '@/services/shema';
import { Clip, Trash, Save } from '../../../../public/svg-account';
import { EyeOpened, EyeClosed } from '../../../../public/svg-authorization';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
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
} from './Settings.styled';

export default function Settings() {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [photo, setPhoto] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChangePhoto = (event) => {
    setPhoto(event.currentTarget.value);
  };

  const handleSubmitPhoto = (event) => {
    event.preventDefault();
    // dispatch(changePhoto(photo));
    console.log(photo);
    toast.success('You updated your photo');
    setPhoto('');
  };

  const onSubmit = ({ password, newPassword }, actions) => {
    // dispatch(changePassword({ password, newPassword}));
    console.log(password, newPassword);
    toast.success('You updated your password');
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <FormPhoto onSubmit={handleSubmitPhoto}>
        <Title>Change Photo</Title>
        <PhotoContainer>
          {/* {photo ? (
            <img
              src={photo}
              width={40}
              height={40}
              alt="user avatar"
              style={{ marginRight: 24 }}
            />
          ) : (
            <Image
              src="/png/user-girl-png.png"
              width={40}
              height={40}
              alt="user avatar"
              style={{ marginRight: 24 }}
            />
          )} */}
          <Image
            src="/png/user-girl-png.png"
            width={40}
            height={40}
            alt="user avatar"
            style={{ marginRight: 24 }}
          />
          <PhotoLabel>
            <Clip style={{ width: 20, height: 20 }} />
            Upload a photo
            <input
              value={photo}
              onChange={handleChangePhoto}
              type="file"
              name="photo"
              placeholder="Upload a photo"
              accept="image/*,.png,.jpeg,.web,"
              style={{ display: 'none' }}
            />
          </PhotoLabel>
          <TrashButton type="button" onClick={onCLearInput}>
            <Trash style={{ width: 24, height: 24 }} />
          </TrashButton>
        </PhotoContainer>
        {photo && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8,
              gap: 24,
            }}
          >
            <PhotoPath>{photo}</PhotoPath>
            <SavePhotoButton type="submit">
              Save
              <Save style={{ width: 24, height: 24 }} />
            </SavePhotoButton>
          </div>
        )}
      </FormPhoto>
      <Form onSubmit={handleSubmit}>
        <Title>Change Password</Title>
        <InputList>
          <InputItem>
            {errors.password && touched.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : (
              <Label htmlFor="password">
                Enter your current password
                <span
                  style={{
                    marginLeft: 8,
                    color: 'var(--error-color)',
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
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
              />
              <EyeButton type="button" onClick={togglePassword}>
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
              <Label htmlFor="newPassword">
                Enter new password
                <span
                  style={{
                    marginLeft: 8,
                    color: 'var(--error-color)',
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
                type={passwordShown ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                placeholder="New password"
              />
              <EyeButton type="button" onClick={togglePassword}>
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
              <Label htmlFor="confirm">
                Repeat new password
                <span
                  style={{
                    marginLeft: 8,
                    color: 'var(--error-color)',
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
                type={passwordShown ? 'text' : 'password'}
                name="confirm"
                id="confirm"
                placeholder="Confirm your Password"
              />
              <EyeButton type="button" onClick={togglePassword}>
                {passwordShown ? (
                  <EyeOpened style={{ width: 24, height: 24 }} />
                ) : (
                  <EyeClosed style={{ width: 24, height: 24 }} />
                )}
              </EyeButton>
            </PasswordContainer>
          </InputItem>
        </InputList>
        <SaveButton type="submit">
          Save
          <Save style={{ width: 24, height: 24 }} />
        </SaveButton>
      </Form>
    </div>
  );
}
