// //https://www.youtube.com/watch?v=VmpgiBAW_cQ&t=2098s

// import { useSelector } from 'react-redux';
// import { Route, useNavigate } from 'react-router-dom';
// import { getStatusAuth } from 'redux/auth/authSelectors';

// export default function PublicRoute({
//   children,
//   restricted = false,
//   ...routeProps
// }) {
//   const navigate = useNavigate();
//   const isLoggedIn = useSelector(getStatusAuth);
//   return (
//     <Route {...routeProps}>{isLoggedIn ? children : navigate('/home')}</Route>
//   );
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/auth/authSelectors';

const PublicRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);
  return isAuthorized ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
