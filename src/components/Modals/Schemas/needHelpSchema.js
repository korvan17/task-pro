import * as yup from 'yup';

const needHelpSchema = yup.object({
    email: yup
    .string()
    .trim()
    .email()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      'Invalid Email format'
    ),
    comment: yup.string().trim().min(6).max(500),
});

export default needHelpSchema;
