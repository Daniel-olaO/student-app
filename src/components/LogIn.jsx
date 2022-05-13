
import {useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';

async function login(user){
    console.log(user)
    return fetch('http://localhost:8080/api/users/login',{
        headers:{
            'Content-Type':'application/json'
        },
        method: 'POST',  
        body: JSON.stringify(user)
    })
    .then(data => data.json())
}

const LogIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await login({username, password});
        console.log(response)
        if (response.token) {
            // localStorage.setItem('accessToken', response['token']);
            // localStorage.setItem('user', JSON.stringify(response['user']));
            console.log('success');
        } else {
            console.log(response);
        }
        setUsername("");
        setPassword("");
    }

    return (
        <Container>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder='UserName' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default LogIn
