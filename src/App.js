import './App.css';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Courses from './components/Courses';
import Student from './components/Student';
import NotFound from './components/NotFound';
import Students from './components/Students';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<LogIn />} />
              <Route path="/students" element={<Students />} />
              <Route path="/student/:id" element={<Student />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
