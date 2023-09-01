import * as yup from 'yup';

const boardSchema = yup.object({
  title: yup.string().trim().required('Title is required'),
});

export default boardSchema;
