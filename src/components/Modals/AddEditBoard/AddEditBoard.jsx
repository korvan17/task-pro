import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './AddEditBoard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import IconPicker from 'components/UIelements/IconPicker/IconPicker';
import { useState } from 'react';
import BackgroundPicker from 'components/UIelements/BackgroundPicker/BackgroundPicker';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard, updateBoardById } from 'redux/boards/operations';
import { useTheme } from '@emotion/react';
import boardSchema from '../Schemas/boardSchema';
import { selectModalStatus } from 'redux/modalSlice';

export default function AddEditBoard({ onClose, boardId }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [icon, setIcon] = useState('');
  let [background, setBackground] = useState('');

  const isEditing = useSelector(selectModalStatus);

  const handleSelectedIconChange = selectedIcon => {
    setIcon(selectedIcon);
  };

  const handleSelectedBackgroundChange = selectedBackground => {
    if (selectedBackground === 'default') {
      setBackground('');
    } else {
      setBackground(selectedBackground);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!isEditing) {
        await dispatch(
          addBoard({
            title: values.title,
            background: background,
            icon: icon,
          })
        );
      } else {
        await dispatch(
          updateBoardById({
            title: values.title,
            background: background,
            icon: icon,
            boardId,
          })
        );
      }
      resetForm();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg
          style={{ stroke: theme.popUp.closeIconColor }}
          width="18"
          height="18"
        >
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleBoard}>
        {!isEditing ? 'New board' : 'Edit board'}
      </h3>
      <Formik
        initialValues={{
          title: '',
          icon: icon,
          background: background,
        }}
        onSubmit={handleSubmit}
        validationSchema={boardSchema}
      >
        <Form>
          <label className={css.label}>
            <ErrorMessage
              className={css.errorMessage}
              name="title"
              component="p"
            />
            <Field
              style={{
                color: theme.popUp.inputTextColor,
                borderColor: theme.popUp.inputBorderColor,
              }}
              className={css.input}
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <IconPicker onSelectedIconChange={handleSelectedIconChange} />
          <BackgroundPicker
            onSelectedBackgroundChange={handleSelectedBackgroundChange}
          />
          <AddIconButton
            buttonType="submit"
            className={css.btn}
            theme={'light'}
          >
            <span
              style={{ color: theme.popUp.buttonTextColor }}
              className={css.btnSumbitAction}
            >
              {!isEditing ? 'Create' : 'Edit'}
            </span>
          </AddIconButton>
        </Form>
      </Formik>
    </>
  );
}
