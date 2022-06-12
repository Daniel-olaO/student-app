import {React, useState, useEffect} from 'react';
import {Container, Row, Card, Button} from 'react-bootstrap';
import {Navigate} from 'react-router';
import Loading from './Loading';
import StudentForm from './StudentForm';


async function deleteStudent(id) {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/students/deleteStudent${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
};
const Students = () => {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  const URL = `${baseUrl}/api/students`;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setStudents(data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  }, [URL]);
  const handleClick = async (e, id) => {
    e.preventDefault();
    const response = deleteStudent(id);
    console.log(response);
    if (response) {
      console.log('deleted');
    } else {
      console.log('not deleted');
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row>
          {
            students.map((student) =>(
              <Navigate Key={student.studentId}
                to={`url/${student.studentId}`}>
                <Card>
                  <Card.Title>
                    {student.firstName} {student.lastName}
                  </Card.Title>
                  <Card.Body>{student.studentId}</Card.Body>
                  <Button variant="danger"
                    onClick={(e) =>handleClick(e, student.studentId)}
                  >Delete</Button>
                </Card>
              </Navigate>

            ))
          }
          {students.length === 0 &&(
            <Card>
              <Card.Body>
                <Card.Text>no students found..</Card.Text>
              </Card.Body>
            </Card>
          )}
          <StudentForm />
        </Row>
      </Container>
    );
  }
};

export default Students;
