import {React, useState, useEffect} from 'react';
import {Container, Row, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import StudentForm from './StudentForm';
import Cookies from 'universal-cookie';
import '../App.css';

function getStudents() {
  const cookies = new Cookies();
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/students`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
    },
    method: 'GET',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
}
function deleteStudent(id) {
  const cookies = new Cookies();
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/students/deleteStudent/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
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
    getStudents()
        .then((data) => {
          setLoading(false);
          setStudents(data);
        },
        )
        .catch((err)=>console.log(err));
  }, []);
  const handleClick = async (id) => {
    const response = await deleteStudent(id);
    console.log(response);
    if (response) {
      alert('deleted');
    } else {
      alert('not deleted');
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
              <Link key={student.studentId}
                to={`url/${student.studentId}`}>
                <Card>
                  <Card.Title>
                    {student.firstName} {student.lastName}
                  </Card.Title>
                  <Card.Body>{student.studentId}</Card.Body>
                  <Button variant="danger"
                    onClick={() =>handleClick(student.studentId)}
                  >Delete</Button>
                </Card>
              </Link>

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
