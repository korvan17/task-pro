import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/Dashboard/MainDashboard/MainDashboard';
import { Background } from 'components/Background/Background';
import css from './ScreenPage.module.css';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getBoardByID } from 'redux/boards/operations';
// import { useNavigate, useParams } from 'react-router-dom';
// import { selectBoard } from 'redux/boards/slice';

const ScreenPage = ({ id }) => {
  // const navigate = useNavigate();
  // const { boardId } = useParams();
  // console.log('boardId - ', boardId);
  // const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  console.log('id - ', id, 'boardsss - ', boards);
  const board = boards.find(board => board._id === id);
  console.log('board - ', board);

  // useEffect(() => {
  //   try {
  //     dispatch(getBoardByID(boardId));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [boardId, dispatch]);

  // useEffect(() => {
  //   if (!board) {
  //     navigate('/home');
  //   }
  // });

  return (
    <>
      {board && (
        <div className={css.screen__section}>
          <Background img={board.background}>
            <HeaderDashboard title={board.title} />
            <MainDashboard id={board.id} /> {/* Use _id instead of id */}
          </Background>
        </div>
      )}
    </>
  );
};

export default ScreenPage;
