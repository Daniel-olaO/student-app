import {React, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';


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

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({username, password});
    if (response) {
      console.log(response);
      Cookies.set('token', response.token);
    } else {
      console.log('fail');
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
      </Row>
    </Container>
  );
};

export default LogIn;
