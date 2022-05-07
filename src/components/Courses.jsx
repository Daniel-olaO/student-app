
import {useState, useEffect} from 'react';
import {Card, Row, Container, Accordion} from 'react-bootstrap';

const Course = () => {
    let [courses, setCourses] = useState(null);
    let [loading, setLoading] = useState(true);

    useState(()=>{
        setLoading(true);
        fetch('url')
        .then(response => response.json())
        .then(data =>{
            setLoading(false);
            setCourses(data);
        })
    }, []);

    if(!loading){
        if(courses != null){
            return(
                <>
                    <Container>
                        <Row>
                            {
                                courses.map(course =>{
                                    <Accordion defaultActiveKey="0" key={course.courseId}>
                                        <Accordion.Item>
                                            <Accordion.Header>{course.code}: {course.name}</Accordion.Header>
                                            <Accordion.Body>
                                                {course.professor}
                                                {course.program}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
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
                                <Card.Text>No Course Found</Card.Text>
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
                                <Card.Title>Loading Courses</Card.Title>
                                <Card.Text>Please wait...</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Course
