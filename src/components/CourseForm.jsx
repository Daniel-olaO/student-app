/* eslint-disable valid-jsdoc */
import {React, useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';


/**
 * @params {object} course
 * @returns fetch
 */
async function addCourse(course) {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
  return fetch(`${baseUrl}/api/courses/addCourse`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(course),
  })
      .then((data)=> console.log(data))
      .catch((err)=> console.log(err));
}
const StudentForm = () => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [professor, setProfessor] = useState('');
  const [program, setProgram] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await addCourse({code, name, professor, program});

    if (response.ok) {
      setMessage('Student Added!');
    } else {
      setMessage('Failed to add student!');
    }
  };

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
              <Form.Label>Code:</Form.Label>
              <Form.Control type="text"
                placeholder="CSC101"
                value={code}
                onChange={(e)=>setCode(e.target.value)} autoFocus required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text"
                placeholder="name..."
                value={name}
                onChange={(e)=>{
                  setName(e.target.value);
                }} required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Professor:</Form.Label>
              <Form.Control type="text"
                placeholder="Professor"
                value={professor} onChange={(e)=>{
                  setProfessor(e.target.value);
                }} required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Program:</Form.Label>
              <Form.Control type="text" placeholder="ABC"
                value={program} onChange={(e)=>{
                  setProgram(e.target.value);
                }} required/>
            </Form.Group>
            <Button variant="primary" type="submit">Add Course</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentForm;
