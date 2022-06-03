/* eslint-disable react/prop-types */
import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({user, Children}) => {
  if (!user) {
    return <Navigate to='/' replace/>;
  }
  return children;
};


export default ProtectedRoute;
