import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectBoards } from 'redux/boards/selectors';

// import { getBoardByID } from 'redux/boards/operations';
import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/Dashboard/MainDashboard/MainDashboard';
import { Background } from 'components/Background/Background';

const ScreenPage = () => {
  // const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const [searchParams] = useSearchParams();

  const boardId = searchParams.get('boardId') ?? false;
  const board = boards.find(item => item._id === boardId);

  // useEffect(() => {
  //   dispatch(getBoardByID(boardId));
  // }, [boardId, dispatch]);

  return (
    <>
      {board && (
        <>
          <Background img={board.background}>
            <HeaderDashboard title={board.title} />
            <MainDashboard id={board._id} />
          </Background>
        </>
      )}
    </>
  );
};

export default ScreenPage;
