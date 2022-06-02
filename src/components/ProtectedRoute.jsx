import React from 'react';
import {Route, Redirect} from 'react-router';

const ProtectedRoute = ({isAuth: isAuth, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props)=>{
        if (isAuth) {
          return <component />;
        } else {
          <Redirect to={{pathname: '/', state: {from: props.location}}} />;
        }
      }}
    />
  );
};


export default ProtectedRoute;
