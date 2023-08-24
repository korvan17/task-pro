import PrivateRoute from 'components/PrivatRoute/PrivateRoute';
import { Main, StartPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Main />} />
        <Route
          path="/privathomepage"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
