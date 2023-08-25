import css from './StartPageWrapper.module.css';

import React from 'react';

function StartPageWrapper({ children }) {
  return <div className={css.wrapper}>{children}</div>;
}

export default StartPageWrapper;
