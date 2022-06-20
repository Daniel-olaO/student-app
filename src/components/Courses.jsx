import {React, useState, useEffect} from 'react';
import {Card, Row, Container, Accordion} from 'react-bootstrap';
import Loading from './Loading';
import CourseForm from './CourseForm';
import Cookies from 'universal-cookie';

function getCourses() {
  const cookies = new Cookies();
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/courses`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
    },
    method: 'GET',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
}

<<<<<<< HEAD
=======
function deleteCourse(code) {
  const cookies = new Cookies();
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  return fetch(`${baseUrl}/api/courses/deleteCourse${code}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${cookies.get('token')}`,
    },
    method: 'DELETE',
  })
      .then((data) => data.json())
      .catch((err)=>console.log(err));
};


>>>>>>> 895f619 (Headers Authorization added)
const Courses = () => {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
  const URL = `${baseUrl}/api/courses`;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    getCourses()
        .then((data) => {
          setCourses(data);
          setLoading(false);
        },
        )
        .catch((err)=>console.log(err));
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
