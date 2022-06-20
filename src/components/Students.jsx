import {React, useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {Navigate} from 'react-router';
import Loading from './Loading';
import StudentForm from './StudentForm';
import Cookies from 'universal-cookie';

<<<<<<< HEAD
=======
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
  return fetch(`${baseUrl}/api/students/deleteStudent${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
    },
    method: 'DELETE',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
};
>>>>>>> 895f619 (Headers Authorization added)
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
<<<<<<< HEAD
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  }, [URL]);
=======
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
>>>>>>> 895f619 (Headers Authorization added)

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
