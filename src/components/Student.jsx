import {useState, useEffect} from 'react';
import {Container, Row, Card, Badge} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Loading from './Loading';

const Student = () => {
  let {id} = useParams();
  let [student, setStudent] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`url/${id}`)
    .then(response => response.json())
    .then(data  =>{
        setLoading(false);
        setStudent(data);
    })
  },[]);

    if(loading){       
        return <Loading />
    }
    else {
        return(
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
                                    student.courses.map(course=>{
                                        <Badge Key={course.courseId} bg="secondary">{course.name}</Badge>
                                    })
                                }
                            </Card.Body>
                        </Card>
                    }
                    {student.length === 0 &&(
                        <Card>
                            <Card.Body>Unable to find student with the Id: {id}</Card.Body>
                        </Card>
                    )}
                </Row>
            </Container>
        )
    }
}

export default Student
