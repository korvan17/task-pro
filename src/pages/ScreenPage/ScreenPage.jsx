import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/Dashboard/MainDashboard/MainDashboard';
import { Background } from 'components/Background/Background';
import css from './ScreenPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBoardByID } from 'redux/boards/operations';

const ScreenPage = ({ id = '64f0a120f65c664a596fe318' }) => {
  console.log('hallo');
  const board = useSelector(state => state.boards.currentBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardByID(id));
  }, [dispatch, id]);

  return (
    <>
      <>
        <div className={css.screen__section}>
          <Background img={board.background}>
            <HeaderDashboard title={board.title} />
            <MainDashboard board={board} />
          </Background>
        </div>
      </>
    </>
  );
};

export default ScreenPage;
