import { Loader, StartPageWrapper } from 'components';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import AuthPage from './AuthPage';

function StartPage() {
  return (
    <StartPageWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StartPageWrapper>
  );
}

export default StartPage;
