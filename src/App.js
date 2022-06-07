import './App.css';
import {React, useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Cookies from 'js-cookie';
import Courses from './components/Courses';
import Student from './components/Student';
import NotFound from './components/NotFound';
import Students from './components/Students';
import LogIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
    if (Cookies.get('token')) {
      console.log('token: ' + Cookies.get('token'));
      setIsLoggedIn(true);
      // Cookies.remove('token');
      console.log(isLoggedIn);
    } else {
      console.log('no cookie');
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<LogIn />} />
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
