import {
  AddEditCard,
  AddEditColumn,
  AddIconButton,
  Card,
  Column,
} from 'components';
// import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { useState } from 'react';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { deleteCard } from '../../../redux/сard/сardOperations';
import { useDispatch } from 'react-redux';

export function MainDashboard({ id }) {
  // const [showModal, setShowModal] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);
  // const [board, setBoard] = useState([]);
  const [showModalColumn, setShowModalColumn] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const dispatch = useDispatch();
  // const [deleteCard, setDeleteCard] = useState(false);

  const handleDeleteCard = id => {
    console.log('deleteCard');
    dispatch(deleteCard(id));
  };

  const toggleModalCard = () => {
    console.log('pushToggal');
    setShowModalCard(!showModalCard);
    dispatch(editCard(toggleModalCard(true)));
  };

  const toggleModalColumn = () => {
    console.log('pushToggal');
    setShowModalColumn(!showModalColumn);
  };

  const board = {
    columns: [
      {
        _id: 'das',
        title: 'To Do',
        cards: [
          {
            _id: 'edasd',
            title: 'patato',
            description: 'Potato 2kg',
            priority: 'low',
            deadline: '',
          },
          {
            _id: 'edasd2',
            title: 'tomato',
            description: 'tomato 2kg',
            priority: 'without',
            deadline: '',
          },
        ],
      },
      {
        _id: 'das2',
        title: 'In progress',
        cards: [
          {
            _id: 'afqwefqwf',
            title: 'apple',
            description: 'Apple 18kg',
            priority: 'without',
            deadline: '',
          },
          {
            _id: 'edasd2',
            title: 'berry',
            description: 'berry 50kg',
            priority: 'without',
            deadline: '',
          },
        ],
      },
    ],
  };

  // const toggleModal = editing => {
  //   setShowModal(!showModal);
  //   setIsEditing(editing);
  // };

  // const handleAddCard = () => {};
  // const updatedBoard = board.columns.map(column =>
  //   column._id === columnId ? { ...column, cards: [...column.cards] } : column
  // );

  // setBoard(updatedBoard);

  return (
    <div className={css.board}>
      {board?.columns.length > 0 && (
        <ul className={css.column__item}>
          {board.columns.map(column => (
            <li key={column._id} className={css.column__list}>
              <Column
                toggleModalColumn={toggleModalColumn}
                title={column.title}
              />
              {/* <div className={css.container__column}>
                <p className={css.title__column}>{column.title}</p>
                <div className={css.buttons__wrapp}>
                  <button
                    className={css.button__column}
                    type="button"
                    title="pencil"
                  >
                    <svg width="16" height="16">
                      <use
                        xlinkHref={`${sprite}#icon-edit`}
                        className={css.svgIcon}
                      />
                    </svg>
                  </button>
                  <button
                    className={css.button__column}
                    type="button"
                    title="trash"
                  >
                    <svg width="16" height="16">
                      <use
                        xlinkHref={`${sprite}#icon-trash`}
                        className={css.svgIcon}
                      />
                    </svg>
                  </button>
                </div>
              </div> */}
              <ul className={css.card__item}>
                {column.cards.map(card => (
                  <li key={card._id}>
                    <Card
                      toggleModalCard={toggleModalCard}
                      deleteCard={handleDeleteCard}
                      title={card.title}
                      desc={card.description}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  </li>
                ))}
                <li>
                  <div className={css.button__column}>
                    <AddIconButton
                      className={css.btn__card}
                      // action={handleAddColumn}
                      theme="dark"
                    >
                      <span className={css.btn__text}>Add another card</span>
                    </AddIconButton>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      <AddIconButton className={css.btn__alonecolumn}>
        <span className={css.btn__text}>Add another column</span>
      </AddIconButton>
      {showModalColumn && (
        <BasicModal onClose={toggleModalColumn}>
          <AddEditColumn onClose={toggleModalColumn} />
        </BasicModal>
      )}
      {showModalCard && (
        <BasicModal onClose={toggleModalCard}>
          <AddEditCard onClose={toggleModalCard} />
        </BasicModal>
      )}
    </div>
  );
}
