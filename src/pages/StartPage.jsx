import { AuthPageView } from 'components/AuthPageView';
// import { StartPageView } from 'components/StartPageView';
import { StartContainer } from 'components/StartPageWrapper';

import React from 'react';

function StartPage() {
  return (
    <StartContainer>
      {/* <StartPageView /> */}
      <AuthPageView />
    </StartContainer>
  );
}

export default StartPage;
