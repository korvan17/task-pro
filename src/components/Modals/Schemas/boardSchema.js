import * as yup from 'yup';

const boardSchema = yup.object({
  title: yup.string().trim().required('Title is required'),
  //   background: yup.string().required('Please select a background'),
  //   icon: yup.string().required('Please select an icon'),
});

export default boardSchema;
