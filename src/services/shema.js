import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Please Enter your name'),
  email: yup.string().email().required('Please Enter your Email'),
  password: yup
    .string()
    .min(6, 'Password is too short - should be 6 symbols minimum')
    .max(16, 'Password is too long - should be 16 symbols maximum')
    .required('Please Enter your Password'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password doesn`t match')
    .required('Please Confirm your Password'),
  termsChecked: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  // .required()
  // .default(false),
  // .matches(
  //   '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // )
});
