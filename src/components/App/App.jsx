// import { Login } from 'pages';
// import HomePage from 'pages/HomePage/HomePage';
// import ScreensPage from 'pages/ScreenPage/ScreenPage';
import { LoginForm, RegisterForm } from 'components';
import PrivateRoute from 'components/Routes/PrivatRoute/PrivateRoute';
import { Main } from 'pages';
import AuthPage from 'pages/AuthPage';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/kak" element={<ScreensPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/kaka" element={<ScreensPage />} />
        <Route path="/main" element={<HomePage />} />
         <Route
        {/* Auth Routes 
        <Route path="/" element={<StartPage />}>
          <Route index element={<StartPageView />} />
         */}
        <Route path="/auth" element={<AuthPage />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        {/* </Route> */}

        {/* Private Routes */}
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
