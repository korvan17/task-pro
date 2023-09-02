import React from 'react';
import css from './HomePageView.module.css';

function HomePageView({ theme, createBoard }) {
  return (
    <div className={css.text__home}>
      <p style={{ color: theme.screensPage.screenPageText }}>
        Before starting your project, it is essential{' '}
        <button
          style={{ color: theme.screensPage.screenPageSpan }}
          onClick={createBoard}
          className={css.button__home}
        >
          to create a board
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
}

export default HomePageView;
