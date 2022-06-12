import {React, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';


async function login(user) {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/users/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  })
      .then((data) => data.json());
}

const LogIn = (props) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({username, password});
    if (response.token) {
      console.log(response);
      const duration = new Date();
      duration.setTime(duration.getTime() + (1 * 60 * 60 * 1000));
      cookies.set('token', response.token, {path: '/', expires: duration});
      localStorage.setItem('username', response.username);
      props.setIsLoggedIn(true);
      navigate('/home');
    } else {
      setMessage(response.message);
      console.log(message);
    }
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"
              name="username"
              placeholder='UserName'
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value);
              }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              name="password"
              placeholder='Password'
              value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
        <h5>New to Student App? <a href="/signUp">Create an Account</a></h5>
      </Row>
    </Container>
  );
};

export default LogIn;
