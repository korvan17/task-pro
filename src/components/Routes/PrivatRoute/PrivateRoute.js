import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { getStatusAuth } from '../../../redux/auth/authSelectors';
import React from 'react';

export default function PrivateRoute({ children, routeProps }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getStatusAuth);
  return <Route {...routeProps}>{isLoggedIn ? children : navigate('/')}</Route>;
}
