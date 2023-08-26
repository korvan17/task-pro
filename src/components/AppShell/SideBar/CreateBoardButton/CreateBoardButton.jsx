import { AddIconButton } from 'components';
import css from './CreateBoardButton.module.css'

export default function CreateBoardButton({ theme }) {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Create a new board</p>
      <AddIconButton buttonType="button" />
    </div>
  );
}
