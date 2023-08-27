import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './HomePage.module.css';
import { selectBoards } from 'redux/boards/selectors';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import ScreenPage from 'pages/ScreenPage/ScreenPage';

const HomePage = () => {
  const boards = useSelector(selectBoards);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (boards.length > 0) {
      navigate(`/home/${boards[0]._id}`);
    }
  }, [boards, navigate]);
  return (
    <>
      {/* // <Header />
      // <Sidebar /> */}
      <ScreenPage />
      <section className={css.section}>
        <div className={css.text__home}>
          <p>
            Before starting your project, it is essential
            {
              <button
                onClick={() => toggleModal()}
                className={css.button__home}
              >
                to create a board
              </button>
            }
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>
        {showModal && (
          <BasicModal onClose={toggleModal}>
            {/* <NewBoard
            handleClose={() => {
              setIsOpenModal(false);
            }}
          /> */}
          </BasicModal>
        )}
      </section>
    </>
  );
};

export default HomePage;
