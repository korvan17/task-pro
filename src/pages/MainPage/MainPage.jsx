import { useState } from 'react';
import css from './MainPage.module.css';

const MainPage = () => {
  const setIsOpenModal = useState(false);
  const handleAddDashBoard = () => {
    setIsOpenModal(true);
  };

  return (
    <section className={css.section}>
      <div className={css.text_main}>
        <p>
          Before starting your project, it is essential
          {
            <button onClick={() => handleAddDashBoard()} className={css.button}>
              to create a board
            </button>
          }
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
    </section>
  );
};

export default MainPage;
