import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm, RegisterForm } from 'components';
import StartPage from './StartPage.jsx';

function AuthPage() {
  return (
    <>
      <StartPage />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default AuthPage;
