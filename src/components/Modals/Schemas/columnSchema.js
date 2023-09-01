import * as yup from 'yup';

const columnSchema = yup.object({
  title: yup.string().trim().required('Title is required'),
});

export default columnSchema;
