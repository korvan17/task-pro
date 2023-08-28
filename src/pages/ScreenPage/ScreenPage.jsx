import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/Dashboard/MainDashboard/MainDashboard';
import { selectBoards } from 'redux/boards/selectors';
import { getIDBoard } from 'redux/boards/actions'; // Подставьте правильный путь к действию

const ScreenPage = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const board = boards.find(item => item._id === boardId);

  useEffect(() => {
    dispatch(getIDBoard(boardId));
  }, [boardId, dispatch]);

  useEffect(() => {
    if (!board) {
      navigate('/home');
    }
  }, [board, navigate]);

  return (
    <>
      {board && (
        <>
          <HeaderDashboard title={board.title} />
          <MainDashboard id={board._id} />
        </>
      )}
    </>
  );
};

export default ScreenPage;
