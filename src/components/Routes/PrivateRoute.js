// import { useSelector } from 'react-redux';
// import { Route, useNavigate } from 'react-router-dom';
// import { getStatusAuth } from 'redux/auth/authSelectors';

// export default function PrivateRoute({ children, routeProps }) {
//   const navigate = useNavigate();
//   const isLoggedIn = useSelector(getStatusAuth);
//   return <Route {...routeProps}>{isLoggedIn ? children : navigate('/')}</Route>;
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);
  return isAuthorized ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
