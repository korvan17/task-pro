import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './AddEditCard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import ColorPicker from 'components/UIelements/ColorPicker/ColorPicker';
import { AddIconButton } from 'components';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard } from 'redux/сard/сardOperations';
import cardSchema from '../Schemas/cardSchema';
import NewCalendar from 'components/UIelements/Calendar/NewCalendar';
import { selectCurrentBoard } from '../../../redux/boards/selectors';

export default function AddEditCard({ onClose }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [priority, setPriority] = useState('without');
  const [setColor] = useState('#1616164D');
  const [deadline, setDeadline] = useState('');
  const isEditing = useSelector(state => state.modal.isModalDisplayed);
  const currentColumnId = useSelector(state => state.modal.columnId);
  const currentCardId = useSelector(state => state.modal.cardId);
  const curentBoard = useSelector(selectCurrentBoard);

  const handleSelectedPriorityChange = selectedPriority => {
    setPriority(selectedPriority);
  };

  const handleSelectedColorChange = selectedColor => {
    setColor(selectedColor);
  };

  const handleDateChange = selectedDate => {
    setDeadline(selectedDate);
  };

  let currentCard;

  if (isEditing) {
    const currentColumn = curentBoard.columns.find(
      column => column._id === currentColumnId
    );
    currentCard = currentColumn.cards.find(card => card._id === currentCardId);
    console.log(currentCard.priority);
  }

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!isEditing) {
        await dispatch(
          addCard({
            title: values.title,
            description: values.description,
            priority: priority,
            deadline: deadline,
            column: currentColumnId,
          })
        );
      } else {
        await dispatch(
          editCard({
            title: values.title,
            description: values.description,
            priority: priority,
            deadline: deadline,
            id: currentCardId,
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
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleCard}>
        {!isEditing ? 'Add card' : 'Edit card'}
      </h3>
      <Formik
        initialValues={{
          title: isEditing ? currentCard.title : '',
          description: isEditing ? currentCard.description : '',
        }}
        onSubmit={handleSubmit}
        validationSchema={cardSchema}
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
                '::placeholder': { color: theme.popUp.inputPlaceholderColor },
              }}
              className={css.input}
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <label className={css.label}>
            <ErrorMessage
              className={css.errorMessage}
              name="description"
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
              name="description"
              placeholder="Description"
            />
          </label>
          <ColorPicker
            // defaultColor={color}
            // defaultPriority={isEditing ? currentCard.priority : priority}
            onSelectedPriorityChange={handleSelectedPriorityChange}
            onSelectedColorChange={handleSelectedColorChange}
          />
          <div>
            <span
              style={{ color: theme.popUp.iconsTextColor }}
              className={css.calendarTitle}
            >
              Deadline
            </span>
            <NewCalendar onDateChange={handleDateChange} />
          </div>
          <AddIconButton buttonType="submit" className={css.btn}>
            <span
              style={{ color: theme.popUp.buttonTextColor }}
              className={css.btnSumbitAction}
            >
              {!isEditing ? 'Add' : 'Edit'}
            </span>
          </AddIconButton>
        </Form>
      </Formik>
    </>
  );
}
