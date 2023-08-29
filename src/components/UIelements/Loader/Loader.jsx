import React from 'react';
import css from './Loader.module.css';

function Loader() {
  const wrapper = params => {
    return (
      <div class="wrapper">
        <div class="background"></div>
        <div class="foreground"></div>
      </div>
    );
  };
  return (
    <div className={css.spinnerContainer}>
      <div className={css.spinner}>
        <div className={css.spinner}>
          <div className={css.spinner}>
            <div className={css.spinner}>
              <div className={css.spinner}>
                <div className={css.spinner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
