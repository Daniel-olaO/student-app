import { React, useState} from 'react';
import { Button, Modal, Form} from 'react-bootstrap';


async function addStudent(student){
    return fetch('url',{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(student)
    })
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
}
const StudentForm = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const response = await addStudent({firstName, lastName, email, phone});

    if(response.ok) {
        setMessage("Student Added!");
    }
    else {
        setMessage("Failed to add student!");
    }
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow}> Launch demo modal</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} autoFocus required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="LatName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder="name@example.ca" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control type="tel" placeholder="111-234-5678" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Add Student</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default StudentForm