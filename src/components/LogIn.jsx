
import React from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';

const LogIn = () => {
  return (
    <Container>
        <Row>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="userName" placeholder='UserName' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder='Password' />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </Row>
    </Container>
  )
}

export default LogIn
