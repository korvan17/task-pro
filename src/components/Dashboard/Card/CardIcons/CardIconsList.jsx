import React from 'react';
import css from './CardIcons.module.css';
import sprite from '../../../../icons/sprite.svg';
import { IconButton } from 'components';
import CardMoveModal from '../CardMoveModal/CardMoveModal';
import { useTheme } from '@emotion/react';

export default function CardIconsList({
  cardId,
  columnId,
  className,
  toggleModalCard,
  deleteCard,
  columns,
  cardsColumnId,
}) {
  const theme = useTheme();
  return (
    <ul className={className}>
      {columns.length > 1 && (
        <li className={css.iconButtonItem}>
          <CardMoveModal
            cardsColumnId={cardsColumnId}
            columns={columns}
            svg={
              <use
                style={{ stroke: theme.card.iconsFill }}
                xlinkHref={`${sprite}#icon-move`}
              />
            }
            size={16}
            className={css.icon}
            cardId={cardId}
          />
        </li>
      )}
      <li className={css.iconButtonItem}>
        <IconButton
          pushButton={() => toggleModalCard(columnId, cardId)}
          svg={
            <use
              style={{ stroke: theme.card.iconsFill }}
              xlinkHref={`${sprite}#icon-edit`}
            />
          }
          size={16}
          className={css.icon}
        />
      </li>
      <li className={css.iconButtonItem}>
        <IconButton
          pushButton={() => deleteCard(columnId, cardId)}
          svg={
            <use
              style={{ stroke: theme.card.iconsFill }}
              xlinkHref={`${sprite}#icon-trash`}
            />
          }
          size={16}
          className={css.icon}
        />
      </li>
    </ul>
  );
}
