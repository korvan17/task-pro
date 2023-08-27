import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './HomePage.module.css';
import { selectBoards } from 'redux/boards/selectors';
import BasicModal from 'components/Modals/BasicModal/BasicModal';

const HomePage = () => {
  const boards = useSelector(selectBoards);
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleAddBoard = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
    }
  }, [boards, navigate]);
  return (
    // <Header/>
    // <Sidebar/>
    //  <ScreenPage />
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
      {isOpenModal && (
        <BasicModal
          handleClose={() => {
            setIsOpenModal(false);
          }}
        >
          {/* <NewBoard
            handleClose={() => {
              setIsOpenModal(false);
            }}
          /> */}
        </BasicModal>
      )}
    </section>
  );
};

export default HomePage;
