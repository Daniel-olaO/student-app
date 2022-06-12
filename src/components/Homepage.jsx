import {React, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Students from './Students';
import Courses from './Courses';

const Homepage = () => {
  const [content, setContent] = useState('student');
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Student - App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setContent('student')}>Students</Nav.Link>
            <Nav.Link onClick={()=>setContent('courses')}>Courses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {content === 'student' && <Students />}
      {content === 'courses' && <Courses />}
    </>
  );
};

export default Homepage;
