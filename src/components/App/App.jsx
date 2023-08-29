// import { ThemeProvider } from '@emotion/react';
// import { Loader, LoginForm, RegisterForm, StartPageView } from 'components';
// import { dark, light, violet } from 'components/Controllers/Theme/theme';
// import { HomePage, ScreenPage, StartPage } from 'pages';
// import AuthPage from 'pages/AuthPage';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { getTheme } from 'redux/auth/authSelectors';

// export default function App() {
//   const userTheme = useSelector(getTheme);
//   const [theme, setTheme] = useState(light);

//   useEffect(() => {
//     switch (userTheme) {
//       case 'light':
//         setTheme(light);
//         break;
//       case 'dark':
//         setTheme(dark);
//         break;
//       case 'violet':
//         setTheme(violet);
//         break;
//       default:
//         setTheme(light);
//     }
//   }, [userTheme]);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Loader />
//         <Routes>
//           {/* Auth Routes */}
//           <Route path="/" element={<StartPage />}>
//             <Route path="/home" element={<HomePage />} />
//             <Route path=":boardId" element={<ScreenPage />} />
//             <Route index element={<StartPageView />} />
//             <Route path="/auth/*" element={<AuthPage />}>
//               <Route path="register" element={<RegisterForm />} />
//               <Route path="login" element={<LoginForm />} />
//             </Route>
//           </Route>
//           {/* <Route path="/" element={<Login />} />

//         <Route path=":boardId" element={<ScreensPage />} /> />
//         <Route path="/home" element={<HomePage />} />
//          <Route
//         {/* Auth Routes
//         <Route path="/" element={<StartPage />}>
//           <Route index element={<StartPageView />} />
//          */}

//           {/* <PrivateRoute path="/home">
//           <HomePage />
//         </PrivateRoute> */}
//         </Routes>
//       </ThemeProvider>
//     </>
//   );
// }

// import { StartPageView } from 'components';

import { ThemeProvider } from '@emotion/react';
import { dark, light, violet } from 'components/Controllers/Theme/theme';
import { HomePage, ScreenPage, StartPage } from 'pages';
// import { HomePage, ScreenPage } from 'pages';
import { lazy, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getTheme } from 'redux/auth/authSelectors';

// const StartPage = lazy(() => import('pages/StartPage'));
const StartPageView = lazy(() =>
  import('components/Auth/StartPageView/StartPageView')
);

const AuthPage = lazy(() => import('pages/AuthPage'));
const RegisterForm = lazy(() =>
  import('components/Auth/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() => import('components/Auth/LoginForm/LoginForm'));
// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const ScreenPage = lazy(() => import('../../pages/ScreenPage/ScreenPage'));

// const MyComponent = lazy(() => import('./MyComponent'));

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
          <Route path="/home" element={<HomePage />} />
          <Route path=":boardId" element={<ScreenPage />} />
          {/* Auth Routes */}
          <Route path="/" element={<StartPage />}>
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
