import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { selectBoards } from 'redux/boards/selectors';

import { getBoardByID } from 'redux/boards/operations';
import HeaderDashboard from 'components/Dashboard/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/Dashboard/MainDashboard/MainDashboard';
import { Background } from 'components/Background/Background';

const ScreenPage = () => {
  const navigate = useNavigate();

  // Отримуємо параметр boardId з URL
  const { boardId } = useParams();

  // Використовуємо useDispatch для виклику Redux-дій
  const dispatch = useDispatch();

  // Використовуємо useSelector для отримання списку дошок зі стану Redux
  const boards = useSelector(selectBoards);

  // Знаходимо дошку за допомогою boardId
  const board = boards.find(item => item._id === boardId);

  // Викликаємо дію getBoardByID(boardId) під час монтажу компонента
  useEffect(() => {
    dispatch(getBoardByID(boardId));
  }, [boardId, dispatch]);

  // Перенаправляємо на /home, якщо дошка не знайдена
  useEffect(() => {
    if (!board) {
      navigate('/home');
    }
  }, [board, navigate]);

  return (
    <>
      {/* Відображаємо заголовок та основний вміст сторінки, якщо дошка знайдена */}
      {board && (
        <>
          <Background img={board.background}>
            {/* Передаємо заголовок дошки в HeaderDashboard */}
            <HeaderDashboard title={board.title} />
            {/* Передаємо айді дошки в MainDashboard */}
            <MainDashboard id={board._id} />
          </Background>
        </>
      )}
    </>
  );
};

export default ScreenPage;
