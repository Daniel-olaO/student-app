import {useState, useEffect} from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Students = () => {
    let history = useHistory();
    let [students, setStudents] = useState(null);
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
                <>
                    <Container>
                        <Row>
                            {
                                students.map((student) =>{
                                    <Card Key={student.studentId} onClick={()=>history.push(`url/${student.studentId}`)}>
                                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media-articles%2Fimportance-profile-picture-career-01899604&psig=AOvVaw0u_jWP46V4K8BlDk6hii1o&ust=1652026006017000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjGvczizfcCFQAAAAAdAAAAABAD" alt="" style={{width: "10%"}} />
                                        <Card.Title>{student.firstName} {student.lastName}</Card.Title>
                                        <Card.Body>{student.studentId}</Card.Body>
                                    </Card>
                                })
                            }
                        </Row>
                    </Container>
                </>
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
        return(
            <>
                <Container>
                    <Row>
                        <Card>
                            <Card.Body>
                                <Card.Title>Loading Students</Card.Title>
                                <Card.Text>Please wait...</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Students