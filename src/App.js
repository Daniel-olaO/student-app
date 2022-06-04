import './App.css';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Courses from './components/Courses';
import Student from './components/Student';
import NotFound from './components/NotFound';
import Students from './components/Students';
import LogIn from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
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
                  <ProtectedRoute user={false}>
                    <Students />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/student/:id'
                element={
                  <ProtectedRoute user={false}>
                    <Student />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/courses'
                element={
                  <ProtectedRoute user={false}>
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
