//https://www.youtube.com/watch?v=VmpgiBAW_cQ&t=2098s

import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { getStatusAuth } from 'redux/auth/authSelectors';

export default function PublickRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getStatusAuth);
  return (
    <Route {...routeProps}>{isLoggedIn ? children : navigate('/home')}</Route>
  );
}
