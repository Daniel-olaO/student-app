import {React, useState, useEffect} from 'react';
import {Card, Row, Container, Accordion} from 'react-bootstrap';
import Loading from './Loading';
import CourseForm from './CourseForm';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    fetch('url')
        .then((response) => response.json())
        .then((data) =>{
          setLoading(false);
          setCourses(data);
        });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row>
          {
            courses.map((course) =>(
              <Accordion defaultActiveKey="0" key={course.code}>
                <Accordion.Item>
                  <Accordion.Header>
                    {course.code}: {course.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    {course.professor}
                    {course.program}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          }
          {courses.length === 0 &&(
            <Card>
              <Card.Body>
                <Card.Body>no courses found...</Card.Body>
              </Card.Body>
            </Card>
          )}
          <CourseForm />
        </Row>
      </Container>
    );
  }
};

export default Courses;
