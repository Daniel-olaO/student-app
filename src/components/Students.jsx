import {React, useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {Navigate} from 'react-router';
import Loading from './Loading';
import StudentForm from './StudentForm';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('url')
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setStudents(data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
  }, []);

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
