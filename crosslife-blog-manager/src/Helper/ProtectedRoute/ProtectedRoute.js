import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Hooks/useAuth';

const ProtectedRoute = ({component}) => {
  const {login} = React.useContext(AuthContext);
  return login ? component : <Navigate to="/" />
  
}

export default ProtectedRoute;
