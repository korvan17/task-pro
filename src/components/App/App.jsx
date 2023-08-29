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
import ScreenPage from 'pages/ScreenPage/ScreenPage';
import { ThemeProvider } from '@emotion/react';
import { light, dark, violet } from 'components/Controllers/Theme/theme';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const userTheme = useSelector(getTheme);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    switch (userTheme) {
      case 'light':
        setTheme(light);
        break;
      case 'dark':
        setTheme(dark);
        break;
      case 'violet':
        setTheme(violet);
        break;
      default:
        setTheme(light);
    }
  }, [userTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<StartPage />}>
            <Route path="/home" element={<HomePage />} />
            <Route path=":boardId" element={<ScreenPage />} />
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
      </ThemeProvider>
    </>
  );
}
