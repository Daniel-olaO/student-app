import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import {Redirect, Route, Switch} from 'react-router-dom';
import Course from './components/Course';
import Courses from './components/Courses';
import Student from './components/Student';
import NotFound from './components/NotFound';
import Students from './components/Students';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path = '/'>
                <LogIn />
              </Route>
              <Route exact path = '/student'>
                <Students />
              </Route>
              <Route exact path = '/course'>
                <Courses />
              </Route>
              <Route exact path = '/course/:id'>
                <Course />
              </Route>
              <Route exact path = '/student/:id'>
                <Student />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
