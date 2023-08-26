import * as yup from 'yup';

const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be no more than 50 characters'),
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      'Invalid password format'
    )
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be no more than 64 characters')
    .test(
      'no-spaces',
      'Password cannot contain spaces',
      value => !/\s/.test(value)
    ),
});

export default registerSchema;
