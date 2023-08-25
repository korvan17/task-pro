// import PrivateRoute from 'components/PrivatRoute/PrivateRoute';

import { Login } from 'pages';
import HomePage from 'pages/HomePage/HomePage';

import ScreensPage from 'pages/ScreenPage/ScreenPage';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kak" element={<ScreensPage />} />
        <Route path="/home" element={<HomePage />} />
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
