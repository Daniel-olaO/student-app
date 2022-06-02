import {React, useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router';
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
              <Link Key={student.studentId}
                to={`url/${student.studentId}`}>
                <Card>
                  <Card.Title>
                    {student.firstName} {student.lastName}
                  </Card.Title>
                  <Card.Body>{student.studentId}</Card.Body>
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

export default withRouter(Students);
