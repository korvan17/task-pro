import { AddEditColumn } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';

export function MainDashboard() {
  return(
  <>
    <div>
      {/* <Card/> */}
      <button className={css.button}>Add another column</button>
      <BasicModal>
        <AddEditColumn />
      </BasicModal>
    </div>
  </>;
  )
}
