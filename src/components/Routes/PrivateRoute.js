// import { useSelector } from 'react-redux';
// import { Route, useNavigate } from 'react-router-dom';
// import { getStatusAuth } from 'redux/auth/authSelectors';


import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isAuthorized = useSelector(isLoggedIn);
  return isAuthorized ? children : <Navigate to="/auth/register" />;
};

export default PrivateRoute;
