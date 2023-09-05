import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/Dashboard/MainDashboard/MainDashboard';
import { Background } from 'components/Background/Background';
import css from './ScreenPage.module.css';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';

const ScreenPage = ({ id }) => {
  const boards = useSelector(selectBoards);
  const board = boards.find(board => board._id === id);

  return (
    <>
      {board && (
        <div className={css.screen__section}>
          <Background img={board.backgroundURL}>
            <HeaderDashboard title={board.title} />
            <MainDashboard /> {/* Use _id instead of id */}
          </Background>
        </div>
      )}
    </>
  );
};

export default ScreenPage;
