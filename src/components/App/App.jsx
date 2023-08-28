// import { Login } from 'pages';
// import HomePage from 'pages/HomePage/HomePage';
// import ScreensPage from 'pages/ScreenPage/ScreenPage';
import { LoginForm, RegisterForm, StartPageView } from 'components';
// import PrivateRoute from 'components/Routes/PrivatRoute/PrivateRoute';
// import HomePage from '../../pages/HomePage/HomePage';
import AuthPage from 'pages/AuthPage';

import { Route, Routes } from 'react-router-dom';
import { StartPage } from 'pages';
import HomePage from 'pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<StartPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route index element={<StartPageView />} />
          <Route path="/auth/*" element={<AuthPage />}>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
        </Route>
        {/* <Route path="/" element={<Login />} />
        
        <Route path=":boardId" element={<ScreensPage />} /> />
        <Route path="/home" element={<HomePage />} />
         <Route
        {/* Auth Routes 
        <Route path="/" element={<StartPage />}>
          <Route index element={<StartPageView />} />
         */}

        {/* <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute> */}
      </Routes>
    </>
  );
}
