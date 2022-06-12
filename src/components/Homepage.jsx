import {React, useState} from 'react';
import {Container, Navbar, Nav, Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Students from './Students';
import Courses from './Courses';

function logOut() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  localStorage.removeItem('username');
  cookies.remove('token');
  navigate('/');
}


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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {localStorage.getItem('username')}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={logOut}>LogOut</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      {content === 'student' && <Students />}
      {content === 'courses' && <Courses />}
    </>
  );
};

export default Homepage;
