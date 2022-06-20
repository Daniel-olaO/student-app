import {React, useState, useEffect} from 'react';
import {Card, Row, Container, Accordion, Button} from 'react-bootstrap';
import Loading from './Loading';
import CourseForm from './CourseForm';

function deleteCourse(code) {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/courses/deleteCourse${code}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
};


const Courses = () => {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  const URL = `${baseUrl}/api/courses`;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    fetch(URL)
        .then((response) => response.json())
        .then((data) =>{
          setLoading(false);
          setCourses(data);
        });
  }, [URL]);

  const handleClick = async (code) => {
    const response = await deleteCourse(code);
    console.log(response);
    if (response) {
      alert('deleted');
    } else {
      alert('not deleted');
    }
  };

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
                    <Button variant="danger"
                      onClick={
                        ()=>handleClick(course.code)
                      }
                    >
                      Delete
                    </Button>
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
