import {React} from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
import '../App.css';

const Homepage = ({setIsLoggedIn}) => {
  function logOut() {
    const cookies = new Cookies();
    localStorage.removeItem('username');
    cookies.remove('token');
    setIsLoggedIn(false);
  }
  return (
    <Container fluid className='navbar-main'>
      <Row>
        <Col className='navBrand'>
          <h1>Students - App</h1>
        </Col>
        <Col className='dropdown'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {localStorage.getItem('username')}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logOut}>LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className='menu'>
        <Col className='menuItem' style={{marginRight: '1%'}}>
          <Link to={'/home/students'}>Students</Link>
        </Col>
        <Col className='menuItem'>
          <Link to={'/home/courses'}>Course</Link>
        </Col>
      </Row>
    </Container>
  );
};


export default Homepage;
