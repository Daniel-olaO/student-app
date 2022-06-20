/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Courses from './components/Courses';
import Student from './components/Student';
import NotFound from './components/NotFound';
import Students from './components/Students';
import LogIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get('token')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/"
                element={
                  <LogIn setIsLoggedIn={setIsLoggedIn}/>
                } />
              <Route path='/signUp'
                element={
                  <SignUp/>
                } />

              <Route path='/home'
                element={
                  <ProtectedRoute isAuth={isLoggedIn}>
                    <Homepage setIsLoggedIn={setIsLoggedIn}/>
                  </ProtectedRoute>
                } />
              <Route
                path='/students'
                element={
                  <ProtectedRoute isAuth={isLoggedIn}>
                    <Students />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/student/:id'
                element={
                  <ProtectedRoute isAuth={isLoggedIn}>
                    <Student />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/courses'
                element={
                  <ProtectedRoute isAuth={isLoggedIn}>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
