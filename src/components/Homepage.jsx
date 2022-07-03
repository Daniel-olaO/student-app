import {React, useState} from 'react';
import {Container, Navbar, Nav, Dropdown} from 'react-bootstrap';
import {Route, Routes, Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Students from './Students';
import Courses from './Courses';
import '../App.css';

const Homepage = ({setIsLoggedIn}) => {
  function logOut() {
    const cookies = new Cookies();
    localStorage.removeItem('username');
    cookies.remove('token');
    setIsLoggedIn(false);
  }
  return (
    <Container className="main">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Student - App</Navbar.Brand>
          <Nav>
            <Link to="/students">Students</Link>
            <Link to="/courses">Courses</Link>
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
      <Routes>
        <Route path="/students">
          {Students}
        </Route>
        <Route path="/courses">
          {Courses}
        </Route>
      </Routes>
    </Container>
  );
};


export default Homepage;
