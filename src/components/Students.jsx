import {useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';

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
        .catch((err) => {
            setLoading(false);
            console.log(err);
        })
    },[])

    if(!loading) {
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
                    {students.length === 0 &&(
                        <Card>
                            <Card.Body>
                                <Card.Text>no students found..</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </Container>
        )    
    }
    else {
        return <Loading />
    }
}

export default Students