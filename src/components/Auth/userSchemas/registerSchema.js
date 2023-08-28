import * as yup from 'yup';

const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be no more than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Name can only contain letters, numbers, and spaces'
    ),
  email: yup
    .string()
    .trim()
    .email()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
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
