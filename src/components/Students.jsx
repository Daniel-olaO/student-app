import {React, useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {Navigate} from 'react-router';
import Loading from './Loading';
import StudentForm from './StudentForm';

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
