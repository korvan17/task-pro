import * as yup from 'yup';

const boardSchema = yup.object({
  title: yup.string().trim().required(),
});

export default boardSchema;
