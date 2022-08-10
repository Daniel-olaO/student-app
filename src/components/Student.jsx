import {React, useState, useEffect} from 'react';
import {Container, Row, Card, Badge} from 'react-bootstrap';

import {useParams} from 'react-router-dom';
import Loading from './Loading';

const Student = () => {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  const URL = `${baseUrl}/api/students`;
  const {id} = useParams();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setStudent(data);
        });
  }, []);

  if (loading) {
    return <Loading loadingMessage="Student's Information"/>;
  } else {
    return (
      <Container>
        <Row>
          {
            <Card Key={student.studentId}>
              <Card.Title>{student.firstName} {student.lastName}</Card.Title>
              <Card.Body>
                <Card.Text>ID: {student.studentId}</Card.Text>
                <Card.Text>Email: {student.email}</Card.Text>
                <Card.Text>Phone: {student.phone}</Card.Text>
                <Card.Text>Program: {student.program}</Card.Text>
                {
                  student.courses.map((course) => {
                    <Badge Key={course.courseId} bg="secondary">
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
