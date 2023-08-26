import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStatusAuth } from '../../redux/authSlice';
import React from 'react';

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getStatusAuth);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth');
    }
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : navigate('/');
}
