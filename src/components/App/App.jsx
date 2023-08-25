import PrivateRoute from 'components/PrivatRoute/PrivateRoute';

import { Login } from 'pages';
import MainPage from 'pages/MainPage/MainPage';
import ScreensPage from 'pages/ScreenPage/ScreenPage';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/:dashboardId" element={<ScreensPage />} />
        <Route path="/main" element={<MainPage />} />
        {/* <Route

          path="/privathomepage"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          } */}
        {/* /> */}
      </Routes>
    </>
  );
}
