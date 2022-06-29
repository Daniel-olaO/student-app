import {React, useState, useEffect} from 'react';
import {Container, Row, Card, Badge} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loading from './Loading';

function getStudent(id) {
  const cookies = new Cookies();
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  const URL = `${baseUrl}/api/students`;
  return fetch(`${URL}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
    },
  })
      .then((response) => response.json());
}

const Student = () => {
  const {id} = useParams();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getStudent(id)
        .then((data) => {
          setStudent(data);
          setLoading(false);
        },
        );
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row>
          {
            <Card key={student.studentId}>
              <Card.Title>{student.firstName} {student.lastName}</Card.Title>
              <Card.Body>
                <Card.Text>ID: {student.studentId}</Card.Text>
                <Card.Text>Email: {student.email}</Card.Text>
                <Card.Text>Phone: {student.phone}</Card.Text>
                <Card.Text>Program: {student.program}</Card.Text>
                {
                  student.courses.map((course) => {
                    <Badge key={course.courseId} bg="secondary">
                      {course.name}
                    </Badge>;
                  })
                }
              </Card.Body>
            </Card>
          }
          {student.length === 0 && (
            <Card>
              <Card.Body>Unable to find student with the Id: {id}</Card.Body>
            </Card>
          )}
        </Row>
      </Container>
    );
  }
};

export default Student;
