import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material';
import { dark, light, violet } from 'components/Controllers/Theme/theme';
import { HomePage, StartPage } from 'pages';
import { lazy, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getTheme } from 'redux/auth/authSelectors';

import { Loader } from 'components';
import { PrivateRoute, PublicRoute } from 'components/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading } from 'redux/boards/selectors';
import ScreenPage from '../Dashboard/ScreenPage/ScreenPage';
import { selectColumnsIsLoading } from 'redux/columns/columnsSelectors';
import { selectCardsIsLoading } from 'redux/сard/сardSelectors';

const StartPageView = lazy(() =>
  import('components/Auth/StartPageView/StartPageView')
);
const AuthPage = lazy(() => import('pages/AuthPage'));
const RegisterForm = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() => import('components/Auth/LoginForm/LoginForm'));

export default function App() {
  const userTheme = useSelector(getTheme);
  const isBoardLoading = useSelector(selectIsLoading);
  const isCardLoading = useSelector(selectColumnsIsLoading);
  const isColumnLoading = useSelector(selectCardsIsLoading);
  const isAuthLoading = useSelector(state => state.auth.isRefreshing);
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

  useEffect(() => {});

  return (
    <>
      {(isBoardLoading || isCardLoading || isColumnLoading || isAuthLoading) && <Loader />}
      <ThemeProviderMUI theme={createTheme({})}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<StartPage />}>
              <Route index element={<StartPageView />} />
              <Route
                path="/auth/*"
                element={
                  <PublicRoute>
                    <AuthPage />
                  </PublicRoute>
                }
              >
                <Route path="register" element={<RegisterForm />} />
                <Route path="login" element={<LoginForm />} />
              </Route>
            </Route>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            >
              <Route path="/home/:boardId" element={<ScreenPage />} />
            </Route>
            {/* Auth Routes */}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
      </ThemeProviderMUI>
    </>
  );
}
