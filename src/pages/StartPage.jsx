import { StartPageWrapper } from 'components';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import AuthPage from './AuthPage';

function StartPage() {
  return (
    <StartPageWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </StartPageWrapper>
  );
}

export default StartPage;
