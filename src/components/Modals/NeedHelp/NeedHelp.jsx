import { useTheme } from '@emotion/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import iconDefs from '../../../icons/sprite.svg';
import css from './NeedHelp.module.css';
import { useDispatch } from 'react-redux';
import needHelpSchema from '../Schemas/needHelpSchema';
import { needHelp } from 'redux/auth/authOperations';

export default function NeedHelp({ onClose }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = async (user, { resetForm }) => {
    try {
      await dispatch(
        needHelp({
          email: user.email,
          comment: user.comment,
        })
      );
      resetForm();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleCard}>
        Need help
      </h3>
      <button className={css.closeBtn} onClick={onClose}>
        <svg
          style={{ stroke: theme.popUp.closeIconColor }}
          width="18"
          height="18"
        >
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <Formik
        initialValues={{
          email: '',
          comment: '',
          color: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={needHelpSchema}
      >
        <Form>
          <label className={css.label}>
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="p"
            />
            <Field
              style={{
                color: theme.popUp.inputTextColor,
                borderColor: theme.popUp.inputBorderColor,
                '::placeholder': { color: theme.popUp.inputPlaceholderColor },
              }}
              className={css.input}
              type="text"
              name="email"
              placeholder="Email adress"
            />
          </label>
          <label>
            <ErrorMessage
              className={css.errorMessage}
              name="comment"
              component="p"
            />
            <Field
              as="textarea"
              style={{
                color: theme.popUp.inputTextColor,
                borderColor: theme.popUp.inputBorderColor,
                '::placeholder': { color: theme.popUp.inputPlaceholderColor },
              }}
              className={css.textarea}
              type="text"
              name="comment"
              placeholder="Comment"
            />
          </label>
          <button
            style={{
              backgroundColor: theme.popUp.buttonBackground,
              color: theme.popUp.buttonTextColor,
            }}
            type="submit"
          >
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
