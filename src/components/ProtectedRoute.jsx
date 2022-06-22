import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({isAuth, children}) => {
  if (!isAuth) {
    return <h1>Not Authorized</h1>;
  }
  return children;
};


export default ProtectedRoute;
