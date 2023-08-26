<<<<<<< Updated upstream
import ScreenPage from 'pages/ScreenPage/ScreenPage';

const HomePage = () => {
  return <ScreenPage />;
=======
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './HomePage.module.css';
import { selectBoards } from 'redux/boards/selectors';
import BasicModal from 'components/Modals/BasicModal/BasicModal';

const ScreenPage = () => {
  const boards = useSelector(selectBoards);
  const navigate = useNavigate();
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const handleAddBoard = () => {
    setIsOpenModalAdd(true);
  };

  useEffect(() => {
    if (boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
    }
  }, [boards, navigate]);
  return (
    // <Header/>
    // <Sidebar/>
    // <ScreenPage></ScreenPage>
    <section className={css.section}>
      <div className={css.text__home}>
        <p>
          Before starting your project, it is essential
          {
            <button onClick={() => handleAddBoard()} className={css.button}>
              to create a board
            </button>
          }
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
      {isOpenModalAdd && (
        <BasicModal
          handleClose={() => {
            setIsOpenModalAdd(false);
          }}
        >
          {/* <NewBoard
            handleClose={() => {
              setIsOpenModalAdd(false);
            }}
          /> */}
        </BasicModal>
      )}
    </section>
  );
>>>>>>> Stashed changes
};

export default ScreenPage;
