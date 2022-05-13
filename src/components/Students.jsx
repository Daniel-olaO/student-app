import {useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Students = () => {
    let history = useHistory();
    let [students, setStudents] = useState([]);
    let [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);

        fetch('url')
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setStudents(data);
        })
    },[])

    if(!loading) {
        if(students != null) {
            return(
                <Container>
                    <Row>
                        {
                            students.map((student) =>(
                                <Card Key={student.studentId} onClick={()=>history.push(`url/${student.studentId}`)}>
                                    <Card.Title>{student.firstName} {student.lastName}</Card.Title>
                                    <Card.Body>{student.studentId}</Card.Body>
                                </Card>
                            ))
                        }
                    </Row>
                </Container>
            )
        }
        else {
            return(
                <>
                    <Container>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Card.Text>No Student Found</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </>
            )
        }    
    }
    else {
        
    }
}

export default Students