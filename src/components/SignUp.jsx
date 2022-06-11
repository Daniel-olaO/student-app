import {React, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom';


async function signUp(user) {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/users/signUp`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  })
      .then((data) => data.json());
}


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp({username, email, password, rePassword});
    console.log(response);
    if (response.ok) {
      setMessage(response.message);
      console.log(message);
    } else {
      setMessage(response.message);
      console.log(message);
    }
    setUsername('');
    setEmail('');
    setPassword('');
    setRePassword('');
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
              }
              } />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
              name="email"
              placeholder='Email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }
              } />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              name="password"
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Re-Password</Form.Label>
            <Form.Control type="password"
              name="rePassword"
              placeholder='Re-Password'
              value={rePassword}
              onChange={(e)=>setRePassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
        <h5>Already have an account <a href='/'>click here</a></h5>
      </Row>
    </Container>
  );
};

export default SignUp;
