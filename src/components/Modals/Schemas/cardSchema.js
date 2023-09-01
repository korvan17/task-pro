import * as yup from 'yup';

const cardSchema = yup.object({
  title: yup.string().trim().required('Title is required'),
  description: yup.string().trim(),
});

export default cardSchema;
