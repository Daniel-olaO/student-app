import {useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {Link} from 'react-router';
import Loading from './Loading';
import StudentForm from './StudentForm';

const Students = () => {
  const history = useHistory();
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
              <Card Key={student.studentId} Link to={`url/${student.studentId}`}>
                <Card.Title>{student.firstName} {student.lastName}</Card.Title>
                <Card.Body>{student.studentId}</Card.Body>
              </Card>
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
