import {React, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Students from './Students';
import Courses from './Courses';

const Homepage = () => {
  // make the Students component the default page
  const [defaultPage, setDefaultPage] = useState(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Student - App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setDefaultPage(true)}>Students</Nav.Link>
            <Nav.Link onClick={()=>setDefaultPage(false)}>Courses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {defaultPage && <Students />}
      {!defaultPage && <Courses />}
    </>
  );
};

export default Homepage;
