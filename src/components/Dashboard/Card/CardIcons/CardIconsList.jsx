import React from 'react';
import css from './CardIcons.module.css';
import sprite from '../../../../icons/sprite.svg';
import { IconButton } from 'components';
import CardMoveModal from '../CardMoveModal/CardMoveModal';

export default function CardIconsList({
  cardId,
  columnId,
  className,
  toggleModalCard,
  deleteCard,
}) {
  return (
    <ul className={className}>
      <li className={css.iconButtonItem}>
        <CardMoveModal
          svg={<use xlinkHref={`${sprite}#icon-move`} />}
          size={16}
          className={css.icon}
        />
      </li>
      <li className={css.iconButtonItem}>
        <IconButton
          pushButton={toggleModalCard}
          svg={<use xlinkHref={`${sprite}#icon-edit`} />}
          size={16}
          className={css.icon}
        />
      </li>
      <li className={css.iconButtonItem}>
        <IconButton
          pushButton={() => deleteCard(cardId)}
          svg={<use xlinkHref={`${sprite}#icon-trash`} />}
          size={16}
          className={css.icon}
        />
      </li>
    </ul>
  );
}
